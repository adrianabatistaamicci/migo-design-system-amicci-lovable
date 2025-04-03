
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const Settings = () => {
  const { toast } = useToast();
  
  const handleSave = () => {
    toast({
      title: "Configurações salvas",
      description: "Suas preferências foram atualizadas com sucesso",
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Configurações</h2>
        <p className="text-gray-600">Gerencie as configurações do painel administrativo.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Preferências do Editor</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="preview-mode" className="text-base">Mostrar prévia em tempo real</Label>
              <p className="text-sm text-gray-500">Ver as alterações enquanto edita</p>
            </div>
            <Switch id="preview-mode" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="auto-save" className="text-base">Salvar automaticamente</Label>
              <p className="text-sm text-gray-500">Salvar alterações a cada 5 minutos</p>
            </div>
            <Switch id="auto-save" />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="notifications" className="text-base">Notificações</Label>
              <p className="text-sm text-gray-500">Receber alertas sobre alterações no site</p>
            </div>
            <Switch id="notifications" defaultChecked />
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t flex justify-end">
          <Button onClick={handleSave}>Salvar Configurações</Button>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Informações da Conta</h3>
        <div className="space-y-2">
          <p><span className="font-medium">Usuário:</span> admin@example.com</p>
          <p><span className="font-medium">Função:</span> Administrador</p>
          <p><span className="font-medium">Último login:</span> 03/04/2025 às 10:15</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
