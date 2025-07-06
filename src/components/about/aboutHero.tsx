import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                About
                <span className="text-primary block">EcoShop</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                We're more than just an e-commerce platform. We're a community of passionate individuals dedicated to
                bringing you the best products while making a positive impact on the world.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="About EcoShop"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
