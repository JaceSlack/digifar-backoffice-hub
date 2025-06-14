
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  FileText, 
  CreditCard,
  HeadphonesIcon,
  ShieldCheck,
  BarChart3
} from 'lucide-react';

interface SidebarProps {
  userRole: string;
}

const menuItems = {
  superadmin: [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard/superadmin' },
    { icon: Users, label: 'User Management', path: '/dashboard/superadmin/users' },
    { icon: ShieldCheck, label: 'Role Management', path: '/dashboard/superadmin/roles' },
    { icon: BarChart3, label: 'System Analytics', path: '/dashboard/superadmin/analytics' },
    { icon: Settings, label: 'System Config', path: '/dashboard/superadmin/config' },
  ],
  admin: [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard/admin' },
    { icon: Users, label: 'Merchants', path: '/dashboard/admin/merchants' },
    { icon: Users, label: 'Users', path: '/dashboard/admin/users' },
    { icon: FileText, label: 'Approvals', path: '/dashboard/admin/approvals' },
    { icon: Settings, label: 'Settings', path: '/dashboard/admin/settings' },
  ],
  finance: [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard/finance' },
    { icon: CreditCard, label: 'Payouts', path: '/dashboard/finance/payouts' },
    { icon: BarChart3, label: 'Reconciliation', path: '/dashboard/finance/reconciliation' },
    { icon: FileText, label: 'Reports', path: '/dashboard/finance/reports' },
    { icon: Settings, label: 'Settings', path: '/dashboard/finance/settings' },
  ],
  support: [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard/support' },
    { icon: HeadphonesIcon, label: 'Tickets', path: '/dashboard/support/tickets' },
    { icon: Users, label: 'User Issues', path: '/dashboard/support/user-issues' },
    { icon: FileText, label: 'Escalations', path: '/dashboard/support/escalations' },
    { icon: Settings, label: 'Settings', path: '/dashboard/support/settings' },
  ],
  internal: [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard/internal' },
    { icon: BarChart3, label: 'Analytics', path: '/dashboard/internal/analytics' },
    { icon: FileText, label: 'Reports', path: '/dashboard/internal/reports' },
    { icon: Settings, label: 'Settings', path: '/dashboard/internal/settings' },
  ],
};

const Sidebar: React.FC<SidebarProps> = ({ userRole }) => {
  const items = menuItems[userRole as keyof typeof menuItems] || [];

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">Digifar</h1>
        <p className="text-sm text-gray-500 capitalize">{userRole} Portal</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 px-4 py-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <Users size={16} className="text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500 capitalize">{userRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
