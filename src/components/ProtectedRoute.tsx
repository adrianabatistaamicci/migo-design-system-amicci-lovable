
import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('auth') === 'true';
  });
  const [password, setPassword] = useState('');
  const location = useLocation();
  const { toast } = useToast();

  const handleLogin = () => {
    if (password === 'migo123') {
      localStorage.setItem('auth', 'true');
      setIsAuthenticated(true);
      toast({
        title: 'Acesso autorizado',
        description: 'Você agora tem acesso a esta página protegida.',
        variant: 'default',
      });
    } else {
      toast({
        title: 'Senha incorreta',
        description: 'Por favor, tente novamente com a senha correta.',
        variant: 'destructive',
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-8">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-primary-light rounded-full mb-4">
              <Lock className="h-6 w-6 text-primary-main" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Conteúdo Protegido</h2>
            <p className="text-gray-500 mb-4">
              Esta página requer autenticação para ser acessada.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-focus"
                placeholder="Digite a senha"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleLogin();
                  }
                }}
              />
            </div>
            
            <Button 
              onClick={handleLogin}
              className="w-full"
            >
              Acessar
            </Button>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              Contate o administrador para obter a senha de acesso.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
