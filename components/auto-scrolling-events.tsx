"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Calendar, Users, MapPin } from "lucide-react"
import Image from "next/image"

interface Event {
  id: number
  title: string
  date: string
  location: string
  image: string
  videoThumbnail: string
}

export function AutoScrollingEvents() {
  const [isPaused, setIsPaused] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("left")
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Sample events data
  const events: Event[] = [
    {
      id: 1,
      title: "Leadership Circle: Future of Work",
      date: "June 15, 2023",
      location: "Toronto, Canada",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
      videoThumbnail: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
    },
    {
      id: 2,
      title: "Real Talks: Tech Leadership",
      date: "July 22, 2023",
      location: "Virtual Event",
      image: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
      videoThumbnail: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
    },
    {
      id: 3,
      title: "Fireside Chat: Women in Tech",
      date: "August 10, 2023",
      location: "Vancouver, Canada",
      image: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
      videoThumbnail: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
    },
    {
      id: 4,
      title: "Mentorship Roundtable",
      date: "September 5, 2023",
      location: "Montreal, Canada",
      image: "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
      videoThumbnail: "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
    },
    {
      id: 5,
      title: "Career Transition Workshop",
      date: "October 18, 2023",
      location: "Ottawa, Canada",
      image: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
      videoThumbnail: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
    },
  ]

  // Auto-scrolling effect
  useEffect(() => {
    if (isPaused || !containerRef.current) return

    const container = containerRef.current
    const scrollAmount = direction === "left" ? 1 : -1

    const interval = setInterval(() => {
      container.scrollLeft += scrollAmount

      // Change direction when reaching the end or beginning
      if (
        (direction === "left" && container.scrollLeft >= container.scrollWidth - container.clientWidth) ||
        (direction === "right" && container.scrollLeft <= 0)
      ) {
        setDirection(direction === "left" ? "right" : "left")
      }
    }, 15)

    return () => clearInterval(interval)
  }, [isPaused, direction])

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex space-x-6 overflow-x-auto pb-8 pt-4 scrollbar-hide"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {events.map((event) => (
          <motion.div
            key={event.id}
            className="relative h-[350px] w-[300px] flex-shrink-0 overflow-hidden rounded-xl"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedEvent(event)}
          >
            <Image
              src={event.image || "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"}
              alt={event.title}
              width={300}
              height={350}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="mb-2 text-xl font-bold text-white">{event.title}</h3>
              <div className="mb-2 flex items-center text-white/70">
                <Calendar className="mr-2 h-4 w-4" />
                <span className="text-sm">{event.date}</span>
              </div>
              <div className="flex items-center text-white/70">
                <MapPin className="mr-2 h-4 w-4" />
                <span className="text-sm">{event.location}</span>
              </div>

              <div className="mt-4 flex items-center">
                <button className="flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                  <Play className="mr-2 h-4 w-4" /> Watch Highlights
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Event Video Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="relative max-h-[80vh] max-w-4xl overflow-hidden rounded-xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video w-full">
              <Image
                src={selectedEvent.videoThumbnail || "/placeholder.svg"}
                alt={selectedEvent.title}
                width={1200}
                height={675}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20">
                  <Play className="h-8 w-8" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-2xl font-bold text-white">{selectedEvent.title}</h3>
              <div className="mb-4 flex flex-wrap gap-4">
                <div className="flex items-center text-white/70">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{selectedEvent.date}</span>
                </div>
                <div className="flex items-center text-white/70">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{selectedEvent.location}</span>
                </div>
                <div className="flex items-center text-white/70">
                  <Users className="mr-2 h-4 w-4" />
                  <span>120+ Attendees</span>
                </div>
              </div>
              <p className="text-white/80">
                Experience the highlights from our {selectedEvent.title} event, where industry leaders shared insights
                on career growth, leadership, and professional development.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
