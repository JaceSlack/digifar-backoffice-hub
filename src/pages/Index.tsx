
import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoleSelector from '../components/auth/RoleSelector';

interface IndexProps {
  onRoleSelect: (role: string) => void;
}

const Index: React.FC<IndexProps> = ({ onRoleSelect }) => {
  const navigate = useNavigate();

  const handleRoleSelect = (role: string) => {
    onRoleSelect(role);
    navigate(`/dashboard/${role}`);
  };

  return <RoleSelector onRoleSelect={handleRoleSelect} />;
};

export default Index;
