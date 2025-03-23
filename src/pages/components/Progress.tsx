import React from 'react';
import ComponentCard from '@/components/ComponentCard';
import { Progress } from '@/components/ui/progress';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import HeaderLibrary from '@/components/library-components/HeaderLibrary';

const ProgressPage = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(progress >= 100 ? 0 : progress + 10);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [progress]);
  
  const [manualProgress, setManualProgress] = useState(100);
  const restartProgress = () => {
    setManualProgress(0);
    const timer = setTimeout(() => setManualProgress(100), 2000);
    return () => clearTimeout(timer);
  };
  
  return (
    <div className="w-full animate-slide-in">
      <div className="mb-12">
        <HeaderLibrary 
          title="Progress"
          description="Progress indicators show the completion status of an operation or task."
          type="components"
        />
        
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            Import
          </h2>
          
          <pre className="bg-mui-sidebar p-4 rounded-md overflow-x-auto text-sm">
            <code>import {'{ Progress }'} from "@/components/ui/progress";</code>
          </pre>
        </div>
        
        <div className="space-y-12">
          <ComponentCard 
            title="Basic Progress" 
            description="A simple progress indicator with a percentage complete value."
            code={`<Progress value={33} />`}
          >
            <div className="max-w-md mx-auto py-6">
              <Progress value={33} />
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Determinate Progress" 
            description="Progress bars with different determinate values."
            code={`<div className="space-y-6">
  <div className="space-y-2">
    <p className="text-sm text-mui-text-secondary">25% Complete</p>
    <Progress value={25} />
  </div>
  
  <div className="space-y-2">
    <p className="text-sm text-mui-text-secondary">50% Complete</p>
    <Progress value={50} />
  </div>
  
  <div className="space-y-2">
    <p className="text-sm text-mui-text-secondary">75% Complete</p>
    <Progress value={75} />
  </div>
  
  <div className="space-y-2">
    <p className="text-sm text-mui-text-secondary">100% Complete</p>
    <Progress value={100} />
  </div>
</div>`}
          >
            <div className="max-w-md mx-auto py-6 space-y-6">
              <div className="space-y-2">
                <p className="text-sm text-mui-text-secondary">25% Complete</p>
                <Progress value={25} />
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-mui-text-secondary">50% Complete</p>
                <Progress value={50} />
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-mui-text-secondary">75% Complete</p>
                <Progress value={75} />
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-mui-text-secondary">100% Complete</p>
                <Progress value={100} />
              </div>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Animated Progress" 
            description="A progress bar that animates its value changes."
            code={`const [progress, setProgress] = useState(0);
  
useEffect(() => {
  const timer = setTimeout(() => {
    setProgress(progress >= 100 ? 0 : progress + 10);
  }, 1000);
  
  return () => clearTimeout(timer);
}, [progress]);

<div className="space-y-2">
  <p className="text-sm text-mui-text-secondary">{progress}% Complete</p>
  <Progress value={progress} />
</div>`}
          >
            <div className="max-w-md mx-auto py-6">
              <div className="space-y-2">
                <p className="text-sm text-mui-text-secondary">{progress}% Complete</p>
                <Progress value={progress} />
              </div>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Progress with Custom Height" 
            description="Progress bars with different heights."
            code={`<div className="space-y-6">
  <div className="space-y-2">
    <p className="text-sm text-mui-text-secondary">Default Height</p>
    <Progress value={50} />
  </div>
  
  <div className="space-y-2">
    <p className="text-sm text-mui-text-secondary">Small Height</p>
    <Progress value={50} className="h-2" />
  </div>
  
  <div className="space-y-2">
    <p className="text-sm text-mui-text-secondary">Large Height</p>
    <Progress value={50} className="h-6" />
  </div>
</div>`}
          >
            <div className="max-w-md mx-auto py-6 space-y-6">
              <div className="space-y-2">
                <p className="text-sm text-mui-text-secondary">Default Height</p>
                <Progress value={50} />
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-mui-text-secondary">Small Height</p>
                <Progress value={50} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-mui-text-secondary">Large Height</p>
                <Progress value={50} className="h-6" />
              </div>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Progress with Custom Colors" 
            description="Progress bars with custom colors."
            code={`<div className="space-y-6">
  <div className="space-y-2">
    <p className="text-sm text-mui-text-secondary">Primary</p>
    <Progress value={50} className="bg-primary-light [&>div]:bg-primary-main" />
  </div>
  
  <div className="space-y-2">
    <p className="text-sm text-mui-text-secondary">Secondary</p>
    <Progress value={50} className="bg-secondary-light [&>div]:bg-secondary-main" />
  </div>
  
  <div className="space-y-2">
    <p className="text-sm text-mui-text-secondary">Success</p>
    <Progress value={50} className="bg-success-light [&>div]:bg-success-main" />
  </div>
  
  <div className="space-y-2">
    <p className="text-sm text-mui-text-secondary">Error</p>
    <Progress value={50} className="bg-error-light [&>div]:bg-error-main" />
  </div>
</div>`}
          >
            <div className="max-w-md mx-auto py-6 space-y-6">
              <div className="space-y-2">
                <p className="text-sm text-mui-text-secondary">Primary</p>
                <Progress value={50} className="bg-primary-light [&>div]:bg-primary-main" />
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-mui-text-secondary">Secondary</p>
                <Progress value={50} className="bg-secondary-light [&>div]:bg-secondary-main" />
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-mui-text-secondary">Success</p>
                <Progress value={50} className="bg-success-light [&>div]:bg-success-main" />
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-mui-text-secondary">Error</p>
                <Progress value={50} className="bg-error-light [&>div]:bg-error-main" />
              </div>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Progress with Restart" 
            description="A progress bar with a button to restart it."
            code={`const [manualProgress, setManualProgress] = useState(100);

const restartProgress = () => {
  setManualProgress(0);
  const timer = setTimeout(() => setManualProgress(100), 2000);
  return () => clearTimeout(timer);
};

<div className="space-y-4">
  <Progress value={manualProgress} />
  <Button onClick={restartProgress}>Restart</Button>
</div>`}
          >
            <div className="max-w-md mx-auto py-6 space-y-4">
              <Progress value={manualProgress} />
              <Button onClick={restartProgress}>Restart</Button>
            </div>
          </ComponentCard>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            API Reference
          </h2>
          
          <div className="border border-mui-border rounded-lg overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-mui-sidebar">
                  <TableHead className="w-1/4">Prop</TableHead>
                  <TableHead className="w-1/4">Type</TableHead>
                  <TableHead className="w-1/4">Default</TableHead>
                  <TableHead className="w-1/4">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">value</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">number</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">The current progress value (0-100).</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">className</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">string</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">Additional CSS classes to apply to the progress bar.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">max</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">number</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">100</TableCell>
                  <TableCell className="text-mui-text-secondary">The maximum value, used to calculate the percentage.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
