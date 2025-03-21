import React from 'react';
import ComponentCard from '@/components/ComponentCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Chip } from '@/components/ui/chip';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table"

const ColorSwatch = ({ color, name }: { color: string; name: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-24 h-24 rounded-md shadow-md" style={{ backgroundColor: color }}></div>
    <p className="mt-2 text-sm text-gray-500">{name}</p>
    <p className="text-sm text-gray-700">{color}</p>
  </div>
);

const BaseColorsTable = ({ colors }: { colors: { name: string; hex: string }[] }) => (
  <div className="grid grid-cols-3 gap-6">
    {colors.map((color) => (
      <ColorSwatch key={color.name} color={color.hex} name={color.name} />
    ))}
  </div>
);

const PaletteTable = ({ palette }: { palette: { name: string; shades: { shade: string; hex: string }[] } }) => (
  <div className="space-y-6">
    {Object.entries(palette).map(([colorName, shades]) => (
      <div key={colorName} className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">{colorName}</h3>
        <div className="grid grid-cols-5 gap-4">
          {shades.map((shade) => (
            <div key={shade.shade} className="flex flex-col items-center">
              <div className={`w-20 h-20 rounded-md shadow-md`} style={{ backgroundColor: shade.hex }}></div>
              <p className="mt-2 text-sm text-gray-500">{shade.shade}</p>
              <p className="text-sm text-gray-700">{shade.hex}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const baseColors = [
  { name: "White", hex: "#FFFFFF" },
  { name: "Black", hex: "#000000" },
  { name: "Gray", hex: "#808080" },
  { name: "Red", hex: "#FF0000" },
  { name: "Green", hex: "#00FF00" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Orange", hex: "#FFA500" },
  { name: "Purple", hex: "#800080" },
  { name: "Brown", hex: "#A52A2A" },
  { name: "Pink", hex: "#FFC0CB" },
  { name: "Teal", hex: "#008080" },
  { name: "Lime", hex: "#00FF00" },
  { name: "Indigo", hex: "#4B0082" },
  { name: "Violet", hex: "#EE82EE" },
  { name: "Magenta", hex: "#FF00FF" },
];

const semanticPalette = {
  primary: [
    { shade: "50", hex: "#E3F2FD" },
    { shade: "100", hex: "#BBDEFB" },
    { shade: "200", hex: "#90CAF9" },
    { shade: "300", hex: "#64B5F6" },
    { shade: "400", hex: "#42A5F5" },
    { shade: "500", hex: "#2196F3" },
    { shade: "600", hex: "#1E88E5" },
    { shade: "700", hex: "#1976D2" },
    { shade: "800", hex: "#1565C0" },
    { shade: "900", hex: "#0D47A1" },
  ],
  secondary: [
    { shade: "50", hex: "#FCE4EC" },
    { shade: "100", hex: "#F8BBD0" },
    { shade: "200", hex: "#F48FB1" },
    { shade: "300", hex: "#F06292" },
    { shade: "400", hex: "#EC407A" },
    { shade: "500", hex: "#E91E63" },
    { shade: "600", hex: "#D81B60" },
    { shade: "700", hex: "#C2185B" },
    { shade: "800", hex: "#AD1457" },
    { shade: "900", hex: "#880E4F" },
  ],
  success: [
    { shade: "50", hex: "#E8F5E9" },
    { shade: "100", hex: "#C8E6C9" },
    { shade: "200", hex: "#A5D6A7" },
    { shade: "300", hex: "#81C784" },
    { shade: "400", hex: "#66BB6A" },
    { shade: "500", hex: "#4CAF50" },
    { shade: "600", hex: "#43A047" },
    { shade: "700", hex: "#388E3C" },
    { shade: "800", hex: "#2E7D32" },
    { shade: "900", hex: "#1B5E20" },
  ],
  error: [
    { shade: "50", hex: "#FFEBEE" },
    { shade: "100", hex: "#FFCDD2" },
    { shade: "200", hex: "#EF9A9A" },
    { shade: "300", hex: "#E57373" },
    { shade: "400", hex: "#EF5350" },
    { shade: "500", hex: "#F44336" },
    { shade: "600", hex: "#E53935" },
    { shade: "700", hex: "#D32F2F" },
    { shade: "800", hex: "#C62828" },
    { shade: "900", hex: "#B71C1C" },
  ],
  warning: [
    { shade: "50", hex: "#FFFDE7" },
    { shade: "100", hex: "#FFF9C4" },
    { shade: "200", hex: "#FFF59D" },
    { shade: "300", hex: "#FFF176" },
    { shade: "400", hex: "#FFEE58" },
    { shade: "500", hex: "#FFEB3B" },
    { shade: "600", hex: "#FDD835" },
    { shade: "700", hex: "#FBC02D" },
    { shade: "800", hex: "#F9A825" },
    { shade: "900", hex: "#F57F17" },
  ],
  info: [
    { shade: "50", hex: "#E1F5FE" },
    { shade: "100", hex: "#B3E5FC" },
    { shade: "200", hex: "#81D4FA" },
    { shade: "300", hex: "#4FC3F7" },
    { shade: "400", hex: "#29B6F6" },
    { shade: "500", hex: "#03A9F4" },
    { shade: "600", hex: "#039BE5" },
    { shade: "700", hex: "#0288D1" },
    { shade: "800", hex: "#0277BD" },
    { shade: "900", hex: "#01579B" },
  ],
};

const ColorApplications = () => {
  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Component Color Applications</h2>
      
      <ComponentCard
        title="Buttons"
        description="Buttons use the palette colors with different variants"
        code={`// Primary Button
<Button variant="default">Primary Button</Button>

// Secondary Button  
<Button variant="secondary">Secondary Button</Button>

// Error Button
<Button variant="error">Error Button</Button>`}
      >
        <div className="flex flex-wrap gap-4 p-6">
          <Button variant="default">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="error">Error Button</Button>
        </div>
      </ComponentCard>
      
      <ComponentCard
        title="Badges"
        description="Badges in different colors"
        code={`<Badge variant="standard" color="primary" badgeContent={4}>
  <span className="w-6 h-6 bg-gray-200 rounded-full"></span>
</Badge>

<Badge variant="standard" color="secondary" badgeContent={8}>
  <span className="w-6 h-6 bg-gray-200 rounded-full"></span>
</Badge>

<Badge variant="standard" color="error" badgeContent={12}>
  <span className="w-6 h-6 bg-gray-200 rounded-full"></span>
</Badge>

<Badge variant="standard" color="success" badgeContent={42}>
  <span className="w-6 h-6 bg-gray-200 rounded-full"></span>
</Badge>

<Badge variant="dot" color="error">
  <span className="w-6 h-6 bg-gray-200 rounded-full"></span>
</Badge>`}
      >
        <div className="flex flex-wrap gap-4 p-6">
          <Badge variant="standard" color="primary" badgeContent={4}>
            <span className="w-6 h-6 bg-gray-200 rounded-full"></span>
          </Badge>
          
          <Badge variant="standard" color="secondary" badgeContent={8}>
            <span className="w-6 h-6 bg-gray-200 rounded-full"></span>
          </Badge>
          
          <Badge variant="standard" color="error" badgeContent={12}>
            <span className="w-6 h-6 bg-gray-200 rounded-full"></span>
          </Badge>
          
          <Badge variant="standard" color="success" badgeContent={42}>
            <span className="w-6 h-6 bg-gray-200 rounded-full"></span>
          </Badge>
          
          <Badge variant="dot" color="error">
            <span className="w-6 h-6 bg-gray-200 rounded-full"></span>
          </Badge>
        </div>
      </ComponentCard>
      
      <ComponentCard
        title="Chips"
        description="Chips in different variants and colors"
        code={`<Chip>Default Chip</Chip>
<Chip variant="filled" color="primary">Primary Chip</Chip>
<Chip variant="outlined" color="secondary">Secondary Chip</Chip>
<Chip variant="filled" color="error">Error Chip</Chip>
<Chip variant="outlined" color="success">Success Chip</Chip>`}
      >
        <div className="flex flex-wrap gap-4 p-6">
          <Chip>Default Chip</Chip>
          <Chip variant="filled" color="primary">Primary Chip</Chip>
          <Chip variant="outlined" color="secondary">Secondary Chip</Chip>
          <Chip variant="filled" color="error">Error Chip</Chip>
          <Chip variant="outlined" color="success">Success Chip</Chip>
        </div>
      </ComponentCard>
      
      <ComponentCard
        title="Avatars"
        description="Avatars with different colors and variants"
        code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

<Avatar>
  <AvatarFallback className="bg-primary-main text-white">AB</AvatarFallback>
</Avatar>

<Avatar>
  <AvatarFallback className="bg-secondary-main text-white">CD</AvatarFallback>
</Avatar>`}
      >
        <div className="flex flex-wrap gap-4 p-6">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          
          <Avatar>
            <AvatarFallback className="bg-primary-main text-white">AB</AvatarFallback>
          </Avatar>
          
          <Avatar>
            <AvatarFallback className="bg-secondary-main text-white">CD</AvatarFallback>
          </Avatar>
        </div>
      </ComponentCard>
    </div>
  );
};

const Colors = () => {
  return (
    <div className="w-full animate-slide-in">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-mui-primary font-medium mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-mui-primary/10 text-mui-primary">
            Foundation
          </span>
        </div>

        <h1 className="text-4xl font-medium text-mui-text-primary mb-4">
          Colors
        </h1>

        <p className="text-xl text-mui-text-secondary mb-8">
          Define the color palette for your application. Establish a consistent
          and harmonious color scheme that aligns with your brand identity and
          enhances the user experience.
        </p>

        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            Base Colors
          </h2>
          <p className="text-xl text-mui-text-secondary mb-4">
            A set of basic colors to start with.
          </p>
          <BaseColorsTable colors={baseColors} />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            Semantic Palette
          </h2>
          <p className="text-xl text-mui-text-secondary mb-4">
            A palette of colors with semantic meanings, such as primary,
            secondary, success, error, warning, and info.
          </p>
          <PaletteTable palette={semanticPalette} />
        </div>

        <ColorApplications />

        <div className="mt-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            API Reference
          </h2>

          <div className="border border-mui-border rounded-lg overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-mui-sidebar">
                  <TableHead className="w-1/4">Variable</TableHead>
                  <TableHead className="w-1/4">CSS Value</TableHead>
                  <TableHead className="w-1/4">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">
                    --color-white
                  </TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">
                    #FFFFFF
                  </TableCell>
                  <TableCell className="text-mui-text-secondary">
                    Base color white
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">
                    --color-black
                  </TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">
                    #000000
                  </TableCell>
                  <TableCell className="text-mui-text-secondary">
                    Base color black
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">
                    --color-primary-50
                  </TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">
                    #E3F2FD
                  </TableCell>
                  <TableCell className="text-mui-text-secondary">
                    Primary color shade 50
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">
                    --color-primary-100
                  </TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">
                    #BBDEFB
                  </TableCell>
                  <TableCell className="text-mui-text-secondary">
                    Primary color shade 100
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">
                    --color-secondary-50
                  </TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">
                    #FCE4EC
                  </TableCell>
                  <TableCell className="text-mui-text-secondary">
                    Secondary color shade 50
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">
                    --color-secondary-100
                  </TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">
                    #F8BBD0
                  </TableCell>
                  <TableCell className="text-mui-text-secondary">
                    Secondary color shade 100
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;
