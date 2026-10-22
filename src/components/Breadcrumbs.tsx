import React from "react";
import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

// Interface for a single breadcrumb item
export interface Crumb {
  label: string;
  href?: string;
}

// Props for the Breadcrumbs component
interface BreadcrumbsProps {
  items: Crumb[];
  backLink?: {
    label: string;
    href: string;
  };
  rightAction?: {
    label: string;
    href: string;
  };
}

/**
 * Breadcrumbs Component
 * Renders hierarchical navigation path (e.g. Home / Departments / Computer Science)
 * and optional back link.
 */
export default function Breadcrumbs({
  items,
  backLink,
  rightAction,
}: BreadcrumbsProps) {
  return (
    <div className={styles.wrapper}>
      {/* Breadcrumb List */}
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <ol className={styles.list}>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className={styles.item}>
                {index > 0 && <span className={styles.separator}>/</span>}
                {item.href && !isLast ? (
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                ) : (
                  <span className={`${styles.current} ${isLast ? styles.active : ""}`}>
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Quick Action Buttons (Back Link & Next Action) */}
      {(backLink || rightAction) && (
        <div className={styles.actionsRow}>
          {backLink && (
            <Link href={backLink.href} className={styles.backLink}>
              <span className={styles.arrow}>&larr;</span> {backLink.label}
            </Link>
          )}
          {rightAction && (
            <Link href={rightAction.href} className={styles.rightAction}>
              {rightAction.label} &rarr;
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
