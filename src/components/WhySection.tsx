import React, { useState } from "react"
import { Beaker, Brain, Rocket, X } from "lucide-react"
import { NeonButton } from "@/components/ui/neon-button"
import { Chip } from "@/components/ui/chip"

const WhySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const features = [
    {
      icon: Beaker,
      title: "[BF_FEATURE_1]",
      subtitle: "Engineered Kick",
      description: "Lab-tested dose delivers maximum impact. No bloated can, no wasted space. Just pure, concentrated energy in every drop."
    },
    {
      icon: Brain,
      title: "[BF_FEATURE_2]", 
      subtitle: "Clean Focus",
      description: "Antioxidants from green tea and natural guarana provide sustained energy without jitters or crash. Your mind stays sharp, your energy stays consistent."
    },
    {
      icon: Rocket,
      title: "[BF_FEATURE_3]",
      subtitle: "Pocket Rocket", 
      description: "60ml of pure energy that fits anywhere. Gym bag, backpack, or pocket. Power when you need it, where you need it."
    }
  ]

  const labNotes = [
    { title: "Caffeine Absorption Study", subtitle: "Peak performance analysis" },
    { title: "Zero Sugar Formulation", subtitle: "Clean energy research" },
    { title: "Bioavailability Report", subtitle: "Maximum efficacy testing" }
  ]

  return (
    <>
      <section className="py-section-desktop bg-graphite relative overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-multiply bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

        <div className="relative max-w-container mx-auto px-grid-gutter">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <Chip variant="primary" className="mb-6">
              THE SCIENCE
            </Chip>
            <h2 className="text-4xl lg:text-6xl font-anton text-foreground mb-6">
              Why <span className="text-primary">BYTEFUEL</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three principles guide every formula: precision, purity, and performance. 
              No compromises, no corners cut.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group text-center space-y-6 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                
                {/* Icon */}
                <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors" />
                  <div className="absolute inset-0 rounded-full border border-primary/30 group-hover:border-primary/60 transition-colors" />
                  <feature.icon className="h-8 w-8 text-primary relative z-10" />
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-anton text-foreground group-hover:text-primary transition-colors">
                    {feature.subtitle}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <NeonButton 
              variant="ghost"
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="font-semibold"
            >
              See Lab Notes
            </NeonButton>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-card border border-border rounded-2xl p-8 max-w-2xl w-full shadow-deep">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
            
            {/* Header */}
            <div className="mb-8">
              <h3 className="text-2xl font-anton text-foreground mb-2">
                Lab Documentation
              </h3>
              <p className="text-muted-foreground">
                Scientific research behind BYTEFUEL formulations
              </p>
            </div>
            
            {/* Lab Notes Grid */}
            <div className="grid gap-4">
              {labNotes.map((note, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary/30 transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-mono font-semibold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{note.title}</h4>
                    <p className="text-sm text-muted-foreground">{note.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default WhySection