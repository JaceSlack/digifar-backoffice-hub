
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

interface DashboardLayoutProps {
  userRole: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ userRole }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar userRole={userRole} />
      <div className="flex-1 flex flex-col">
        <Header userRole={userRole} />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
