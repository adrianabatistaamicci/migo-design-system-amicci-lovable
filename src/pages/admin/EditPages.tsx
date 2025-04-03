
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface PageItem {
  id: string;
  title: string;
  route: string;
  lastModified: string;
}

const EditPages = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Sample data for editable pages
  const [pages] = useState<PageItem[]>([
    {
      id: '1',
      title: 'Sign-in and Registration',
      route: '/components/sign-in-registration',
      lastModified: '02/04/2025'
    },
    {
      id: '2',
      title: 'Tooltips',
      route: '/components/tooltips',
      lastModified: '01/04/2025'
    },
    {
      id: '3',
      title: 'Settings Screens',
      route: '/components/settings-screens',
      lastModified: '31/03/2025'
    },
    {
      id: '4',
      title: 'Error Screens',
      route: '/components/error-screens',
      lastModified: '30/03/2025'
    },
    {
      id: '5',
      title: 'Textareas',
      route: '/components/textareas',
      lastModified: '29/03/2025'
    }
  ]);

  const handleEditPage = (page: PageItem) => {
    // In a real application, this would take you to an editor for the specific page
    // For this demo, we're just showing a toast and navigating to the page for preview
    toast({
      title: `Editando ${page.title}`,
      description: `Carregando editor para a página ${page.route}`,
    });
    
    // Navigate to the page editor (which we'll simulate by just going to the page)
    navigate(`/admin/editor${page.route}`);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Editar Páginas</h2>
        <p className="text-gray-600">Selecione uma página para editar seu conteúdo.</p>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Título
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rota
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Última Modificação
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pages.map((page) => (
                <tr key={page.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {page.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {page.route}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {page.lastModified}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="outline" size="sm" onClick={() => handleEditPage(page)}>
                      Editar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EditPages;
