import type { ReactNode } from "react";
import { whatsappUrl } from "../content/site.ts";

type WhatsAppLinkProps = {
  className?: string;
  children: ReactNode;
};

export function WhatsAppLink({ className, children }: WhatsAppLinkProps) {
  return (
    <a
      className={className}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span className="visually-hidden"> Abre em uma nova aba.</span>
    </a>
  );
}
