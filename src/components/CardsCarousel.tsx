import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import BigCard from "./BigCard"
import greenTeaImage from "@/assets/placeholders/illust-green-tea.png"
import bloodOrangeImage from "@/assets/placeholders/illust-blood-orange.png"

const CardsCarousel = () => {
  const [currentCard, setCurrentCard] = useState(0)
  
  const cards = [
    {
      index: "01" as const,
      title: "PROTOCOL G",
      flavor: "GREEN TEA + LIME",
      description: "Engineered for sustained focus and clean energy. Natural green tea extract provides smooth caffeine delivery without the crash, while lime adds a refreshing kick to fuel your day.",
      specs: [
        { label: "Caffeine", value: "150mg" },
        { label: "Volume", value: "60ml" },
        { label: "Sugar", value: "0g" },
        { label: "Calories", value: "<5" }
      ],
      illustration: greenTeaImage,
      illustrationAlt: "Green tea leaves illustration for Protocol G",
      id: "protocol-g-card"
    },
    {
      index: "02" as const,
      title: "PROTOCOL R",
      flavor: "BLOOD ORANGE + GUARANA",
      description: "Maximum intensity energy for peak performance. Natural guarana provides explosive energy delivery, while blood orange delivers bold flavor that matches the power within.",
      specs: [
        { label: "Caffeine", value: "200mg" },
        { label: "Volume", value: "60ml" },
        { label: "Sugar", value: "0g" },
        { label: "Calories", value: "<5" }
      ],
      illustration: bloodOrangeImage,
      illustrationAlt: "Blood orange slice illustration for Protocol R",
      id: "protocol-r-card"
    }
  ]

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length)
  }

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length)
  }

  return (
    <section className="py-section-desktop bg-background">
      <div className="max-w-container mx-auto px-grid-gutter">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-anton text-foreground mb-4">
            Choose Your <span className="text-primary">Protocol</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Two formulations. One mission: delivering pure, focused energy when you need it most.
          </p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
          
          {/* Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentCard * 100}%)` }}
            >
              {cards.map((card, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <BigCard
                    type="protocol"
                    index={card.index}
                    title={card.title}
                    flavor={card.flavor}
                    description={card.description}
                    specs={card.specs}
                    illustration={card.illustration}
                    illustrationAlt={card.illustrationAlt}
                    id={card.id}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevCard}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-card border border-border shadow-card flex items-center justify-center transition-buttery hover:border-primary hover:shadow-neon focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Previous card"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          
          <button
            onClick={nextCard}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-card border border-border shadow-card flex items-center justify-center transition-buttery hover:border-primary hover:shadow-neon focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Next card"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentCard 
                    ? "bg-primary shadow-neon" 
                    : "bg-muted-foreground hover:bg-primary/50"
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardsCarousel