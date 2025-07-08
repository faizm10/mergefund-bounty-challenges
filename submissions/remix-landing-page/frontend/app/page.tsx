import { HeroSection } from "@/components/hero-section"
import { LivePreview } from "@/components/live-preview"
import { FeaturesSection } from "@/components/features-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <LivePreview />
      <FeaturesSection />
      <PartnersSection />
      <Footer />
    </div>
  )
}
