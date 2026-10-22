import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getDepartmentBySlug,
  DEPARTMENTS_DATA,
  STUDENTS_DATA,
} from "@/data/directoryData";
import Breadcrumbs from "@/components/Breadcrumbs";
import StudentCard from "@/components/StudentCard";
import styles from "./DepartmentDetail.module.css";

// Dynamic route parameters for /departments/[dept]
interface PageProps {
  params: Promise<{ dept: string }>;
}

/**
 * generateStaticParams
 * Informs Next.js of all department URLs to pre-render at build time.
 */
export async function generateStaticParams() {
  return DEPARTMENTS_DATA.map((dept) => ({
    dept: dept.slug,
  }));
}

/**
 * DepartmentDetailPage Component
 * Dynamic Route: /departments/[dept]
 * Displays details of a specific department, its tracks, and enrolled students.
 */
export default async function DepartmentDetailPage({ params }: PageProps) {
  // 1. Get the department slug from the URL (e.g. "computer-science")
  const { dept: deptSlug } = await params;

  // 2. Look up the department details
  const dept = getDepartmentBySlug(deptSlug);

  // 3. If department not found, trigger 404
  if (!dept) {
    notFound();
  }

  // 4. Find all students belonging to this department
  const deptStudents = STUDENTS_DATA.filter(
    (student) => student.departmentSlug === dept.slug
  );

  return (
    <div className={styles.pageContainer}>
      <div className={styles.inner}>
        {/* Navigation Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Departments", href: "/departments" },
            { label: dept.name },
          ]}
          backLink={{
            label: "Back to all departments",
            href: "/departments",
          }}
        />

        {/* Department Overview Banner */}
        <div className={styles.deptCard}>
          <div className={styles.deptHeader}>
            <div>
              <h1 className={styles.title}>{dept.name}</h1>
              <p className={styles.description}>{dept.description}</p>
            </div>
            <div className={styles.countBadge}>
              <strong>{deptStudents.length}</strong> Students Shown
            </div>
          </div>

          {/* Specializations inside this department */}
          <div className={styles.specializationsBlock}>
            <h2 className={styles.subHeading}>Curriculum Tracks</h2>
            <div className={styles.specializationsGrid}>
              {dept.specializations.map((spec) => (
                <Link
                  key={spec.slug}
                  href={`/departments/${dept.slug}/${spec.slug}`}
                  className={styles.specCard}
                >
                  <div className={styles.specHeader}>
                    <span className={styles.specName}>{spec.name}</span>
                    <span className={styles.trackCode}>{spec.trackCode}</span>
                  </div>
                  <p className={styles.specDesc}>{spec.description}</p>
                  <div className={styles.specFooter}>
                    <span>Lead: {spec.academicLead}</span>
                    <span className={styles.exploreLink}>Explore &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Enrolled Students Grid */}
        <div className={styles.studentsSection}>
          <h2 className={styles.sectionTitle}>
            Students Enrolled in {dept.name} ({deptStudents.length})
          </h2>

          <div className={styles.studentsGrid}>
            {deptStudents.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
