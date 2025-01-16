import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import { motion, MotionValue, useTransform, useScroll } from 'framer-motion';

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);
  const [containerHeight, setContainerHeight] = useState<string | number>('auto');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Use consistent scale values regardless of screen size
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  
  // Keep rotation consistent across all screen sizes
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  
  // Keep translation consistent across all screen sizes
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const image = e.currentTarget;
    const aspectRatio = image.naturalHeight / image.naturalWidth;
    setContainerHeight(`${window.innerWidth * aspectRatio}px`);
  };

  return (
    <div
      className="flex items-center justify-center relative pt-0 z-40 md:p-20"
      ref={containerRef}
      style={{
        height: containerHeight,
      }}
    >
      <div
        className="w-full relative"
        style={{
          perspective: '1000px',
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} isMobile={isMobile} />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          onImageLoad={handleImageLoad}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
  isMobile,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
  isMobile: boolean;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
  onImageLoad,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
  onImageLoad: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
      }}
      className="max-w-5xl -mt-10 mx-auto w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-auto w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl p-4">
        <Link href="https://drive.google.com/file/d/1Pg_eonejIlWRJhz8G6_AVFBA_sxZu0KO/view?usp=sharing">
          <motion.div whileHover={{ scale: 1.05 }}>
            <img
              src="/resume.png"
              alt="resume"
              onLoad={onImageLoad}
              className="mx-auto rounded-2xl object-cover"
            />
          </motion.div>
        </Link>
        {children}
      </div>
    </motion.div>
  );
};