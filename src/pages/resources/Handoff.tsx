
import React, { useState } from 'react';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';
import FloatingStateMenu, { VerificationState } from '@/components/handoff/FloatingStateMenu';

const Handoff = () => {
  const [currentState, setCurrentState] = useState<VerificationState>('phone-default');

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
                <div className="text-center p-8">
                  <p className="text-lg font-medium mb-2">Estado atual: {currentState}</p>
                  <p className="text-gray-500">Use o menu flutuante para mudar de estado</p>
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
