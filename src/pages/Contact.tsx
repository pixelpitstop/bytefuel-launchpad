import React, { useState } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { NeonButton } from "@/components/ui/neon-button"
import { Chip } from "@/components/ui/chip"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MessageSquare, Building2, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate form submission
    setIsSubmitted(true)
    
    // Show success toast
    toast({
      title: "Message sent successfully!",
      description: "We'll get back within 48 hours.",
      duration: 5000,
    })

    // Reset form after a delay
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", type: "", message: "" })
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const contactTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "wholesale", label: "Wholesale" },
    { value: "press", label: "Press" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        
        {/* Header */}
        <section className="py-section-desktop bg-gradient-dark">
          <div className="max-w-container mx-auto px-grid-gutter text-center">
            <Chip variant="primary" className="mb-6">
              GET IN TOUCH
            </Chip>
            <h1 className="text-4xl lg:text-6xl font-anton text-foreground mb-6">
              Contact <span className="text-primary">BYTEFUEL</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Questions about our products? Interested in wholesale? Need press materials? 
              We're here to help and respond to all inquiries within 48 hours.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-section-desktop">
          <div className="max-w-2xl mx-auto px-grid-gutter">
            
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-deep">
              
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-anton text-foreground mb-2">
                      Send us a message
                    </h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you soon
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="bg-background border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                    
                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="bg-background border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                    
                    {/* Type */}
                    <div className="space-y-2">
                      <Label htmlFor="type" className="text-sm font-medium text-foreground">
                        Inquiry Type *
                      </Label>
                      <Select onValueChange={(value) => handleChange("type", value)} required>
                        <SelectTrigger className="bg-background border-border focus:border-primary focus:ring-primary">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help..."
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                        rows={5}
                        className="bg-background border-border focus:border-primary focus:ring-primary resize-none"
                      />
                    </div>
                    
                    {/* Submit Button */}
                    <NeonButton 
                      type="submit"
                      size="lg"
                      className="w-full font-semibold"
                    >
                      Send Message
                    </NeonButton>
                  </form>
                </>
              ) : (
                // Success State
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h2 className="text-2xl font-anton text-foreground mb-4">
                    Message Sent Successfully!
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-2">
                    Thanks for reaching out to BYTEFUEL.
                  </p>
                  
                  <p className="text-muted-foreground">
                    We'll get back within 48 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-4xl mx-auto px-grid-gutter">
            
            <h2 className="text-3xl font-anton text-foreground text-center mb-12">
              Other Ways to <span className="text-primary">Connect</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* General */}
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-anton text-foreground text-lg">
                  General Inquiries
                </h3>
                <p className="text-muted-foreground text-sm">
                  Questions about products, ingredients, or availability
                </p>
                <p className="font-mono text-primary text-sm">
                  hello@bytefuel.com
                </p>
              </div>
              
              {/* Wholesale */}
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Building2 className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-anton text-foreground text-lg">
                  Wholesale
                </h3>
                <p className="text-muted-foreground text-sm">
                  Retail partnerships and bulk ordering
                </p>
                <p className="font-mono text-secondary text-sm">
                  wholesale@bytefuel.com
                </p>
              </div>
              
              {/* Press */}
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <MessageSquare className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-anton text-foreground text-lg">
                  Press & Media
                </h3>
                <p className="text-muted-foreground text-sm">
                  Press kits, interviews, and media assets
                </p>
                <p className="font-mono text-accent text-sm">
                  press@bytefuel.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default Contact