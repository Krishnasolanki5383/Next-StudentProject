import React from "react";
import Link from "next/link";
import styles from "./About.module.css";

export default function AboutPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.inner}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.badgePill}>
            <span>Academic Informatics Core</span>
          </div>
          <h1 className={styles.title}>About Campus Directory</h1>
          <p className={styles.subtitle}>
            A unified student and faculty information system built for modern
            academic discovery and curriculum tracking.
          </p>
        </header>

        {/* Info Grid */}
        <div className={styles.contentGrid}>
          <section className={styles.card}>
            <div className={styles.cardIcon}>
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
            </div>
            <h2 className={styles.cardTitle}>Purpose & Objective</h2>
            <p className={styles.cardText}>
              Campus Directory is engineered to provide students, faculty leads,
              and administrative advisers with a transparent, responsive registry
              of enrolled students, departmental specializations, and academic
              credit standing.
            </p>
          </section>

          <section className={styles.card}>
            <div className={styles.cardIcon}>
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
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <h2 className={styles.cardTitle}>Architecture & Tech Stack</h2>
            <p className={styles.cardText}>
              Built with Next.js 16 App Router, TypeScript, and a Vanilla CSS
              design system. Features dynamic route generation, client-side
              filtering, responsive card grids, and dedicated 404 fallback
              routing.
            </p>
          </section>
        </div>

        {/* Directory Features Box */}
        <div className={styles.featuresBox}>
          <h2 className={styles.featuresHeading}>System Capabilities</h2>
          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>&check;</div>
              <div>
                <strong>Dynamic Student Profiles:</strong> Detailed individual
                records with active enrollment validation, email communication,
                and semester course credits.
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>&check;</div>
              <div>
                <strong>Departmental Hierarchies:</strong> Multi-tiered structure
                connecting faculties (Computer Science, Design, Business) to
                their respective curriculum tracks and core labs.
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>&check;</div>
              <div>
                <strong>Track Specialization Views:</strong> Nested track pages
                with curriculum cycles, academic faculty leads, and enrolled
                cohort grids.
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>&check;</div>
              <div>
                <strong>Instant Real-time Filtering:</strong> Search directory
                entries instantly by student name, identification badge, or
                academic department.
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaText}>
            <h3>Ready to explore the directory?</h3>
            <p>Browse through student records or explore faculty departments.</p>
          </div>
          <div className={styles.ctaButtons}>
            <Link href="/" className={styles.primaryBtn}>
              Browse Students
            </Link>
            <Link href="/departments" className={styles.secondaryBtn}>
              View Departments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
