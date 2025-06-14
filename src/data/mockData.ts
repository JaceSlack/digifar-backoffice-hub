
export const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastLogin: '2024-06-14' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Finance', status: 'Active', lastLogin: '2024-06-13' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Support', status: 'Inactive', lastLogin: '2024-06-10' },
];

export const mockMerchants = [
  { id: 1, name: 'Tech Store Inc', email: 'contact@techstore.com', status: 'Approved', revenue: '$45,000', joinDate: '2024-01-15' },
  { id: 2, name: 'Fashion Hub', email: 'info@fashionhub.com', status: 'Pending', revenue: '$23,000', joinDate: '2024-02-20' },
  { id: 3, name: 'Electronics Plus', email: 'sales@electronicsplus.com', status: 'Rejected', revenue: '$67,000', joinDate: '2024-03-10' },
];

export const mockPayouts = [
  { id: 1, merchant: 'Tech Store Inc', amount: '$2,500', status: 'Completed', date: '2024-06-14', method: 'Bank Transfer' },
  { id: 2, merchant: 'Fashion Hub', amount: '$1,800', status: 'Pending', date: '2024-06-13', method: 'Digital Wallet' },
  { id: 3, merchant: 'Electronics Plus', amount: '$3,200', status: 'Processing', date: '2024-06-12', method: 'Bank Transfer' },
];

export const mockTickets = [
  { id: 1, title: 'Payment Issue', customer: 'Alice Brown', priority: 'High', status: 'Open', created: '2024-06-14' },
  { id: 2, title: 'Account Verification', customer: 'Charlie Wilson', priority: 'Medium', status: 'In Progress', created: '2024-06-13' },
  { id: 3, title: 'Refund Request', customer: 'Diana Davis', priority: 'Low', status: 'Resolved', created: '2024-06-12' },
];

export const mockTransactions = [
  { id: 1, type: 'Payment', amount: '$250', merchant: 'Tech Store Inc', date: '2024-06-14', status: 'Success' },
  { id: 2, type: 'Refund', amount: '$75', merchant: 'Fashion Hub', date: '2024-06-13', status: 'Pending' },
  { id: 3, type: 'Payment', amount: '$420', merchant: 'Electronics Plus', date: '2024-06-12', status: 'Success' },
];
