import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    number: "10K+",
    label: "Happy Customers",
    description: "Satisfied customers worldwide",
  },
  {
    number: "5K+",
    label: "Products",
    description: "Carefully curated items",
  },
  {
    number: "50+",
    label: "Countries",
    description: "Global shipping coverage",
  },
  {
    number: "99%",
    label: "Satisfaction",
    description: "Customer satisfaction rate",
  },
]

export function AboutStats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
