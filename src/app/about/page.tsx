import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/aboutHero"
import { AboutStory } from "@/components/about/aboutStory"
import { AboutTeam } from "@/components/about/aboutTeam"
import { AboutValues } from "@/components/about/aboutValues"
import { AboutStats } from "@/components/about/aboutStats"

export const metadata = {
  title: "About Us - EcoShop",
  description:
    "Learn about our mission, values, and the team behind EcoShop. Discover why we're passionate about bringing you quality products.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutValues />
      <AboutTeam />
      <Footer />
    </div>
  )
}
