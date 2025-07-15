"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Heart, Target, Zap, Shield, TrendingUp, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import React from "react"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import { Tooltip } from "@/components/ui/tooltip"

const partnerFeatures = [
  {
    icon: User,
    title: "Dedicated Profile",
    description: "Get your own MergeFund profile page showcasing your project, team, and contribution opportunities",
    gradient: "from-blue-400 to-purple-500",
  },
  {
    icon: Heart,
    title: "Community Donations",
    description: "Your community can donate directly to your MergeFund account to support development",
    gradient: "from-pink-400 to-red-500",
  },
  {
    icon: Target,
    title: "Create Bounties",
    description: "Use donated funds to create bounties on your issues and attract skilled developers",
    gradient: "from-green-400 to-blue-500",
  },
  {
    icon: Zap,
    title: "Speed Up Development",
    description: "Get critical issues resolved faster by incentivizing developers with real rewards",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "Quality Control",
    description: "Review and approve contributions before payments are released to maintain code quality",
    gradient: "from-purple-400 to-indigo-500",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Community",
    description: "Attract more contributors and build a sustainable funding model for your project",
    gradient: "from-teal-400 to-green-500",
  },
]

// Partner logos (placeholder)
const partnerLogos = [
  "/globe.svg",
  "/vercel.svg",
  "/next.svg",
  "/window.svg",
  "/file.svg",
]

// Animated stats (placeholder)
const stats = [
  { label: "Projects Funded", value: 120 },
  { label: "Bounties Created", value: 340 },
  { label: "Contributors", value: 2100 },
]

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatar: string;
};

// Testimonial (placeholder)
const testimonials: Testimonial[] = [
  {
    quote:
      "MergeFund helped us accelerate our roadmap and attract amazing contributors. The bounty system is a game changer!",
    name: "Jane Doe",
    title: "OpenSourceHub",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "MergeFund made it easy to attract top talent and reward our contributors. Our project has never moved faster!",
    name: "Alex Kim",
    title: "DevConnect",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "The bounty system brought our community together and helped us solve critical issues in record time.",
    name: "Priya Singh",
    title: "OpenDataTools",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote:
      "We received donations from users worldwide and turned them into real progress. MergeFund is a must for open source.",
    name: "Carlos Ramirez",
    title: "Code4All",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  },
]

// TestimonialCarousel component
function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = React.useState(0)
  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])
  return (
    <motion.div
      className="max-w-2xl mx-auto bg-gray-900/70 border border-gray-700 rounded-2xl p-8 mb-16 text-center shadow-xl min-h-[320px] flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.img
        key={testimonials[index].avatar}
        src={testimonials[index].avatar}
        alt={testimonials[index].name}
        className="mx-auto mb-4 w-16 h-16 rounded-full border-2 border-blue-400 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.blockquote
        key={testimonials[index].quote}
        className="text-xl text-gray-200 italic mb-4 min-h-[72px]"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.5 }}
      >
        “{testimonials[index].quote}”
      </motion.blockquote>
      <motion.div
        key={testimonials[index].name}
        className="font-semibold text-white"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {testimonials[index].name}
      </motion.div>
      <motion.div
        key={testimonials[index].title}
        className="text-blue-400"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {testimonials[index].title}
      </motion.div>
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i: number) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full ${i === index ? "bg-blue-400" : "bg-gray-600"}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </motion.div>
  )
}

export function PartnersSection() {
  // Confetti trigger
  function handleConfetti() {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
    })
  }

  // Animated counter
  function AnimatedCounter({ value }: { value: number }) {
    const [count, setCount] = React.useState(0)
    React.useEffect(() => {
      let start = 0
      const end = value
      if (start === end) return
      let incrementTime = 20
      let step = Math.ceil(end / 50)
      const timer = setInterval(() => {
        start += step
        if (start >= end) {
          start = end
          clearInterval(timer)
        }
        setCount(start)
      }, incrementTime)
      return () => clearInterval(timer)
    }, [value])
    return <span>{count.toLocaleString()}</span>
  }

  // Radial layout for partner features
  function RadialPartnerFeatures() {
    const radius = 180 // px
    const center = 220 // px (container size)
    const featureCount = partnerFeatures.length
    return (
      <div className="relative mx-auto my-16" style={{ width: center * 2, height: center * 2 }}>
        {/* Central CTA/Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-32 h-32 flex items-center justify-center shadow-2xl border-4 border-gray-900">
            <span className="text-white text-2xl font-bold text-center px-4">Partner<br/>with MergeFund</span>
          </div>
        </div>
        {/* Radial Features */}
        {partnerFeatures.map((feature, i) => {
          const angle = (360 / featureCount) * i - 90 // start at top
          const rad = (angle * Math.PI) / 180
          const x = center + radius * Math.cos(rad) - 40 // 40 = half icon+text width
          const y = center + radius * Math.sin(rad) - 40 // 40 = half icon+text height
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              className="absolute flex flex-col items-center group cursor-pointer"
              style={{ left: x, top: y, width: 80, height: 80 }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
            >
              <div className={`p-3 rounded-full bg-gradient-to-r ${feature.gradient} shadow-lg mb-2`}>
                <Icon className="w-7 h-7 bg-clip-text text-transparent" />
              </div>
              <span className="text-white text-sm font-semibold text-center drop-shadow-lg">
                {feature.title}
              </span>
              <div className="relative flex flex-col items-center">
                <div className="absolute z-20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 mt-2 w-48 bg-gray-900 text-gray-100 text-xs rounded-lg px-4 py-2 shadow-xl border border-gray-700">
                  {feature.description}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    )
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Animated Gradient Heading */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          For Repository {" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Partners</span>
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Accelerate Your Open Source Development. Partner with MergeFund to get a dedicated profile, accept community donations, and create bounties to speed up development
        </motion.p>
      </div>

      {/* Animated Stats */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="bg-gray-900/60 border border-gray-700 rounded-xl px-8 py-6 text-center shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold text-white">
              <AnimatedCounter value={stat.value} />
            </div>
            <div className="text-gray-400 mt-2 text-lg">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Partner Logos Grid */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-8 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {partnerLogos.map((logo, i) => (
          <motion.img
            key={logo}
            src={logo}
            alt="Partner logo"
            className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 drop-shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            viewport={{ once: true }}
          />
        ))}
      </motion.div>

      {/* Unique Radial Partner Features */}
      <RadialPartnerFeatures />

      {/* Testimonial Carousel Block */}
      <TestimonialCarousel testimonials={testimonials} />
     

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-12">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Partner with {" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MergeFund?</span>
        </h3>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Join leading open source projects already using MergeFund to accelerate their development
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            onClick={handleConfetti}
          >
            Partner with Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      
      {/* Ready to Start Section */}
    
    </section>
  )
}

// Add animated gradient keyframes to global CSS (suggested for animate-gradient-x)
// @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
// .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 4s ease-in-out infinite; }
