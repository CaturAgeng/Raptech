import { Navbar } from "@/components/navbar"
import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featuredProducts"
import { Categories } from "@/components/categories"
import Features from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import "@/styles/globals.css"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}
