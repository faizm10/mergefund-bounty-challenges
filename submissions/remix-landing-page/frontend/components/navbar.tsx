"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Discover", "Bounties", "Projects", "Leaderboard", "About"]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              MergeFund
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-800 rounded-md"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button variant="outline" className="mr-4 border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                {item}
              </a>
            ))}
            <div className="pt-4 pb-2 space-y-2">
              <Button variant="outline" className="w-full border-gray-600 text-gray-300 bg-transparent">
                Sign In
              </Button>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
