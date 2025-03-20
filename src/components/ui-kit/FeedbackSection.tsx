
import React from 'react';
import ComponentPreview from '@/components/ComponentPreview';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const FeedbackSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Feedback</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ComponentPreview 
          title="Alerts" 
          imageSrc="/lovable-uploads/4a083c56-06a7-44c8-b5e7-a23b6492107c.png" 
          variantCount={4} 
        />
        
        <ComponentPreview 
          title="Empty States" 
          imageSrc="/lovable-uploads/0ab15921-b732-4f41-b1d8-9be8074fdc29.png" 
          variantCount={3} 
        />
        
        <Dialog>
          <DialogTrigger asChild>
            <div>
              <ComponentPreview 
                title="Dialog"
                imageSrc="/lovable-uploads/9edc0220-a8fc-4935-a6d0-d27cd6c6b49f.png" 
                variantCount={2} 
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Example Dialog</DialogTitle>
              <DialogDescription>
                This is an example of a dialog component from our UI kit.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can see how our dialog and alert components look together.
                </AlertDescription>
              </Alert>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default FeedbackSection;
