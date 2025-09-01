import React from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Chip } from "@/components/ui/chip"
import { MapPin, Clock, Dumbbell, GraduationCap, Store } from "lucide-react"

const Stockists = () => {
  const stockists = [
    {
      name: "FitZone Gym",
      address: "1247 Fitness Ave, Downtown", 
      type: "Gym",
      hours: "24/7",
      icon: Dumbbell,
      tags: ["Protocol G", "Protocol R"]
    },
    {
      name: "Campus Corner Store", 
      address: "89 University Blvd, Campus District",
      type: "Campus",
      hours: "6AM - 11PM",
      icon: GraduationCap,
      tags: ["Protocol G", "Bulk Orders"]
    },
    {
      name: "Peak Performance Nutrition",
      address: "456 Athletic Way, Sports District",
      type: "Gym", 
      hours: "5AM - 10PM",
      icon: Dumbbell,
      tags: ["Protocol R", "Professional Grade"]
    },
    {
      name: "QuickStop 24",
      address: "789 Main St, City Center",
      type: "24/7",
      hours: "24/7",
      icon: Store,
      tags: ["Protocol G", "Protocol R", "Grab & Go"]
    },
    {
      name: "Elite Training Academy",
      address: "321 Performance Dr, Athletic Complex", 
      type: "Gym",
      hours: "4AM - 12AM", 
      icon: Dumbbell,
      tags: ["Protocol R", "Athlete Exclusive"]
    },
    {
      name: "Study Hub Cafe",
      address: "654 Scholar Ln, Library District",
      type: "Campus",
      hours: "7AM - 1AM",
      icon: GraduationCap, 
      tags: ["Protocol G", "Student Discount"]
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Gym": return "secondary"
      case "Campus": return "primary" 
      case "24/7": return "accent"
      default: return "default"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        
        {/* Header */}
        <section className="py-section-desktop bg-gradient-dark">
          <div className="max-w-container mx-auto px-grid-gutter text-center">
            <Chip variant="primary" className="mb-6">
              FIND BYTEFUEL
            </Chip>
            <h1 className="text-4xl lg:text-6xl font-anton text-foreground mb-6">
              Where to Buy <span className="text-primary">BYTEFUEL</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Available at premium fitness centers, campus stores, and select 24/7 locations. 
              Find your nearest stockist or contact us for wholesale inquiries.
            </p>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="max-w-container mx-auto px-grid-gutter">
            
            {/* Map Placeholder */}
            <div className="aspect-[2/1] bg-muted rounded-2xl flex items-center justify-center mb-8 border border-border">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                <span className="text-muted-foreground font-mono text-sm">
                  /map-stockists.jpg - Interactive stockist map
                </span>
                <p className="text-xs text-muted-foreground max-w-xs">
                  Interactive map showing all BYTEFUEL stockist locations with real-time availability
                </p>
              </div>
            </div>
            
            {/* Map Legend */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary" />
                <span className="text-sm font-mono text-muted-foreground">Gym</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm font-mono text-muted-foreground">Campus</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-sm font-mono text-muted-foreground">24/7</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stockists List */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-4xl mx-auto px-grid-gutter">
            
            <h2 className="text-3xl font-anton text-foreground text-center mb-12">
              Current <span className="text-primary">Stockists</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {stockists.map((stockist, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 shadow-card transition-buttery hover:border-primary/30 hover:shadow-neon"
                >
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-${getTypeColor(stockist.type)}/10 border border-${getTypeColor(stockist.type)}/30 flex items-center justify-center`}>
                        <stockist.icon className={`h-5 w-5 text-${getTypeColor(stockist.type)}`} />
                      </div>
                      
                      <div>
                        <h3 className="font-anton text-foreground text-lg">
                          {stockist.name}
                        </h3>
                        <Chip 
                          variant={getTypeColor(stockist.type) as "primary" | "secondary" | "accent" | "default"} 
                          className="text-xs"
                        >
                          {stockist.type}
                        </Chip>
                      </div>
                    </div>
                  </div>
                  
                  {/* Address */}
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      {stockist.address}
                    </p>
                  </div>
                  
                  {/* Hours */}
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      {stockist.hours}
                    </p>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {stockist.tags.map((tag, tagIndex) => (
                      <Chip key={tagIndex} variant="default" className="text-xs">
                        {tag}
                      </Chip>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wholesale CTA */}
        <section className="py-section-desktop">
          <div className="max-w-container mx-auto px-grid-gutter text-center">
            <div className="bg-card border border-border rounded-2xl p-12 shadow-card">
              <h2 className="text-3xl font-anton text-foreground mb-4">
                Become a <span className="text-primary">Stockist</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Interested in stocking BYTEFUEL at your location? We're always looking for 
                premium partners who share our commitment to quality and performance.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <span>• Competitive wholesale pricing</span>
                  <span>• Marketing support included</span>
                  <span>• Flexible minimum orders</span>
                </div>
                
                <div className="pt-4">
                  <a 
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg text-sm font-medium font-inter transition-buttery focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background h-12 px-6 py-2 bg-primary text-primary-foreground shadow-neon hover:shadow-[0_0_1.5rem_hsl(var(--lime)/0.8)] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Wholesale Inquiries
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default Stockists