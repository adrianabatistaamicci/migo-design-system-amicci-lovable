
import React, { useState } from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const SignInRegistration = () => {
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  
  const handleLogin = () => {
    if (password === 'migo123') {
      localStorage.setItem('auth', 'true');
      toast({
        title: 'Acesso autorizado',
        description: 'Você agora tem acesso às páginas protegidas.',
        variant: 'default',
      });
      // Redirect to installation page after login
      window.location.href = '/installation';
    } else {
      toast({
        title: 'Senha incorreta',
        description: 'Por favor, tente novamente com a senha correta.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Login e Autenticação"
        description="Autenticação para páginas protegidas"
        type="components"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Acesso às páginas protegidas</h2>
            <p className="text-gray-600">
              Use a senha abaixo para acessar as páginas protegidas do Migo Design System:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Instalação</li>
              <li>UI Kit</li>
              <li>Governança</li>
              <li>Diretrizes de UX</li>
            </ul>
          </div>
          
          <div className="space-y-4 max-w-md">
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
              <p className="text-xs text-gray-500">
                <em>Dica: A senha é "migo123"</em>
              </p>
            </div>
            
            <Button 
              onClick={handleLogin}
              className="w-full"
            >
              Acessar páginas protegidas
            </Button>
          </div>
        </div>
        
        <div className="border rounded-lg p-6 bg-primary-light/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary-light rounded-full">
              <Lock className="h-5 w-5 text-primary-main" />
            </div>
            <h3 className="text-lg font-medium">Sobre as Páginas Protegidas</h3>
          </div>
          
          <div className="space-y-4">
            <p>
              As páginas protegidas do Migo Design System contêm informações importantes 
              e recursos exclusivos destinados apenas aos membros da equipe Amicci.
            </p>
            
            <p>
              Esta proteção simples serve como uma barreira básica para conteúdo 
              que não deve ser acessado pelo público em geral.
            </p>
            
            <div className="border-t pt-4 mt-4">
              <p className="text-sm text-gray-500">
                Nota: Esta autenticação é para fins de demonstração. Em um ambiente de 
                produção, recomendamos implementar um sistema de autenticação mais robusto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInRegistration;
