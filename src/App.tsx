
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
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
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/403" element={<AccessDenied />} />
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              
              {/* Dashboard Routes */}
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<Navigate to="/login" replace />} />
                <Route 
                  path="superadmin" 
                  element={
                    <ProtectedRoute allowedRoles={['superadmin']}>
                      <SuperadminDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="admin" 
                  element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <AdminDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="finance" 
                  element={
                    <ProtectedRoute allowedRoles={['finance']}>
                      <FinanceDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="support" 
                  element={
                    <ProtectedRoute allowedRoles={['support']}>
                      <SupportDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="internal" 
                  element={
                    <ProtectedRoute allowedRoles={['internal']}>
                      <InternalDashboard />
                    </ProtectedRoute>
                  } 
                />
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
