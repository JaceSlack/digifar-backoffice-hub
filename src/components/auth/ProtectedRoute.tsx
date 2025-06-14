
import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
  userRole: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  allowedRoles, 
  userRole 
}) => {
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/403" replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;
