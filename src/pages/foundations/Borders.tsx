
import React, { useState, useEffect } from 'react';
import { Separator } from '@/components/ui/separator';
import { TailwindTabs } from '@/components/ui/tabs';
import Header from '@/components/library-components/Header';
import DocumentationSkeleton from '@/components/library-components/DocumentationSkeleton';
import CodeBlock from '@/components/CodeBlock';
import { Copy, CheckCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BorderRadiusSampleProps {
  size: string;
  value: string;
  className?: string;
}

const BorderRadiusSample: React.FC<BorderRadiusSampleProps> = ({ size, value, className }) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`rounded-${size}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-4">
        <div 
          className={cn(
            "w-16 h-16 bg-gray-300 dark:bg-gray-700",
            size === "0" ? "rounded-none" : 
            size === "050" ? "rounded-sm" : 
            size === "100" ? "rounded" : 
            size === "150" ? "rounded-md" : 
            size === "200" ? "rounded-lg" : 
            size === "300" ? "rounded-xl" : 
            size === "400" ? "rounded-2xl" : 
            size === "500" ? "rounded-3xl" : 
            size === "750" ? "rounded-[30px]" : 
            size === "full" ? "rounded-full" : "",
            className
          )} 
        />
        <div 
          className="bg-amber-700/90 text-amber-50 px-3 py-2 rounded cursor-pointer flex items-center gap-2"
          onClick={copyToClipboard}
        >
          <span>--p-border-radius-{size}</span>
          <button className="text-amber-50/80 hover:text-amber-50">
            {copied ? <CheckCheck size={16} /> : <Copy size={16} />}
          </button>
        </div>
      </div>
      <div className="text-right font-mono">
        {
          size === "0" ? "0px" : 
          size === "050" ? "2px" : 
          size === "100" ? "4px" : 
          size === "150" ? "6px" : 
          size === "200" ? "8px" : 
          size === "300" ? "12px" : 
          size === "400" ? "16px" : 
          size === "500" ? "20px" : 
          size === "750" ? "30px" : 
          size === "full" ? "9999px" : ""
        }
      </div>
    </div>
  );
};

interface BorderWidthSampleProps {
  size: string;
  value: string;
  className?: string;
}

const BorderWidthSample: React.FC<BorderWidthSampleProps> = ({ size, value, className }) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`border-${size}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-4">
        <div className="w-64 flex items-center">
          <div 
            className={cn(
              "w-full h-px bg-gray-800 dark:bg-gray-200",
              size === "0" ? "h-0" : 
              size === "0165" ? "h-[0.66px]" : 
              size === "025" ? "h-[1px]" : 
              size === "050" ? "h-[2px]" : 
              size === "100" ? "h-[4px]" : "",
              className
            )} 
          />
        </div>
        <div 
          className="bg-amber-700/90 text-amber-50 px-3 py-2 rounded cursor-pointer flex items-center gap-2"
          onClick={copyToClipboard}
        >
          <span>--p-border-width-{size}</span>
          <button className="text-amber-50/80 hover:text-amber-50">
            {copied ? <CheckCheck size={16} /> : <Copy size={16} />}
          </button>
        </div>
      </div>
      <div className="text-right font-mono">
        {
          size === "0" ? "0px" : 
          size === "0165" ? "0.66px" : 
          size === "025" ? "1px" : 
          size === "050" ? "2px" : 
          size === "100" ? "4px" : ""
        }
      </div>
    </div>
  );
};

const BordersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('radius');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const radiusSizes = [
    { size: "0", value: "0px" },
    { size: "050", value: "2px" },
    { size: "100", value: "4px" },
    { size: "150", value: "6px" },
    { size: "200", value: "8px" },
    { size: "300", value: "12px" },
    { size: "400", value: "16px" },
    { size: "500", value: "20px" },
    { size: "750", value: "30px" },
    { size: "full", value: "9999px" },
  ];

  const widthSizes = [
    { size: "0", value: "0px" },
    { size: "0165", value: "0.66px" },
    { size: "025", value: "1px" },
    { size: "050", value: "2px" },
    { size: "100", value: "4px" },
  ];

  if (isLoading) {
    return <DocumentationSkeleton />;
  }

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Borders" 
        description="Sistema de bordas para o design system, incluindo border-radius e border-width."
        type="foundations" 
      />

      <div className="mt-8">
        <TailwindTabs 
          defaultValue="radius" 
          className="mt-6" 
          tabs={[
            { name: 'Border Radius', value: 'radius' },
            { name: 'Border Width', value: 'width' },
            { name: 'Uso', value: 'usage' }
          ]} 
          variant="pillsGray" 
          onChange={value => setActiveTab(value)} 
        />

        <div className="mt-6">
          {activeTab === 'radius' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-medium mb-4">Border Radius</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Utilize estas variáveis para aplicar border-radius consistentes em toda a interface. 
                  Os valores seguem uma escala definida para manter a consistência visual.
                </p>

                <div className="mt-8 bg-black p-6 rounded-lg text-white">
                  {radiusSizes.map((item) => (
                    <BorderRadiusSample 
                      key={item.size} 
                      size={item.size} 
                      value={item.value} 
                    />
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-medium mb-4">Como usar border radius no código</h3>
                  <div className="space-y-4">
                    <CodeBlock 
                      code={`// Utilizando classes do Tailwind para border-radius
<div className="rounded-none">Border Radius: 0px</div>
<div className="rounded-sm">Border Radius: 2px</div>
<div className="rounded">Border Radius: 4px</div>
<div className="rounded-md">Border Radius: 6px</div>
<div className="rounded-lg">Border Radius: 8px</div>
<div className="rounded-xl">Border Radius: 12px</div>
<div className="rounded-2xl">Border Radius: 16px</div>
<div className="rounded-3xl">Border Radius: 20px</div>
<div className="rounded-[30px]">Border Radius: 30px</div>
<div className="rounded-full">Border Radius: 9999px</div>`} 
                      language="jsx" 
                      title="Exemplos de uso no React com Tailwind" 
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'width' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-medium mb-4">Border Width</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Utilize estas variáveis para aplicar border-width consistentes em toda a interface.
                  Os valores são otimizados para diversos contextos de uso, desde bordas sutis até mais pronunciadas.
                </p>

                <div className="mt-8 bg-black p-6 rounded-lg text-white">
                  {widthSizes.map((item) => (
                    <BorderWidthSample 
                      key={item.size} 
                      size={item.size} 
                      value={item.value} 
                    />
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-medium mb-4">Como usar border width no código</h3>
                  <div className="space-y-4">
                    <CodeBlock 
                      code={`// Utilizando classes do Tailwind para border-width
<div className="border-0">Border Width: 0px</div>
<div className="border-[0.66px]">Border Width: 0.66px</div>
<div className="border">Border Width: 1px</div>
<div className="border-2">Border Width: 2px</div>
<div className="border-4">Border Width: 4px</div>`} 
                      language="jsx" 
                      title="Exemplos de uso no React com Tailwind" 
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'usage' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-medium mb-4">Diretrizes de Uso</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  As bordas são elementos importantes para criar hierarquia visual, separar conteúdos e indicar interatividade. 
                  Aqui estão algumas diretrizes para utilizar bordas de forma eficaz em seu design.
                </p>

                <div className="mt-4 space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Quando usar border radius</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Use <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">rounded-sm</code> (2px) ou <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">rounded</code> (4px) para elementos pequenos como tags, badges e inputs</li>
                      <li>Use <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">rounded-md</code> (6px) ou <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">rounded-lg</code> (8px) para cards, botões e elementos de UI de tamanho médio</li>
                      <li>Use <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">rounded-xl</code> (12px) ou <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">rounded-2xl</code> (16px) para modais, painéis e elementos maiores</li>
                      <li>Use <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">rounded-full</code> para avatares, indicadores de status e elementos circulares</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Quando usar border width</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Use <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">border</code> (1px) para a maioria dos casos, como divisórias, inputs e cards</li>
                      <li>Use <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">border-2</code> (2px) para elementos que precisam de ênfase, como estados focused ou selecionados</li>
                      <li>Use <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">border-[0.66px]</code> para bordas sutis em interfaces densas</li>
                      <li>Use <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">border-4</code> (4px) para ênfase visual forte, como destacar conteúdo importante</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Combinando border radius e width</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Para criar uma experiência visual coesa, combine os valores de border radius e width seguindo estas diretrizes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Elementos pequenos: border-width menor + border-radius menor</li>
                      <li>Elementos médios: border-width médio + border-radius médio</li>
                      <li>Elementos grandes: considere border-width maior + border-radius maior</li>
                    </ul>
                    
                    <div className="mt-6 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      <h4 className="text-md font-medium mb-4">Exemplo de componente com bordas:</h4>
                      <div className="p-4 border-2 border-primary-main rounded-lg bg-white dark:bg-gray-900">
                        <p className="text-gray-700 dark:text-gray-300">
                          Este card utiliza <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">border-2</code> com <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">rounded-lg</code> para criar um componente visualmente coeso.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BordersPage;
