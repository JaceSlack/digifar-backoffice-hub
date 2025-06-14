
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldX, ArrowLeft } from 'lucide-react';

const AccessDenied: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <ShieldX className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">403</h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Access Denied</h2>
          <p className="text-gray-600 mb-8">
            You don't have permission to access this resource. Please contact your administrator 
            if you believe this is an error.
          </p>
        </div>
        
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Go Back Home</span>
        </Link>
      </div>
    </div>
  );
};

export default AccessDenied;
