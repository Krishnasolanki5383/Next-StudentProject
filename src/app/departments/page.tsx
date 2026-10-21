import React from "react";
import Link from "next/link";
import { DEPARTMENTS_DATA } from "@/data/directoryData";
import styles from "./Departments.module.css";

export default function DepartmentsPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.inner}>
        {/* Header Row */}
        <header className={styles.header}>
          <div className={styles.titleRow}>
            <h1 className={styles.title}>Departments</h1>
            <div className={styles.statusPill}>
              <span className={styles.blueDot} />
              <span>3 Active Academic Faculties</span>
            </div>
          </div>
          <p className={styles.subtitle}>
            Explore academic faculties, programs, and enrolled students.
          </p>
        </header>

        {/* Grouped Department Box */}
        <div className={styles.deptCardGroup}>
          {DEPARTMENTS_DATA.map((dept, index) => (
            <div key={dept.slug} className={styles.deptRow}>
              <div className={styles.deptMain}>
                <div className={styles.iconBox}>
                  {dept.icon === "code" && (
                    <svg
                      width="20"
                      height="20"
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
                  )}
                  {dept.icon === "design" && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 19 7-7 3 3-7 7-3-3z" />
                      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                      <path d="m2 2 7.586 7.586" />
                      <circle cx="11" cy="11" r="2" />
                    </svg>
                  )}
                  {dept.icon === "business" && (
                    <svg
                      width="20"
                      height="20"
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
                  )}
                </div>

                <div className={styles.deptDetails}>
                  <div className={styles.deptTitleRow}>
                    <Link
                      href={`/departments/${dept.slug}`}
                      className={styles.deptName}
                    >
                      {dept.name}
                    </Link>
                  </div>

                  <p className={styles.deptDescription}>{dept.description}</p>

                  <div className={styles.metaRow}>
                    <span className={styles.metaItem}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                      </svg>
                      {dept.specializationsCount} Specializations
                    </span>

                    <span className={styles.bullet}>&middot;</span>

                    <span className={styles.metaItem}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      {dept.enrolledStudentsCount} Enrolled Students
                    </span>
                  </div>

                  {/* Specialization shortcuts */}
                  <div className={styles.tracksList}>
                    {dept.specializations.map((spec) => (
                      <Link
                        key={spec.slug}
                        href={`/departments/${dept.slug}/${spec.slug}`}
                        className={styles.trackChip}
                      >
                        {spec.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.actionCol}>
                <Link
                  href={`/departments/${dept.slug}`}
                  className={styles.viewStudentsLink}
                >
                  <span>View students</span>
                  <svg
                    className={styles.arrowIcon}
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Sub-Footer */}
        <div className={styles.subFooter}>
          <span className={styles.curriculumYear}>Curriculum Year 2024–2025</span>
          <span className={styles.apiStatus}>
            Updated daily via Campus Records API
          </span>
        </div>
      </div>
    </div>
  );
}
