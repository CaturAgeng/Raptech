"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

const product = {
  id: 1,
  name: "Gaming Laptop RTX 4080 Custom",
  price: 25999000,
  originalPrice: 28999000,
  images: [
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
  ],
  rating: 4.8,
  reviews: 124,
  category: "Laptop",
  brand: "CustomTech",
  inStock: true,
  badge: "Bestseller",
  description:
    "Laptop gaming premium dengan performa tinggi yang dapat dikustomisasi sesuai kebutuhan gaming Anda. Dilengkapi dengan prosesor terbaru dan kartu grafis RTX 4080 untuk pengalaman gaming yang luar biasa.",
  features: [
    "Prosesor Intel Core i9-13900H",
    "RAM 32GB DDR5 (dapat diupgrade)",
    "Storage 1TB NVMe SSD",
    "GPU NVIDIA RTX 4080 8GB",
    'Display 15.6" 240Hz QHD',
    "Keyboard RGB Mechanical",
    "Cooling System Advanced",
  ],
  customOptions: {
    processor: [
      { name: "Intel Core i7-13700H", price: 0 },
      { name: "Intel Core i9-13900H", price: 3000000 },
      { name: "Intel Core i9-13900HX", price: 5000000 },
    ],
    ram: [
      { name: "16GB DDR5", price: 0 },
      { name: "32GB DDR5", price: 4000000 },
      { name: "64GB DDR5", price: 12000000 },
    ],
    storage: [
      { name: "512GB NVMe SSD", price: 0 },
      { name: "1TB NVMe SSD", price: 2000000 },
      { name: "2TB NVMe SSD", price: 6000000 },
    ],
    color: [
      { name: "Hitam", price: 0 },
      { name: "Putih", price: 500000 },
      { name: "Merah", price: 500000 },
    ],
  },
}

