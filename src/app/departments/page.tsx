import React from "react";
import Link from "next/link";
import { DEPARTMENTS_DATA } from "@/data/directoryData";
import styles from "./Departments.module.css";

/**
 * DepartmentsPage Component
 * Route: /departments
 * Displays a list of all academic departments and their specializations.
 */
export default function DepartmentsPage() {
  // Helper to pick an emoji icon for each department
  const getDeptIcon = (iconType: string) => {
    if (iconType === "code") return "💻";
    if (iconType === "design") return "🎨";
    return "📈";
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.inner}>
        {/* Header Section */}
        <header className={styles.header}>
          <h1 className={styles.title}>Academic Departments</h1>
          <p className={styles.subtitle}>
            Explore our 3 faculties, their course specializations, and enrolled students.
          </p>
        </header>

        {/* List of Departments */}
        <div className={styles.deptList}>
          {DEPARTMENTS_DATA.map((dept) => (
            <div key={dept.slug} className={styles.deptCard}>
              {/* Department Header */}
              <div className={styles.deptHeader}>
                <div className={styles.deptTitleArea}>
                  <span className={styles.deptIcon}>{getDeptIcon(dept.icon)}</span>
                  <div>
                    <h2 className={styles.deptName}>{dept.name}</h2>
                    <p className={styles.deptDesc}>{dept.description}</p>
                  </div>
                </div>

                <Link
                  href={`/departments/${dept.slug}`}
                  className={styles.viewDeptBtn}
                >
                  View Department &rarr;
                </Link>
              </div>

              {/* Department Statistics */}
              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <strong>{dept.specializationsCount}</strong> Specializations
                </div>
                <div className={styles.statItem}>
                  <strong>{dept.enrolledStudentsCount}</strong> Enrolled Students
                </div>
              </div>

              {/* Specializations Preview */}
              <div className={styles.specializationsArea}>
                <h3 className={styles.specializationTitle}>Available Tracks:</h3>
                <div className={styles.specializationTags}>
                  {dept.specializations.map((spec) => (
                    <Link
                      key={spec.slug}
                      href={`/departments/${dept.slug}/${spec.slug}`}
                      className={styles.specTag}
                    >
                      {spec.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
