'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

interface ModelViewerProps {
  modelPath: string
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelPath }) => {
  const mountRef = useRef<HTMLDivElement | null>(null)
  const modelRef = useRef<THREE.Group | null>(null)
  const mixerRef = useRef<THREE.AnimationMixer | null>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = null // Transparent background

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }) // Transparent background
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    mountRef.current.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(0, 1, 0)
    scene.add(directionalLight)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enableZoom = false // Disable zooming
    controls.enablePan = false // Disable panning (movement)

    // Load the model
    const loader = new GLTFLoader()
    loader.load(
      modelPath,
      (gltf) => {
        // Center the model
        const box = new THREE.Box3().setFromObject(gltf.scene)
        const center = box.getCenter(new THREE.Vector3())
        gltf.scene.position.sub(center)

        // Scale the model
        gltf.scene.scale.set(1.3, 1.3, 1.3)

        // Add model to the scene and reference it for animation
        scene.add(gltf.scene)
        modelRef.current = gltf.scene

        // Set up the animation mixer for the loaded model
        if (gltf.animations && gltf.animations.length > 0) {
          mixerRef.current = new THREE.AnimationMixer(gltf.scene)
          gltf.animations.forEach((clip) => {
            mixerRef.current!.clipAction(clip).play()
          })
          console.log('Animations loaded:', gltf.animations)
        } else {
          console.warn('No animations found in the model.')
        }
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total) * 100, '%')
      },
      (error) => {
        console.error('Error loading model:', error)
      }
    )

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Update animation mixer
      const animationSpeed = 0.01
      if (mixerRef.current) {
        mixerRef.current.update(animationSpeed)
      }

      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Handle window resize
    const handleResize = () => {
      if (mountRef.current) {
        const width = mountRef.current.clientWidth
        const height = mountRef.current.clientHeight
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
      }
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [modelPath])

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '50vw', // Responsive height relative to viewport width
        maxHeight: '500px', // Cap the height for very large screens
        backgroundColor: 'transparent',
        position: 'relative',
      }}
    />
  )
}

export default ModelViewer
