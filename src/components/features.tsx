import { Truck, Shield, Headphones, RefreshCw } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features =[
    {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on orders over $50. Fast and reliable delivery worldwide.",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Your payment information is processed securely with 256-bit SSL encryption.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help when you need it. Our support team is available around the clock.",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "Not satisfied? Return your purchase within 30 days for a full refund.",
  },
]

export default function Features() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">We're committed to providing you with the best shopping experience possible</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <Card key={feature.title} className="text-center border-none shadow-none">
                            <CardContent className="p-6">
                                <div className="inline0-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                                    <feature.icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}