
import React from 'react';
import { FileText, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

const AdminApprovals: React.FC = () => {
  const approvals = [
    {
      id: 1,
      type: 'Merchant Registration',
      applicant: 'TechStore Inc.',
      description: 'New merchant application for electronics retail',
      priority: 'High',
      submittedDate: '2024-01-15',
      amount: null,
    },
    {
      id: 2,
      type: 'Payout Limit Increase',
      applicant: 'Fashion Hub',
      description: 'Request to increase daily payout limit from $5,000 to $15,000',
      priority: 'Medium',
      submittedDate: '2024-01-14',
      amount: '$15,000',
    },
    {
      id: 3,
      type: 'Account Verification',
      applicant: 'Digital Services Co.',
      description: 'Business verification documents submitted',
      priority: 'Low',
      submittedDate: '2024-01-13',
      amount: null,
    },
    {
      id: 4,
      type: 'Refund Request',
      applicant: 'Global Marketplace',
      description: 'Customer refund request for transaction #TXN123456',
      priority: 'High',
      submittedDate: '2024-01-12',
      amount: '$2,450',
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Approval Queue</h1>
        <div className="flex space-x-3">
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
            Filter
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Bulk Actions
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6 text-center">
          <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">15</div>
          <div className="text-sm text-gray-600">Pending Approvals</div>
        </div>
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6 text-center">
          <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">42</div>
          <div className="text-sm text-gray-600">Approved Today</div>
        </div>
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6 text-center">
          <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">3</div>
          <div className="text-sm text-gray-600">High Priority</div>
        </div>
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6 text-center">
          <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">128</div>
          <div className="text-sm text-gray-600">Total This Month</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Pending Approvals</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {approvals.map((approval) => (
            <div key={approval.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-sm font-medium text-gray-900">{approval.type}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(approval.priority)}`}>
                      {approval.priority}
                    </span>
                    {approval.amount && (
                      <span className="text-sm font-medium text-gray-900">{approval.amount}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{approval.applicant}</p>
                  <p className="text-sm text-gray-500">{approval.description}</p>
                  <p className="text-xs text-gray-400 mt-2">Submitted: {approval.submittedDate}</p>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button className="px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200 text-sm">
                    Reject
                  </button>
                  <button className="px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 text-sm">
                    Approve
                  </button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm">
                    Review
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

export default AdminApprovals;
