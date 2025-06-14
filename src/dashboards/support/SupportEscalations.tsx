
import React from 'react';
import { AlertTriangle, Clock, TrendingUp, Users } from 'lucide-react';

const SupportEscalations: React.FC = () => {
  const escalations = [
    {
      id: 1,
      title: 'Critical Payment Gateway Issue',
      description: 'Multiple merchants reporting payment processing failures',
      escalatedTo: 'Technical Team',
      escalatedBy: 'Sarah Johnson',
      priority: 'Critical',
      status: 'In Progress',
      escalatedDate: '2024-01-15 16:30',
      dueDate: '2024-01-15 20:00'
    },
    {
      id: 2,
      title: 'Large Merchant Account Suspension',
      description: 'High-value merchant account flagged for suspicious activity',
      escalatedTo: 'Risk Management',
      escalatedBy: 'Mike Davis',
      priority: 'High',
      status: 'Awaiting Review',
      escalatedDate: '2024-01-15 14:15',
      dueDate: '2024-01-16 09:00'
    },
    {
      id: 3,
      title: 'Data Privacy Compliance Query',
      description: 'Customer requesting complete data deletion under GDPR',
      escalatedTo: 'Legal Team',
      escalatedBy: 'Emma Wilson',
      priority: 'Medium',
      status: 'Resolved',
      escalatedDate: '2024-01-14 11:00',
      dueDate: '2024-01-17 17:00'
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Awaiting Review': return 'bg-yellow-100 text-yellow-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Escalations</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Create Escalation
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6 text-center">
          <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">8</div>
          <div className="text-sm text-gray-600">Active Escalations</div>
        </div>
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6 text-center">
          <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">3</div>
          <div className="text-sm text-gray-600">Overdue</div>
        </div>
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6 text-center">
          <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">24</div>
          <div className="text-sm text-gray-600">Resolved This Week</div>
        </div>
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6 text-center">
          <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">6</div>
          <div className="text-sm text-gray-600">Teams Involved</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Current Escalations</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {escalations.map((escalation) => (
            <div key={escalation.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-medium text-gray-900">{escalation.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(escalation.priority)}`}>
                      {escalation.priority}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(escalation.status)}`}>
                      {escalation.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{escalation.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                    <div>
                      <span className="font-medium">Escalated to:</span> {escalation.escalatedTo}
                    </div>
                    <div>
                      <span className="font-medium">Escalated by:</span> {escalation.escalatedBy}
                    </div>
                    <div>
                      <span className="font-medium">Escalated:</span> {escalation.escalatedDate}
                    </div>
                    <div>
                      <span className="font-medium">Due:</span> {escalation.dueDate}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 ml-4">
                  <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 text-sm">
                    View Details
                  </button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm">
                    Update Status
                  </button>
                  <button className="px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 text-sm">
                    Follow Up
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportEscalations;
