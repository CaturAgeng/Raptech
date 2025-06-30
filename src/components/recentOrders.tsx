import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/Button"
import { Table, TableHeader, TableRow, TableHead } from "@/components/ui/table"

const orders = [
    {
    id: "#3210",
    customer: "Olivia Martin",
    email: "olivia.martin@email.com",
    status: "Fulfilled",
    date: "February 20, 2024",
    amount: "$42.25",
  },
  {
    id: "#3209",
    customer: "Ava Johnson",
    email: "ava.johnson@email.com",
    status: "Pending",
    date: "February 19, 2024",
    amount: "$74.99",
  },
  {
    id: "#3208",
    customer: "Michael Johnson",
    email: "michael.johnson@email.com",
    status: "Fulfilled",
    date: "February 18, 2024",
    amount: "$64.75",
  },
  {
    id: "#3207",
    customer: "Lisa Anderson",
    email: "lisa.anderson@email.com",
    status: "Cancelled",
    date: "February 17, 2024",
    amount: "$34.50",
  },
  {
    id: "#3206",
    customer: "Samantha Green",
    email: "samantha.green@email.com",
    status: "Fulfilled",
    date: "February 16, 2024",
    amount: "$89.99",
  },
]

export default function RecentOrders() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Orders</CardTitle>
                <Button variant='outline' className='sm'>
                    View All
                </Button>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead className="hidden md:table-cell">Status</TableHead>
                            <TableHead className="hidden lg:table-cell">Date</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                </Table>
            </CardContent>
        </Card>
    )
}