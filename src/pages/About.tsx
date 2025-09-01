import React from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Chip } from "@/components/ui/chip"

const About = () => {
  const milestones = [
    {
      year: "2020",
      title: "Lab Founded",
      description: "Research begins into clean energy formulations"
    },
    {
      year: "2021", 
      title: "First Breakthrough",
      description: "Zero-sugar energy delivery system perfected"
    },
    {
      year: "2022",
      title: "Beta Testing",
      description: "Professional athletes trial early formulations"
    },
    {
      year: "2023",
      title: "Protocol Development", 
      description: "G and R formulations finalized and tested"
    },
    {
      year: "2024",
      title: "Market Launch",
      description: "BYTEFUEL enters the energy shot market"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        
        {/* Hero */}
        <section className="py-section-desktop bg-gradient-dark">
          <div className="max-w-container mx-auto px-grid-gutter text-center">
            <Chip variant="primary" className="mb-6">
              OUR STORY
            </Chip>
            <h1 className="text-4xl lg:text-6xl font-anton text-foreground mb-6">
              Built in the Lab. <br />
              <span className="text-primary">Made for the Wild.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              BYTEFUEL was born from a simple frustration: why do energy drinks need to be 
              massive, sugar-laden, and full of questionable ingredients? We set out to engineer 
              a better way.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-section-desktop">
          <div className="max-w-container mx-auto px-grid-gutter">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Left - Story Text */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-anton text-foreground">
                    The Science of <span className="text-primary">Pure Energy</span>
                  </h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    In our lab, every ingredient serves a purpose. No fillers, no artificial 
                    sweeteners masking poor formulation, no bloated volumes that leave you feeling heavy. 
                    Just precision-engineered energy delivery in exactly 60ml.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We studied how the body processes caffeine, how natural compounds can enhance 
                    focus without jitters, and how to deliver sustained energy without the inevitable 
                    crash. The result? Two protocols optimized for different performance needs.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Protocol G harnesses the smooth, sustained power of green tea extract combined 
                    with L-theanine for clean focus. Protocol R delivers explosive energy through 
                    natural guarana for maximum intensity when peak performance is non-negotiable.
                  </p>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-anton text-foreground text-xl mb-3">
                    Our Principles
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Zero sugar, zero artificial sweeteners</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Natural caffeine sources only</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Lab-tested for purity and potency</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Minimal effective dose philosophy</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Right - Lab Images */}
              <div className="space-y-4">
                {/* Placeholder lab images */}
                <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground font-mono text-sm">
                    /lab-01.jpg - Lab research facility
                  </span>
                </div>
                <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground font-mono text-sm">
                    /lab-02.jpg - Formulation process
                  </span>
                </div>
                <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground font-mono text-sm">
                    /lab-03.jpg - Quality testing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-section-desktop bg-muted/20">
          <div className="max-w-4xl mx-auto px-grid-gutter">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-anton text-foreground mb-4">
                Our <span className="text-primary">Journey</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                From concept to market, driven by science and performance
              </p>
            </div>
            
            {/* Timeline */}
            <div className="relative">
              
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-border" />
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    
                    {/* Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-neon z-10" />
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                        <div className="flex items-center gap-3 mb-2">
                          <Chip variant="primary" className="font-mono text-xs">
                            {milestone.year}
                          </Chip>
                        </div>
                        <h3 className="font-anton text-foreground text-lg mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default About