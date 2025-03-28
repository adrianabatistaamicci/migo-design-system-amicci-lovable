
import React from 'react';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const RadioGroups = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Radio Groups"
        description="Grupos de botões de rádio permitem que o usuário selecione uma opção entre várias alternativas."
        type="components"
      />
      
      <div className="mt-6 space-y-8">
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">Grupo de Rádio Básico</h2>
            
            <div className="space-y-4 mb-6 w-full max-w-xs">
              <RadioGroup defaultValue="option1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option1" id="option1" />
                  <Label htmlFor="option1">Opção 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option2" id="option2" />
                  <Label htmlFor="option2">Opção 2</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option3" id="option3" />
                  <Label htmlFor="option3">Opção 3</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          
          <CodeBlock 
            code={`<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <Label htmlFor="option1">Opção 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="option2" />
    <Label htmlFor="option2">Opção 2</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option3" id="option3" />
    <Label htmlFor="option3">Opção 3</Label>
  </div>
</RadioGroup>`}
            language="tsx"
            title="Implementação de Grupo de Rádio Básico"
            showCode={false}
          />
        </div>
        
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">Grupo de Rádio com Item Desabilitado</h2>
            
            <div className="space-y-4 mb-6 w-full max-w-xs">
              <RadioGroup defaultValue="default">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Opção padrão</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Opção alternativa</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r3" disabled />
                  <Label htmlFor="r3" className="text-gray-400">Opção desabilitada</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          
          <CodeBlock 
            code={`<RadioGroup defaultValue="default">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Opção padrão</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Opção alternativa</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="compact" id="r3" disabled />
    <Label htmlFor="r3" className="text-gray-400">Opção desabilitada</Label>
  </div>
</RadioGroup>`}
            language="tsx"
            title="Implementação de Grupo de Rádio com Item Desabilitado"
            showCode={false}
          />
        </div>
        
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">Grupo de Rádio Horizontal</h2>
            
            <div className="space-y-4 mb-6 w-full max-w-md">
              <RadioGroup defaultValue="option1" className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option1" id="h1" />
                  <Label htmlFor="h1">Opção A</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option2" id="h2" />
                  <Label htmlFor="h2">Opção B</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option3" id="h3" />
                  <Label htmlFor="h3">Opção C</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          
          <CodeBlock 
            code={`<RadioGroup defaultValue="option1" className="flex space-x-4">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="h1" />
    <Label htmlFor="h1">Opção A</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="h2" />
    <Label htmlFor="h2">Opção B</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option3" id="h3" />
    <Label htmlFor="h3">Opção C</Label>
  </div>
</RadioGroup>`}
            language="tsx"
            title="Implementação de Grupo de Rádio Horizontal"
            showCode={false}
          />
        </div>
      </div>
    </div>
  );
};

export default RadioGroups;
