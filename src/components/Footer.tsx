"use client";
import React from "react";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          Campus Directory &copy; Academic Informatics Core
        </div>
        <div className={styles.right}>
          <span className={styles.pathLabel}>Path: {pathname}</span>
          <span className={styles.statusDot} title="System Live" />
        </div>
      </div>
    </footer>
  );
}
