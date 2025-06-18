import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Navbar = () => {
    return (
        <header className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
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
                            Tentang Kami
                        </Link>
                        <Link href="/contact" className="text-gray-500 hover:text-red-600">
                            Kontak
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="md">
                            <ShoppingCart className="h-5 w-5" />
                            <span className="sr-only"> Keranjang</span>
                        </Button>
                        <Button>Masuk</Button>
                    </div>
                </div>
            </div>
        </header>
    )
}