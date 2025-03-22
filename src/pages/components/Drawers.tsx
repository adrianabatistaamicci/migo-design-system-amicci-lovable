
import React, { useState } from 'react';
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Drawers = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Drawers"
        description="Drawers slide in from the edge of the screen and contain supplementary content."
        type="components"
      />
      
      <div className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Import</h2>
          <pre className="bg-zinc-950 text-zinc-50 p-4 rounded-md overflow-x-auto">
            <code>{`import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";`}</code>
          </pre>
        </div>

        <ComponentCard 
          title="Basic Drawer" 
          description="A simple drawer that slides up from the bottom of the screen."
          code={`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>Basic Drawer</DrawerTitle>
        <DrawerDescription>This is a basic drawer example.</DrawerDescription>
      </DrawerHeader>
      <div className="p-4">
        <p>Drawer content goes here</p>
      </div>
      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`}
        >
          <div className="flex justify-center p-6">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Open Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>Basic Drawer</DrawerTitle>
                    <DrawerDescription>This is a basic drawer example.</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4">
                    <p>Drawer content goes here</p>
                  </div>
                  <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </ComponentCard>

        <ComponentCard 
          title="Drawer with Form" 
          description="A drawer containing a form."
          code={`<Drawer>
  <DrawerTrigger asChild>
    <Button>Edit Profile</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>Edit Profile</DrawerTitle>
        <DrawerDescription>Make changes to your profile here.</DrawerDescription>
      </DrawerHeader>
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
      </div>
      <DrawerFooter>
        <Button>Save changes</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`}
        >
          <div className="flex justify-center p-6">
            <Drawer>
              <DrawerTrigger asChild>
                <Button>Edit Profile</Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>Edit Profile</DrawerTitle>
                    <DrawerDescription>Make changes to your profile here.</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <DrawerFooter>
                    <Button>Save changes</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </ComponentCard>

        <ComponentCard 
          title="Controlled Drawer" 
          description="A drawer with controlled state."
          code={`const [isOpen, setIsOpen] = useState(false);

<Drawer open={isOpen} onOpenChange={setIsOpen}>
  <DrawerTrigger asChild>
    <Button variant="outline">Controlled Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>Controlled Drawer</DrawerTitle>
        <DrawerDescription>This drawer is controlled using React state.</DrawerDescription>
      </DrawerHeader>
      <div className="p-4">
        <p>This drawer can be programmatically controlled.</p>
      </div>
      <DrawerFooter>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`}
        >
          <div className="flex justify-center p-6">
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <Button variant="outline">Controlled Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>Controlled Drawer</DrawerTitle>
                    <DrawerDescription>This drawer is controlled using React state.</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4">
                    <p>This drawer can be programmatically controlled.</p>
                  </div>
                  <DrawerFooter>
                    <Button onClick={() => setIsOpen(false)}>Close</Button>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
};

export default Drawers;
