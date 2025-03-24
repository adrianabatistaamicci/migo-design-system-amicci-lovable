
import React, { useState } from 'react';
import { TailwindTabs } from "@/components/ui/tabs";
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import {
  User,
  Settings,
  Eye,
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Copy,
  Github,
  Mail,
  MessageSquare,
  Plus,
  Trash2,
  XCircle,
  Youtube,
  AlertCircle,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "@/components/ui/use-toast";
import { icons } from "@/data/icons";

const Icons = () => {
  const [activeTab, setActiveTab] = useState('scale');
  const [searchTerm, setSearchTerm] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  const filteredIcons = icons.filter(icon =>
    icon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(value);
    toast({
      title: "Copiado!",
      description: "Ícone copiado para a área de transferência.",
    });
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Ícones" 
        description="Usamos ícones Lucide como biblioteca oficial"
        type="foundations"
      />

      <div className="mt-8">
        <TailwindTabs 
          defaultValue="scale"
          tabs={[
            { name: 'Escala', value: 'scale' },
            { name: 'Acessibilidade', value: 'accessibility' }
          ]}
          variant="pillsGray"
          onChange={value => setActiveTab(value)}
        />
        
        <div className="mt-6">
          {activeTab === 'scale' && (
            <div className="space-y-6">
              <ComponentCard title="Lucide Icons" description="Os ícones Lucide são um conjunto moderno e leve de ícones de código aberto projetados para interfaces digitais.">
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Os ícones Lucide são simples, modernos e amigáveis. Eles são fáceis de integrar em projetos React e oferecem alto grau de customização.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <Card className="flex flex-col items-center text-center p-6">
                      <CardContent className="pt-6">
                        <User className="h-10 w-10 mb-4" />
                        <h3 className="text-lg font-medium mb-2">Simples</h3>
                        <p className="text-gray-500 text-sm">
                          Design limpo e minimalista que funciona bem em tamanhos pequenos
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="flex flex-col items-center text-center p-6">
                      <CardContent className="pt-6">
                        <Settings className="h-10 w-10 mb-4" />
                        <h3 className="text-lg font-medium mb-2">Consistente</h3>
                        <p className="text-gray-500 text-sm">
                          Estilo uniforme em todos os ícones do sistema
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="flex flex-col items-center text-center p-6">
                      <CardContent className="pt-6">
                        <Eye className="h-10 w-10 mb-4" />
                        <h3 className="text-lg font-medium mb-2">Significativo</h3>
                        <p className="text-gray-500 text-sm">
                          Metáforas reconhecíveis que comunicam rapidamente o significado
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="bg-sky-50 border border-sky-100 rounded-lg p-4 flex items-center justify-between mt-6">
                    <p className="text-gray-600">A biblioteca completa pode ser acessada no site oficial.</p>
                    <Button 
                      variant="default" 
                      className="bg-teal-500 hover:bg-teal-600"
                      onClick={() => window.open('https://lucide.dev', '_blank')}
                    >
                      Acessar Lucide Icons
                    </Button>
                  </div>
                </div>
              </ComponentCard>

              <ComponentCard title="Guia de Integração" description="Existem várias maneiras de integrar os ícones Lucide em seu projeto:">
                <div className="space-y-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-medium mb-2">1. Instalação via NPM</h3>
                    <pre className="bg-gray-50 p-3 rounded font-mono text-sm">npm install lucide-react</pre>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-medium mb-2">2. Importação e Uso</h3>
                    <pre className="bg-gray-50 p-3 rounded font-mono text-sm">
{`import { User, Settings } from 'lucide-react';

function MyComponent() {
  return (
    <div>
      <User size={24} />
      <Settings size={24} color="blue" />
    </div>
  );
}`}
                    </pre>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-medium mb-2">3. Personalização</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Tamanho</h4>
                        <div className="flex items-center space-x-4">
                          <User size={16} />
                          <User size={24} />
                          <User size={32} />
                          <User size={48} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Cor</h4>
                        <div className="flex items-center space-x-4">
                          <User color="#000000" />
                          <User color="#0EA5E9" />
                          <User color="#10B981" />
                          <User color="#EF4444" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ComponentCard>
              
              <ComponentCard title="Biblioteca de Ícones" description="Explore a biblioteca completa de ícones disponíveis para uso em sua aplicação.">
                <div className="mb-4">
                  <Input
                    type="text"
                    placeholder="Pesquisar ícones..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <ScrollArea className="h-[400px] w-full rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ícone</TableHead>
                        <TableHead>Nome</TableHead>
                        <TableHead>Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredIcons.map((icon) => (
                        <TableRow key={icon.name}>
                          <TableCell>
                            <icon.Component className="h-4 w-4" />
                          </TableCell>
                          <TableCell>{icon.name}</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm" onClick={() => copyToClipboard(`<${icon.name} className="h-4 w-4"/>`)}>
                              Copiar
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </ComponentCard>
            </div>
          )}

          {activeTab === 'accessibility' && (
            <div className="space-y-6">
              <ComponentCard title="Acessibilidade de Ícones" description="Recomendações para garantir que seus ícones sejam acessíveis para todos os usuários.">
                <div className="space-y-6">
                  <p className="text-gray-600">
                    Ícones podem melhorar a usabilidade para muitos usuários, mas sem considerações de acessibilidade adequadas, 
                    podem criar barreiras para outros. Siga estas diretrizes para garantir que seus ícones sejam acessíveis.
                  </p>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Texto Alternativo</h3>
                    <p className="text-gray-600">
                      Sempre forneça texto alternativo para ícones que transmitem significado.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-red-200 bg-red-50 p-4 rounded-md">
                        <h4 className="font-medium text-red-700 mb-2">❌ Inacessível</h4>
                        <pre className="bg-white p-3 rounded font-mono text-sm">
{`<Button>
  <Trash2 />
</Button>`}
                        </pre>
                      </div>
                      <div className="border border-green-200 bg-green-50 p-4 rounded-md">
                        <h4 className="font-medium text-green-700 mb-2">✅ Acessível</h4>
                        <pre className="bg-white p-3 rounded font-mono text-sm">
{`<Button aria-label="Excluir item">
  <Trash2 />
</Button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Contraste</h3>
                    <p className="text-gray-600">
                      Garanta que haja contraste suficiente entre o ícone e seu fundo.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-red-200 bg-red-50 p-4 rounded-md">
                        <h4 className="font-medium text-red-700 mb-2">❌ Contraste insuficiente</h4>
                        <div className="bg-gray-200 p-4 rounded flex items-center justify-center">
                          <AlertCircle color="#CCCCCC" size={24} />
                        </div>
                      </div>
                      <div className="border border-green-200 bg-green-50 p-4 rounded-md">
                        <h4 className="font-medium text-green-700 mb-2">✅ Contraste adequado</h4>
                        <div className="bg-gray-200 p-4 rounded flex items-center justify-center">
                          <AlertCircle color="#333333" size={24} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Tamanho</h3>
                    <p className="text-gray-600">
                      Use ícones de tamanho adequado para garantir a legibilidade.
                    </p>

                    <div className="flex space-x-8 items-center">
                      <div className="text-center">
                        <AlertCircle size={16} className="mx-auto mb-2" />
                        <Badge variant="secondary">16px</Badge>
                      </div>
                      <div className="text-center">
                        <AlertCircle size={24} className="mx-auto mb-2" />
                        <Badge variant="secondary">24px</Badge>
                      </div>
                      <div className="text-center">
                        <AlertCircle size={32} className="mx-auto mb-2" />
                        <Badge variant="secondary">32px</Badge>
                      </div>
                      <div className="text-center">
                        <AlertCircle size={48} className="mx-auto mb-2" />
                        <Badge variant="secondary">48px</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Recomendação: Use ícones de pelo menos 24px para áreas clicáveis.
                    </p>
                  </div>
                </div>
              </ComponentCard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Icons;
