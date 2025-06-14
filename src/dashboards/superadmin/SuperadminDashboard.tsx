
import React from 'react';
import StatsCard from '../../components/ui/StatsCard';
import DataTable from '../../components/ui/DataTable';
import { Users, Shield, BarChart3, Settings } from 'lucide-react';
import { mockUsers } from '../../data/mockData';

const SuperadminDashboard: React.FC = () => {
  const userColumns = [
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' },
    { key: 'role', title: 'Role' },
    { 
      key: 'status', 
      title: 'Status',
      render: (value: string) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          value === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {value}
        </span>
      )
    },
    { key: 'lastLogin', title: 'Last Login' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Users"
          value="1,247"
          change="+12% from last month"
          changeType="positive"
          icon={Users}
          iconColor="text-blue-600"
        />
        <StatsCard
          title="Active Sessions"
          value="342"
          change="+5% from yesterday"
          changeType="positive"
          icon={BarChart3}
          iconColor="text-green-600"
        />
        <StatsCard
          title="System Health"
          value="99.9%"
          change="All systems operational"
          changeType="positive"
          icon={Shield}
          iconColor="text-emerald-600"
        />
        <StatsCard
          title="Pending Approvals"
          value="23"
          change="3 critical items"
          changeType="neutral"
          icon={Settings}
          iconColor="text-orange-600"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DataTable
          title="Recent User Activities"
          data={mockUsers}
          columns={userColumns}
        />
        
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Analytics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">CPU Usage</span>
              <span className="text-sm font-medium">45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Memory Usage</span>
              <span className="text-sm font-medium">67%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '67%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Storage Usage</span>
              <span className="text-sm font-medium">23%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '23%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperadminDashboard;