const reviews = [
  {
    id: 1,
    user: "Ahmad Rizki",
    rating: 5,
    date: "2024-01-15",
    comment:
      "Laptop gaming terbaik yang pernah saya beli! Performa luar biasa dan bisa dikustomisasi sesuai kebutuhan.",
    verified: true,
  },
  {
    id: 2,
    user: "Sari Dewi",
    rating: 4,
    date: "2024-01-10",
    comment: "Kualitas build sangat bagus, hanya saja agak berat untuk dibawa-bawa. Overall sangat puas!",
    verified: true,
  },
  {
    id: 3,
    user: "Budi Santoso",
    rating: 5,
    date: "2024-01-05",
    comment: "Pelayanan custom sangat memuaskan. Tim support sangat membantu dalam memilih spesifikasi yang tepat.",
    verified: false,
  },
]

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedProcessor, setSelectedProcessor] = useState(product.customOptions.processor[0].name)
  const [selectedRam, setSelectedRam] = useState(product.customOptions.ram[0].name)
  const [selectedStorage, setSelectedStorage] = useState(product.customOptions.storage[0].name)
  const [selectedColor, setSelectedColor] = useState(product.customOptions.color[0].name)

  const calculateCustomPrice = () => {
    let additionalPrice = 0

    const processor = product.customOptions.processor.find((p) => p.name === selectedProcessor)
    const ram = product.customOptions.ram.find((r) => r.name === selectedRam)
    const storage = product.customOptions.storage.find((s) => s.name === selectedStorage)
    const color = product.customOptions.color.find((c) => c.name === selectedColor)

    if (processor) additionalPrice += processor.price
    if (ram) additionalPrice += ram.price
    if (storage) additionalPrice += storage.price
    if (color) additionalPrice += color.price

    return product.price + additionalPrice
  }

  const finalPrice = calculateCustomPrice()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-96 object-cover rounded-lg"
              />
              <Badge className="absolute top-4 left-4 bg-red-600">{product.badge}</Badge>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-lg overflow-hidden ${
                    selectedImage === index ? "ring-2 ring-red-600" : ""
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{product.category}</Badge>
                <Badge variant="outline">{product.brand}</Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews} ulasan)
                  </span>
                </div>
                <span className={`text-sm font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                  {product.inStock ? "Tersedia" : "Stok Habis"}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">Rp {finalPrice.toLocaleString("id-ID")}</span>
                {product.originalPrice && finalPrice !== product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    Rp {product.originalPrice.toLocaleString("id-ID")}
                  </span>
                )}
              </div>
            </div>

            {/* Customization Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-red-600" />
                  Opsi Kustomisasi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-base font-medium mb-3 block">Prosesor</Label>
                  <RadioGroup value={selectedProcessor} onValueChange={setSelectedProcessor}>
                    {product.customOptions.processor.map((option) => (
                      <div key={option.name} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.name} id={option.name} />
                        <Label htmlFor={option.name} className="flex-1 cursor-pointer">
                          {option.name}
                          {option.price > 0 && (
                            <span className="text-red-600 font-medium ml-2">
                              +Rp {option.price.toLocaleString("id-ID")}
                            </span>
                          )}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium mb-3 block">RAM</Label>
                  <RadioGroup value={selectedRam} onValueChange={setSelectedRam}>
                    {product.customOptions.ram.map((option) => (
                      <div key={option.name} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.name} id={option.name} />
                        <Label htmlFor={option.name} className="flex-1 cursor-pointer">
                          {option.name}
                          {option.price > 0 && (
                            <span className="text-red-600 font-medium ml-2">
                              +Rp {option.price.toLocaleString("id-ID")}
                            </span>
                          )}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium mb-3 block">Storage</Label>
                  <RadioGroup value={selectedStorage} onValueChange={setSelectedStorage}>
                    {product.customOptions.storage.map((option) => (
                      <div key={option.name} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.name} id={option.name} />
                        <Label htmlFor={option.name} className="flex-1 cursor-pointer">
                          {option.name}
                          {option.price > 0 && (
                            <span className="text-red-600 font-medium ml-2">
                              +Rp {option.price.toLocaleString("id-ID")}
                            </span>
                          )}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium mb-3 block">Warna</Label>
                  <RadioGroup value={selectedColor} onValueChange={setSelectedColor}>
                    {product.customOptions.color.map((option) => (
                      <div key={option.name} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.name} id={option.name} />
                        <Label htmlFor={option.name} className="flex-1 cursor-pointer">
                          {option.name}
                          {option.price > 0 && (
                            <span className="text-red-600 font-medium ml-2">
                              +Rp {option.price.toLocaleString("id-ID")}
                            </span>
                          )}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div>
                <Label className="text-base font-medium mb-2 block">Jumlah</Label>
                <Select value={quantity.toString()} onValueChange={(value) => setQuantity(Number.parseInt(value))}>
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1" disabled={!product.inStock}>
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Tambah ke Keranjang
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-5 w-5 mr-2" />
                  Wishlist
                </Button>
                <Button size="lg" variant="outline">
                  <Share2 className="h-5 w-5 mr-2" />
                  Bagikan
                </Button>
              </div>
            </div>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Fitur Utama</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Gratis Ongkir</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Garansi 2 Tahun</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RotateCcw className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">30 Hari Return</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">Custom Build</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Deskripsi</TabsTrigger>
              <TabsTrigger value="specifications">Spesifikasi</TabsTrigger>
              <TabsTrigger value="reviews">Ulasan ({product.reviews})</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
                  <h4 className="font-semibold mb-3">Fitur Unggulan:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Spesifikasi Teknis</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Prosesor:</span>
                          <span>{selectedProcessor}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">RAM:</span>
                          <span>{selectedRam}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Storage:</span>
                          <span>{selectedStorage}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">GPU:</span>
                          <span>NVIDIA RTX 4080 8GB</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Display:</span>
                          <span>15.6" 240Hz QHD</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Dimensi & Berat</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Dimensi:</span>
                          <span>35.9 x 26.1 x 2.4 cm</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Berat:</span>
                          <span>2.3 kg</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Warna:</span>
                          <span>{selectedColor}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Material:</span>
                          <span>Aluminum Alloy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{review.user}</span>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
