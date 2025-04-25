"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { GradientText } from "@/components/gradient-text"

export function FounderHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="relative overflow-hidden rounded-xl">
      {/* Background blur image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1600"
          alt="Founder background"
          width={1600}
          height={800}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80 backdrop-blur-md"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 grid gap-8 p-8 md:grid-cols-2 md:p-12 lg:p-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="relative h-[400px] w-[300px] overflow-hidden rounded-xl border-4 border-white/10 shadow-2xl md:h-[500px] md:w-[350px]">
            <Image
              src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=600"
              alt="Peali Sarkar"
              width={600}
              height={800}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-center font-bold text-white">Peali Sarkar</p>
              <p className="text-center text-sm text-white/70">Founder, careerReimagined</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-4 inline-block rounded-full bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-300">
            Founder's Journey
          </div>
          <GradientText
            text="From India to Canada: A Leap of Growth"
            className="mb-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
            from="from-orange-400"
            to="to-rose-400"
          />
          <div className="space-y-4 text-white/80">
            <p className="text-lg">
              Within 15 days of opportunity knocking, I packed my bags and moved to Canada — stepping into a whole new
              world across hemispheres. That move changed everything.
            </p>
            <p>
              I saw mentorship in a new light — not just confined to workplace seniors, but visible in the everyday
              actions of leaders, creators, and mentors who gave their time, voice, and intent to nurture emerging
              talent.
            </p>
            <p className="text-lg font-medium text-white">
              That's when I knew: this kind of access should not be reserved for the elite or the extroverts.
            </p>
            <p>It should be for anyone who's hungry to grow.</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.div
              className="rounded-full bg-gradient-to-r from-orange-500/20 to-rose-500/20 px-4 py-2 text-white"
              whileHover={{ scale: 1.05 }}
            >
              #CareerGrowth
            </motion.div>
            <motion.div
              className="rounded-full bg-gradient-to-r from-orange-500/20 to-rose-500/20 px-4 py-2 text-white"
              whileHover={{ scale: 1.05 }}
            >
              #Mentorship
            </motion.div>
            <motion.div
              className="rounded-full bg-gradient-to-r from-orange-500/20 to-rose-500/20 px-4 py-2 text-white"
              whileHover={{ scale: 1.05 }}
            >
              #GlobalPerspective
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
