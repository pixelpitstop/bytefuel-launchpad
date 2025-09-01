import React, { useEffect, useRef } from "react"
import { Chip } from "@/components/ui/chip"

const IngredientsStrip = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const ingredients = [
    "Green Tea Extract",
    "Guarana",
    "B-Vitamins",
    "Natural Flavours", 
    "Zero Sugar",
    "<60 ml>",
    "L-Theanine",
    "Antioxidants"
  ]

  // Double the array for seamless looping
  const doubledIngredients = [...ingredients, ...ingredients]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 0.5 // Adjust speed here
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    // Start animation
    animationId = requestAnimationFrame(scroll)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <section className="py-12 bg-muted/30 border-y border-border overflow-hidden">
      <div className="relative">
        
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {doubledIngredients.map((ingredient, index) => (
            <Chip
              key={index}
              variant="default"
              className="flex-shrink-0 px-6 py-3 text-sm font-mono bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-colors"
            >
              {ingredient}
            </Chip>
          ))}
        </div>
      </div>
      
      {/* Label */}
      <div className="text-center mt-6">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
          Core Ingredients
        </p>
      </div>
    </section>
  )
}

export default IngredientsStrip