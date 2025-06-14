
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Loader2 } from 'lucide-react';

const DashboardRedirect: React.FC = () => {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Redirect to the appropriate dashboard based on user role
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
      return <Navigate to="/403" replace />;
  }
};

export default DashboardRedirect;
