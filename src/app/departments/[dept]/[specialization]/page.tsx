import React from "react";
import { notFound } from "next/navigation";
import {
  getSpecialization,
  getStudentsBySpecialization,
  DEPARTMENTS_DATA,
} from "@/data/directoryData";
import Breadcrumbs from "@/components/Breadcrumbs";
import StudentCard from "@/components/StudentCard";
import styles from "./SpecializationPage.module.css";

// Dynamic parameters for nested route: /departments/[dept]/[specialization]
interface PageProps {
  params: Promise<{ dept: string; specialization: string }>;
}

/**
 * generateStaticParams
 * Informs Next.js of all nested specialization URLs to pre-render.
 */
export async function generateStaticParams() {
  const params: { dept: string; specialization: string }[] = [];
  for (const dept of DEPARTMENTS_DATA) {
    for (const spec of dept.specializations) {
      params.push({
        dept: dept.slug,
        specialization: spec.slug,
      });
    }
  }
  return params;
}

/**
 * SpecializationPage Component
 * Nested Dynamic Route: /departments/[dept]/[specialization]
 * Displays details for an individual track/specialization and its enrolled students.
 */
export default async function SpecializationPage({ params }: PageProps) {
  // 1. Get dept and specialization from URL params
  const { dept: deptSlug, specialization: specSlug } = await params;

  // 2. Fetch the specialization data
  const specData = getSpecialization(deptSlug, specSlug);

  // 3. If not found, show 404
  if (!specData) {
    notFound();
  }

  const { department, specialization } = specData;

  // 4. Find students enrolled in this specialization
  const students = getStudentsBySpecialization(specialization.slug);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.inner}>
        {/* Navigation Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Departments", href: "/departments" },
            { label: department.name, href: `/departments/${department.slug}` },
            { label: specialization.name },
          ]}
          backLink={{
            label: `Back to ${department.name}`,
            href: `/departments/${department.slug}`,
          }}
          rightAction={{
            label: "View all students",
            href: "/",
          }}
        />

        {/* Specialization Overview Card */}
        <div className={styles.specCard}>
          <div className={styles.header}>
            <div>
              <div className={styles.badgeRow}>
                <span className={styles.deptBadge}>{department.name}</span>
                <span className={styles.codeBadge}>{specialization.trackCode}</span>
              </div>
              <h1 className={styles.title}>{specialization.name}</h1>
              <p className={styles.description}>{specialization.description}</p>
            </div>
          </div>

          <div className={styles.metaRow}>
            <div>
              <span className={styles.metaLabel}>Academic Lead</span>
              <span className={styles.metaValue}>{specialization.academicLead}</span>
            </div>
            <div>
              <span className={styles.metaLabel}>Core Facility</span>
              <span className={styles.metaValue}>{specialization.coreLab}</span>
            </div>
            <div>
              <span className={styles.metaLabel}>Curriculum Cycle</span>
              <span className={styles.metaValue}>{specialization.curriculumCycle}</span>
            </div>
          </div>
        </div>

        {/* Enrolled Students in this Specialization */}
        <div className={styles.studentsSection}>
          <h2 className={styles.sectionTitle}>
            Enrolled Students ({students.length})
          </h2>

          {students.length > 0 ? (
            <div className={styles.studentsGrid}>
              {students.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  showSpecializationOnly={true}
                  subFocus={student.trackFocus}
                />
              ))}
            </div>
          ) : (
            <p className={styles.noStudents}>
              No student profiles currently enrolled in this track.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
