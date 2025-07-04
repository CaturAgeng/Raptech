import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                    Discover Amazing
                    <span className="text-primary block">Products</span>
                  </h1>
                  <p className="text-lg text-gray-600 max-w-lg">
                    Shop the latest trends and find everything you need in one place. Quality products, unbeatable prices,
                    and fast delivery guaranteed.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </div>

                <div className="flex items-center space-x-8 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-2xl text-gray-900">10K+</span>
                    <span>Happy Customers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-2xl text-gray-900">5K+</span>
                    <span>Products</span>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="relative z-10">
                  <Image
                    src="/assets/logo.jpg"
                    alt="Hero Product"
                    width={600}
                    height={600}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                {/* Background decoration */}
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
      </section>
    )
}