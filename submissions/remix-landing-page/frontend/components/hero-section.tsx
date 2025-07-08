"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Globe } from "lucide-react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>

        {/* Floating Icons */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              {i % 3 === 0 ? (
                <Code className="w-4 h-4 text-blue-400/30" />
              ) : i % 3 === 1 ? (
                <Zap className="w-4 h-4 text-purple-400/30" />
              ) : (
                <Globe className="w-4 h-4 text-green-400/30" />
              )}
            </div>
          ))}
        </div>

        {/* Mouse Follower Effect */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm text-blue-300 animate-pulse">
            <Zap className="w-4 h-4 mr-2" />
            Now with AI-powered matching
          </div>

          {/* Main Heading with Gradient Animation */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-pulse">
              Build real impact.
            </span>
          </h1>

          {/* Subtitle with Typewriter Effect */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Empowering software developers to earn{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
              real rewards
            </span>{" "}
            by solving open‑source issues. Connect with projects, showcase your skills, and get rewarded for your
            contributions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              Start Contributing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            >
              Explore Projects
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            {[
              { label: "Active Developers", value: "10,000+" },
              { label: "Total Rewards Paid", value: "$2.5M+" },
              { label: "Projects Supported", value: "500+" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
