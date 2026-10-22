import React from "react";
import Link from "next/link";
import styles from "./About.module.css";

/**
 * AboutPage Component
 * Route: /about
 * Describes the project, its purpose, features, and tech stack.
 */
export default function AboutPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.inner}>
        {/* Page Header */}
        <header className={styles.header}>
          <span className={styles.badgePill}>Student Project</span>
          <h1 className={styles.title}>About Campus Directory</h1>
          <p className={styles.subtitle}>
            A modern, easy-to-understand student directory and academic department browser.
          </p>
        </header>

        {/* 2-Card Info Grid */}
        <div className={styles.contentGrid}>
          <section className={styles.card}>
            <div className={styles.cardIcon}>🎯</div>
            <h2 className={styles.cardTitle}>Purpose & Objective</h2>
            <p className={styles.cardText}>
              Campus Directory is designed to give students, faculty, and visitors
              an intuitive registry of enrolled students, academic departments,
              and course specializations.
            </p>
          </section>

          <section className={styles.card}>
            <div className={styles.cardIcon}>⚡</div>
            <h2 className={styles.cardTitle}>Tech Stack</h2>
            <p className={styles.cardText}>
              Built with Next.js App Router, React 19, TypeScript, and CSS Modules.
              It demonstrates dynamic routing, real-time client-side search filtering,
              and static page generation.
            </p>
          </section>
        </div>

        {/* Key Features Section */}
        <div className={styles.featuresBox}>
          <h2 className={styles.featuresHeading}>Key Features</h2>
          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <span className={styles.checkIcon}>&check;</span>
              <div>
                <strong>Student Profiles:</strong> Individual profile pages for each student
                with email, department, standing, bio, and subjects.
              </div>
            </div>

            <div className={styles.featureItem}>
              <span className={styles.checkIcon}>&check;</span>
              <div>
                <strong>Department Directories:</strong> Explore faculties (Computer Science,
                Design, Business) and see their enrolled students.
              </div>
            </div>

            <div className={styles.featureItem}>
              <span className={styles.checkIcon}>&check;</span>
              <div>
                <strong>Live Search & Filter:</strong> Instantly filter students by name, ID,
                or department without page reloads.
              </div>
            </div>

            <div className={styles.featureItem}>
              <span className={styles.checkIcon}>&check;</span>
              <div>
                <strong>Clean & Beginner-Friendly:</strong> Organized folder structure, readable
                code, and clear comments explaining every concept.
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaText}>
            <h3>Ready to explore?</h3>
            <p>Browse through student records or explore academic departments.</p>
          </div>
          <div className={styles.ctaButtons}>
            <Link href="/" className={styles.primaryBtn}>
              Browse Students &rarr;
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
