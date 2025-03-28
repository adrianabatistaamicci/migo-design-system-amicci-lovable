
import React from 'react';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from '@/components/ui/select';

const SelectPage = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Select"
        description="Menus suspensos para selecionar valores em formulários."
        type="components"
      />
      
      <div className="mt-6 space-y-8">
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">Select Básico</h2>
            
            <div className="space-y-4 mb-6 w-full max-w-xs">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Opção 1</SelectItem>
                  <SelectItem value="option2">Opção 2</SelectItem>
                  <SelectItem value="option3">Opção 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <CodeBlock 
            code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Selecione uma opção" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Opção 1</SelectItem>
    <SelectItem value="option2">Opção 2</SelectItem>
    <SelectItem value="option3">Opção 3</SelectItem>
  </SelectContent>
</Select>`}
            language="tsx"
            title="Implementação do Select Básico"
            showCode={false}
          />
        </div>
        
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">Select com Grupos</h2>
            
            <div className="space-y-4 mb-6 w-full max-w-xs">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Sudeste</SelectLabel>
                    <SelectItem value="sp">São Paulo</SelectItem>
                    <SelectItem value="rj">Rio de Janeiro</SelectItem>
                    <SelectItem value="mg">Minas Gerais</SelectItem>
                    <SelectItem value="es">Espírito Santo</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Sul</SelectLabel>
                    <SelectItem value="pr">Paraná</SelectItem>
                    <SelectItem value="sc">Santa Catarina</SelectItem>
                    <SelectItem value="rs">Rio Grande do Sul</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <CodeBlock 
            code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Selecione um estado" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Sudeste</SelectLabel>
      <SelectItem value="sp">São Paulo</SelectItem>
      <SelectItem value="rj">Rio de Janeiro</SelectItem>
      <SelectItem value="mg">Minas Gerais</SelectItem>
      <SelectItem value="es">Espírito Santo</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Sul</SelectLabel>
      <SelectItem value="pr">Paraná</SelectItem>
      <SelectItem value="sc">Santa Catarina</SelectItem>
      <SelectItem value="rs">Rio Grande do Sul</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
            language="tsx"
            title="Implementação do Select com Grupos"
            showCode={false}
          />
        </div>
        
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">Select Desabilitado</h2>
            
            <div className="space-y-4 mb-6 w-full max-w-xs">
              <Select disabled>
                <SelectTrigger>
                  <SelectValue placeholder="Indisponível" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Opção 1</SelectItem>
                  <SelectItem value="option2">Opção 2</SelectItem>
                  <SelectItem value="option3">Opção 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <CodeBlock 
            code={`<Select disabled>
  <SelectTrigger>
    <SelectValue placeholder="Indisponível" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Opção 1</SelectItem>
    <SelectItem value="option2">Opção 2</SelectItem>
    <SelectItem value="option3">Opção 3</SelectItem>
  </SelectContent>
</Select>`}
            language="tsx"
            title="Implementação do Select Desabilitado"
            showCode={false}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectPage;
