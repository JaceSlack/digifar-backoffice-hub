
import React from 'react';
import StatsCard from '../../components/ui/StatsCard';
import DataTable from '../../components/ui/DataTable';
import { CreditCard, BarChart3, TrendingUp, AlertTriangle } from 'lucide-react';
import { mockPayouts } from '../../data/mockData';

const FinanceDashboard: React.FC = () => {
  const payoutColumns = [
    { key: 'merchant', title: 'Merchant' },
    { key: 'amount', title: 'Amount' },
    { 
      key: 'status', 
      title: 'Status',
      render: (value: string) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          value === 'Completed' ? 'bg-green-100 text-green-800' :
          value === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
          'bg-blue-100 text-blue-800'
        }`}>
          {value}
        </span>
      )
    },
    { key: 'date', title: 'Date' },
    { key: 'method', title: 'Method' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Payouts"
          value="$127,500"
          change="+15% from last month"
          changeType="positive"
          icon={CreditCard}
          iconColor="text-blue-600"
        />
        <StatsCard
          title="Pending Payouts"
          value="$23,400"
          change="12 transactions"
          changeType="neutral"
          icon={BarChart3}
          iconColor="text-orange-600"
        />
        <StatsCard
          title="Monthly Revenue"
          value="$2.1M"
          change="+8.5% from last month"
          changeType="positive"
          icon={TrendingUp}
          iconColor="text-green-600"
        />
        <StatsCard
          title="Failed Transactions"
          value="23"
          change="-12% from yesterday"
          changeType="positive"
          icon={AlertTriangle}
          iconColor="text-red-600"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DataTable
          title="Recent Payouts"
          data={mockPayouts}
          columns={payoutColumns}
        />
        
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Today's Revenue</span>
              <span className="text-sm font-medium text-green-600">$45,230</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Weekly Average</span>
              <span className="text-sm font-medium">$38,450</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Monthly Target</span>
              <span className="text-sm font-medium">$2.5M</span>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Monthly Progress</span>
                <span className="text-sm font-medium">84%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '84%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceDashboard;
