import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Star, Zap, Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProductService } from "@/lib/services/products"
import { CategoryService } from "@/lib/services/categories"
import { SupabaseStatus } from "@/components/supabase-status"

export default async function HomePage() {
  // Fetch data from Supabase (or fallback data)
  const [featuredProducts, categories] = await Promise.all([
    ProductService.getFeaturedProducts(4),
    CategoryService.getAllCategories(),
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Zap className="h-8 w-8 text-red-600" />
                <span className="text-xl font-bold text-gray-900">Raptech</span>
              </Link>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-red-600 font-medium">
                Beranda
              </Link>
              <Link href="/products" className="text-gray-500 hover:text-red-600">
                Produk
              </Link>
              <Link href="/custom" className="text-gray-500 hover:text-red-600">
                Kustomisasi
              </Link>
              <Link href="/about" className="text-gray-500 hover:text-red-600">
                Tentang
              </Link>
              <Link href="/contact" className="text-gray-500 hover:text-red-600">
                Kontak
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Keranjang</span>
              </Button>
              <Button>Masuk</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Supabase Status */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <SupabaseStatus />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Elektronik Custom
                <span className="block text-yellow-400">Sesuai Keinginan</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Dapatkan perangkat elektronik yang disesuaikan dengan kebutuhan dan gaya hidup Anda. Kualitas premium
                dengan harga terjangkau.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-red-600 font-semibold">
                  Mulai Kustomisasi
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600"
                >
                  Lihat Produk
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Custom Electronics"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kustomisasi Penuh</h3>
              <p className="text-gray-600">Sesuaikan spesifikasi, warna, dan fitur sesuai kebutuhan Anda</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Garansi Resmi</h3>
              <p className="text-gray-600">Semua produk dilengkapi garansi resmi hingga 2 tahun</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gratis Ongkir</h3>
              <p className="text-gray-600">Pengiriman gratis ke seluruh Indonesia untuk pembelian di atas 5 juta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kategori Produk</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jelajahi berbagai kategori elektronik yang dapat dikustomisasi sesuai kebutuhan Anda
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.product_count} produk</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Produk Unggulan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Produk elektronik terpopuler dengan opsi kustomisasi terlengkap
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={product.image_urls[0] || "/placeholder.svg?height=300&width=300"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {product.badge && (
                      <Badge
                        className={`absolute top-2 left-2 ${
                          product.badge === "Sale"
                            ? "bg-red-500"
                            : product.badge === "New"
                              ? "bg-green-500"
                              : product.badge === "Bestseller"
                                ? "bg-blue-500"
                                : "bg-purple-500"
                        }`}
                      >
                        {product.badge}
                      </Badge>
                    )}
                    {product.customizable && (
                      <Badge variant="secondary" className="absolute top-2 right-2">
                        Dapat Dikustom
                      </Badge>
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
                          {product.rating} ({product.review_count} ulasan)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-xl font-bold text-gray-900">
                          Rp {product.price.toLocaleString("id-ID")}
                        </span>
                        {product.original_price && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            Rp {product.original_price.toLocaleString("id-ID")}
                          </span>
                        )}
                      </div>
                    </div>

                    <Button className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Tambah ke Keranjang
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Lihat Semua Produk
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Membuat Elektronik Impian Anda?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Konsultasi gratis dengan tim ahli kami untuk mendapatkan rekomendasi produk terbaik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Konsultasi Gratis
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-8 w-8 text-red-400" />
                <span className="text-xl font-bold">Raptech</span>
              </div>
              <p className="text-gray-400 mb-4">
                Toko elektronik custom terpercaya dengan kualitas premium dan layanan terbaik.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Produk</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Laptop Custom
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Smartphone
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Audio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Kustomisasi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Konsultasi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Garansi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Kontak</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@raptech.com</li>
                <li>Phone: +62 21 1234 5678</li>
                <li>WhatsApp: +62 812 3456 7890</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Raptech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
