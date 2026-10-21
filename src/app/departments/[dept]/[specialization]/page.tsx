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

interface PageProps {
  params: Promise<{ dept: string; specialization: string }>;
}

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

export default async function NestedSpecializationPage({ params }: PageProps) {
  const { dept: deptSlug, specialization: specSlug } = await params;
  const specData = getSpecialization(deptSlug, specSlug);

  if (!specData) {
    notFound();
  }

  const { department, specialization } = specData;
  const students = getStudentsBySpecialization(specialization.slug);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.inner}>
        {/* Breadcrumbs and navigation */}
        <Breadcrumbs
          items={[
            { label: "Departments", href: "/departments" },
            { label: department.name, href: `/departments/${department.slug}` },
            { label: specialization.name },
          ]}
          backLink={{
            label: `Return to ${department.name} Department`,
            href: `/departments/${department.slug}`,
          }}
          rightAction={{
            label: "View all students",
            href: "/",
          }}
        />

        {/* Track Overview Card */}
        <div className={styles.trackCard}>
          <div className={styles.trackHeader}>
            <div className={styles.titleArea}>
              <h1 className={styles.trackTitle}>{specialization.name}</h1>
              <span className={styles.specTag}>
                Specialization under {department.name}
              </span>
            </div>

            <div className={styles.trackCodeBox}>
              <span className={styles.trackCodeLabel}>DEPARTMENT TRACK</span>
              <span className={styles.trackCodeBadge}>
                {specialization.trackCode}
              </span>
            </div>
          </div>

          <p className={styles.trackDescription}>
            {specialization.description}
          </p>

          <div className={styles.metaFourCol}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Academic Lead</span>
              <span className={styles.metaValue}>
                {specialization.academicLead}
              </span>
            </div>

            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Primary Core Lab</span>
              <span className={styles.metaValue}>{specialization.coreLab}</span>
            </div>

            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Total Enrollment</span>
              <span className={styles.metaValue}>
                {specialization.enrolledCount} Active Enrollees
              </span>
            </div>

            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Curriculum Cycle</span>
              <span className={styles.metaValue}>
                {specialization.curriculumCycle}
              </span>
            </div>
          </div>
        </div>

        {/* Students in Specialization Section */}
        <div className={styles.studentsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Students in this Specialization
              <span className={styles.countBadge}>{students.length}</span>
            </h2>

            <div className={styles.trackFilterBadge}>
              <span className={styles.filterMuted}>Filtered by Track:</span>
              <span className={styles.trackBadgeText}>
                {specialization.name}
              </span>
            </div>
          </div>

          <div className={styles.grid2x2}>
            {students.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                showSpecializationOnly={true}
                subFocus={student.trackFocus}
              />
            ))}
          </div>
        </div>

        {/* System Sub-Footer */}
        <div className={styles.subFooter}>
          <span className={styles.footerLeft}>
            Campus Directory &copy; Academic Informatics Core
          </span>
          <div className={styles.footerRight}>
            <span className={styles.pathBadge}>
              Path: /departments/{department.slug}/{specialization.slug}
            </span>
            <span className={styles.statusDot} />
          </div>
        </div>
      </div>
    </div>
  );
}
