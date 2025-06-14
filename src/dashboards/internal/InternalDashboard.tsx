
import React from 'react';
import StatsCard from '../../components/ui/StatsCard';
import DataTable from '../../components/ui/DataTable';
import { BarChart3, FileText, TrendingUp, Users } from 'lucide-react';
import { mockTransactions } from '../../data/mockData';

const InternalDashboard: React.FC = () => {
  const transactionColumns = [
    { key: 'type', title: 'Type' },
    { key: 'amount', title: 'Amount' },
    { key: 'merchant', title: 'Merchant' },
    { 
      key: 'status', 
      title: 'Status',
      render: (value: string) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          value === 'Success' ? 'bg-green-100 text-green-800' :
          'bg-yellow-100 text-yellow-800'
        }`}>
          {value}
        </span>
      )
    },
    { key: 'date', title: 'Date' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Transactions"
          value="5,847"
          change="+18% from last week"
          changeType="positive"
          icon={BarChart3}
          iconColor="text-blue-600"
        />
        <StatsCard
          title="Report Downloads"
          value="142"
          change="+5 today"
          changeType="positive"
          icon={FileText}
          iconColor="text-green-600"
        />
        <StatsCard
          title="Growth Rate"
          value="12.5%"
          change="Monthly average"
          changeType="positive"
          icon={TrendingUp}
          iconColor="text-emerald-600"
        />
        <StatsCard
          title="Active Users"
          value="2,341"
          change="+7% this month"
          changeType="positive"
          icon={Users}
          iconColor="text-purple-600"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DataTable
          title="Recent Transactions"
          data={mockTransactions}
          columns={transactionColumns}
        />
        
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Analytics Overview</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">85%</p>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">1.2s</p>
                <p className="text-sm text-gray-600">Avg Response</p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Platform Usage</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Mobile</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Desktop</span>
                    <span className="text-sm font-medium">35%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalDashboard;
