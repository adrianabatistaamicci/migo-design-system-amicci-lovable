/**
 * @protected
 * ATENÇÃO: Este arquivo contém conteúdo finalizado e aprovado.
 * Não deve ser alterado diretamente pelo assistente AI.
 * Apenas atualizações de componentes devem ser refletidas.
 */

import React from 'react';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import defaultLogo from '@/pages/assets/client-logo.svg';
import CodeBlock from '@/components/CodeBlock';

const profileButtonCode = `import { ProfileButton } from '@/components/ui/profile-button';

// Basic usage
<ProfileButton
  userName="John Doe"
  companyName="Acme Inc."
  showClientLogo={true}
  showAvatar={true}
  showMenuIcon={true}
/>

// With custom logo
<ProfileButton
  userName="Jane Smith"
  companyName="Tech Corp"
  logoSrc="/path/to/logo.png"
  showClientLogo={true}
  showAvatar={true}
/>

// Avatar only
<ProfileButton
  userName="Alex Johnson"
  companyName=""
  showClientLogo={false}
  showAvatar={true}
  showMenuIcon={false}
/>`;

const profileButtonVariants = cva("inline-flex items-center rounded-full border border-[rgba(33,35,35,0.23)] bg-white shrink-0 transition-all duration-200 ease-in-out hover:bg-gray-50 hover:border-gray-300", {
  variants: {
    size: {
      default: "auto"
    }
  },
  defaultVariants: {
    size: "default"
  }
});

export interface ProfileButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof profileButtonVariants> {
  userName: string;
  companyName: string;
  logoText?: string;
  logoSrc?: string;
  logoAlt?: string;
  avatarText?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  showClientLogo?: boolean;
  showAvatar?: boolean;
  showMenuIcon?: boolean;
  menuIcon?: React.ReactNode;
  maxTextLength?: number;
}

const ProfileButton = React.forwardRef<HTMLButtonElement, ProfileButtonProps>(({
  className,
  size,
  userName,
  companyName,
  logoText,
  logoSrc = defaultLogo,
  logoAlt = "Company logo",
  avatarText,
  avatarSrc,
  avatarAlt = "User avatar",
  showClientLogo = true,
  showAvatar = true,
  showMenuIcon = true,
  menuIcon,
  maxTextLength = 10,
  ...props
}, ref) => {
  // Generate initials if avatarText isn't provided
  const userInitials = avatarText || (userName && userName.trim() !== "" ? userName.split(" ").map(part => part[0]).join("").slice(0, 2).toUpperCase() : "AA");

  // Truncate text if longer than maxTextLength
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };
  const displayUserName = truncateText(userName, maxTextLength);
  const displayCompanyName = truncateText(companyName, maxTextLength);
  const showUserInfo = (userName || companyName) && (userName.trim() !== "" || companyName.trim() !== "");

  return <button className={cn(profileButtonVariants({
    size,
    className
  }))} ref={ref} type="button" {...props}>
        <div className="flex items-center w-full px-2 py-[7px]">
          {showClientLogo && <div className="flex items-center mr-2">
              {logoSrc ? <img src={logoSrc} alt={logoAlt} className="h-7 w-auto mx-2" /> : <div className="text-lg font-semibold mx-2">{logoText || "Clientlogo"}</div>}
            </div>}
          
          {showAvatar && <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-[#001A1A] text-white flex items-center justify-center font-medium">
                {avatarSrc ? <img src={avatarSrc} alt={avatarAlt} className="h-full w-full rounded-full object-cover" /> : userInitials}
              </div>
            
              {showUserInfo && <div className="flex flex-col items-start text-left mx-4">
                  {userName && userName.trim() !== "" && <span className="text-base font-medium text-gray-900 leading-tight">{displayUserName}</span>}
                  {companyName && companyName.trim() !== "" && <span className="text-sm text-gray-500 leading-tight">{displayCompanyName}</span>}
                </div>}
            </div>}
          
          {showMenuIcon && <div className="text-gray-600 ml-auto ">
              <div className="mr-2">
                {menuIcon || <Menu className="h-6 w-6" />}
              </div>
            </div>}
        </div>
      </button>;
});

ProfileButton.displayName = "ProfileButton";

export { ProfileButton, profileButtonVariants, profileButtonCode };
