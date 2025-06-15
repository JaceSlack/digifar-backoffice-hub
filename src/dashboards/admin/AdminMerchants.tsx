
import React, { useState } from 'react';
import { Store, UserPlus, CheckCircle, Clock, Eye, Edit, Trash2 } from 'lucide-react';
import StatsCard from '../../components/ui/StatsCard';
import { Button } from '../../components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../components/ui/alert-dialog";
import ViewDetailsModal from '../../components/modals/ViewDetailsModal';
import CreateMerchantModal from '../../components/modals/CreateMerchantModal';
import { useToast } from '../../hooks/use-toast';

interface Merchant {
  id: string;
  name: string;
  email: string;
  status: string;
  revenue: string;
  joinDate: string;
  businessType?: string;
  description?: string;
}

const AdminMerchants: React.FC = () => {
  const { toast } = useToast();
  const [merchants, setMerchants] = useState<Merchant[]>([
    { id: '1', name: 'TechCorp Solutions', email: 'contact@techcorp.com', status: 'Approved', revenue: '$125,400', joinDate: '2024-01-10', businessType: 'Technology', description: 'Software development company' },
    { id: '2', name: 'Green Energy Co', email: 'info@greenenergy.com', status: 'Pending', revenue: '$89,200', joinDate: '2024-01-12', businessType: 'Energy', description: 'Renewable energy solutions' },
    { id: '3', name: 'Fashion Boutique', email: 'hello@fashionboutique.com', status: 'Approved', revenue: '$67,800', joinDate: '2024-01-08', businessType: 'Retail', description: 'Fashion and apparel store' },
    { id: '4', name: 'Food Delivery Plus', email: 'support@fooddelivery.com', status: 'Rejected', revenue: '$0', joinDate: '2024-01-14', businessType: 'Food Service', description: 'Food delivery platform' },
  ]);

  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [approveDialogOpen, setApproveDialogOpen] = useState(false);
  const [selectedMerchant, setSelectedMerchant] = useState<Merchant | null>(null);

  const handleViewDetails = (merchant: Merchant) => {
    setSelectedMerchant(merchant);
    setViewModalOpen(true);
  };

  const handleApprove = (merchant: Merchant) => {
    setSelectedMerchant(merchant);
    setApproveDialogOpen(true);
  };

  const handleDelete = (merchant: Merchant) => {
    setSelectedMerchant(merchant);
    setDeleteDialogOpen(true);
  };

  const confirmApprove = () => {
    if (selectedMerchant) {
      setMerchants(prev => prev.map(merchant => 
        merchant.id === selectedMerchant.id 
          ? { ...merchant, status: 'Approved' }
          : merchant
      ));
      toast({
        title: "Merchant Approved",
        description: `${selectedMerchant.name} has been approved successfully.`,
      });
      setApproveDialogOpen(false);
      setSelectedMerchant(null);
    }
  };

  const confirmDelete = () => {
    if (selectedMerchant) {
      setMerchants(prev => prev.filter(merchant => merchant.id !== selectedMerchant.id));
      toast({
        title: "Merchant Deleted",
        description: `${selectedMerchant.name} has been removed from the system.`,
      });
      setDeleteDialogOpen(false);
      setSelectedMerchant(null);
    }
  };

  const handleCreateMerchant = (newMerchant: { name: string; email: string; businessType: string; description: string }) => {
    const merchantWithDefaults = {
      ...newMerchant,
      id: Date.now().toString(),
      status: 'Pending',
      revenue: '$0',
      joinDate: new Date().toISOString().split('T')[0]
    };
    setMerchants(prev => [...prev, merchantWithDefaults]);
    toast({
      title: "Merchant Added",
      description: `${newMerchant.name} has been added to the system.`,
    });
  };

  const approvedMerchants = merchants.filter(m => m.status === 'Approved').length;
  const pendingMerchants = merchants.filter(m => m.status === 'Pending').length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Merchant Management</h1>
        <Button onClick={() => setCreateModalOpen(true)}>
          <Store className="h-4 w-4 mr-2" />
          Add Merchant
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Merchants"
          value={merchants.length.toString()}
          change="+8% from last month"
          changeType="positive"
          icon={Store}
          iconColor="text-blue-600"
        />
        <StatsCard
          title="New Applications"
          value="23"
          change="This week"
          changeType="neutral"
          icon={UserPlus}
          iconColor="text-green-600"
        />
        <StatsCard
          title="Approved"
          value={approvedMerchants.toString()}
          change={`${Math.round((approvedMerchants/merchants.length)*100)}% approval rate`}
          changeType="positive"
          icon={CheckCircle}
          iconColor="text-emerald-600"
        />
        <StatsCard
          title="Pending Review"
          value={pendingMerchants.toString()}
          change="Awaiting approval"
          changeType="neutral"
          icon={Clock}
          iconColor="text-orange-600"
        />
      </div>

      <div className="bg-white rounded-lg shadow border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">All Merchants</h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Merchant Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Revenue</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {merchants.map((merchant) => (
              <TableRow key={merchant.id}>
                <TableCell>{merchant.name}</TableCell>
                <TableCell>{merchant.email}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    merchant.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                    merchant.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {merchant.status}
                  </span>
                </TableCell>
                <TableCell>{merchant.revenue}</TableCell>
                <TableCell>{merchant.joinDate}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleViewDetails(merchant)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    {merchant.status === 'Pending' && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleApprove(merchant)}
                        className="text-green-600 hover:text-green-700"
                      >
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(merchant)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <ViewDetailsModal
        isOpen={viewModalOpen}
        onClose={() => setViewModalOpen(false)}
        title={`${selectedMerchant?.name} Details`}
        data={selectedMerchant || {}}
      />

      <CreateMerchantModal
        isOpen={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onCreate={handleCreateMerchant}
      />

      <AlertDialog open={approveDialogOpen} onOpenChange={setApproveDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Approve Merchant</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to approve {selectedMerchant?.name}? They will gain access to the platform.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmApprove} className="bg-green-600 hover:bg-green-700">
              Approve
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Merchant</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete {selectedMerchant?.name}? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminMerchants;
