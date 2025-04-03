
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

// Basic authentication - in a real app, this would be replaced with proper auth
const MOCK_CREDENTIALS = {
  email: 'admin@example.com',
  password: 'admin123'
};

const formSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
});

type FormValues = z.infer<typeof formSchema>;

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    
    // Simulating API call with a timeout
    setTimeout(() => {
      if (values.email === MOCK_CREDENTIALS.email && values.password === MOCK_CREDENTIALS.password) {
        // Set logged in state in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify({ email: values.email, role: 'admin' }));
        
        toast({
          title: "Login realizado com sucesso",
          description: "Bem-vindo à área administrativa",
        });
        
        navigate('/admin/dashboard');
      } else {
        toast({
          title: "Falha na autenticação",
          description: "Email ou senha incorretos",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login Administrativo</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="seu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Autenticando..." : "Entrar"}
          </Button>
        </form>
      </Form>
      
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>Credenciais para teste:</p>
        <p>Email: admin@example.com</p>
        <p>Senha: admin123</p>
      </div>
    </div>
  );
};

export default LoginForm;
