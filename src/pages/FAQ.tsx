import React from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import FAQSection from "@/components/FAQSection"
import { Chip } from "@/components/ui/chip"

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        
        {/* Header */}
        <section className="py-section-desktop bg-gradient-dark">
          <div className="max-w-container mx-auto px-grid-gutter text-center">
            <Chip variant="primary" className="mb-6">
              SUPPORT
            </Chip>
            <h1 className="text-4xl lg:text-6xl font-anton text-foreground mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about BYTEFUEL energy shots, ingredients, 
              usage, and availability. Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </section>

        {/* FAQ Component */}
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  )
}

export default FAQ