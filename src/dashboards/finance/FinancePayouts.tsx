
import React, { useState } from 'react';
import { CreditCard, Clock, CheckCircle, AlertCircle, Eye, Download, ArrowUpDown } from 'lucide-react';
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
import { useToast } from '../../hooks/use-toast';

interface Payout {
  id: string;
  merchant: string;
  amount: string;
  status: string;
  date: string;
  method: string;
  reference?: string;
  description?: string;
}

const FinancePayouts: React.FC = () => {
  const { toast } = useToast();
  const [payouts, setPayouts] = useState<Payout[]>([
    { id: '1', merchant: 'TechCorp Solutions', amount: '$2,500', status: 'Completed', date: '2024-01-15', method: 'Bank Transfer', reference: 'TXN001', description: 'Monthly payout' },
    { id: '2', merchant: 'Green Energy Co', amount: '$1,800', status: 'Pending', date: '2024-01-15', method: 'Bank Transfer', reference: 'TXN002', description: 'Weekly payout' },
    { id: '3', merchant: 'Fashion Boutique', amount: '$950', status: 'Processing', date: '2024-01-14', method: 'PayPal', reference: 'TXN003', description: 'Bi-weekly payout' },
    { id: '4', merchant: 'Food Delivery Plus', amount: '$3,200', status: 'Completed', date: '2024-01-14', method: 'Bank Transfer', reference: 'TXN004', description: 'Monthly payout' },
  ]);

  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [processDialogOpen, setProcessDialogOpen] = useState(false);
  const [selectedPayout, setSelectedPayout] = useState<Payout | null>(null);

  const handleViewDetails = (payout: Payout) => {
    setSelectedPayout(payout);
    setViewModalOpen(true);
  };

  const handleProcess = (payout: Payout) => {
    setSelectedPayout(payout);
    setProcessDialogOpen(true);
  };

  const confirmProcess = () => {
    if (selectedPayout) {
      setPayouts(prev => prev.map(payout => 
        payout.id === selectedPayout.id 
          ? { ...payout, status: 'Processing' }
          : payout
      ));
      toast({
        title: "Payout Processing",
        description: `Payout to ${selectedPayout.merchant} is now being processed.`,
      });
      setProcessDialogOpen(false);
      setSelectedPayout(null);
    }
  };

  const handleProcessBatch = () => {
    const pendingPayouts = payouts.filter(p => p.status === 'Pending');
    setPayouts(prev => prev.map(payout => 
      payout.status === 'Pending' 
        ? { ...payout, status: 'Processing' }
        : payout
    ));
    toast({
      title: "Batch Processing Started",
      description: `${pendingPayouts.length} payouts are now being processed.`,
    });
  };

  const handleDownloadReport = () => {
    toast({
      title: "Report Downloaded",
      description: "Payout report has been downloaded successfully.",
    });
  };

  const completedPayouts = payouts.filter(p => p.status === 'Completed');
  const pendingPayouts = payouts.filter(p => p.status === 'Pending');
  const processingPayouts = payouts.filter(p => p.status === 'Processing');

  const totalAmount = completedPayouts.reduce((sum, payout) => {
    return sum + parseFloat(payout.amount.replace('$', '').replace(',', ''));
  }, 0);

  const pendingAmount = pendingPayouts.reduce((sum, payout) => {
    return sum + parseFloat(payout.amount.replace('$', '').replace(',', ''));
  }, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Payout Management</h1>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={handleDownloadReport}>
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
          <Button onClick={handleProcessBatch}>
            <ArrowUpDown className="h-4 w-4 mr-2" />
            Process Batch
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Payouts"
          value={`$${totalAmount.toLocaleString()}`}
          change="+15% from last month"
          changeType="positive"
          icon={CreditCard}
          iconColor="text-blue-600"
        />
        <StatsCard
          title="Pending"
          value={`$${pendingAmount.toLocaleString()}`}
          change={`${pendingPayouts.length} transactions`}
          changeType="neutral"
          icon={Clock}
          iconColor="text-orange-600"
        />
        <StatsCard
          title="Completed"
          value={completedPayouts.length.toString()}
          change="Today"
          changeType="positive"
          icon={CheckCircle}
          iconColor="text-green-600"
        />
        <StatsCard
          title="Processing"
          value={processingPayouts.length.toString()}
          change="In progress"
          changeType="neutral"
          icon={AlertCircle}
          iconColor="text-blue-600"
        />
      </div>

      <div className="bg-white rounded-lg shadow border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Payouts</h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Merchant</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payouts.map((payout) => (
              <TableRow key={payout.id}>
                <TableCell>{payout.merchant}</TableCell>
                <TableCell className="font-medium">{payout.amount}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    payout.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    payout.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {payout.status}
                  </span>
                </TableCell>
                <TableCell>{payout.date}</TableCell>
                <TableCell>{payout.method}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleViewDetails(payout)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    {payout.status === 'Pending' && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleProcess(payout)}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                    )}
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
        title={`Payout Details - ${selectedPayout?.reference}`}
        data={selectedPayout || {}}
      />

      <AlertDialog open={processDialogOpen} onOpenChange={setProcessDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Process Payout</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to process the payout of {selectedPayout?.amount} to {selectedPayout?.merchant}?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmProcess} className="bg-blue-600 hover:bg-blue-700">
              Process Payout
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default FinancePayouts;
