
import React from 'react';
import StatsCard from '../../components/ui/StatsCard';
import DataTable from '../../components/ui/DataTable';
import { Store, UserPlus, CheckCircle, Clock } from 'lucide-react';
import { mockMerchants } from '../../data/mockData';

const AdminMerchants: React.FC = () => {
  const merchantColumns = [
    { key: 'name', title: 'Merchant Name' },
    { key: 'email', title: 'Email' },
    { 
      key: 'status', 
      title: 'Status',
      render: (value: string) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          value === 'Approved' ? 'bg-green-100 text-green-800' : 
          value === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
          'bg-red-100 text-red-800'
        }`}>
          {value}
        </span>
      )
    },
    { key: 'revenue', title: 'Revenue' },
    { key: 'joinDate', title: 'Join Date' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Merchant Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Merchant
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Merchants"
          value="387"
          change="+8% from last month"
          changeType="positive"
          icon={Store}
          iconColor="text-blue-600"
        />
        <StatsCard
          title="New Applications"
          value="23"
          change="This week"
          changeType="neutral"
          icon={UserPlus}
          iconColor="text-green-600"
        />
        <StatsCard
          title="Approved"
          value="354"
          change="91% approval rate"
          changeType="positive"
          icon={CheckCircle}
          iconColor="text-emerald-600"
        />
        <StatsCard
          title="Pending Review"
          value="15"
          change="Awaiting approval"
          changeType="neutral"
          icon={Clock}
          iconColor="text-orange-600"
        />
      </div>

      <DataTable
        title="All Merchants"
        data={mockMerchants}
        columns={merchantColumns}
      />
    </div>
  );
};

export default AdminMerchants;
