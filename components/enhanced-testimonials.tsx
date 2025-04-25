"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  image: string
  quote: string
  rating: number
  location: string
}

export function EnhancedTestimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
      quote:
        "careerReimagined connected me with mentors I never thought I'd have access to. The conversations I've had through their events have shaped my leadership style in profound ways. Peali has created something truly special here.",
      rating: 5,
      location: "Toronto, Canada",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineer",
      company: "StartupX",
      image: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
      quote:
        "As someone early in my career, I was struggling to find direction. The Leadership Circles at careerReimagined gave me clarity and connections that completely changed my trajectory. I've found mentors who genuinely care about my growth.",
      rating: 5,
      location: "Vancouver, Canada",
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Entrepreneur",
      company: "GrowthLabs",
      image: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
      quote:
        "The authentic conversations and community I found through careerReimagined were exactly what I needed when transitioning from corporate to founding my own company. The support network here is unmatched.",
      rating: 5,
      location: "New Delhi, India",
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Product Manager",
      company: "InnovateCo",
      image: "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
      quote:
        "What sets careerReimagined apart is how they create spaces for genuine connection. It's not networking in the traditional sense—it's about building relationships that help everyone grow. I've found both mentors and mentees here.",
      rating: 5,
      location: "Montreal, Canada",
    },
  ]

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-xl"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      {/* Background image with blur */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            <Image
              src={testimonials[current].image || "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"}
              alt={testimonials[current].name}
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90 backdrop-blur-md"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <motion.div
              className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-white/20 shadow-2xl md:h-[400px] md:w-[400px]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              key={current}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full"
                >
                  <Image
                    src={testimonials[current].image || "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"}
                    alt={testimonials[current].name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="flex flex-col justify-center">
            <Quote className="mb-4 h-12 w-12 text-purple-400/50" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6 flex">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="mb-6 text-xl italic text-white md:text-2xl">
                  "{testimonials[current].quote}"
                </blockquote>

                <div className="mb-2">
                  <h3 className="text-xl font-bold text-white">{testimonials[current].name}</h3>
                  <p className="text-purple-300">
                    {testimonials[current].role}, {testimonials[current].company}
                  </p>
                </div>

                <p className="text-white/70">{testimonials[current].location}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center space-x-4">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-3 w-3 rounded-full transition-colors ${
                      index === current ? "bg-purple-500" : "bg-white/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
