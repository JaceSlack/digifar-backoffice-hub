
import React from 'react';
import { CreditCard, AlertTriangle, Clock, Shield } from 'lucide-react';

const FinanceSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Finance Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <CreditCard className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Payout Settings</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Default payout schedule</label>
              <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-600">Minimum payout amount</label>
              <input type="number" value="100" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Maximum daily payout</label>
              <input type="number" value="50000" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Risk Management</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">High-risk transaction threshold</label>
              <input type="number" value="10000" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Auto-hold suspicious transactions</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Require dual approval for large payouts</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Processing Windows</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Processing start time</label>
              <input type="time" value="09:00" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Processing end time</label>
              <input type="time" value="17:00" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Process on weekends</span>
              <input type="checkbox" className="rounded" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Security</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Require 2FA for payouts</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Log all financial activities</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
            <div>
              <label className="text-sm text-gray-600">Transaction retention period (days)</label>
              <input type="number" value="2555" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceSettings;
