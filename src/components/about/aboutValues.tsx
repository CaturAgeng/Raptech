import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Leaf, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make is centered around providing the best experience for our customers.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "We carefully vet every product and partner to ensure the highest standards of quality.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We're committed to environmental responsibility and sustainable business practices.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building strong relationships with customers, partners, and communities worldwide.",
  },
]

export function AboutValues() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do and shape our company culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <Card
              key={value.title}
              className="text-center border-none shadow-none hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
