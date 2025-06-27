import React from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function footer () {
    return (
      <div className="bg-gray-900 text-white py-12">
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
      </div>
    )
}