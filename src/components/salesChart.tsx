import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'



const data = [
    { name: 'January', sales: 4000 },
    { name: 'February', sales: 3000 },
    { name: 'March', sales: 2000 },
    { name: 'April', sales: 2780 },
    { name: 'May', sales: 1890 },
    { name: 'June', sales: 2390 },
    { name: 'July', sales: 3490 },
    { name: 'August', sales: 2000 },
    { name: 'September', sales: 2780 },
    { name: 'October', sales: 1890 },
    { name: 'November', sales: 2390 },
    { name: 'December', sales: 3490 }
]

export default function SalesChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="sales" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}