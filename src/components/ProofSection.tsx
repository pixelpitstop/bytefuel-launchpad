import React from "react"
import { Chip } from "@/components/ui/chip"
import { Zap, Droplet, Package, TrendingUp } from "lucide-react"
import bottleAngleImage from "@/assets/placeholders/bottle-angle-protocol-g.png"

const ProofSection = () => {
  const benefits = [
    { icon: Zap, label: "High Caffeine" },
    { icon: Droplet, label: "Zero Sugar" },
    { icon: Package, label: "Pocket-Sized" },
    { icon: TrendingUp, label: "Crash-Free" }
  ]

  return (
    <section className="py-section-desktop bg-gradient-dark">
      <div className="max-w-container mx-auto px-grid-gutter">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Product Angle */}
          <div className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <img 
                src={bottleAngleImage}
                alt="BYTEFUEL Protocol G energy shot bottle at dramatic angle"
                className="w-full h-full object-contain animate-fade-in"
              />
              
              {/* Spotlight Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-xl" />
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-8">
            
            {/* Kicker */}
            <div className="animate-fade-in">
              <Chip variant="primary" className="font-mono text-sm">
                PROOF OVER HYPE
              </Chip>
            </div>
            
            {/* Main Copy */}
            <div className="space-y-6 animate-fade-in [animation-delay:200ms]">
              <h2 className="text-4xl lg:text-5xl font-anton text-foreground leading-tight">
                While others sell <span className="text-primary">sugar and sizzle</span>, we ship <em className="text-accent">focus</em>.
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                [BF_SHORT_BLURB] Every BYTEFUEL shot is precision-engineered in our lab 
                to deliver clean, sustained energy without the crash or bloated feeling 
                of traditional energy drinks.
              </p>
              
              <p className="text-lg text-muted-foreground">
                No artificial sweeteners. No questionable additives. Just pure, 
                scientifically-backed ingredients that work as hard as you do.
              </p>
            </div>
            
            {/* Benefits Badge Row */}
            <div className="flex flex-wrap gap-3 animate-fade-in [animation-delay:400ms]">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.label}
                  className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border shadow-card transition-buttery hover:shadow-neon hover:border-primary/30"
                >
                  <benefit.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{benefit.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProofSection