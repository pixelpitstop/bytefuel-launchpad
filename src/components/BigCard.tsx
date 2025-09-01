import React from "react"
import { Chip } from "@/components/ui/chip"

interface BigCardProps {
  type: "protocol"
  index: "01" | "02"
  title: string
  flavor: string
  description: string
  specs: Array<{ label: string; value: string }>
  illustration: string
  illustrationAlt: string
  id?: string
}

const BigCard: React.FC<BigCardProps> = ({
  index,
  title,
  flavor,
  description,
  specs,
  illustration,
  illustrationAlt,
  id
}) => {
  return (
    <div 
      id={id}
      className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-deep transition-buttery hover:shadow-neon hover:border-primary/30 group"
    >
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
        
        {/* Left - Giant Number */}
        <div className="lg:col-span-1">
          <div className="text-[8rem] lg:text-[12rem] font-anton text-primary/20 leading-none group-hover:text-primary/40 transition-colors">
            {index}
          </div>
        </div>
        
        {/* Center - Illustration */}
        <div className="lg:col-span-1 flex justify-center">
          <div className="relative w-48 h-48 lg:w-64 lg:h-64">
            <img 
              src={illustration}
              alt={illustrationAlt}
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
        
        {/* Right - Content */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Title & Flavor */}
          <div className="space-y-2">
            <h3 className="text-2xl lg:text-3xl font-anton text-foreground">
              {title}
            </h3>
            <Chip variant="primary" className="font-mono">
              {flavor}
            </Chip>
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
          
          {/* Specs */}
          <div className="space-y-3">
            {specs.map((spec, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-border/50">
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
      </div>
    </div>
  )
}

export default BigCard