
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Loader2 } from 'lucide-react';

const DashboardRedirect: React.FC = () => {
  const { isAuthenticated, user, loading } = useAuth();

  console.log('DashboardRedirect - loading:', loading);
  console.log('DashboardRedirect - isAuthenticated:', isAuthenticated);
  console.log('DashboardRedirect - user:', user);

  if (loading) {
    console.log('DashboardRedirect - showing loading screen');
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    console.log('DashboardRedirect - not authenticated, redirecting to login');
    return <Navigate to="/login" replace />;
  }

  if (!user) {
    console.log('DashboardRedirect - no user, redirecting to login');
    return <Navigate to="/login" replace />;
  }

  // Redirect to the appropriate dashboard based on user role
  console.log('DashboardRedirect - redirecting to dashboard for role:', user.role);
  switch (user.role) {
    case 'superadmin':
      return <Navigate to="/dashboard/superadmin" replace />;
    case 'admin':
      return <Navigate to="/dashboard/admin" replace />;
    case 'finance':
      return <Navigate to="/dashboard/finance" replace />;
    case 'support':
      return <Navigate to="/dashboard/support" replace />;
    case 'internal':
      return <Navigate to="/dashboard/internal" replace />;
    default:
      console.log('DashboardRedirect - unknown role, redirecting to 403');
      return <Navigate to="/403" replace />;
  }
};

export default DashboardRedirect;
