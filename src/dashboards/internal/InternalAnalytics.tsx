
import React from 'react';
import StatsCard from '../../components/ui/StatsCard';
import { BarChart3, TrendingUp, Activity, Users } from 'lucide-react';

const InternalAnalytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Internal Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Revenue"
          value="$2.1M"
          change="+18% from last month"
          changeType="positive"
          icon={TrendingUp}
          iconColor="text-green-600"
        />
        <StatsCard
          title="Active Users"
          value="12,547"
          change="+8% this week"
          changeType="positive"
          icon={Users}
          iconColor="text-blue-600"
        />
        <StatsCard
          title="Transactions"
          value="45,678"
          change="+15% from yesterday"
          changeType="positive"
          icon={BarChart3}
          iconColor="text-purple-600"
        />
        <StatsCard
          title="System Uptime"
          value="99.98%"
          change="Last 30 days"
          changeType="positive"
          icon={Activity}
          iconColor="text-emerald-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trends</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">This Month</span>
              <span className="text-lg font-semibold text-green-600">$2,134,567</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Last Month</span>
              <span className="text-lg font-semibold text-gray-600">$1,789,432</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gray-600 h-2 rounded-full" style={{ width: '71%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Target</span>
              <span className="text-lg font-semibold text-blue-600">$2,500,000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
          <div className="space-y-4">
            {[
              { metric: 'Customer Acquisition Cost', value: '$125', trend: '-8%', color: 'text-green-600' },
              { metric: 'Average Transaction Value', value: '$47.82', trend: '+12%', color: 'text-green-600' },
              { metric: 'Customer Lifetime Value', value: '$1,247', trend: '+5%', color: 'text-green-600' },
              { metric: 'Churn Rate', value: '2.3%', trend: '-0.5%', color: 'text-green-600' },
              { metric: 'Conversion Rate', value: '4.7%', trend: '+1.2%', color: 'text-green-600' },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{item.metric}</span>
                <div className="text-right">
                  <span className="text-sm font-medium">{item.value}</span>
                  <span className={`text-xs ml-2 ${item.color}`}>{item.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalAnalytics;
