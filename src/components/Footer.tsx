import React from "react"
import { Link } from "react-router-dom"
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-ink border-t border-border">
      <div className="max-w-container mx-auto px-grid-gutter py-16">
        
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          
          {/* Left Column - Brand */}
          <div className="space-y-6">
            
            {/* Giant Watermark Logo */}
            <div className="relative">
              <h2 className="text-8xl lg:text-9xl font-anton text-primary/10 leading-none select-none">
                BYTEFUEL™
              </h2>
            </div>
            
            {/* Brand Blurb */}
            <div className="space-y-4 max-w-md">
              <p className="text-lg text-foreground font-medium">
                [BF_SHORT_BLURB]
              </p>
              <p className="text-muted-foreground">
                Precision-engineered micro energy shots for peak performance. 
                Real energy, zero sugar, no gimmicks. Built in the lab, made for the wild.
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-4">
              <a 
                href="#" 
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-buttery group"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-buttery group"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-buttery group"
                aria-label="Subscribe on YouTube"
              >
                <Youtube className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-buttery group"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>
          
          {/* Right Column - Links */}
          <div className="grid sm:grid-cols-2 gap-8">
            
            {/* Navigation */}
            <div>
              <h3 className="font-anton text-foreground mb-4 text-lg">
                Navigation
              </h3>
              <nav className="space-y-3">
                {[
                  { name: "Home", path: "/" },
                  { name: "Products", path: "/products" },
                  { name: "About", path: "/about" },
                  { name: "Stockists", path: "/stockists" },
                  { name: "Contact", path: "/contact" }
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
            
            {/* Support */}
            <div>
              <h3 className="font-anton text-foreground mb-4 text-lg">
                Support
              </h3>
              <nav className="space-y-3">
                {[
                  "FAQ",
                  "Wholesale Inquiries", 
                  "Press Kit",
                  "Lab Reports",
                  "Terms of Service",
                  "Privacy Policy"
                ].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono">
            © 2024 BYTEFUEL™. All rights reserved.
          </p>
          
          {/* Attribution */}
          <p className="text-xs text-muted-foreground font-mono">
            Site by <span className="text-primary">Your Agency</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer