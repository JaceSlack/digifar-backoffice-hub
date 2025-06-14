
import React from 'react';
import StatsCard from '../../components/ui/StatsCard';
import DataTable from '../../components/ui/DataTable';
import { CreditCard, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { mockPayouts } from '../../data/mockData';

const FinancePayouts: React.FC = () => {
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
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Payout Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Process Batch
        </button>
      </div>

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
          title="Pending"
          value="$23,400"
          change="12 transactions"
          changeType="neutral"
          icon={Clock}
          iconColor="text-orange-600"
        />
        <StatsCard
          title="Completed"
          value="$104,100"
          change="Today"
          changeType="positive"
          icon={CheckCircle}
          iconColor="text-green-600"
        />
        <StatsCard
          title="Failed"
          value="$0"
          change="0% failure rate"
          changeType="positive"
          icon={AlertCircle}
          iconColor="text-red-600"
        />
      </div>

      <DataTable
        title="Recent Payouts"
        data={mockPayouts}
        columns={payoutColumns}
      />
    </div>
  );
};

export default FinancePayouts;
