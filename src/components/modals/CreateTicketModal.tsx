
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface CreateTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTicketCreated: (ticket: any) => void;
}

const CreateTicketModal: React.FC<CreateTicketModalProps> = ({
  isOpen,
  onClose,
  onTicketCreated
}) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    customer: '',
    description: '',
    priority: 'Medium',
    category: 'General'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTicket = {
      id: Date.now().toString(),
      title: formData.title,
      customer: formData.customer,
      description: formData.description,
      priority: formData.priority,
      status: 'Open',
      created: new Date().toLocaleDateString(),
      category: formData.category
    };

    onTicketCreated(newTicket);
    
    toast({
      title: "Ticket Created",
      description: `Ticket "${formData.title}" has been created successfully.`,
    });

    setFormData({
      title: '',
      customer: '',
      description: '',
      priority: 'Medium',
      category: 'General'
    });
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Ticket</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Issue Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter issue title"
              required
            />
          </div>

          <div>
            <Label htmlFor="customer">Customer Name</Label>
            <Input
              id="customer"
              value={formData.customer}
              onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
              placeholder="Enter customer name"
              required
            />
          </div>

          <div>
            <Label htmlFor="priority">Priority</Label>
            <Select value={formData.priority} onValueChange={(value) => setFormData({ ...formData, priority: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="General">General</SelectItem>
                <SelectItem value="Technical">Technical</SelectItem>
                <SelectItem value="Billing">Billing</SelectItem>
                <SelectItem value="Account">Account</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe the issue..."
              rows={4}
              required
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Create Ticket
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTicketModal;
