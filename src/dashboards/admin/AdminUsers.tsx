
import React from 'react';
import StatsCard from '../../components/ui/StatsCard';
import DataTable from '../../components/ui/DataTable';
import { Users, UserCheck, UserX, UserPlus } from 'lucide-react';
import { mockUsers } from '../../data/mockData';

const AdminUsers: React.FC = () => {
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
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Invite User
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Users"
          value="245"
          change="+15% from last month"
          changeType="positive"
          icon={Users}
          iconColor="text-blue-600"
        />
        <StatsCard
          title="New Users"
          value="18"
          change="This week"
          changeType="positive"
          icon={UserPlus}
          iconColor="text-green-600"
        />
        <StatsCard
          title="Active Users"
          value="223"
          change="91% active rate"
          changeType="positive"
          icon={UserCheck}
          iconColor="text-emerald-600"
        />
        <StatsCard
          title="Inactive Users"
          value="22"
          change="9% inactive"
          changeType="neutral"
          icon={UserX}
          iconColor="text-red-600"
        />
      </div>

      <DataTable
        title="All Users"
        data={mockUsers}
        columns={userColumns}
      />
    </div>
  );
};

export default AdminUsers;
