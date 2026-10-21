"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  const isStudentsActive =
    pathname === "/" || pathname.startsWith("/students");
  const isDepartmentsActive = pathname.startsWith("/departments");
  const isAboutActive = pathname.startsWith("/about");

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/" className={styles.brand}>
            <span className={styles.logoIcon}>
              {/* Graduation cap / academic shield SVG */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </span>
            <span className={styles.brandTitle}>Campus Directory</span>
          </Link>

          <nav className={styles.navLinks} aria-label="Main Navigation">
            <Link
              href="/"
              className={`${styles.navLink} ${
                isStudentsActive ? styles.active : ""
              }`}
            >
              Students
              {isStudentsActive && <span className={styles.activeBar} />}
            </Link>
            <Link
              href="/departments"
              className={`${styles.navLink} ${
                isDepartmentsActive ? styles.active : ""
              }`}
            >
              Departments
              {isDepartmentsActive && <span className={styles.activeBar} />}
            </Link>
            <Link
              href="/about"
              className={`${styles.navLink} ${
                isAboutActive ? styles.active : ""
              }`}
            >
              About
              {isAboutActive && <span className={styles.activeBar} />}
            </Link>
          </nav>
        </div>

        <div className={styles.right}>
          <span className={styles.practiceBadge}>Frontend Practice</span>
        </div>
      </div>
    </header>
  );
}
