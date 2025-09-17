import { ReactNode } from "react";

export default function Section({ id, title, subtitle, children }: { id?: string; title?: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section id={id} className="section">
      <div className="container max-w-6xl">
        {title && <h2 className="h2 mb-3">{title}</h2>}
        {subtitle && <p className="lead mb-8">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
