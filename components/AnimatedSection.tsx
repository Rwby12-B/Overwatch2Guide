import { ReactNode } from "react";

/**
 * Previously faded + slid every section in on scroll. That hides content until
 * it is scrolled to and reads as template motion, so this is now a plain
 * <section>. Kept as a component so existing pages don't need to change.
 */
export function AnimatedSection({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return <section className={className}>{children}</section>;
}
