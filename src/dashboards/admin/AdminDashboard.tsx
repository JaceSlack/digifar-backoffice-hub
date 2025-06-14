
import React from 'react';
import StatsCard from '../../components/ui/StatsCard';
import DataTable from '../../components/ui/DataTable';
import { Users, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { mockMerchants } from '../../data/mockData';

const AdminDashboard: React.FC = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Merchants"
          value="387"
          change="+8% from last month"
          changeType="positive"
          icon={Users}
          iconColor="text-blue-600"
        />
        <StatsCard
          title="Pending Approvals"
          value="15"
          change="2 urgent items"
          changeType="neutral"
          icon={FileText}
          iconColor="text-orange-600"
        />
        <StatsCard
          title="Approved Today"
          value="12"
          change="+3 from yesterday"
          changeType="positive"
          icon={CheckCircle}
          iconColor="text-green-600"
        />
        <StatsCard
          title="Escalations"
          value="5"
          change="2 critical"
          changeType="negative"
          icon={AlertCircle}
          iconColor="text-red-600"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DataTable
          title="Recent Merchant Applications"
          data={mockMerchants}
          columns={merchantColumns}
        />
        
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Approval Queue</h3>
          <div className="space-y-4">
            {[
              { name: 'New Merchant Registration', priority: 'High', time: '2 hours ago' },
              { name: 'Payout Limit Increase', priority: 'Medium', time: '4 hours ago' },
              { name: 'Account Verification', priority: 'Low', time: '1 day ago' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  item.priority === 'High' ? 'bg-red-100 text-red-800' :
                  item.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {item.priority}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
