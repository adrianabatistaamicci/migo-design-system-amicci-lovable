
import React from 'react';
import ComponentCard from '@/components/ComponentCard';
import ColorSwatch from './ColorSwatch';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const UsageTab = () => {
  return (
    <ComponentCard title="Uso das Cores" description="Como aplicar cores corretamente em sua interface.">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800">Princípios Gerais</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Use cores de maneira consistente para criar uma experiência coesa</li>
          <li>Mantenha o contraste adequado para garantir legibilidade e acessibilidade</li>
          <li>Utilize cores semânticas para comunicar significado e estado</li>
          <li>Limite o uso de cores de destaque para não sobrecarregar a interface</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-6 text-gray-800">Cores Semânticas</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-primary-main mr-2"></div>
              <h4 className="font-medium text-gray-800">Primary (Amicci)</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Use para elementos de destaque, botões principais, links e elementos de navegação primários.
            </p>
            <div className="mt-3 grid grid-cols-1 gap-1">
              <ColorSwatch color="bg-amicci-500" hexValue="#10C2C0" weight="500 (Main)" />
              <ColorSwatch color="bg-amicci-700" hexValue="#0C8482" weight="700 (Dark)" />
              <ColorSwatch color="bg-amicci-300" hexValue="#93EDEA" weight="300 (Light)" />
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-secondary-main mr-2"></div>
              <h4 className="font-medium text-gray-800">Secondary (AmicciDark)</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Use para elementos secundários, botões alternativos e detalhes visuais complementares.
            </p>
            <div className="mt-3 grid grid-cols-1 gap-1">
              <ColorSwatch color="bg-amicciDark-500" hexValue="#14818A" weight="500 (Main)" />
              <ColorSwatch color="bg-amicciDark-700" hexValue="#06454A" weight="700 (Dark)" />
              <ColorSwatch color="bg-amicciDark-300" hexValue="#72BEC2" weight="300 (Light)" />
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-error-main mr-2"></div>
              <h4 className="font-medium text-gray-800">Error (Red)</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Use para mensagens de erro, estados de erro e ações destrutivas como exclusão.
            </p>
            <div className="mt-3 grid grid-cols-1 gap-1">
              <ColorSwatch color="bg-red-500" hexValue="#F04438" weight="500 (Main)" />
              <ColorSwatch color="bg-red-700" hexValue="#B42318" weight="700 (Dark)" />
              <ColorSwatch color="bg-red-300" hexValue="#FDA29B" weight="300 (Light)" />
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-success-main mr-2"></div>
              <h4 className="font-medium text-gray-800">Success (Green)</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Use para confirmações, mensagens de sucesso e indicadores positivos.
            </p>
            <div className="mt-3 grid grid-cols-1 gap-1">
              <ColorSwatch color="bg-green-500" hexValue="#12B76A" weight="500 (Main)" />
              <ColorSwatch color="bg-green-700" hexValue="#027A48" weight="700 (Dark)" />
              <ColorSwatch color="bg-green-300" hexValue="#6CE9A6" weight="300 (Light)" />
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-warning-main mr-2"></div>
              <h4 className="font-medium text-gray-800">Warning (Yellow)</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Use para alertas, notificações importantes e ações que requerem atenção.
            </p>
            <div className="mt-3 grid grid-cols-1 gap-1">
              <ColorSwatch color="bg-yellow-500" hexValue="#FFEB3B" weight="500 (Main)" />
              <ColorSwatch color="bg-yellow-700" hexValue="#FBC02D" weight="700 (Dark)" />
              <ColorSwatch color="bg-yellow-300" hexValue="#FFF176" weight="300 (Light)" />
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-info-main mr-2"></div>
              <h4 className="font-medium text-gray-800">Info (Blue)</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Use para mensagens informativas, dicas e elementos de ajuda contextual.
            </p>
            <div className="mt-3 grid grid-cols-1 gap-1">
              <ColorSwatch color="bg-blue-500" hexValue="#2970FF" weight="500 (Main)" />
              <ColorSwatch color="bg-blue-700" hexValue="#0057B2" weight="700 (Dark)" />
              <ColorSwatch color="bg-blue-300" hexValue="#84A9FF" weight="300 (Light)" />
            </div>
          </div>
        </div>
        
        <h3 className="text-lg font-medium mt-6 text-gray-800">Aplicação em Componentes</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="rounded-lg border border-gray-200 p-4">
            <h4 className="font-medium mb-2 text-gray-800">Avatars</h4>
            <div className="flex space-x-2">
              <Avatar className="bg-amicci-500">
                <AvatarFallback className="text-white">AM</AvatarFallback>
              </Avatar>
              <Avatar className="bg-amicciDark-500">
                <AvatarFallback className="text-white">JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 p-4">
            <h4 className="font-medium mb-2 text-gray-800">Estados</h4>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-green-500">Ativo</Badge>
              <Badge className="bg-red-500">Inativo</Badge>
              <Badge className="bg-yellow-500 text-yellow-900">Pendente</Badge>
              <Badge className="bg-blue-500">Informativo</Badge>
              <Badge className="bg-amicci-500">Principal</Badge>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
};

export default UsageTab;
