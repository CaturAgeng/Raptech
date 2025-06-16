"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Grid, List, Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const products = [
  {
    id: 1,
    name: "Gaming Laptop RTX 4080",
    price: 25999000,
    originalPrice: 28999000,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 124,
    category: "Laptop",
    customizable: true,
    inStock: true,
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "iPhone 15 Pro Custom",
    price: 18999000,
    originalPrice: 21999000,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 89,
    category: "Smartphone",
    customizable: true,
    inStock: true,
    badge: "New",
  },
  {
    id: 3,
    name: "MacBook Pro M3 Custom",
    price: 32999000,
    originalPrice: 35999000,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 256,
    category: "Laptop",
    customizable: true,
    inStock: true,
    badge: "Premium",
  },
  {
    id: 4,
    name: "Samsung Galaxy S24 Ultra",
    price: 16999000,
    originalPrice: 19999000,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 178,
    category: "Smartphone",
    customizable: true,
    inStock: false,
    badge: "Sale",
  },
  {
    id: 5,
    name: "AirPods Pro 3 Custom",
    price: 4999000,
    originalPrice: 5999000,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 342,
    category: "Audio",
    customizable: true,
    inStock: true,
    badge: "Popular",
  },
  {
    id: 6,
    name: "Apple Watch Ultra 2",
    price: 12999000,
    originalPrice: 14999000,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 156,
    category: "Smart Watch",
    customizable: true,
    inStock: true,
    badge: "New",
  },
]

const categories = ["Semua", "Laptop", "Smartphone", "Audio", "Smart Watch", "Gaming", "Accessories"]
const priceRanges = [
  { label: "Di bawah 5 juta", min: 0, max: 5000000 },
  { label: "5 - 10 juta", min: 5000000, max: 10000000 },
  { label: "10 - 20 juta", min: 10000000, max: 20000000 },
  { label: "20 - 30 juta", min: 20000000, max: 30000000 },
  { label: "Di atas 30 juta", min: 30000000, max: Number.POSITIVE_INFINITY },
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [selectedPriceRange, setSelectedPriceRange] = useState<number[]>([])
  const [sortBy, setSortBy] = useState("popular")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showCustomizable, setShowCustomizable] = useState(false)
  const [showInStock, setShowInStock] = useState(false)

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Semua" || product.category === selectedCategory
    const matchesCustomizable = !showCustomizable || product.customizable
    const matchesInStock = !showInStock || product.inStock

    const matchesPriceRange =
      selectedPriceRange.length === 0 ||
      selectedPriceRange.some((index) => {
        const range = priceRanges[index]
        return product.price >= range.min && product.price <= range.max
      })

    return matchesSearch && matchesCategory && matchesCustomizable && matchesInStock && matchesPriceRange
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.id - a.id
      default:
        return b.reviews - a.reviews
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Semua Produk</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Pencarian</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Cari produk..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Kategori</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category ? "bg-red-100 text-red-700" : "hover:bg-gray-100"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Rentang Harga</h3>
                <div className="space-y-3">
                  {priceRanges.map((range, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox
                        id={`price-${index}`}
                        checked={selectedPriceRange.includes(index)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedPriceRange([...selectedPriceRange, index])
                          } else {
                            setSelectedPriceRange(selectedPriceRange.filter((i) => i !== index))
                          }
                        }}
                      />
                      <label htmlFor={`price-${index}`} className="text-sm">
                        {range.label}
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Filter Lainnya</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="customizable" checked={showCustomizable} onCheckedChange={setShowCustomizable} />
                    <label htmlFor="customizable" className="text-sm">
                      Dapat Dikustomisasi
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="instock" checked={showInStock} onCheckedChange={setShowInStock} />
                    <label htmlFor="instock" className="text-sm">
                      Tersedia
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">
                  Menampilkan {sortedProducts.length} dari {products.length} produk
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Urutkan berdasarkan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Terpopuler</SelectItem>
                    <SelectItem value="newest">Terbaru</SelectItem>
                    <SelectItem value="price-low">Harga Terendah</SelectItem>
                    <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                    <SelectItem value="rating">Rating Tertinggi</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
              {sortedProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    {viewMode === "grid" ? (
                      <>
                        <div className="relative">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={300}
                            height={300}
                            className="w-full h-48 object-cover rounded-t-lg"
                          />
                          <Badge
                            className={`absolute top-2 left-2 ${
                              product.badge === "Sale"
                                ? "bg-red-500"
                                : product.badge === "New"
                                  ? "bg-green-500"
                                  : product.badge === "Bestseller"
                                    ? "bg-red-600"
                                    : product.badge === "Premium"
                                      ? "bg-purple-500"
                                      : "bg-orange-500"
                            }`}
                          >
                            {product.badge}
                          </Badge>
                          {!product.inStock && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-t-lg">
                              <span className="text-white font-semibold">Stok Habis</span>
                            </div>
                          )}
                        </div>

                        <div className="p-4">
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-red-600 transition-colors">
                            {product.name}
                          </h3>

                          <div className="flex items-center mb-2">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm text-gray-600 ml-1">
                                {product.rating} ({product.reviews} ulasan)
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <span className="text-xl font-bold text-gray-900">
                                Rp {product.price.toLocaleString("id-ID")}
                              </span>
                              {product.originalPrice && (
                                <span className="text-sm text-gray-500 line-through ml-2">
                                  Rp {product.originalPrice.toLocaleString("id-ID")}
                                </span>
                              )}
                            </div>
                          </div>

                          <Button className="w-full" disabled={!product.inStock}>
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            {product.inStock ? "Tambah ke Keranjang" : "Stok Habis"}
                          </Button>
                        </div>
                      </>
                    ) : (
                      <div className="flex p-4 space-x-4">
                        <div className="relative flex-shrink-0">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={120}
                            height={120}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                          <Badge
                            className={`absolute -top-2 -left-2 text-xs ${
                              product.badge === "Sale"
                                ? "bg-red-500"
                                : product.badge === "New"
                                  ? "bg-green-500"
                                  : product.badge === "Bestseller"
                                    ? "bg-red-600"
                                    : product.badge === "Premium"
                                      ? "bg-purple-500"
                                      : "bg-orange-500"
                            }`}
                          >
                            {product.badge}
                          </Badge>
                        </div>

                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1 group-hover:text-red-600 transition-colors">
                            {product.name}
                          </h3>

                          <div className="flex items-center mb-2">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-gray-600 ml-1">
                              {product.rating} ({product.reviews} ulasan)
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-xl font-bold text-gray-900">
                                Rp {product.price.toLocaleString("id-ID")}
                              </span>
                              {product.originalPrice && (
                                <span className="text-sm text-gray-500 line-through ml-2">
                                  Rp {product.originalPrice.toLocaleString("id-ID")}
                                </span>
                              )}
                            </div>

                            <Button size="sm" disabled={!product.inStock}>
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              {product.inStock ? "Tambah" : "Habis"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Tidak ada produk yang ditemukan</p>
                <p className="text-gray-400 mt-2">Coba ubah filter pencarian Anda</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
