"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Instagram, Linkedin, Twitter, Facebook, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GradientText } from "@/components/gradient-text"

export function EnhancedFooter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <footer className="relative overflow-hidden bg-black py-16">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920"
          alt="Founders collaborating"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90 backdrop-blur-md"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <GradientText
              text="Let's imagine careers — together."
              className="mb-8 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
              from="from-indigo-400"
              to="to-purple-400"
            />

            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
              Whether you're leading, learning, or just listening — your voice matters here. Let's connect. Let's build.
              Let's imagine careers that count.
            </p>

            <div className="mb-12 flex justify-center space-x-6">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Facebook, label: "Facebook" },
                { icon: Youtube, label: "YouTube" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  aria-label={social.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>

            <div className="grid gap-8 rounded-xl bg-white/5 p-8 backdrop-blur-sm md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-bold text-white">Stay Connected</h3>
                <p className="mb-4 text-white/70">
                  Join our newsletter to receive updates on upcoming events, new content, and exclusive insights.
                </p>
                <form onSubmit={handleSubmit} className="relative">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <Button
                    type="submit"
                    className="absolute right-1 top-1 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-white"
                  >
                    {isSubmitted ? "Subscribed!" : "Subscribe"}
                  </Button>
                </form>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold text-white">Contact Us</h3>
                <p className="mb-4 text-white/70">Have questions or want to collaborate? Reach out to us directly.</p>
                <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                  <Mail className="mr-2 h-4 w-4" /> Get in Touch
                </Button>
              </div>
            </div>
          </motion.div>

          <div className="border-t border-white/10 pt-8 text-center">
            <div className="mb-4 flex flex-wrap justify-center gap-6 text-sm text-white/50">
              <a href="#" className="hover:text-white">
                About
              </a>
              <a href="#" className="hover:text-white">
                Events
              </a>
              <a href="#" className="hover:text-white">
                Real Voices
              </a>
              <a href="#" className="hover:text-white">
                Community
              </a>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </div>
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Careerimagined. Founded by Peali Sarkar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
