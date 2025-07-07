import { Card, CardContent } from "@/components/ui/card"

export function AboutStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600">Founded with a vision to revolutionize online shopping</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">How It All Started</h3>
              <p className="text-gray-600">
                EcoShop was born from a simple idea: to create an online marketplace that prioritizes quality,
                sustainability, and customer satisfaction above all else. What started as a small project in 2020 has
                grown into a thriving community of over 10,000 satisfied customers.
              </p>
              <p className="text-gray-600">
                Our founders, passionate about both technology and environmental responsibility, saw an opportunity to
                bridge the gap between convenience and conscious consumption. Today, we continue to uphold these values
                in everything we do.
              </p>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-blue-50">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h4>
                <p className="text-gray-600 mb-6">
                  To provide exceptional products and services while fostering a sustainable future for generations to
                  come.
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h4>
                <p className="text-gray-600">
                  To become the world's most trusted and sustainable e-commerce platform, where every purchase makes a
                  positive impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
