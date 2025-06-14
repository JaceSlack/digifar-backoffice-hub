
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface RoleSelectorProps {
  onRoleSelect: (role: string) => void;
}

const roles = [
  { id: 'superadmin', name: 'Superadmin', description: 'Full system access and control', color: 'bg-red-500' },
  { id: 'admin', name: 'Admin', description: 'Manage merchants and users', color: 'bg-blue-500' },
  { id: 'finance', name: 'Finance', description: 'Handle payouts and financial operations', color: 'bg-green-500' },
  { id: 'support', name: 'Support', description: 'Customer support and ticket management', color: 'bg-yellow-500' },
  { id: 'internal', name: 'Internal', description: 'View analytics and reports', color: 'bg-purple-500' },
];

const RoleSelector: React.FC<RoleSelectorProps> = ({ onRoleSelect }) => {
  const [selectedRole, setSelectedRole] = useState<string>('');

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
    onRoleSelect(roleId);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Select Your Role</h1>
          <p className="text-gray-600">Choose your role to access the appropriate dashboard</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role) => (
            <Card key={role.id} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 rounded-lg ${role.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">
                    {role.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{role.name}</h3>
                  <p className="text-sm text-gray-600">{role.description}</p>
                </div>
              </div>
              <Button 
                onClick={() => handleRoleSelect(role.id)}
                className="w-full"
                variant={selectedRole === role.id ? "default" : "outline"}
              >
                {selectedRole === role.id ? 'Selected' : 'Select Role'}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleSelector;
