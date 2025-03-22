
import React from 'react';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import defaultLogo from '@/pages/assets/client-logo.svg';

const profileButtonVariants = cva(
  "inline-flex items-center rounded-full border border-[rgba(33,35,35,0.23)] bg-white shrink-0 transition-all duration-200 ease-in-out hover:bg-gray-50 hover:border-gray-300",
  {
    variants: {
      size: {
        default: "h-[46px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface ProfileButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof profileButtonVariants> {
  userName: string;
  companyName: string;
  logoText?: string;
  logoSrc?: string;
  logoAlt?: string;
  avatarText?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  showClientLogo?: boolean;
  menuIcon?: React.ReactNode;
  maxTextLength?: number;
}

const ProfileButton = React.forwardRef<HTMLButtonElement, ProfileButtonProps>(
  ({
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
    menuIcon,
    maxTextLength = 10,
    ...props
  }, ref) => {
    // Generate initials if avatarText isn't provided
    const userInitials = avatarText || userName
      .split(" ")
      .map(part => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
    
    // Truncate text if longer than maxTextLength
    const truncateText = (text: string, maxLength: number) => {
      return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    };

    const displayUserName = truncateText(userName, maxTextLength);
    const displayCompanyName = truncateText(companyName, maxTextLength);

    return (
      <button
        className={cn(profileButtonVariants({ size, className }))}
        ref={ref}
        type="button"
        {...props}
      >
        <div className="flex items-center w-full px-3 py-2">
          {showClientLogo && (
            <div className="flex items-center mr-10">
              {logoSrc ? (
                <img src={logoSrc} alt={logoAlt} className="h-7 w-auto" /> // 28px height
              ) : (
                <div className="text-lg font-semibold">{logoText || "Clientlogo"}</div>
              )}
            </div>
          )}
          
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-[#001A1A] text-white flex items-center justify-center font-medium"> {/* 32px avatar */}
              {avatarSrc ? (
                <img src={avatarSrc} alt={avatarAlt} className="h-full w-full rounded-full object-cover" />
              ) : (
                userInitials
              )}
            </div>
          
            <div className="flex flex-col items-start text-left">
              <span className="text-base font-medium text-gray-900 leading-tight">{displayUserName}</span>
              <span className="text-sm text-gray-500 leading-tight">{displayCompanyName}</span>
            </div>
          </div>
          
          <div className="text-gray-600 ml-auto pl-4">
            {menuIcon || <Menu className="h-6 w-6" />} {/* 24px menu icon */}
          </div>
        </div>
      </button>
    );
  }
);

ProfileButton.displayName = "ProfileButton";

export { ProfileButton, profileButtonVariants };
