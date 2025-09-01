import React from "react"
import bottleGImage from "@/assets/placeholders/bottle-front-protocol-g.png"
import bottleRImage from "@/assets/placeholders/bottle-front-protocol-r.png"

const FlavorSplit = () => {
  const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="flex h-full">
        
        {/* Protocol G - Left Half */}
        <button
          onClick={() => handleScroll('protocol-g-card')}
          className="relative flex-1 group cursor-pointer transition-transform duration-700 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
          aria-label="Learn more about Protocol G"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-primary" />
          
          {/* Massive Background Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[20vw] font-anton text-primary-foreground/10 select-none pointer-events-none">
              PROTOCOL G
            </span>
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center p-12">
            <div className="text-center space-y-8">
              
              {/* Bottle */}
              <div className="relative mx-auto w-32 h-48 group-hover:animate-bottle-float">
                <img 
                  src={bottleGImage}
                  alt="BYTEFUEL Protocol G - Green Tea Energy Shot"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
              
              {/* Text */}
              <div className="space-y-4">
                <h3 className="text-2xl font-anton text-primary-foreground">
                  PROTOCOL G
                </h3>
                <p className="text-primary-foreground/80 font-mono text-sm">
                  GREEN TEA + LIME
                </p>
                <div className="w-12 h-0.5 bg-primary-foreground/60 mx-auto" />
                <p className="text-primary-foreground/90 text-sm max-w-xs">
                  Clean focus from natural green tea extract. Smooth energy without the jitters.
                </p>
              </div>
            </div>
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
        
        {/* Protocol R - Right Half */}
        <button
          onClick={() => handleScroll('protocol-r-card')}
          className="relative flex-1 group cursor-pointer transition-transform duration-700 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-inset"
          aria-label="Learn more about Protocol R"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-secondary" />
          
          {/* Massive Background Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[20vw] font-anton text-secondary-foreground/10 select-none pointer-events-none">
              PROTOCOL R
            </span>
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center p-12">
            <div className="text-center space-y-8">
              
              {/* Bottle */}
              <div className="relative mx-auto w-32 h-48 group-hover:animate-bottle-float [animation-delay:500ms]">
                <img 
                  src={bottleRImage}
                  alt="BYTEFUEL Protocol R - Blood Orange Energy Shot"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
              
              {/* Text */}
              <div className="space-y-4">
                <h3 className="text-2xl font-anton text-secondary-foreground">
                  PROTOCOL R
                </h3>
                <p className="text-secondary-foreground/80 font-mono text-sm">
                  BLOOD ORANGE + GUARANA
                </p>
                <div className="w-12 h-0.5 bg-secondary-foreground/60 mx-auto" />
                <p className="text-secondary-foreground/90 text-sm max-w-xs">
                  Explosive energy from natural guarana. Bold flavor for maximum intensity.
                </p>
              </div>
            </div>
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </section>
  )
}

export default FlavorSplit