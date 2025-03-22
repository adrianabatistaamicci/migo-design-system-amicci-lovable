
import React from 'react';
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import { toast } from "sonner";
import { Check, Info, AlertTriangle, X } from "lucide-react";

const NotificationToasts = () => {
  const { toast: shadcnToast } = useToast();

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Notification Toasts"
        description="Toasts provide brief messages about app processes at the bottom or top of the screen."
        type="components"
      />
      
      <div className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Import</h2>
          <pre className="bg-zinc-950 text-zinc-50 p-4 rounded-md overflow-x-auto">
            <code>{`// For shadcn/ui toast
import { useToast } from "@/hooks/use-toast";

// For sonner toast
import { toast } from "sonner";`}</code>
          </pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Shadcn/ui Toast</h2>
            
            <ComponentCard 
              title="Basic Toast" 
              description="A simple toast notification."
              code={`const { toast } = useToast();

<Button
  variant="outline"
  onClick={() => {
    toast({
      title: "Scheduled",
      description: "Your meeting has been scheduled.",
    });
  }}
>
  Show Toast
</Button>`}
            >
              <div className="flex justify-center p-6">
                <Button
                  variant="outline"
                  onClick={() => {
                    shadcnToast({
                      title: "Scheduled",
                      description: "Your meeting has been scheduled.",
                    });
                  }}
                >
                  Show Toast
                </Button>
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Toast with Action" 
              description="A toast with an additional action button."
              code={`const { toast } = useToast();

<Button
  variant="outline"
  onClick={() => {
    toast({
      title: "New message",
      description: "You have 1 unread message",
      action: (
        <Button variant="outline" size="sm">
          View
        </Button>
      ),
    });
  }}
>
  Show Toast with Action
</Button>`}
            >
              <div className="flex justify-center p-6">
                <Button
                  variant="outline"
                  onClick={() => {
                    shadcnToast({
                      title: "New message",
                      description: "You have 1 unread message",
                      action: (
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      ),
                    });
                  }}
                >
                  Show Toast with Action
                </Button>
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Destructive Toast" 
              description="A toast for destructive actions or errors."
              code={`const { toast } = useToast();

<Button
  variant="outline"
  onClick={() => {
    toast({
      variant: "destructive",
      title: "Error",
      description: "There was an error processing your request.",
    });
  }}
>
  Show Destructive Toast
</Button>`}
            >
              <div className="flex justify-center p-6">
                <Button
                  variant="outline"
                  onClick={() => {
                    shadcnToast({
                      variant: "destructive",
                      title: "Error",
                      description: "There was an error processing your request.",
                    });
                  }}
                >
                  Show Destructive Toast
                </Button>
              </div>
            </ComponentCard>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Sonner Toast</h2>
            
            <ComponentCard 
              title="Basic Sonner Toast" 
              description="A simple toast notification using Sonner."
              code={`import { toast } from "sonner";

<Button
  variant="outline"
  onClick={() => {
    toast("Event has been created", {
      description: "Sunday, December 21st at 4:30PM",
    });
  }}
>
  Show Sonner Toast
</Button>`}
            >
              <div className="flex justify-center p-6">
                <Button
                  variant="outline"
                  onClick={() => {
                    toast("Event has been created", {
                      description: "Sunday, December 21st at 4:30PM",
                    });
                  }}
                >
                  Show Sonner Toast
                </Button>
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Success Toast" 
              description="A success toast notification."
              code={`import { toast } from "sonner";
import { Check } from "lucide-react";

<Button
  variant="outline"
  onClick={() => {
    toast.success("Successfully saved!", {
      description: "Your changes have been saved",
      icon: <Check className="h-4 w-4" />,
    });
  }}
>
  Show Success Toast
</Button>`}
            >
              <div className="flex justify-center p-6">
                <Button
                  variant="outline"
                  onClick={() => {
                    toast.success("Successfully saved!", {
                      description: "Your changes have been saved",
                      icon: <Check className="h-4 w-4" />,
                    });
                  }}
                >
                  Show Success Toast
                </Button>
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Error Toast" 
              description="An error toast notification."
              code={`import { toast } from "sonner";
import { X } from "lucide-react";

<Button
  variant="outline"
  onClick={() => {
    toast.error("Error occurred", {
      description: "There was a problem with your request",
      icon: <X className="h-4 w-4" />,
    });
  }}
>
  Show Error Toast
</Button>`}
            >
              <div className="flex justify-center p-6">
                <Button
                  variant="outline"
                  onClick={() => {
                    toast.error("Error occurred", {
                      description: "There was a problem with your request",
                      icon: <X className="h-4 w-4" />,
                    });
                  }}
                >
                  Show Error Toast
                </Button>
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Info Toast" 
              description="An informational toast notification."
              code={`import { toast } from "sonner";
import { Info } from "lucide-react";

<Button
  variant="outline"
  onClick={() => {
    toast.info("Did you know?", {
      description: "You can customize these toast notifications",
      icon: <Info className="h-4 w-4" />,
    });
  }}
>
  Show Info Toast
</Button>`}
            >
              <div className="flex justify-center p-6">
                <Button
                  variant="outline"
                  onClick={() => {
                    toast.info("Did you know?", {
                      description: "You can customize these toast notifications",
                      icon: <Info className="h-4 w-4" />,
                    });
                  }}
                >
                  Show Info Toast
                </Button>
              </div>
            </ComponentCard>

            <ComponentCard 
              title="Warning Toast" 
              description="A warning toast notification."
              code={`import { toast } from "sonner";
import { AlertTriangle } from "lucide-react";

<Button
  variant="outline"
  onClick={() => {
    toast.warning("Warning", {
      description: "Your storage is almost full",
      icon: <AlertTriangle className="h-4 w-4" />,
    });
  }}
>
  Show Warning Toast
</Button>`}
            >
              <div className="flex justify-center p-6">
                <Button
                  variant="outline"
                  onClick={() => {
                    toast.warning("Warning", {
                      description: "Your storage is almost full",
                      icon: <AlertTriangle className="h-4 w-4" />,
                    });
                  }}
                >
                  Show Warning Toast
                </Button>
              </div>
            </ComponentCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationToasts;
