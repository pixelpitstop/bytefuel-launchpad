import React from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { NeonButton } from "@/components/ui/neon-button"
import { Chip } from "@/components/ui/chip"
import protocolGHeroImage from "@/assets/placeholders/protocol-g-hero.png"
import protocolRHeroImage from "@/assets/placeholders/protocol-r-hero.png"

const Products = () => {
  const products = [
    {
      id: "protocol-g",
      name: "Protocol G",
      subtitle: "01 / CLEAN FOCUS",
      flavor: "Green Tea + Lime",
      tagline: "Engineered for sustained focus and clean energy",
      description: "Natural green tea extract provides smooth caffeine delivery without the crash, while lime adds a refreshing kick to fuel your day. Perfect for professionals who need sustained mental clarity.",
      heroImage: protocolGHeroImage,
      benefits: [
        "150mg natural caffeine from green tea",
        "L-theanine for smooth energy delivery", 
        "Zero sugar, zero crash",
        "Enhanced with B-vitamins",
        "Antioxidant-rich formula"
      ],
      specs: [
        { label: "Caffeine", value: "150mg" },
        { label: "Volume", value: "60ml" },
        { label: "Sugar", value: "0g" },
        { label: "Calories", value: "<5" },
        { label: "Sweetness", value: "0g" }
      ],
      primaryColor: "primary"
    },
    {
      id: "protocol-r", 
      name: "Protocol R",
      subtitle: "02 / MAXIMUM INTENSITY",
      flavor: "Blood Orange + Guarana",
      tagline: "Maximum intensity energy for peak performance",
      description: "Natural guarana provides explosive energy delivery, while blood orange delivers bold flavor that matches the power within. Designed for athletes and high-performers who demand maximum intensity.",
      heroImage: protocolRHeroImage,
      benefits: [
        "200mg natural caffeine from guarana",
        "Rapid-release energy formula",
        "Bold blood orange flavor",
        "Taurine for enhanced performance",
        "Zero artificial ingredients"
      ],
      specs: [
        { label: "Caffeine", value: "200mg" },
        { label: "Volume", value: "60ml" },
        { label: "Sugar", value: "0g" },
        { label: "Calories", value: "<5" },
        { label: "Sweetness", value: "0g" }
      ],
      primaryColor: "secondary"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        
        {/* Page Header */}
        <section className="py-section-desktop bg-gradient-dark">
          <div className="max-w-container mx-auto px-grid-gutter text-center">
            <Chip variant="primary" className="mb-6">
              OUR FORMULATIONS
            </Chip>
            <h1 className="text-4xl lg:text-6xl font-anton text-foreground mb-6">
              Choose Your <span className="text-primary">Protocol</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Two precision-engineered formulations. Each optimized for different performance needs. 
              Both delivering the same promise: real energy, zero sugar, no gimmicks.
            </p>
          </div>
        </section>

        {/* Product Cards */}
        <section className="py-section-desktop">
          <div className="max-w-container mx-auto px-grid-gutter space-y-32">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                
                {/* Product Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative aspect-square max-w-lg mx-auto">
                    <img 
                      src={product.heroImage}
                      alt={`${product.name} energy shot hero image`}
                      className="w-full h-full object-contain animate-fade-in"
                    />
                    
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-radial from-${product.primaryColor}/20 via-transparent to-transparent blur-2xl`} />
                  </div>
                </div>
                
                {/* Product Info */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  
                  {/* Header */}
                  <div className="space-y-4">
                    <Chip 
                      variant={product.primaryColor as "primary" | "secondary"} 
                      className="font-mono text-sm"
                    >
                      {product.subtitle}
                    </Chip>
                    
                    <h2 className="text-4xl lg:text-5xl font-anton text-foreground">
                      {product.name}
                    </h2>
                    
                    <p className="text-xl font-medium text-muted-foreground">
                      {product.flavor}
                    </p>
                    
                    <p className="text-lg text-foreground font-medium">
                      {product.tagline}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {product.description}
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-3">
                    <h3 className="font-anton text-foreground text-lg">Key Benefits</h3>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${product.primaryColor}`} />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Specs Table */}
                  <div className="space-y-3">
                    <h3 className="font-anton text-foreground text-lg">Specifications</h3>
                    <div className="bg-card border border-border rounded-lg p-4 space-y-2">
                      {product.specs.map((spec, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 border-b border-border/30 last:border-b-0">
                          <span className="font-mono text-sm text-muted-foreground uppercase tracking-wide">
                            {spec.label}
                          </span>
                          <span className="font-medium text-foreground">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4">
                    <NeonButton 
                      variant={product.primaryColor === "primary" ? "primary" : "danger"}
                      size="lg"
                      className="font-semibold"
                    >
                      Add to Cart
                    </NeonButton>
                    <NeonButton variant="ghost" size="lg">
                      Find a Stockist
                    </NeonButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default Products