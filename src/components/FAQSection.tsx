import React, { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is a BYTEFUEL energy shot?",
      answer: "[BF_FAQ_1_ANSWER] BYTEFUEL is a precision-engineered 60ml energy shot that delivers clean, sustained energy without sugar, artificial sweeteners, or the crash associated with traditional energy drinks. Each shot contains scientifically-dosed caffeine from natural sources like green tea extract and guarana, plus essential B-vitamins for optimal energy metabolism."
    },
    {
      question: "How is it different from canned energy drinks?",
      answer: "Unlike bloated 16oz energy drinks filled with sugar and artificial ingredients, BYTEFUEL concentrates pure energy into 60ml. No carbonation, no excess liquid, no sugar crash. Just clean ingredients that work harder so you can too. Each shot delivers the same energy as large energy drinks but with superior absorption and zero waste."
    },
    {
      question: "Who benefits from BYTEFUEL?",
      answer: "BYTEFUEL is designed for professionals, athletes, students, and anyone who demands peak mental and physical performance. Whether you're powering through a deadline, crushing a workout, or need sustained focus for studying, BYTEFUEL delivers clean energy when you need it most."
    },
    {
      question: "Does it need refrigeration?",
      answer: "No refrigeration required. BYTEFUEL's advanced formulation remains stable at room temperature, making it perfect for gym bags, backpacks, desk drawers, or anywhere you need portable energy. However, many users prefer it chilled for optimal taste experience."
    },
    {
      question: "Complete ingredients list?",
      answer: "Protocol G: Purified water, green tea extract (caffeine), natural lime flavor, B-vitamin complex (B3, B6, B12), L-theanine, natural preservatives. Protocol R: Purified water, guarana extract (caffeine), natural blood orange flavor, B-vitamin complex (B3, B6, B12), taurine, natural preservatives. Zero sugar, zero artificial sweeteners."
    },
    {
      question: "Available flavours?",
      answer: "Currently two precision formulations: Protocol G (Green Tea + Lime) for clean focus and sustained energy, and Protocol R (Blood Orange + Guarana) for maximum intensity and explosive energy delivery. Each formulation is optimized for different performance needs."
    },
    {
      question: "Where to buy BYTEFUEL?",
      answer: "Available at premium fitness centers, campus stores, and select 24/7 convenience locations. Use our stockist locator to find the nearest retailer, or contact us directly for wholesale inquiries and bulk orders."
    },
    {
      question: "How to consume for best results?",
      answer: "Consume entire 60ml shot 15-30 minutes before peak performance needs. Do not exceed 2 shots per day. Best taken on empty stomach for maximum absorption. Effects typically last 4-6 hours without crash. Not recommended for individuals sensitive to caffeine or under 18 years of age."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-section-desktop bg-background">
      <div className="max-w-4xl mx-auto px-grid-gutter">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-anton text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about BYTEFUEL energy shots
          </p>
        </div>
        
        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-border rounded-xl overflow-hidden bg-card shadow-card transition-buttery hover:border-primary/30"
            >
              
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 lg:px-8 py-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-foreground text-lg pr-4">
                  {faq.question}
                </span>
                
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-primary transform rotate-0 transition-transform duration-300" />
                  ) : (
                    <Plus className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>
              </button>
              
              {/* Answer */}
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 lg:px-8 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection