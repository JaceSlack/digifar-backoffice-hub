
import React from 'react';
import StatsCard from '../../components/ui/StatsCard';
import DataTable from '../../components/ui/DataTable';
import { HeadphonesIcon, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { mockTickets } from '../../data/mockData';

const SupportDashboard: React.FC = () => {
  const ticketColumns = [
    { key: 'title', title: 'Issue' },
    { key: 'customer', title: 'Customer' },
    { 
      key: 'priority', 
      title: 'Priority',
      render: (value: string) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          value === 'High' ? 'bg-red-100 text-red-800' :
          value === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
          'bg-green-100 text-green-800'
        }`}>
          {value}
        </span>
      )
    },
    { 
      key: 'status', 
      title: 'Status',
      render: (value: string) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          value === 'Open' ? 'bg-blue-100 text-blue-800' :
          value === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
          'bg-green-100 text-green-800'
        }`}>
          {value}
        </span>
      )
    },
    { key: 'created', title: 'Created' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Open Tickets"
          value="47"
          change="+3 from yesterday"
          changeType="neutral"
          icon={HeadphonesIcon}
          iconColor="text-blue-600"
        />
        <StatsCard
          title="Avg Response Time"
          value="2.3h"
          change="-15min from last week"
          changeType="positive"
          icon={Clock}
          iconColor="text-green-600"
        />
        <StatsCard
          title="Resolved Today"
          value="28"
          change="+12% from yesterday"
          changeType="positive"
          icon={CheckCircle}
          iconColor="text-emerald-600"
        />
        <StatsCard
          title="Escalated"
          value="3"
          change="1 critical"
          changeType="negative"
          icon={AlertCircle}
          iconColor="text-red-600"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DataTable
          title="Recent Tickets"
          data={mockTickets}
          columns={ticketColumns}
        />
        
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Support Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Customer Satisfaction</span>
              <span className="text-sm font-medium text-green-600">96%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '96%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">First Contact Resolution</span>
              <span className="text-sm font-medium">78%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Top Issues</h4>
              <div className="space-y-2">
                {[
                  { issue: 'Payment Processing', count: 12 },
                  { issue: 'Account Access', count: 8 },
                  { issue: 'Refund Requests', count: 6 },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{item.issue}</span>
                    <span className="text-sm font-medium">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportDashboard;
