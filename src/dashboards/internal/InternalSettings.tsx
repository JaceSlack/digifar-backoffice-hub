
import React from 'react';
import { Settings, Eye, Download, Clock } from 'lucide-react';

const InternalSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Internal Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Eye className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Dashboard Preferences</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Default dashboard view</label>
              <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                <option>Analytics Overview</option>
                <option>Financial Summary</option>
                <option>Performance Metrics</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-600">Refresh interval (minutes)</label>
              <input type="number" value="5" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Show real-time notifications</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Download className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Export Settings</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Default export format</label>
              <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                <option>Excel (.xlsx)</option>
                <option>CSV (.csv)</option>
                <option>PDF (.pdf)</option>
              </select>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Include charts in exports</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Auto-download generated reports</span>
              <input type="checkbox" className="rounded" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Time & Date Settings</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Timezone</label>
              <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                <option>UTC</option>
                <option>EST (Eastern Standard Time)</option>
                <option>PST (Pacific Standard Time)</option>
                <option>GMT (Greenwich Mean Time)</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-600">Date format</label>
              <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                <option>MM/DD/YYYY</option>
                <option>DD/MM/YYYY</option>
                <option>YYYY-MM-DD</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-600">Time format</label>
              <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                <option>12-hour (AM/PM)</option>
                <option>24-hour</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Settings className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Access & Permissions</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Allow data export</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Access to historical data</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
            <div>
              <label className="text-sm text-gray-600">Data retention period (months)</label>
              <input type="number" value="24" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalSettings;
