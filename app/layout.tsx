'use client';

import { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle the play/pause button click
  const handlePlayPauseButtonClick = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause(); // Pause the audio
          setIsPlaying(false); // Update the state to show it's paused
        } else {
          await audioRef.current.play(); // Start playing the audio
          audioRef.current.muted = false; // Unmute after play
          setIsPlaying(true); // Update the state to show it's playing
        }
      } catch (error) {
        console.error("Audio play/pause error:", error);
      }
    }
  };

  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
