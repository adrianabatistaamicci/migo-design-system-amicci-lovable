
import React from 'react';
import Header from '@/components/library-components/Header';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Bell, ShoppingCart, Mail, Calendar } from 'lucide-react';
import ComponentCard from '@/components/ComponentCard';
import CodeBlock from '@/components/CodeBlock';

const BadgeComponent = () => {
  // Código do componente Badge
  const basicBadgesCode = `import { Badge } from "@/components/ui/badge"

// Badge padrão
<Badge badgeContent={4}>
  <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
</Badge>

// Badge com cor primária (padrão)
<Badge badgeContent={4} color="primary">
  <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
</Badge>

// Badge com cor secundária
<Badge badgeContent={4} color="secondary">
  <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
</Badge>

// Badge com cor de erro
<Badge badgeContent={4} color="error">
  <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
</Badge>

// Badge com cor de sucesso
<Badge badgeContent={4} color="success">
  <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
</Badge>

// Badge com cor de aviso
<Badge badgeContent={4} color="warning">
  <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
</Badge>

// Badge com cor de informação
<Badge badgeContent={4} color="info">
  <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
</Badge>`;

  const badgeVariantsCode = `import { Badge } from "@/components/ui/badge"
import { Bell, ShoppingCart, Mail } from "lucide-react"

// Variante padrão (standard)
<Badge badgeContent={4} color="primary">
  <Bell size={24} />
</Badge>

// Variante dot (indicador de ponto)
<Badge variant="dot" color="error">
  <Mail size={24} />
</Badge>

// Variante com borda
<Badge variant="outline" badgeContent={4} color="primary">
  <ShoppingCart size={24} />
</Badge>`;

  const badgePlacementCode = `import { Badge } from "@/components/ui/badge"
import { Bell } from "lucide-react"

// Posicionamento padrão (topo direito)
<Badge badgeContent={4} color="primary">
  <Bell size={24} />
</Badge>

// Posicionamento personalizado (topo esquerdo)
<Badge 
  badgeContent={4} 
  color="primary"
  anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
>
  <Bell size={24} />
</Badge>

// Posicionamento personalizado (inferior direito)
<Badge 
  badgeContent={4} 
  color="primary"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
>
  <Bell size={24} />
</Badge>

// Posicionamento personalizado (inferior esquerdo)
<Badge 
  badgeContent={4} 
  color="primary"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
>
  <Bell size={24} />
</Badge>`;

  const badgeWithMaxCode = `import { Badge } from "@/components/ui/badge"
import { Mail } from "lucide-react"

// Badge com valor máximo (padrão é 99)
<Badge badgeContent={100} color="primary">
  <Mail size={24} />
</Badge>

// Badge com valor máximo personalizado (500)
<Badge badgeContent={1000} max={500} color="primary">
  <Mail size={24} />
</Badge>`;

  const badgeWithAvatarCode = `import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Badge com overlap circular para avatar
<Badge variant="dot" color="success" overlap="circular">
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
</Badge>`;

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Badges"
        description="Badges exibem notificações numéricas ou status que precisam de destaque."
        type="components"
      />
      
      <div className="max-w-[1280px] mx-auto space-y-8 mt-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Badges Básicos</h2>
          <p className="text-gray-700 mb-6">
            Os badges são usados para destacar um novo item, notificação não lida ou informação de status para o usuário. Eles podem conter valores numéricos ou simplesmente funcionar como indicadores.
          </p>
          
          <ComponentCard 
            title="Badges com Cores" 
            description="Variantes de cor do componente Badge"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={basicBadgesCode}
            codeBlockTitle="Implementação de Badges Básicos"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 p-10">
              <Badge badgeContent={4}>
                <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
              </Badge>
              
              <Badge badgeContent={4} color="primary">
                <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
              </Badge>
              
              <Badge badgeContent={4} color="secondary">
                <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
              </Badge>
              
              <Badge badgeContent={4} color="error">
                <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
              </Badge>
              
              <Badge badgeContent={4} color="success">
                <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
              </Badge>
              
              <Badge badgeContent={4} color="warning">
                <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
              </Badge>
              
              <Badge badgeContent={4} color="info">
                <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
              </Badge>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Variantes de Badge</h2>
          <p className="text-gray-700 mb-6">
            Badges estão disponíveis em diferentes variantes para atender a diversos contextos de UI.
          </p>
          
          <ComponentCard 
            title="Variantes de Badge" 
            description="Diferentes estilos de apresentação para o componente Badge"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={badgeVariantsCode}
            codeBlockTitle="Implementação de Variantes"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 p-10">
              <Badge badgeContent={4} color="primary">
                <Bell size={24} />
              </Badge>
              
              <Badge variant="dot" color="error">
                <Mail size={24} />
              </Badge>
              
              <Badge variant="outline" badgeContent={4} color="primary">
                <ShoppingCart size={24} />
              </Badge>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Posicionamento de Badge</h2>
          <p className="text-gray-700 mb-6">
            Badges podem ser posicionados em diferentes cantos do elemento pai.
          </p>
          
          <ComponentCard 
            title="Posicionamento de Badge" 
            description="Controle da posição do badge em relação ao elemento pai"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={badgePlacementCode}
            codeBlockTitle="Implementação de Posicionamento"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 p-10">
              <Badge badgeContent={4} color="primary">
                <Bell size={24} />
              </Badge>
              
              <Badge 
                badgeContent={4} 
                color="primary"
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
              >
                <Bell size={24} />
              </Badge>
              
              <Badge 
                badgeContent={4} 
                color="primary"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              >
                <Bell size={24} />
              </Badge>
              
              <Badge 
                badgeContent={4} 
                color="primary"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              >
                <Bell size={24} />
              </Badge>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Badge com Valor Máximo</h2>
          <p className="text-gray-700 mb-6">
            Badges podem mostrar um limite máximo para valores muito grandes.
          </p>
          
          <ComponentCard 
            title="Badge com Valor Máximo" 
            description="Limitando valores numéricos exibidos no badge"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={badgeWithMaxCode}
            codeBlockTitle="Implementação de Valor Máximo"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 p-10">
              <Badge badgeContent={100} color="primary">
                <Mail size={24} />
              </Badge>
              
              <Badge badgeContent={1000} max={500} color="primary">
                <Mail size={24} />
              </Badge>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Badge com Avatar</h2>
          <p className="text-gray-700 mb-6">
            Badges podem ser usados com avatares para indicar status online ou outras informações.
          </p>
          
          <ComponentCard 
            title="Badge com Avatar" 
            description="Usando badges em conjunto com avatares"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={badgeWithAvatarCode}
            codeBlockTitle="Implementação com Avatar"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 p-10">
              <Badge variant="dot" color="success" overlap="circular">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Badge>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Casos de Uso Comuns</h2>
          <p className="text-gray-700 mb-6">
            Exemplos de uso de badges em contextos reais de UI.
          </p>
          
          <div className="bg-white rounded-lg border p-6 mb-8">
            <h3 className="text-lg font-medium mb-4">Badges em Elementos de Navegação</h3>
            <div className="flex justify-center gap-8">
              <Button variant="ghost" className="relative">
                <Badge badgeContent={3} color="primary">
                  <Mail className="h-5 w-5" />
                </Badge>
                <span className="ml-8">Mensagens</span>
              </Button>
              
              <Button variant="ghost" className="relative">
                <Badge badgeContent={12} color="error">
                  <Bell className="h-5 w-5" />
                </Badge>
                <span className="ml-8">Notificações</span>
              </Button>
              
              <Button variant="ghost" className="relative">
                <Badge badgeContent={5} color="secondary">
                  <Calendar className="h-5 w-5" />
                </Badge>
                <span className="ml-8">Eventos</span>
              </Button>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Melhores Práticas</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Use badges para comunicar informações suplementares, como contadores de notificações.</li>
            <li>Mantenha o conteúdo dos badges simples e conciso - geralmente números ou pequenos indicadores.</li>
            <li>Use cores consistentes para representar o mesmo tipo de informação em toda a aplicação.</li>
            <li>Considere usar a propriedade <code>max</code> para valores grandes para evitar distorção do layout.</li>
            <li>Use a variante <code>dot</code> quando apenas uma indicação visual é necessária, sem valor específico.</li>
            <li>Posicione badges consistentemente em relação aos seus elementos pais.</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Acessibilidade</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Forneça contexto adequado para leitores de tela usando <code>aria-label</code> quando necessário.</li>
            <li>Garanta contraste suficiente entre o badge e seu fundo para visibilidade clara.</li>
            <li>Para badges que representam contadores ou notificações, considere adicionar uma descrição mais detalhada com <code>aria-description</code>.</li>
            <li>Se o badge for puramente decorativo, use <code>aria-hidden="true"</code> para evitar confusão para usuários de tecnologia assistiva.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default BadgeComponent;
