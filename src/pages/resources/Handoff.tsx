
import React, { useState } from 'react';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';
import FloatingStateMenu, { VerificationState } from '@/components/handoff/FloatingStateMenu';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertCircle, ArrowRight, Smartphone } from 'lucide-react';

const Handoff = () => {
  const [currentState, setCurrentState] = useState<VerificationState>('phone-default');

  // Function to render the appropriate screen based on current state
  const renderStateExample = () => {
    switch (currentState) {
      case 'phone-default':
        return (
          <div className="max-w-sm mx-auto p-6 rounded-lg bg-white border border-gray-200">
            <div className="mb-6 text-center">
              <Smartphone className="h-10 w-10 text-gray-500 mx-auto mb-2" />
              <h2 className="text-xl font-semibold mb-1">Verificação de WhatsApp</h2>
              <p className="text-gray-600 text-sm">Informe seu número para receber um código de verificação</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Número de celular</label>
                <Input placeholder="(11) 99999-9999" />
              </div>
              <Button className="w-full">Enviar código</Button>
            </div>
          </div>
        );
      
      case 'phone-error':
        return (
          <div className="max-w-sm mx-auto p-6 rounded-lg bg-white border border-gray-200">
            <div className="mb-6 text-center">
              <Smartphone className="h-10 w-10 text-gray-500 mx-auto mb-2" />
              <h2 className="text-xl font-semibold mb-1">Verificação de WhatsApp</h2>
              <p className="text-gray-600 text-sm">Informe seu número para receber um código de verificação</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Número de celular</label>
                <Input placeholder="(11) 99999-9999" className="border-red-500" />
                <p className="text-red-500 text-sm mt-1">Formato de número inválido</p>
              </div>
              <Button className="w-full">Enviar código</Button>
            </div>
          </div>
        );

      case 'verification-default':
        return (
          <div className="max-w-sm mx-auto p-6 rounded-lg bg-white border border-gray-200">
            <div className="mb-6 text-center">
              <h2 className="text-xl font-semibold mb-1">Código de verificação</h2>
              <p className="text-gray-600 text-sm">Insira o código de 6 dígitos enviado para seu WhatsApp</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between mb-4">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <Input 
                    key={num} 
                    className="w-10 h-12 text-center text-lg font-bold"
                    maxLength={1}
                  />
                ))}
              </div>
              <Button className="w-full">Verificar</Button>
              <p className="text-center text-sm text-gray-500">
                Não recebeu o código? <span className="text-blue-600 cursor-pointer">Reenviar</span>
              </p>
            </div>
          </div>
        );

      case 'verification-error':
        return (
          <div className="max-w-sm mx-auto p-6 rounded-lg bg-white border border-gray-200">
            <div className="mb-6 text-center">
              <h2 className="text-xl font-semibold mb-1">Código de verificação</h2>
              <p className="text-gray-600 text-sm">Insira o código de 6 dígitos enviado para seu WhatsApp</p>
            </div>
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Código inválido</AlertTitle>
              <AlertDescription>
                O código inserido não é válido. Por favor, tente novamente.
              </AlertDescription>
            </Alert>
            <div className="space-y-4">
              <div className="flex justify-between mb-4">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <Input 
                    key={num} 
                    className="w-10 h-12 text-center text-lg font-bold border-red-500"
                    maxLength={1}
                  />
                ))}
              </div>
              <Button className="w-full">Verificar</Button>
              <p className="text-center text-sm text-gray-500">
                Não recebeu o código? <span className="text-blue-600 cursor-pointer">Reenviar</span>
              </p>
            </div>
          </div>
        );

      case 'success':
        return (
          <div className="max-w-sm mx-auto p-6 rounded-lg bg-white border border-gray-200 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Verificação concluída!</h2>
            <p className="text-gray-600 mb-6">Seu número de WhatsApp foi verificado com sucesso.</p>
            <Button className="w-full">
              Continuar <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );

      case 'error-max-attempts':
        return (
          <div className="max-w-sm mx-auto p-6 rounded-lg bg-white border border-gray-200 text-center">
            <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Muitas tentativas</h2>
            <p className="text-gray-600 mb-6">
              Você excedeu o número máximo de tentativas de verificação. Por favor, aguarde 24 horas antes de tentar novamente.
            </p>
            <Button variant="outline" className="w-full">
              Voltar para o início
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Handoff"
        description="Componentes e utilidades para facilitar a colaboração entre Design e Desenvolvimento"
        type="components"
      />
      
      <div className="max-w-[1280px] mx-auto">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">FloatingStateMenu</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              O componente FloatingStateMenu permite navegar por diferentes estados de uma tela durante o processo de desenvolvimento e handoff,
              facilitando a visualização e teste de diferentes estados da interface sem precisar navegar entre eles manualmente.
            </p>
            
            <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden p-6">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Exemplo Interativo</h3>
                <p className="text-gray-600 mb-6">
                  Teste o comportamento usando o menu flutuante abaixo, que mostra diferentes estados de um fluxo de verificação de WhatsApp.
                  O menu pode ser arrastado pela tela usando o ícone de grip na parte superior.
                </p>
              </div>
              
              <div className="min-h-[400px] border border-gray-200 rounded-lg relative p-4 bg-gray-50">
                <div className="flex justify-center items-center py-4">
                  {renderStateExample()}
                </div>
                
                <FloatingStateMenu 
                  currentState={currentState}
                  onChange={setCurrentState}
                />
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Como usar</h3>
              <p className="text-gray-700 mb-4">
                O FloatingStateMenu é útil durante o desenvolvimento para facilitar a navegação entre estados 
                de uma interface complexa, especialmente em fluxos com múltiplos passos.
              </p>
              
              <CodeBlock 
                code={`import { FloatingStateMenu } from '@/components/handoff/FloatingStateMenu';

// Define os possíveis estados da sua interface
export type VerificationState = 
  | 'phone-default'        // Phone input screen
  | 'phone-error'          // Phone input with error
  | 'verification-default' // Verification code screen
  | 'verification-error'   // Verification code with error
  | 'success'              // Success state
  | 'error-max-attempts';  // Max attempts reached

const YourComponent = () => {
  const [currentState, setCurrentState] = useState<VerificationState>('phone-default');
  
  return (
    <div>
      {/* Seu conteúdo condicional baseado no estado atual */}
      {currentState === 'phone-default' && <PhoneInputScreen />}
      {currentState === 'phone-error' && <PhoneInputErrorScreen />}
      {/* ... outros estados ... */}
      
      {/* Menu de estados (visível apenas em ambiente de desenvolvimento) */}
      {process.env.NODE_ENV === 'development' && (
        <FloatingStateMenu 
          currentState={currentState}
          onChange={setCurrentState}
        />
      )}
    </div>
  );
};`} 
                language="tsx" 
                title="Exemplo de uso do FloatingStateMenu" 
              />
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Props</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prop</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">currentState</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">VerificationState</td>
                      <td className="px-6 py-4 text-sm text-gray-500">O estado atual selecionado</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onChange</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(state: VerificationState) =&gt; void</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Função chamada quando o usuário muda o estado selecionado</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Handoff;
