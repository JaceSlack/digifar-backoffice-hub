
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AccessDenied from "./pages/AccessDenied";
import DashboardLayout from "./components/layout/DashboardLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import SuperadminDashboard from "./dashboards/superadmin/SuperadminDashboard";
import AdminDashboard from "./dashboards/admin/AdminDashboard";
import FinanceDashboard from "./dashboards/finance/FinanceDashboard";
import SupportDashboard from "./dashboards/support/SupportDashboard";
import InternalDashboard from "./dashboards/internal/InternalDashboard";

const queryClient = new QueryClient();

const App = () => {
  const [userRole, setUserRole] = useState<string>('');

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index onRoleSelect={setUserRole} />} />
            <Route path="/403" element={<AccessDenied />} />
            
            {/* Dashboard Routes */}
            <Route path="/dashboard" element={<DashboardLayout userRole={userRole} />}>
              <Route 
                path="superadmin" 
                element={
                  <ProtectedRoute allowedRoles={['superadmin']} userRole={userRole}>
                    <SuperadminDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="admin" 
                element={
                  <ProtectedRoute allowedRoles={['admin']} userRole={userRole}>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="finance" 
                element={
                  <ProtectedRoute allowedRoles={['finance']} userRole={userRole}>
                    <FinanceDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="support" 
                element={
                  <ProtectedRoute allowedRoles={['support']} userRole={userRole}>
                    <SupportDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="internal" 
                element={
                  <ProtectedRoute allowedRoles={['internal']} userRole={userRole}>
                    <InternalDashboard />
                  </ProtectedRoute>
                } 
              />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
