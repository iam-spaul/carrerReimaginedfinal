"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxImageProps {
  src: string
  alt: string
  width: number
  height: number
}

export function ParallaxImage({ src, alt, width, height }: ParallaxImageProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div style={{ y }}>
        <Image
          src={src || "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  )
}
