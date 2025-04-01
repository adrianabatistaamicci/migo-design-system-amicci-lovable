
import React from 'react';
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import ComponentPreview from '@/components/ComponentPreview';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Cards = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Cards"
        description="Componentes de cartão para exibir conteúdo em um contêiner visualmente distinto."
        type="components"
      />
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ComponentPreview 
          title="Card Básico" 
          variantCount={1}
          preview={
            <Card className="w-[320px]">
              <CardHeader>
                <CardTitle>Card Simples</CardTitle>
                <CardDescription>Descrição do card</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Este é um exemplo de card básico com cabeçalho, conteúdo e rodapé.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">Cancelar</Button>
                <Button size="sm" className="ml-2">Salvar</Button>
              </CardFooter>
            </Card>
          }
        />

        <ComponentPreview 
          title="Card com Imagem" 
          variantCount={1}
          preview={
            <Card className="w-[320px]">
              <img 
                src="/lovable-uploads/6d04ddec-9054-4db3-b9e5-16353280c499.png" 
                alt="Card com imagem" 
                className="w-full h-[140px] object-cover rounded-t-lg"
                loading="lazy"
              />
              <CardHeader>
                <CardTitle>Card com Imagem</CardTitle>
                <CardDescription>Imagem de destaque</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Cards com imagens são úteis para destacar conteúdo visual.</p>
              </CardContent>
            </Card>
          }
        />

        <ComponentPreview 
          title="Card de Perfil" 
          variantCount={1}
          preview={
            <Card className="w-[320px]">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/lovable-uploads/2df1e87b-5689-4215-b359-351157f3415a.png" loading="lazy" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">João Silva</CardTitle>
                    <CardDescription>Desenvolvedor</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>Especialista em interfaces de usuário e experiência do usuário com 5 anos de experiência.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">Ver perfil</Button>
                <Button size="sm">Contatar</Button>
              </CardFooter>
            </Card>
          }
        />

        <ComponentPreview 
          title="Card de Estatísticas" 
          variantCount={1}
          preview={
            <Card className="w-[320px]">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  Desempenho <Badge variant="outline">Novo</Badge>
                </CardTitle>
                <CardDescription>Resumo do último mês</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Visualizações</span>
                    <span className="font-medium">1,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Conversões</span>
                    <span className="font-medium">4.6%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cliques</span>
                    <span className="font-medium">345</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          }
        />

        <ComponentPreview 
          title="Card de Produto" 
          variantCount={1}
          preview={
            <Card className="w-[320px]">
              <img 
                src="/lovable-uploads/6d04ddec-9054-4db3-b9e5-16353280c499.png" 
                alt="Produto" 
                className="w-full h-[160px] object-cover rounded-t-lg"
                loading="lazy"
              />
              <CardHeader className="pt-4 px-4 pb-0">
                <div className="flex justify-between">
                  <CardTitle>Produto Premium</CardTitle>
                  <span className="text-lg font-bold">R$ 299,90</span>
                </div>
                <CardDescription>Categoria: Eletrônicos</CardDescription>
              </CardHeader>
              <CardContent className="pb-0 pt-2 px-4">
                <p className="text-sm">Descrição do produto com detalhes sobre funcionalidades e benefícios.</p>
              </CardContent>
              <CardFooter className="pt-4">
                <Button className="w-full">Adicionar ao Carrinho</Button>
              </CardFooter>
            </Card>
          }
        />
      </div>

      <div className="mt-8">
        <ComponentCard 
          title="Exemplo de uso" 
          description="Diferentes variações de cards para diversos contextos" 
          className="mt-8"
          code={`<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição ou subtítulo</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Conteúdo principal do card.</p>
  </CardContent>
  <CardFooter>
    <Button>Ação Primária</Button>
  </CardFooter>
</Card>`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <Card>
              <CardHeader>
                <CardTitle>Card Padrão</CardTitle>
                <CardDescription>Card com estrutura básica</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Conteúdo do card com informações importantes e relevantes para o usuário.</p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" size="sm" className="mr-2">Cancelar</Button>
                <Button size="sm">Confirmar</Button>
              </CardFooter>
            </Card>

            <Card className="border-primary-light">
              <CardHeader className="bg-primary-light/20 border-b border-primary-light">
                <CardTitle className="text-primary-dark">Card Destacado</CardTitle>
                <CardDescription>Com cores personalizadas</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Este card utiliza cores personalizadas para destacar conteúdo importante.</p>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t">
                <Button className="w-full">Ação em Destaque</Button>
              </CardFooter>
            </Card>

            <Card className="shadow-md">
              <img 
                src="/lovable-uploads/6d04ddec-9054-4db3-b9e5-16353280c499.png" 
                alt="Imagem do card" 
                className="h-32 w-full object-cover"
                loading="lazy"
              />
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Card com Mídia</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm">Cards com imagens são úteis para conteúdo visual e atrativo.</p>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-3">
                <Button variant="ghost" size="sm">Ver mais</Button>
                <Badge>Novo</Badge>
              </CardFooter>
            </Card>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
};

export default Cards;
