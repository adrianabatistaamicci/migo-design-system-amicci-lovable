import React, { useState } from 'react';
import { TailwindTabs } from "@/components/ui/tabs";
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import {
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
  User,
  XCircle,
  Youtube,
  AlertCircle,
  LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { icons } from "@/data/icons";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Icons = () => {
  const [activeTab, setActiveTab] = useState('library');
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
    })
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Icons" 
        description="Sistema de ícones utilizado na aplicação"
        type="foundations"
      />

      <div className="mt-8">
        <TailwindTabs 
          defaultValue="library"
          tabs={[
            { name: 'Biblioteca', value: 'library' },
            { name: 'Uso', value: 'usage' },
            { name: 'Guideline', value: 'guideline' }
          ]}
          variant="pillsGray"
          onChange={value => setActiveTab(value)}
        />
        
        <div className="mt-6">
          {activeTab === 'library' && (
            <div className="space-y-6">
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

          {activeTab === 'usage' && (
            <div className="space-y-6">
              <ComponentCard title="Guia de Uso de Ícones" description="Diretrizes e exemplos práticos para a utilização eficaz dos ícones em sua interface.">
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Os ícones são elementos visuais importantes que ajudam a transmitir informações de forma rápida e intuitiva.
                    Siga estas diretrizes para garantir que os ícones sejam utilizados de maneira consistente e eficaz em toda a aplicação.
                  </p>

                  <Separator />

                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Tamanho e Espaçamento</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">
                          Utilize os ícones em tamanhos consistentes para manter a harmonia visual.
                          Recomendamos o uso de ícones com 16x16 pixels ou 24x24 pixels, dependendo do contexto.
                          Certifique-se de que haja espaço suficiente ao redor dos ícones para evitar que pareçam congestionados.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Cor e Contraste</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">
                          Utilize cores que estejam em conformidade com a paleta de cores da aplicação.
                          Certifique-se de que haja contraste suficiente entre o ícone e o fundo para garantir a legibilidade.
                          Evite o uso de cores que possam causar confusão ou distrair o usuário.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Consistência</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">
                          Utilize os mesmos ícones para representar as mesmas ações ou conceitos em toda a aplicação.
                          Isso ajudará os usuários a aprender e lembrar o significado de cada ícone.
                          Evite o uso de ícones diferentes para representar a mesma coisa, pois isso pode causar confusão.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </ComponentCard>
            </div>
          )}

          {activeTab === 'guideline' && (
            <div className="space-y-6">
              <ComponentCard title="Diretrizes de Ícones" description="Orientações detalhadas para o design e a utilização de ícones acessíveis e eficazes.">
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Os ícones devem ser projetados e utilizados de forma a garantir a acessibilidade e a usabilidade para todos os usuários.
                    Siga estas diretrizes para criar ícones que sejam claros, concisos e fáceis de entender.
                  </p>

                  <Separator />

                  <Card>
                    <CardHeader>
                      <CardTitle>Acessibilidade</CardTitle>
                      <CardDescription>
                        Certifique-se de que os ícones sejam acessíveis para usuários com deficiência visual.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className="flex items-center space-x-4">
                        <Label htmlFor="icon-name">Nome do Ícone</Label>
                        <Input id="icon-name" defaultValue="ExemploIcon" className="max-w-[150px]" />
                      </div>
                      <div className="flex items-center space-x-4">
                        <Label htmlFor="icon-description">Descrição</Label>
                        <Textarea id="icon-description" placeholder="Descrição detalhada do ícone" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Salvar</Button>
                    </CardFooter>
                  </Card>
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
