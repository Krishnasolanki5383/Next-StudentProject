import React from "react";
import Link from "next/link";
import styles from "./NotFound.module.css";

/**
 * NotFound Component
 * In Next.js App Router, `not-found.tsx` is automatically displayed
 * whenever `notFound()` is called or an invalid URL is visited.
 */
export default function NotFound() {
  const suggestions = [
    { title: "Computer Science Department", path: "/departments/computer-science", icon: "💻" },
    { title: "Design Department", path: "/departments/design", icon: "🎨" },
    { title: "Business Department", path: "/departments/business", icon: "📈" },
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.inner}>
        {/* Error Hero */}
        <div className={styles.heroSection}>
          <span className={styles.badgePill}>404 ERROR</span>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.description}>
            The student profile or department you requested could not be found.
            It might have been moved or the URL is incorrect.
          </p>

          <div className={styles.actionsRow}>
            <Link href="/" className={styles.primaryBtn}>
              &larr; Return to Students Directory
            </Link>
            <Link href="/departments" className={styles.secondaryBtn}>
              Browse Departments
            </Link>
          </div>
        </div>

        {/* Suggestions Box */}
        <div className={styles.suggestionsBox}>
          <h2 className={styles.boxTitle}>Suggested Pages</h2>
          <div className={styles.linksList}>
            {suggestions.map((item, index) => (
              <Link key={index} href={item.path} className={styles.linkRow}>
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.linkTitle}>{item.title}</span>
                <span className={styles.arrowIcon}>&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
