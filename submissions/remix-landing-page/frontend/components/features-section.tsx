"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Shield, Globe, Award, Zap, CheckCircle, Users, Lock } from "lucide-react"

const features = [
  {
    icon: DollarSign,
    title: "Real Rewards",
    description:
      "Earn USDC or fiat payments in applicable countries for your meaningful contributions to open source projects",
    gradient: "from-green-400 to-blue-500",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Blockchain-secured transactions with smart contract escrow protection",
    badge: "100% secure",
    gradient: "from-blue-400 to-purple-500",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Connect and collaborate with developers from around the world",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: Award,
    title: "Build Reputation",
    description: "Showcase your expertise and grow your professional profile",
    badge: "Verified profiles",
    gradient: "from-orange-400 to-red-500",
  },
  {
    icon: Zap,
    title: "Instant Payouts",
    description: "Get paid immediately upon project completion and approval",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: CheckCircle,
    title: "Quality Projects",
    description: "Curated bounties from top-tier open source projects",
    badge: "Trusted by developers worldwide",
    gradient: "from-green-400 to-teal-500",
  },
]

const additionalFeatures = [
  {
    icon: Users,
    title: "Open Source First",
    gradient: "from-indigo-400 to-blue-500",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    gradient: "from-red-400 to-pink-500",
  },
  {
    icon: Globe,
    title: "Global Network",
    gradient: "from-teal-400 to-green-500",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          The Future of Open Source. Join the most trusted platform where developers earn real rewards for meaningful
          contributions
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card
              key={index}
              className="border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.gradient} bg-opacity-20`}>
                    <Icon className={`w-6 h-6 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`} />
                  </div>
                  {feature.badge && (
                    <span className="text-xs bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 px-2 py-1 rounded-full border border-blue-500/30">
                      {feature.badge}
                    </span>
                  )}
                </div>
                <CardTitle className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Additional Features Row */}
      <div className="grid md:grid-cols-3 gap-6">
        {additionalFeatures.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="flex items-center justify-center p-6 border border-gray-800 rounded-lg bg-gray-900/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 group"
            >
              <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.gradient} bg-opacity-20 mr-4`}>
                <Icon className={`w-5 h-5 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`} />
              </div>
              <span className="text-white font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {feature.title}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
