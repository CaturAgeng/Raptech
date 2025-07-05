import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contactHero"
import { ContactForm } from "@/components/contact/contactForm"
import { ContactInfo } from "@/components/contact/contactInfo"
import { ContactFAQ } from "@/components/contact/contactFaq"

export const metadata = {
  title: "Contact Us - EcoShop",
  description: "Get in touch with our team. We're here to help with any questions about our products or services.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactFAQ />
      <Footer />
    </div>
  )
}