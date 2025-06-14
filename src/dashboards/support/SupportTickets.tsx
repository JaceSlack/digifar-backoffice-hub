
import React from 'react';
import StatsCard from '../../components/ui/StatsCard';
import DataTable from '../../components/ui/DataTable';
import { Ticket, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { mockTickets } from '../../data/mockData';

const SupportTickets: React.FC = () => {
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
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Support Tickets</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Create Ticket
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Open Tickets"
          value="47"
          change="+3 from yesterday"
          changeType="neutral"
          icon={Ticket}
          iconColor="text-blue-600"
        />
        <StatsCard
          title="In Progress"
          value="23"
          change="48% of total"
          changeType="neutral"
          icon={Clock}
          iconColor="text-orange-600"
        />
        <StatsCard
          title="Resolved Today"
          value="28"
          change="+12% from yesterday"
          changeType="positive"
          icon={CheckCircle}
          iconColor="text-green-600"
        />
        <StatsCard
          title="High Priority"
          value="5"
          change="Needs attention"
          changeType="negative"
          icon={AlertCircle}
          iconColor="text-red-600"
        />
      </div>

      <DataTable
        title="All Tickets"
        data={mockTickets}
        columns={ticketColumns}
      />
    </div>
  );
};

export default SupportTickets;
