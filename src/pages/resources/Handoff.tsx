import React, { useState } from 'react';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';
import FloatingStateMenu, { VerificationState } from '@/components/ui/floating-state-menu';

const PhoneDefaultState = () => (
  <div className="bg-white p-4 rounded-md border border-gray-200">
    <h3 className="text-lg font-medium mb-2">Phone Input (Default)</h3>
    <div className="space-y-4">
      <div className="p-4 border border-gray-300 rounded">
        <span className="block text-sm text-gray-500 mb-1">Insira seu número de telefone</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">+55</span>
          <input 
            type="text" 
            className="flex-1 p-2 border border-gray-300 rounded"
            placeholder="(00) 00000-0000"
          />
        </div>
      </div>
      <button className="w-full bg-amicci-500 text-white p-2 rounded">Continuar</button>
    </div>
  </div>
);

const PhoneErrorState = () => (
  <div className="bg-white p-4 rounded-md border border-gray-200">
    <h3 className="text-lg font-medium mb-2">Phone Input (Error)</h3>
    <div className="space-y-4">
      <div className="p-4 border border-red-300 rounded bg-red-50">
        <span className="block text-sm text-gray-500 mb-1">Insira seu número de telefone</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">+55</span>
          <input 
            type="text" 
            className="flex-1 p-2 border border-red-300 rounded"
            placeholder="(00) 00000-0000"
            value="1234"
          />
        </div>
        <p className="text-xs text-red-500 mt-1">Número de telefone inválido</p>
      </div>
      <button className="w-full bg-amicci-500 text-white p-2 rounded">Continuar</button>
    </div>
  </div>
);

const VerificationDefaultState = () => (
  <div className="bg-white p-4 rounded-md border border-gray-200">
    <h3 className="text-lg font-medium mb-2">Verification Code (Default)</h3>
    <div className="space-y-4">
      <p className="text-sm text-gray-600">Enviamos um código para o número +55 (11) 98765-4321</p>
      <div className="flex justify-center gap-2">
        {[1, 2, 3, 4].map((i) => (
          <input 
            key={i}
            type="text" 
            className="w-12 h-12 border border-gray-300 rounded text-center text-lg font-medium"
            maxLength={1}
          />
        ))}
      </div>
      <button className="w-full bg-amicci-500 text-white p-2 rounded">Verificar</button>
      <button className="w-full text-amicci-500 p-2 rounded border border-gray-200">Reenviar código</button>
    </div>
  </div>
);

const VerificationErrorState = () => (
  <div className="bg-white p-4 rounded-md border border-gray-200">
    <h3 className="text-lg font-medium mb-2">Verification Code (Error)</h3>
    <div className="space-y-4">
      <p className="text-sm text-gray-600">Enviamos um código para o número +55 (11) 98765-4321</p>
      <div className="flex justify-center gap-2">
        {[1, 2, 3, 4].map((i) => (
          <input 
            key={i}
            type="text" 
            className="w-12 h-12 border border-red-300 bg-red-50 rounded text-center text-lg font-medium"
            maxLength={1}
            value={i.toString()}
          />
        ))}
      </div>
      <p className="text-xs text-red-500 text-center">Código inválido. Tente novamente.</p>
      <button className="w-full bg-amicci-500 text-white p-2 rounded">Verificar</button>
      <button className="w-full text-amicci-500 p-2 rounded border border-gray-200">Reenviar código</button>
    </div>
  </div>
);

const SuccessState = () => (
  <div className="bg-white p-4 rounded-md border border-gray-200">
    <h3 className="text-lg font-medium mb-2">Success</h3>
    <div className="space-y-4 text-center">
      <div className="py-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">Verificação concluída</h3>
        <p className="text-sm text-gray-500">Redirecionando para o painel</p>
      </div>
    </div>
  </div>
);

const ErrorMaxAttemptsState = () => (
  <div className="bg-white p-4 rounded-md border border-gray-200">
    <h3 className="text-lg font-medium mb-2">Max Attempts Error</h3>
    <div className="space-y-4 text-center">
      <div className="py-6">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">Tentativas excedidas</h3>
        <p className="text-sm text-gray-500">Você excedeu o número máximo de tentativas. Tente novamente mais tarde.</p>
      </div>
      <button className="w-full bg-gray-200 text-gray-700 p-2 rounded">Tentar novamente</button>
    </div>
  </div>
);

const Handoff = () => {
  const [currentState, setCurrentState] = useState<VerificationState>('phone-default');

  const renderStateComponent = () => {
    switch(currentState) {
      case 'phone-default':
        return <PhoneDefaultState />;
      case 'phone-error':
        return <PhoneErrorState />;
      case 'verification-default':
        return <VerificationDefaultState />;
      case 'verification-error':
        return <VerificationErrorState />;
      case 'success':
        return <SuccessState />;
      case 'error-max-attempts':
        return <ErrorMaxAttemptsState />;
      default:
        return <PhoneDefaultState />;
    }
  };

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Handoff"
        description="Recursos para facilitar a transição entre design e implementação."
        type="resources"
        className="mb-6"
      />
      
      <div className="space-y-8">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">FloatingStateMenu</h2>
            <p className="text-gray-600 mb-6">
              O componente FloatingStateMenu fornece uma interface flutuante para alternar entre diferentes estados da aplicação durante o desenvolvimento e testes.
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Exemplo Interativo</h3>
              <div className="bg-gray-100 p-6 rounded-lg border border-gray-200 flex justify-center">
                {renderStateComponent()}
                <FloatingStateMenu currentState={currentState} onChange={setCurrentState} />
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Uso</h3>
              <p className="text-gray-600 mb-3">
                O FloatingStateMenu é útil durante o desenvolvimento para testar diferentes estados da interface sem precisar navegar manualmente pela aplicação.
              </p>
            </div>
          </div>
          
          <CodeBlock 
            code={`import FloatingStateMenu, { VerificationState } from '@/components/ui/floating-state-menu';

// Em seu componente
const [currentState, setCurrentState] = useState<VerificationState>('phone-default');

// Renderização
<FloatingStateMenu 
  currentState={currentState} 
  onChange={setCurrentState} 
/>`}
            language="tsx"
            title="Implementação básica"
            showCode={false}
          />
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">API Reference</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-4 py-2 text-left font-medium text-gray-600">Prop</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-600">Tipo</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-600">Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2 font-medium">currentState</td>
                    <td className="px-4 py-2 text-gray-600">VerificationState</td>
                    <td className="px-4 py-2 text-gray-600">O estado atual selecionado no menu</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium">onChange</td>
                    <td className="px-4 py-2 text-gray-600">(state: VerificationState) =&gt; void</td>
                    <td className="px-4 py-2 text-gray-600">Callback que é chamado quando o estado é alterado</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-lg font-medium mt-6 mb-3">VerificationState</h3>
            <p className="text-gray-600 mb-3">
              O tipo VerificationState é uma união de strings literais que representam os possíveis estados da interface:
            </p>
            
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <pre className="text-sm text-gray-700 whitespace-pre-wrap">
{`type VerificationState = 
  | 'phone-default'        // Phone input screen
  | 'phone-error'          // Phone input with error
  | 'verification-default' // Verification code screen
  | 'verification-error'   // Verification code with error
  | 'success'              // Success state
  | 'error-max-attempts';  // Max attempts reached`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handoff;
