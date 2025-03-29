
/**
 * @protected
 * ATENÇÃO: Este arquivo contém conteúdo finalizado e aprovado.
 * Não deve ser alterado diretamente pelo assistente AI.
 * Apenas atualizações de componentes devem ser refletidas.
 */

import React from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { TailwindTabs } from '@/components/ui/tabs';
import Header from '@/components/library-components/Header';
import { Folder, Users, Calendar, FileText, Rocket, Factory, Settings, PenTool } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';

const TabsPage = () => {
  return <div className="w-full animate-slide-in">
      <Header title="Tabs" description="Tabs organize content into multiple sections and allow users to navigate between them." type="components" />
      
      <div className="mb-12">
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            Import
          </h2>
          
          <pre className="bg-mui-sidebar p-4 rounded-md overflow-x-auto text-sm">
            <code>import {'{ TailwindTabs }'} from "@/components/ui/tabs";</code>
          </pre>
        </div>
        
        <div className="space-y-12">
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Tabs with Underline (Default)</h3>
              <div className="w-full max-w-md mx-auto">
                <TailwindTabs tabs={[{
                  name: 'My Account',
                  value: 'account'
                }, {
                  name: 'Company',
                  value: 'company'
                }, {
                  name: 'Team Members',
                  value: 'team'
                }, {
                  name: 'Billing',
                  value: 'billing'
                }]} variant="underline" />
                <div className="p-4 border border-gray-200 rounded-md mt-3">
                  <h3 className="text-lg font-medium mb-2">Account Settings</h3>
                  <p className="text-sm text-gray-500">
                    Manage your account settings and preferences.
                  </p>
                </div>
              </div>
            </div>
            <CodeBlock 
              code={`<TailwindTabs
  tabs={[
    { name: 'My Account', value: 'account' },
    { name: 'Company', value: 'company' },
    { name: 'Team Members', value: 'team' },
    { name: 'Billing', value: 'billing' }
  ]}
  variant="underline"
/>`}
              language="tsx"
              title="Implementation of Tabs with Underline"
              showCode={false}
            />
          </div>

          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Tabs in Pills</h3>
              <div className="w-full max-w-md mx-auto">
                <TailwindTabs tabs={[{
                  name: 'Dashboard',
                  value: 'dashboard'
                }, {
                  name: 'Team',
                  value: 'team'
                }, {
                  name: 'Projects',
                  value: 'projects'
                }, {
                  name: 'Calendar',
                  value: 'calendar'
                }]} variant="pills" />
                <div className="p-4 border border-gray-200 rounded-md mt-3">
                  <p className="text-sm">Dashboard content</p>
                </div>
              </div>
            </div>
            <CodeBlock 
              code={`<TailwindTabs
  tabs={[
    { name: 'Dashboard', value: 'dashboard' },
    { name: 'Team', value: 'team' },
    { name: 'Projects', value: 'projects' },
    { name: 'Calendar', value: 'calendar' },
  ]}
  variant="pills"
/>`}
              language="tsx"
              title="Implementation of Tabs in Pills"
              showCode={false}
            />
          </div>

          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Tabs in Pills on Gray</h3>
              <div className="w-full max-w-md mx-auto">
                <TailwindTabs tabs={[{
                  name: 'Dashboard',
                  value: 'dashboard'
                }, {
                  name: 'Team',
                  value: 'team'
                }, {
                  name: 'Projects',
                  value: 'projects'
                }, {
                  name: 'Calendar',
                  value: 'calendar'
                }]} variant="pillsGray" />
                <div className="p-4 border border-gray-200 rounded-md mt-3">
                  <p className="text-sm">Dashboard content</p>
                </div>
              </div>
            </div>
            <CodeBlock 
              code={`<TailwindTabs
  tabs={[
    { name: 'Dashboard', value: 'dashboard' },
    { name: 'Team', value: 'team' },
    { name: 'Projects', value: 'projects' },
    { name: 'Calendar', value: 'calendar' },
  ]}
  variant="pillsGray"
/>`}
              language="tsx"
              title="Implementation of Tabs in Pills on Gray"
              showCode={false}
            />
          </div>

          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Tabs in Pills with Brand Color</h3>
              <div className="w-full max-w-md mx-auto">
                <TailwindTabs tabs={[{
                  name: 'Dashboard',
                  value: 'dashboard'
                }, {
                  name: 'Team',
                  value: 'team'
                }, {
                  name: 'Projects',
                  value: 'projects'
                }, {
                  name: 'Calendar',
                  value: 'calendar'
                }]} variant="pillsBrand" />
                <div className="p-4 border border-gray-200 rounded-md mt-3">
                  <p className="text-sm">Dashboard content</p>
                </div>
              </div>
            </div>
            <CodeBlock 
              code={`<TailwindTabs
  tabs={[
    { name: 'Dashboard', value: 'dashboard' },
    { name: 'Team', value: 'team' },
    { name: 'Projects', value: 'projects' },
    { name: 'Calendar', value: 'calendar' },
  ]}
  variant="pillsBrand"
/>`}
              language="tsx"
              title="Implementation of Tabs in Pills with Brand Color"
              showCode={false}
            />
          </div>

          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Full-width Tabs with Underline</h3>
              <div className="w-full max-w-md mx-auto">
                <TailwindTabs tabs={[{
                  name: 'Dashboard',
                  value: 'dashboard'
                }, {
                  name: 'Team',
                  value: 'team'
                }, {
                  name: 'Projects',
                  value: 'projects'
                }]} variant="fullWidth" />
                <div className="p-4 border-x border-b border-gray-200 rounded-b-md">
                  <p className="text-sm">Dashboard content</p>
                </div>
              </div>
            </div>
            <CodeBlock 
              code={`<TailwindTabs
  tabs={[
    { name: 'Dashboard', value: 'dashboard' },
    { name: 'Team', value: 'team' },
    { name: 'Projects', value: 'projects' },
  ]}
  variant="fullWidth"
/>`}
              language="tsx"
              title="Implementation of Full-width Tabs with Underline"
              showCode={false}
            />
          </div>

          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Bar with Underline</h3>
              <div className="w-full max-w-md mx-auto">
                <TailwindTabs tabs={[{
                  name: 'Overview',
                  value: 'overview'
                }, {
                  name: 'Features',
                  value: 'features'
                }, {
                  name: 'Pricing',
                  value: 'pricing'
                }, {
                  name: 'FAQs',
                  value: 'faqs'
                }]} variant="bar" />
                <div className="p-4 mt-4">
                  <p className="text-sm">Overview content</p>
                </div>
              </div>
            </div>
            <CodeBlock 
              code={`<TailwindTabs
  tabs={[
    { name: 'Overview', value: 'overview' },
    { name: 'Features', value: 'features' },
    { name: 'Pricing', value: 'pricing' },
    { name: 'FAQs', value: 'faqs' },
  ]}
  variant="bar"
/>`}
              language="tsx"
              title="Implementation of Bar with Underline"
              showCode={false}
            />
          </div>

          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Tabs with Underline and Badges</h3>
              <div className="w-full max-w-md mx-auto">
                <TailwindTabs tabs={[{
                  name: 'Inbox',
                  value: 'inbox'
                }, {
                  name: 'Spam',
                  value: 'spam'
                }, {
                  name: 'Archived',
                  value: 'archived'
                }]} variant="underlineBadges" />
                <div className="p-4 border-x border-b border-gray-200 rounded-b-md">
                  <p className="text-sm">Inbox content</p>
                </div>
              </div>
            </div>
            <CodeBlock 
              code={`<TailwindTabs
  tabs={[
    { name: 'Inbox', value: 'inbox' },
    { name: 'Spam', value: 'spam' },
    { name: 'Archived', value: 'archived' },
  ]}
  variant="underlineBadges"
/>`}
              language="tsx"
              title="Implementation of Tabs with Underline and Badges"
              showCode={false}
            />
          </div>

          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Project Tabs on Gray</h3>
              <div className="w-full mx-auto">
                <TailwindTabs
                  tabs={[
                    { 
                      name: 'Especificação',
                      value: 'specification',
                      icon: <Settings className="h-5 w-5" />,
                      secondaryText: "Prazo 03/05/2024",
                      chipStatus: "Concluído"
                    },
                    { 
                      name: 'Fornecedor',
                      value: 'supplier',
                      icon: <Factory className="h-5 w-5" />,
                      secondaryText: "Prazo 03/05/2024",
                      chipStatus: "Em andamento"
                    },
                    { 
                      name: 'Embalagem',
                      value: 'packaging',
                      icon: <PenTool className="h-5 w-5" />,
                      secondaryText: "Prazo 03/05/2024",
                      chipStatus: "Não iniciado"
                    },
                    { 
                      name: 'Produção',
                      value: 'production',
                      icon: <Rocket className="h-5 w-5" />,
                      secondaryText: "Prazo 03/05/2024",
                      chipStatus: "Em breve"
                    }
                  ]}
                  variant="projectTabs"
                  className="w-full"
                />
              </div>
            </div>
            <CodeBlock 
              code={`<TailwindTabs
  tabs={[
    { 
      name: 'Especificação',
      value: 'specification',
      icon: <Settings className="h-5 w-5" />,
      secondaryText: "Prazo 03/05/2024",
      chipStatus: "Concluído"
    },
    { 
      name: 'Fornecedor',
      value: 'supplier',
      icon: <Factory className="h-5 w-5" />,
      secondaryText: "Prazo 03/05/2024",
      chipStatus: "Em andamento"
    },
    { 
      name: 'Embalagem',
      value: 'packaging',
      icon: <PenTool className="h-5 w-5" />,
      secondaryText: "Prazo 03/05/2024",
      chipStatus: "Não iniciado"
    },
    { 
      name: 'Produção',
      value: 'production',
      icon: <Rocket className="h-5 w-5" />,
      secondaryText: "Prazo 03/05/2024",
      chipStatus: "Em breve"
    }
  ]}
  variant="projectTabs"
  className="w-full"
/>`}
              language="tsx"
              title="Implementation of Project Tabs on Gray"
              showCode={false}
            />
          </div>
        </div>
      </div>
    </div>;
};

export default TabsPage;
