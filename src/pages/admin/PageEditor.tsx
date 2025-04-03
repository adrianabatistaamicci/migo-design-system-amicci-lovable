
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  title: z.string().min(1, { message: "Título é obrigatório" }),
  description: z.string().min(1, { message: "Descrição é obrigatória" }),
  content: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const PageEditor = () => {
  const { '*': pagePath } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [pageData, setPageData] = useState<{
    title: string;
    description: string;
    content?: string;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      content: '',
    },
  });

  // In a real app, this would fetch the actual page data
  useEffect(() => {
    // Simulating API fetch with mock data
    setIsLoading(true);
    setTimeout(() => {
      // Mock page data based on the route
      let mockData;
      
      if (pagePath === '/components/sign-in-registration') {
        mockData = {
          title: 'Sign-in and Registration',
          description: 'Em breve',
          content: 'Os exemplos detalhados de Sign-in and Registration estão sendo implementados. Volte em breve para visualizar os componentes.'
        };
      } else if (pagePath === '/components/tooltips') {
        mockData = {
          title: 'Tooltips',
          description: 'Em breve',
          content: 'Os exemplos detalhados de Tooltips estão sendo implementados. Volte em breve para visualizar os componentes.'
        };
      } else if (pagePath === '/components/settings-screens') {
        mockData = {
          title: 'Settings Screens',
          description: 'Em breve',
          content: 'Os exemplos detalhados de Settings Screens estão sendo implementados. Volte em breve para visualizar os componentes.'
        };
      } else if (pagePath === '/components/textareas') {
        mockData = {
          title: 'Textareas',
          description: 'Em breve',
          content: 'Os exemplos detalhados de Textareas estão sendo implementados. Volte em breve para visualizar os componentes.'
        };
      } else {
        mockData = {
          title: 'Página não encontrada',
          description: 'O caminho especificado não corresponde a uma página editável',
          content: ''
        };
      }
      
      setPageData(mockData);
      form.reset(mockData);
      setIsLoading(false);
    }, 1000);
  }, [pagePath, form]);

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    
    // Simulating API call with a timeout
    setTimeout(() => {
      toast({
        title: "Página atualizada",
        description: "As alterações foram salvas com sucesso",
      });
      
      setIsLoading(false);
      // Navigate back to the edit pages screen
      navigate('/admin/edit-pages');
    }, 1500);
  };

  const handleCancel = () => {
    navigate('/admin/edit-pages');
  };

  if (isLoading && !pageData) {
    return (
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <p className="text-gray-600">Carregando dados da página...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Editor de Página</h2>
        <p className="text-gray-600">Editando: {pagePath}</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título da Página</FormLabel>
                  <FormControl>
                    <Input placeholder="Título da página" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Input placeholder="Breve descrição da página" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Conteúdo</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Conteúdo da página" 
                      className="min-h-[200px]"
                      {...field} 
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline" onClick={handleCancel}>
                Cancelar
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Salvando..." : "Salvar Alterações"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PageEditor;
