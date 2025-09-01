import React from "react"
import { NeonButton } from "@/components/ui/neon-button"
import { Chip } from "@/components/ui/chip"
import heroLabImage from "@/assets/placeholders/hero-lab.jpg"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroLabImage}
          alt="Dark cyber lab with server room atmosphere"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-grid-gutter py-32">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Staggered Headlines */}
            <div className="space-y-2">
              <div className="overflow-hidden">
                <h1 className="text-hero font-anton text-primary animate-fade-in">
                  REAL ENERGY.
                </h1>
              </div>
              <div className="overflow-hidden">
                <h2 className="text-hero font-anton text-foreground animate-fade-in [animation-delay:200ms]">
                  ZERO SUGAR.
                </h2>
              </div>
              <div className="overflow-hidden">
                <Chip 
                  variant="primary" 
                  className="text-lg px-6 py-3 animate-fade-in [animation-delay:400ms]"
                >
                  NO GIMMICKS.
                </Chip>
              </div>
            </div>
            
            {/* Tagline */}
            <p className="text-xl text-muted-foreground font-inter animate-fade-in [animation-delay:600ms]">
              [BF_TAGLINE]
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in [animation-delay:800ms]">
              <NeonButton size="xl" className="font-semibold">
                Choose Your Protocol
              </NeonButton>
              <NeonButton variant="ghost" size="xl">
                Why BYTEFUEL?
              </NeonButton>
            </div>
          </div>
          
          {/* Right Side - Floating Bottle Slot */}
          <div className="lg:col-span-2 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Bottle Placeholder */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 bg-primary/5 backdrop-blur-sm animate-bottle-float">
                <div className="flex items-center justify-center h-full">
                  <div className="w-32 h-48 bg-gradient-to-b from-primary/40 to-primary/60 rounded-lg shadow-neon animate-glow-pulse" />
                </div>
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute top-1/4 -left-8 animate-bottle-float [animation-delay:1s]">
                <Chip variant="accent" className="shadow-card">
                  60ml
                </Chip>
              </div>
              <div className="absolute bottom-1/4 -right-8 animate-bottle-float [animation-delay:2s]">
                <Chip variant="secondary" className="shadow-card">
                  Zero Sugar
                </Chip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection