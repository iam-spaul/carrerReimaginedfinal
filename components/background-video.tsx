"use client"

import { useEffect, useRef } from "react"

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
        poster="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920"
      >
        {/* In a real implementation, you would use an actual video file */}
        <source src="/placeholder-video.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
    </div>
  )
}
