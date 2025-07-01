import { StatsCards } from '@/components/statsCard';
import SalesChart from '@/components/salesChart';
import TopProducts from '@/components/topProducts';
import RecentOrders from './recentOrders';

export default function DashboardContent() {
    return (
        <div className='lg:pl-64'>
            <div className='p-4 lg:p-8'>
                <div className='mb-8'>
                    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                    <p className="text-gray-600 mb-6">Welcome to your dashboard. Here you can manage your account, view statistics, and access various features.</p>
                </div>

                <StatsCards />

                <div className='mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <SalesChart />
                    <TopProducts />
                </div>

                <div className='mt-8'>
                    <RecentOrders />
                </div>
            </div>
        </div>
    )
}