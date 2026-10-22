"use client";

import React from "react";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";

/**
 * Footer Component
 * Displays a simple, informative footer at the bottom of every page.
 */
export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          Campus Directory &copy; Student Project
        </div>
        <div className={styles.right}>
          <span className={styles.pathLabel}>Current Page: {pathname}</span>
        </div>
      </div>
    </footer>
  );
}
