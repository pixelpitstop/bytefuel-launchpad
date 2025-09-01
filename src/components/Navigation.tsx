import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { ShoppingCart, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

const Navigation = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Stockists", path: "/stockists" },
    { name: "Contact", path: "/contact" }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Scroll Progress Bar */}
      <div 
        className="h-0.5 bg-primary transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Main Navigation */}
      <nav className="bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-container mx-auto px-grid-gutter">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link 
              to="/" 
              className="text-xl font-anton text-primary hover:animate-magnetic-pull transition-buttery"
            >
              BYTEFUEL™
            </Link>
            
            {/* Center Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "relative text-sm font-medium transition-buttery hover:animate-magnetic-pull",
                    location.pathname === item.path
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:shadow-neon"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <button
                className="p-2 text-foreground hover:text-primary transition-buttery hover:animate-magnetic-pull"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-5 w-5" />
              </button>
              
              <div className="flex items-center space-x-1 text-xs font-mono text-muted-foreground">
                <Globe className="h-3 w-3" />
                <span>EN</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navigation