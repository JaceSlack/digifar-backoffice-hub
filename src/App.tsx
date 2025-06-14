
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

// Superadmin pages
import SuperadminUsers from "./dashboards/superadmin/SuperadminUsers";
import SuperadminRoles from "./dashboards/superadmin/SuperadminRoles";
import SuperadminAnalytics from "./dashboards/superadmin/SuperadminAnalytics";
import SuperadminConfig from "./dashboards/superadmin/SuperadminConfig";

// Admin pages
import AdminMerchants from "./dashboards/admin/AdminMerchants";
import AdminUsers from "./dashboards/admin/AdminUsers";
import AdminApprovals from "./dashboards/admin/AdminApprovals";
import AdminSettings from "./dashboards/admin/AdminSettings";

// Finance pages
import FinancePayouts from "./dashboards/finance/FinancePayouts";
import FinanceReconciliation from "./dashboards/finance/FinanceReconciliation";
import FinanceReports from "./dashboards/finance/FinanceReports";
import FinanceSettings from "./dashboards/finance/FinanceSettings";

// Support pages
import SupportTickets from "./dashboards/support/SupportTickets";
import SupportUserIssues from "./dashboards/support/SupportUserIssues";
import SupportEscalations from "./dashboards/support/SupportEscalations";
import SupportSettings from "./dashboards/support/SupportSettings";

// Internal pages
import InternalAnalytics from "./dashboards/internal/InternalAnalytics";
import InternalReports from "./dashboards/internal/InternalReports";
import InternalSettings from "./dashboards/internal/InternalSettings";

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
                
                {/* Superadmin Routes */}
                <Route 
                  path="superadmin" 
                  element={
                    <ProtectedRoute allowedRoles={['superadmin']}>
                      <SuperadminDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="superadmin/users" 
                  element={
                    <ProtectedRoute allowedRoles={['superadmin']}>
                      <SuperadminUsers />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="superadmin/roles" 
                  element={
                    <ProtectedRoute allowedRoles={['superadmin']}>
                      <SuperadminRoles />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="superadmin/analytics" 
                  element={
                    <ProtectedRoute allowedRoles={['superadmin']}>
                      <SuperadminAnalytics />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="superadmin/config" 
                  element={
                    <ProtectedRoute allowedRoles={['superadmin']}>
                      <SuperadminConfig />
                    </ProtectedRoute>
                  } 
                />
                
                {/* Admin Routes */}
                <Route 
                  path="admin" 
                  element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <AdminDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="admin/merchants" 
                  element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <AdminMerchants />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="admin/users" 
                  element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <AdminUsers />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="admin/approvals" 
                  element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <AdminApprovals />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="admin/settings" 
                  element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <AdminSettings />
                    </ProtectedRoute>
                  } 
                />
                
                {/* Finance Routes */}
                <Route 
                  path="finance" 
                  element={
                    <ProtectedRoute allowedRoles={['finance']}>
                      <FinanceDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="finance/payouts" 
                  element={
                    <ProtectedRoute allowedRoles={['finance']}>
                      <FinancePayouts />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="finance/reconciliation" 
                  element={
                    <ProtectedRoute allowedRoles={['finance']}>
                      <FinanceReconciliation />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="finance/reports" 
                  element={
                    <ProtectedRoute allowedRoles={['finance']}>
                      <FinanceReports />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="finance/settings" 
                  element={
                    <ProtectedRoute allowedRoles={['finance']}>
                      <FinanceSettings />
                    </ProtectedRoute>
                  } 
                />
                
                {/* Support Routes */}
                <Route 
                  path="support" 
                  element={
                    <ProtectedRoute allowedRoles={['support']}>
                      <SupportDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="support/tickets" 
                  element={
                    <ProtectedRoute allowedRoles={['support']}>
                      <SupportTickets />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="support/user-issues" 
                  element={
                    <ProtectedRoute allowedRoles={['support']}>
                      <SupportUserIssues />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="support/escalations" 
                  element={
                    <ProtectedRoute allowedRoles={['support']}>
                      <SupportEscalations />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="support/settings" 
                  element={
                    <ProtectedRoute allowedRoles={['support']}>
                      <SupportSettings />
                    </ProtectedRoute>
                  } 
                />
                
                {/* Internal Routes */}
                <Route 
                  path="internal" 
                  element={
                    <ProtectedRoute allowedRoles={['internal']}>
                      <InternalDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="internal/analytics" 
                  element={
                    <ProtectedRoute allowedRoles={['internal']}>
                      <InternalAnalytics />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="internal/reports" 
                  element={
                    <ProtectedRoute allowedRoles={['internal']}>
                      <InternalReports />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="internal/settings" 
                  element={
                    <ProtectedRoute allowedRoles={['internal']}>
                      <InternalSettings />
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
