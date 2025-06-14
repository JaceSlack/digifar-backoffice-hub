
import React from 'react';
import { User, AlertTriangle, MessageCircle, Clock } from 'lucide-react';

const SupportUserIssues: React.FC = () => {
  const userIssues = [
    {
      id: 1,
      user: 'John Smith',
      email: 'john.smith@email.com',
      issue: 'Unable to process payment',
      category: 'Payment',
      severity: 'High',
      status: 'Open',
      created: '2024-01-15 14:30',
      lastUpdate: '2024-01-15 15:45'
    },
    {
      id: 2,
      user: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      issue: 'Account verification failed',
      category: 'Account',
      severity: 'Medium',
      status: 'In Progress',
      created: '2024-01-15 12:15',
      lastUpdate: '2024-01-15 16:20'
    },
    {
      id: 3,
      user: 'Mike Davis',
      email: 'mike.davis@email.com',
      issue: 'Transaction history missing',
      category: 'Data',
      severity: 'Low',
      status: 'Resolved',
      created: '2024-01-14 09:30',
      lastUpdate: '2024-01-15 11:00'
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-blue-100 text-blue-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">User Issues</h1>
        <div className="flex space-x-3">
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
            Filter
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6 text-center">
          <User className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">156</div>
          <div className="text-sm text-gray-600">Total User Issues</div>
        </div>
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6 text-center">
          <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">23</div>
          <div className="text-sm text-gray-600">High Severity</div>
        </div>
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6 text-center">
          <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">89</div>
          <div className="text-sm text-gray-600">Responses Sent</div>
        </div>
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6 text-center">
          <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">2.4h</div>
          <div className="text-sm text-gray-600">Avg Response Time</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent User Issues</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {userIssues.map((issue) => (
            <div key={issue.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-sm font-medium text-gray-900">{issue.issue}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs ${getSeverityColor(issue.severity)}`}>
                      {issue.severity}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(issue.status)}`}>
                      {issue.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{issue.user}</span>
                    <span>{issue.email}</span>
                    <span>Category: {issue.category}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-gray-400 mt-2">
                    <span>Created: {issue.created}</span>
                    <span>Last updated: {issue.lastUpdate}</span>
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 text-sm">
                    View
                  </button>
                  <button className="px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 text-sm">
                    Respond
                  </button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm">
                    Escalate
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

export default SupportUserIssues;
