"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, DollarSign, User, Eye } from "lucide-react"

const bounties = [
  {
    id: 1,
    title: "🎨 Remix Our Landing Page Challenge",
    author: "hardsoft-maker",
    reward: "$200",
    level: "Intermediate",
    deadline: "TBD",
    description: "Recreate mergefund.org with your own spin! Add your own design, animations, AI features...",
    tags: ["design", "frontend", "creative"],
  },
  {
    id: 2,
    title: "🎉 Hello MergeFund - Creative Animated Submission",
    author: "devsultan06",
    reward: "TBD",
    level: "Any Level",
    deadline: "7/7/2025",
    description: "Creative animated submission for hello mergefund challenge",
    tags: ["animation", "creative", "submission"],
  },
  {
    id: 3,
    title: "🔥 MOST VIRAL CHALLENGE – $500 CASH",
    author: "gbabaisaac",
    reward: "$500",
    level: "Any Level",
    deadline: "7/5/2025",
    description: "Create the most viral content for MergeFund platform",
    tags: ["viral", "marketing", "challenge"],
  },
]

export function LivePreview() {
  const [selectedBounty, setSelectedBounty] = useState(bounties[0])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Live Preview
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          See the Bounty Board in Action. Real bounties from the MergeFund platform. Click any bounty to see the full
          details and experience our interactive interface.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Bounty List */}
        <div className="space-y-4">
          {bounties.map((bounty) => (
            <Card
              key={bounty.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 border-gray-800 bg-gray-900/50 backdrop-blur-sm ${
                selectedBounty.id === bounty.id ? "ring-2 ring-blue-500 bg-gray-800/70" : "hover:bg-gray-800/70"
              }`}
              onClick={() => setSelectedBounty(bounty)}
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30"
                  >
                    {bounty.reward}
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    {bounty.level}
                  </Badge>
                </div>
                <CardTitle className="text-white text-lg leading-tight">{bounty.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {bounty.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {bounty.deadline}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {bounty.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-gray-800 text-gray-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bounty Details */}
        <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-8">
          <CardHeader>
            <div className="flex justify-between items-start mb-4">
              <Badge className="bg-gradient-to-r from-green-600/20 to-blue-600/20 text-green-300 border-green-500/30">
                <DollarSign className="w-3 h-3 mr-1" />
                {selectedBounty.reward}
              </Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-300">
                {selectedBounty.level}
              </Badge>
            </div>
            <CardTitle className="text-white text-xl">{selectedBounty.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{selectedBounty.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Deadline: {selectedBounty.deadline}</span>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">{selectedBounty.description}</p>

            <div className="flex flex-wrap gap-2">
              {selectedBounty.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-gray-800 text-gray-300">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex gap-3 pt-4">
              <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent">
                Save
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-12">
        <Button
          size="lg"
          variant="outline"
          className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 bg-transparent"
        >
          Browse All Bounties
        </Button>
      </div>
    </section>
  )
}
