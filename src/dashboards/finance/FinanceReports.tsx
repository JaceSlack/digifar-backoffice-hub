
import React from 'react';
import { FileText, Download, Calendar, TrendingUp } from 'lucide-react';

const FinanceReports: React.FC = () => {
  const reports = [
    {
      name: 'Daily Transaction Report',
      description: 'Complete breakdown of daily transactions',
      lastGenerated: '2024-01-15 09:00 AM',
      format: 'PDF, CSV',
      frequency: 'Daily'
    },
    {
      name: 'Monthly Revenue Summary',
      description: 'Monthly revenue and profit analysis',
      lastGenerated: '2024-01-01 08:00 AM',
      format: 'PDF, Excel',
      frequency: 'Monthly'
    },
    {
      name: 'Merchant Payout Report',
      description: 'Detailed merchant payout information',
      lastGenerated: '2024-01-15 06:00 AM',
      format: 'CSV, Excel',
      frequency: 'Daily'
    },
    {
      name: 'Failed Transactions Report',
      description: 'Analysis of failed and declined transactions',
      lastGenerated: '2024-01-14 11:30 PM',
      format: 'PDF',
      frequency: 'Weekly'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Financial Reports</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Generate Custom Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6 text-center">
          <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">47</div>
          <div className="text-sm text-gray-600">Reports Generated</div>
        </div>
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6 text-center">
          <Download className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">156</div>
          <div className="text-sm text-gray-600">Downloads This Month</div>
        </div>
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6 text-center">
          <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">12</div>
          <div className="text-sm text-gray-600">Scheduled Reports</div>
        </div>
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6 text-center">
          <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">$2.1M</div>
          <div className="text-sm text-gray-600">Revenue Tracked</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Available Reports</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {reports.map((report, index) => (
            <div key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-900">{report.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                  <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                    <span>Last generated: {report.lastGenerated}</span>
                    <span>Format: {report.format}</span>
                    <span>Frequency: {report.frequency}</span>
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 text-sm">
                    Generate
                  </button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm">
                    Download
                  </button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm">
                    Schedule
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

export default FinanceReports;
