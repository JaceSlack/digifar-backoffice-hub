
import React from 'react';
import { Settings, Shield, Database, Globe } from 'lucide-react';

const SuperadminConfig: React.FC = () => {
  const configSections = [
    {
      title: 'System Settings',
      icon: Settings,
      items: [
        { label: 'Maintenance Mode', value: 'Disabled', action: 'Toggle' },
        { label: 'API Rate Limiting', value: '1000/hour', action: 'Edit' },
        { label: 'Session Timeout', value: '24 hours', action: 'Edit' },
        { label: 'File Upload Limit', value: '10MB', action: 'Edit' },
      ]
    },
    {
      title: 'Security Configuration',
      icon: Shield,
      items: [
        { label: 'Two-Factor Auth', value: 'Required', action: 'Configure' },
        { label: 'Password Policy', value: 'Strong', action: 'Edit' },
        { label: 'Login Attempts', value: '5 max', action: 'Edit' },
        { label: 'IP Whitelist', value: 'Active', action: 'Manage' },
      ]
    },
    {
      title: 'Database Settings',
      icon: Database,
      items: [
        { label: 'Backup Frequency', value: 'Daily', action: 'Configure' },
        { label: 'Connection Pool', value: '50 max', action: 'Edit' },
        { label: 'Query Timeout', value: '30 seconds', action: 'Edit' },
        { label: 'Auto Archiving', value: 'Enabled', action: 'Configure' },
      ]
    },
    {
      title: 'Global Settings',
      icon: Globe,
      items: [
        { label: 'Default Timezone', value: 'UTC', action: 'Change' },
        { label: 'Currency Format', value: 'USD', action: 'Edit' },
        { label: 'Date Format', value: 'MM/DD/YYYY', action: 'Edit' },
        { label: 'Language', value: 'English', action: 'Change' },
      ]
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">System Configuration</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Save All Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {configSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-white rounded-lg shadow border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <section.icon className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
            </div>
            
            <div className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <div>
                    <span className="text-sm font-medium text-gray-900">{item.label}</span>
                    <div className="text-xs text-gray-500">{item.value}</div>
                  </div>
                  <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                    {item.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuperadminConfig;
