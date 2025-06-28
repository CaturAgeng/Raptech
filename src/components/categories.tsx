import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const categories = [
    {
        name: "Electronics",
        description: "Latest gadgets and devices",
        image: "/images/categories/electronics.jpg",
        link: "/categories/electronics"
    },
    {
        name: "Fashion",
        description: "Trendy clothing and accessories",
        image: "/images/categories/fashion.jpg",
        link: "/categories/fashion"
    },
    {
        name: "Home & Kitchen",
        description: "Essentials for your home and kitchen",
        image: "/images/categories/home-kitchen.jpg",
        link: "/categories/home-kitchen"
    },
    {
        name: "Sports & Outdoors",
        description: "Gear for your active lifestyle",
        image: "/images/categories/sports-outdoors.jpg",
        link: "/categories/sports-outdoors"
    },
]

export function Categories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our diverse range of categories to find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Card key={category.name} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={80}
                    height={80}
                    className="mx-auto rounded-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}