"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

/**
 * Navbar Component
 * Displays the top navigation bar with links to Students, Departments, and About.
 * Uses `usePathname()` to highlight the currently active route.
 */
export default function Navbar() {
  // Get the current URL path (e.g. "/" or "/departments")
  const pathname = usePathname();

  // Check which link is currently active
  const isStudentsActive = pathname === "/" || pathname.startsWith("/students");
  const isDepartmentsActive = pathname.startsWith("/departments");
  const isAboutActive = pathname.startsWith("/about");

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Brand Logo & Title */}
        <div className={styles.left}>
          <Link href="/" className={styles.brand}>
            <span className={styles.logoIcon}>🎓</span>
            <span className={styles.brandTitle}>Campus Directory</span>
          </Link>

          {/* Navigation Links */}
          <nav className={styles.navLinks} aria-label="Main Navigation">
            <Link
              href="/"
              className={`${styles.navLink} ${isStudentsActive ? styles.active : ""}`}
            >
              Students
              {isStudentsActive && <span className={styles.activeBar} />}
            </Link>

            <Link
              href="/departments"
              className={`${styles.navLink} ${isDepartmentsActive ? styles.active : ""}`}
            >
              Departments
              {isDepartmentsActive && <span className={styles.activeBar} />}
            </Link>

            <Link
              href="/about"
              className={`${styles.navLink} ${isAboutActive ? styles.active : ""}`}
            >
              About
              {isAboutActive && <span className={styles.activeBar} />}
            </Link>
          </nav>
        </div>

        {/* Right Badge */}
        <div className={styles.right}>
          <span className={styles.practiceBadge}>Student Project</span>
        </div>
      </div>
    </header>
  );
}
