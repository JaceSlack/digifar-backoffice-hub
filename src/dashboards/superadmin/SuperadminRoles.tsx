
import React from 'react';
import { Shield, Users, Settings, Eye } from 'lucide-react';

const SuperadminRoles: React.FC = () => {
  const roles = [
    { name: 'Superadmin', users: 2, permissions: 'Full Access', description: 'Complete system control' },
    { name: 'Admin', users: 15, permissions: 'Merchant Management', description: 'Manage merchants and approvals' },
    { name: 'Finance', users: 8, permissions: 'Financial Operations', description: 'Handle payouts and reconciliation' },
    { name: 'Support', users: 25, permissions: 'Customer Support', description: 'Handle tickets and user issues' },
    { name: 'Internal', users: 12, permissions: 'Analytics & Reports', description: 'View reports and analytics' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Role Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Create New Role
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {roles.map((role, index) => (
          <div key={index} className="bg-white rounded-lg shadow border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{role.name}</h3>
                  <p className="text-sm text-gray-500">{role.description}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{role.users} users</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Permissions</span>
                <span className="text-sm font-medium text-gray-900">{role.permissions}</span>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex items-center space-x-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100">
                  <Eye className="h-4 w-4" />
                  <span>View Details</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-1 bg-gray-50 text-gray-600 rounded-md hover:bg-gray-100">
                  <Settings className="h-4 w-4" />
                  <span>Edit</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuperadminRoles;
