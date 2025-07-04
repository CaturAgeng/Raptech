import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"



const products = [
    { name: "Wireless Headphones", sales: 1234, progress: 85 },
    { name: "Smartphone", sales: 987, progress: 75 },
    { name: "Laptop", sales: 654, progress: 60 },
    { name: "Smartwatch", sales: 432, progress: 50 },
    { name: "Bluetooth Speaker", sales: 321, progress: 40 }
]

export default function TopProducts() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Top Products</CardTitle>
            </CardHeader>

            <CardContent>
                {products.map((product, index) => (
                    <div key={product.name} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">{product.name}</span>
                            <span className="text-gray-500">{product.sales} sales</span>
                        </div>
                        
                        <Progress value={product.progress} className="h-2" />
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}