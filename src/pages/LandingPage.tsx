import React from "react"
import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import ProofSection from "@/components/ProofSection"
import FlavorSplit from "@/components/FlavorSplit"
import CardsCarousel from "@/components/CardsCarousel"
import IngredientsStrip from "@/components/IngredientsStrip"
import WhySection from "@/components/WhySection"
import FAQSection from "@/components/FAQSection"
import Footer from "@/components/Footer"

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <ProofSection />
        <FlavorSplit />
        <CardsCarousel />
        <IngredientsStrip />
        <WhySection />
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  )
}

export default LandingPage