
import React from 'react';
import { Clock, Bell, Users, MessageCircle } from 'lucide-react';

const SupportSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Support Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Response Time Settings</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Target response time (hours)</label>
              <input type="number" value="2" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Escalation threshold (hours)</label>
              <input type="number" value="24" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Auto-escalate overdue tickets</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Bell className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Notification Settings</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">New ticket notifications</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">High priority alerts</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Daily summary email</span>
              <input type="checkbox" className="rounded" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Escalation alerts</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Team Settings</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Default assignee</label>
              <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                <option>Auto-assign</option>
                <option>Sarah Johnson</option>
                <option>Mike Davis</option>
                <option>Emma Wilson</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-600">Maximum tickets per agent</label>
              <input type="number" value="20" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Round-robin assignment</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <MessageCircle className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Communication Settings</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Send confirmation emails</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Enable customer ratings</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
            <div>
              <label className="text-sm text-gray-600">Auto-response template</label>
              <textarea 
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md h-20" 
                placeholder="Thank you for contacting support..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSettings;
