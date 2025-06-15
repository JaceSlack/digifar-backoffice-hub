
import React, { useState } from 'react';
import StatsCard from '../../components/ui/StatsCard';
import DataTable from '../../components/ui/DataTable';
import CreateTicketModal from '../../components/modals/CreateTicketModal';
import ViewDetailsModal from '../../components/modals/ViewDetailsModal';
import { Ticket, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { mockTickets } from '../../data/mockData';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const SupportTickets: React.FC = () => {
  const { toast } = useToast();
  const [tickets, setTickets] = useState(mockTickets);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<any>(null);

  const handleCreateTicket = (newTicket: any) => {
    setTickets([newTicket, ...tickets]);
  };

  const handleViewDetails = (ticket: any) => {
    setSelectedTicket(ticket);
    setIsViewModalOpen(true);
  };

  const handleStatusChange = (ticketId: string, newStatus: string) => {
    setTickets(tickets.map(ticket => 
      ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
    ));
    
    toast({
      title: "Status Updated",
      description: `Ticket status changed to ${newStatus}.`,
    });
  };

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
      render: (value: string, row: any) => (
        <select 
          value={value}
          onChange={(e) => handleStatusChange(row.id, e.target.value)}
          className={`px-2 py-1 rounded-full text-xs border-0 ${
            value === 'Open' ? 'bg-blue-100 text-blue-800' :
            value === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
            'bg-green-100 text-green-800'
          }`}
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      )
    },
    { key: 'created', title: 'Created' },
    {
      key: 'actions',
      title: 'Actions',
      render: (value: any, row: any) => (
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleViewDetails(row)}
        >
          View Details
        </Button>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Support Tickets</h1>
        <Button 
          className="bg-blue-600 text-white hover:bg-blue-700"
          onClick={() => setIsCreateModalOpen(true)}
        >
          Create Ticket
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Open Tickets"
          value={tickets.filter(t => t.status === 'Open').length.toString()}
          change="+3 from yesterday"
          changeType="neutral"
          icon={Ticket}
          iconColor="text-blue-600"
        />
        <StatsCard
          title="In Progress"
          value={tickets.filter(t => t.status === 'In Progress').length.toString()}
          change="48% of total"
          changeType="neutral"
          icon={Clock}
          iconColor="text-orange-600"
        />
        <StatsCard
          title="Resolved Today"
          value={tickets.filter(t => t.status === 'Resolved').length.toString()}
          change="+12% from yesterday"
          changeType="positive"
          icon={CheckCircle}
          iconColor="text-green-600"
        />
        <StatsCard
          title="High Priority"
          value={tickets.filter(t => t.priority === 'High').length.toString()}
          change="Needs attention"
          changeType="negative"
          icon={AlertCircle}
          iconColor="text-red-600"
        />
      </div>

      <DataTable
        title="All Tickets"
        data={tickets}
        columns={ticketColumns}
      />

      <CreateTicketModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onTicketCreated={handleCreateTicket}
      />

      {selectedTicket && (
        <ViewDetailsModal
          isOpen={isViewModalOpen}
          onClose={() => setIsViewModalOpen(false)}
          title={`Ticket Details - ${selectedTicket.title}`}
          data={selectedTicket}
        />
      )}
    </div>
  );
};

export default SupportTickets;
