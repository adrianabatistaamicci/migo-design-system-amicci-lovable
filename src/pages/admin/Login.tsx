
import React from 'react';
import LoginForm from '@/components/auth/LoginForm';

const AdminLogin = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Área Administrativa</h1>
      <LoginForm />
    </div>
  );
};

export default AdminLogin;
