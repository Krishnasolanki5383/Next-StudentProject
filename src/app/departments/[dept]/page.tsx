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

interface PageProps {
  params: Promise<{ dept: string }>;
}

export async function generateStaticParams() {
  return DEPARTMENTS_DATA.map((dept) => ({
    dept: dept.slug,
  }));
}

export default async function DepartmentDetailPage({ params }: PageProps) {
  const { dept: deptSlug } = await params;
  const dept = getDepartmentBySlug(deptSlug);

  if (!dept) {
    notFound();
  }

  const deptStudents = STUDENTS_DATA.filter(
    (s) => s.departmentSlug === dept.slug
  );

  return (
    <div className={styles.pageContainer}>
      <div className={styles.inner}>
        <Breadcrumbs
          items={[
            { label: "Departments", href: "/departments" },
            { label: dept.name },
          ]}
          backLink={{
            label: "Return to all departments",
            href: "/departments",
          }}
          rightAction={{
            label: "View all students",
            href: "/",
          }}
        />

        {/* Department Overview Banner */}
        <div className={styles.deptCard}>
          <div className={styles.deptHeader}>
            <div className={styles.headerLeft}>
              <h1 className={styles.title}>{dept.name}</h1>
              <span className={styles.deptBadge}>Academic Faculty</span>
            </div>
            <div className={styles.enrolledBadge}>
              <strong>{dept.enrolledStudentsCount}</strong> Enrolled Students
            </div>
          </div>

          <p className={styles.description}>{dept.description}</p>

          <div className={styles.specializationsBlock}>
            <h2 className={styles.subHeading}>Curriculum Specializations</h2>
            <div className={styles.specializationsGrid}>
              {dept.specializations.map((spec) => (
                <Link
                  key={spec.slug}
                  href={`/departments/${dept.slug}/${spec.slug}`}
                  className={styles.specCard}
                >
                  <div className={styles.specHeader}>
                    <span className={styles.specName}>{spec.name}</span>
                    <span className={styles.trackCodeBadge}>{spec.trackCode}</span>
                  </div>
                  <p className={styles.specDesc}>{spec.description}</p>
                  <div className={styles.specFooter}>
                    <span>{spec.academicLead}</span>
                    <span className={styles.specArrow}>Explore track &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Enrolled Students in this Faculty */}
        <div className={styles.studentsSection}>
          <div className={styles.studentsHeader}>
            <h2 className={styles.sectionTitle}>
              Students in {dept.name}
              <span className={styles.countBadge}>{deptStudents.length}</span>
            </h2>
            <span className={styles.filterTrackBadge}>
              Faculty: {dept.name}
            </span>
          </div>

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
