
import React from 'react';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import defaultLogo from '@/pages/assets/client-logo.svg';

const profileButtonVariants = cva(
  "inline-flex items-center rounded-full border bg-white shrink-0",
  {
    variants: {
      variant: {
        default: "border-[rgba(33,35,35,0.23)]",
        outline: "border-gray-300",
        filled: "border-transparent bg-gray-100",
      },
      size: {
        default: "h-[46px]",
        sm: "h-9",
        lg: "h-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ProfileButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof profileButtonVariants> {
  userName: string;
  companyName?: string;
  logoText?: string;
  logoSrc?: string;
  logoAlt?: string;
  avatarText?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  showClientLogo?: boolean;
  menuIcon?: React.ReactNode;
  innerSpacing?: {
    container?: string;
    logo?: string;
    avatar?: string;
    text?: string;
    menu?: string;
  };
  gap?: string;
}

const ProfileButton = React.forwardRef<HTMLButtonElement, ProfileButtonProps>(
  ({
    className,
    variant,
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
    innerSpacing = {
      container: "px-4 py-1",
      logo: "",
      avatar: "",
      text: "",
      menu: "px-4",
    },
    gap = "gap-8",
    ...props
  }, ref) => {
    // Generate initials if avatarText isn't provided
    const userInitials = avatarText || userName
      .split(" ")
      .map(part => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    return (
      <button
        className={cn(profileButtonVariants({ variant, size, className }))}
        ref={ref}
        type="button"
        {...props}
      >
        <div className={cn("flex items-center w-full", innerSpacing.container, gap)}>
          {showClientLogo && (
            <div className={cn("flex items-center", innerSpacing.logo)}>
              {logoSrc ? (
                <img src={logoSrc} alt={logoAlt} className="h-8 w-auto" />
              ) : (
                <div className="text-lg font-semibold">{logoText || "Clientlogo"}</div>
              )}
            </div>
          )}
          
          <div className={cn("flex items-center", innerSpacing.avatar)}>
            <div className="h-10 w-10 rounded-full bg-[#001A1A] text-white flex items-center justify-center font-medium">
              {avatarSrc ? (
                <img src={avatarSrc} alt={avatarAlt} className="h-full w-full rounded-full object-cover" />
              ) : (
                userInitials
              )}
            </div>
          </div>
          
          <div className={cn("flex flex-col items-start text-left", innerSpacing.text)}>
            <span className="text-base font-medium text-gray-900 leading-tight">{userName}</span>
            {companyName && (
              <span className="text-sm text-gray-500 leading-tight">{companyName}</span>
            )}
          </div>
          
          <div className={cn("text-gray-600 ml-auto", innerSpacing.menu)}>
            {menuIcon || <Menu className="h-6 w-6" />}
          </div>
        </div>
      </button>
    );
  }
);

ProfileButton.displayName = "ProfileButton";

export { ProfileButton, profileButtonVariants };
