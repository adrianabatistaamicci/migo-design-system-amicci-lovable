
import React from 'react';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const profileButtonVariants = cva(
  "inline-flex items-center gap-2 h-[46px] px-2 py-1 rounded-full border bg-white shrink-0",
  {
    variants: {
      variant: {
        default: "border-[rgba(33,35,35,0.23)]",
        outline: "border-gray-300",
        filled: "border-transparent bg-gray-100",
      },
      size: {
        default: "h-[46px] px-2 py-1",
        sm: "h-9 px-1.5 py-0.5",
        lg: "h-12 px-3 py-1.5",
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
}

const ProfileButton = React.forwardRef<HTMLButtonElement, ProfileButtonProps>(
  ({
    className,
    variant,
    size,
    userName,
    companyName,
    logoText,
    logoSrc,
    logoAlt = "Company logo",
    avatarText,
    avatarSrc,
    avatarAlt = "User avatar",
    showClientLogo = true,
    menuIcon,
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
        {showClientLogo && (
          <div className="flex items-center gap-2 mr-2">
            {logoSrc ? (
              <img src={logoSrc} alt={logoAlt} className="h-8 w-auto" />
            ) : (
              <div className="text-lg font-semibold">{logoText || "Clientlogo"}</div>
            )}
          </div>
        )}

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[#001A1A] text-white flex items-center justify-center font-medium">
            {avatarSrc ? (
              <img src={avatarSrc} alt={avatarAlt} className="h-full w-full rounded-full object-cover" />
            ) : (
              userInitials
            )}
          </div>
          
          <div className="flex flex-col items-start text-left">
            <span className="text-base font-medium text-gray-900 leading-tight">{userName}</span>
            {companyName && (
              <span className="text-sm text-gray-500 leading-tight">{companyName}</span>
            )}
          </div>
          
          <div className="text-gray-600">
            {menuIcon || <Menu className="h-6 w-6" />}
          </div>
        </div>
      </button>
    );
  }
);

ProfileButton.displayName = "ProfileButton";

export { ProfileButton, profileButtonVariants };
