
import React from 'react';
import StatsCard from '../../components/ui/StatsCard';
import { BarChart3, TrendingUp, Activity, Database } from 'lucide-react';

const SuperadminAnalytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">System Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Transactions"
          value="127,543"
          change="+15% from last month"
          changeType="positive"
          icon={BarChart3}
          iconColor="text-blue-600"
        />
        <StatsCard
          title="System Performance"
          value="99.9%"
          change="Uptime this month"
          changeType="positive"
          icon={Activity}
          iconColor="text-green-600"
        />
        <StatsCard
          title="Revenue Growth"
          value="28.5%"
          change="Year over year"
          changeType="positive"
          icon={TrendingUp}
          iconColor="text-emerald-600"
        />
        <StatsCard
          title="Database Size"
          value="2.3TB"
          change="+12GB this week"
          changeType="neutral"
          icon={Database}
          iconColor="text-purple-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">API Response Time</span>
              <span className="text-sm font-medium">120ms avg</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Error Rate</span>
              <span className="text-sm font-medium">0.01%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-600 h-2 rounded-full" style={{ width: '1%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Throughput</span>
              <span className="text-sm font-medium">1,200 req/min</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage Statistics</h3>
          <div className="space-y-4">
            {[
              { metric: 'Daily Active Users', value: '2,341', trend: '+12%' },
              { metric: 'API Calls', value: '45,678', trend: '+8%' },
              { metric: 'Data Processing', value: '128GB', trend: '+15%' },
              { metric: 'Cache Hit Rate', value: '94.2%', trend: '+2%' },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{item.metric}</span>
                <div className="text-right">
                  <span className="text-sm font-medium">{item.value}</span>
                  <span className="text-xs text-green-600 ml-2">{item.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperadminAnalytics;
