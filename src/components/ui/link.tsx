/**
 * @protected
 * ATENÇÃO: Este arquivo contém conteúdo finalizado e aprovado.
 * Não deve ser alterado diretamente pelo assistente AI.
 * Apenas atualizações de componentes devem ser refletidas.
 */

import * as React from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

const linkVariants = cva(
  "inline-flex items-center gap-1 font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "text-primary-dark hover:text-primary-main focus:outline-none focus:ring-2 focus:ring-primary-focus rounded",
        underlined: "text-primary-dark hover:text-primary-main underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-primary-focus rounded",
      },
      size: {
        default: "text-base",
        sm: "text-sm",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
  external?: boolean;
  showExternalIcon?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, href, external, children, showExternalIcon = true, ...props }, ref) => {
    if (external) {
      return (
        <a
          href={href}
          ref={ref}
          className={cn(linkVariants({ variant, size, className }))}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
          {showExternalIcon && <ExternalLink className="h-3.5 w-3.5" />}
        </a>
      );
    }

    return (
      <RouterLink
        to={href}
        className={cn(linkVariants({ variant, size, className }))}
        {...(props as RouterLinkProps)}
        ref={ref as React.Ref<HTMLAnchorElement>}
      >
        {children}
      </RouterLink>
    );
  }
);

Link.displayName = "Link";

export { Link, linkVariants };
