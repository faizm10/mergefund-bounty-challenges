"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Heart, Target, Zap, Shield, TrendingUp, ArrowRight } from "lucide-react"

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

export function PartnersSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          For Repository{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Partners</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Accelerate Your Open Source Development. Partner with MergeFund to get a dedicated profile, accept community
          donations, and create bounties to speed up development
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {partnerFeatures.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card
              key={index}
              className="border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.gradient} bg-opacity-20 w-fit mb-4`}>
                  <Icon className={`w-6 h-6 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`} />
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

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-12">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Partner with{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MergeFund?</span>
        </h3>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Join leading open source projects already using MergeFund to accelerate their development
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
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
      <div className="mt-20 text-center">
        <h3 className="text-4xl font-bold mb-6">
          Ready to start{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">earning?</span>
        </h3>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of developers already earning real rewards on MergeFund
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-12 py-4 text-xl font-bold rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/25"
        >
          Get Started Today
        </Button>
      </div>
    </section>
  )
}
