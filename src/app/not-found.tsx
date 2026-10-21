import React from "react";
import Link from "next/link";
import styles from "./NotFound.module.css";

export default function NotFound() {
  const suggestions = [
    {
      title: "Computer Science Department",
      path: "/departments/computer-science",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      title: "Design Department",
      path: "/departments/design",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 19 7-7 3 3-7 7-3-3z" />
          <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        </svg>
      ),
    },
    {
      title: "Business Department",
      path: "/departments/business",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
    },
    {
      title: "Web Development Specialization",
      path: "/departments/computer-science/web-development",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="m10 10-2 2 2 2" />
          <path d="m14 14 2-2-2-2" />
        </svg>
      ),
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.inner}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumbBar}>
          <span className={styles.crumbMuted}>Directory</span>
          <span className={styles.crumbDivider}>/</span>
          <span className={styles.crumbActive}>Not Found</span>
        </div>

        {/* Center 404 Hero */}
        <div className={styles.heroSection}>
          <div className={styles.badgePill}>
            <span className={styles.badgeDot}>&bull;</span>
            <span>404 &middot; ROUTE NOT FOUND</span>
          </div>

          <h1 className={styles.title}>Student or department not found</h1>
          <p className={styles.description}>
            The requested directory entry or path could not be located. It may
            have moved or the identifier might be invalid.
          </p>

          <div className={styles.actionsRow}>
            <Link href="/" className={styles.primaryBtn}>
              Return to Students Directory
            </Link>
            <Link href="/departments" className={styles.secondaryBtn}>
              Browse All Departments
            </Link>
          </div>
        </div>

        {/* Suggested Starting Points Box */}
        <div className={styles.suggestionsBox}>
          <div className={styles.boxHeader}>
            <span className={styles.boxTitle}>SUGGESTED STARTING POINTS</span>
            <span className={styles.boxSubtitle}>Internal Routes</span>
          </div>

          <div className={styles.linksList}>
            {suggestions.map((item, index) => (
              <Link key={index} href={item.path} className={styles.linkRow}>
                <div className={styles.linkLeft}>
                  <span className={styles.icon}>{item.icon}</span>
                  <span className={styles.linkTitle}>{item.title}</span>
                </div>
                <div className={styles.linkRight}>
                  <span className={styles.pathText}>{item.path}</span>
                  <span className={styles.arrowIcon}>&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
