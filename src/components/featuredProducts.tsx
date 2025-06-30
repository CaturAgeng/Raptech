import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart } from "lucide-react";
import Image from "next/image";

const product =[
    {
        id: 1,
        name: "Laptop Gaming Custom",
        price: 15000000,
        originalPrice: 18000000,
        rating: 4.5,
        reviews: 120,
        image: "/images/laptop-gaming.jpg",
        badge: "Best Seller",
    },
    {
        id: 2,
        name: "Smartphone Custom",
        price: 8000000,
        originalPrice: 10000000,
        rating: 4.7,
        reviews: 200,
        image: "/images/smartphone-custom.jpg",
        badge: "New Arrival",
    },
    {
        id: 3,
        name: "Audio Premium Headphones",
        price: 2500000,
        originalPrice: 3000000,
        rating: 4.8,
        reviews: 150,
        image: "/images/audio-headphones.jpg",
        badge: "Featured",
    },
]

export default function FeaturedProducts() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Produk Unggulan</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">Temukan produk elektronik custom terbaik kami yang telah dipilih secara khusus untuk Anda.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {product.map((product) => (
                        <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-0">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <Image 
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.name}
                                        width={300}
                                        height={300} 
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <Badge className="absolute top-3 left-3" variant="secondary">
                                        {product.badge}
                                    </Badge>
                                    <Button size="icon" variant="ghost" className="absolute top-3 right-3">
                                        <Heart className="h-4 w-4" />
                                    </Button>
                                </div>

                                <div className="p-4 spcae-y-3">
                                    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary transition-colors">
                                        {product.name}
                                    </h3>

                                    <div className="flex items-center space-x-2">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <Star 
                                                    key={i} 
                                                    className={`h-4 w-4 ${
                                                        i < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'
                                            }`} 
                                            />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-600">({product.reviews})</span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="space-x-2">
                                            <span className="text-xl font-bold text-gray-900">${product.price}</span>
                                            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                                        </div>
                                    </div>

                                    <Button className="w-full">Add to Cart</Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button variant="outline" size="lg">
                        View All Products
                    </Button>
                </div>
            </div>
        </section>
    )
}