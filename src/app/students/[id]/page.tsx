import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStudentByIdOrSlug, getAllStudents } from "@/data/directoryData";
import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "./StudentProfile.module.css";

// PageProps interface: In Next.js 15+, dynamic route params are a Promise
interface PageProps {
  params: Promise<{ id: string }>;
}

/**
 * generateStaticParams
 * In Next.js, this tells the build tool which student pages to pre-render.
 * Pre-rendered pages load instantly for users!
 */
export async function generateStaticParams() {
  const students = getAllStudents();
  return students.flatMap((student) => [
    { id: student.slug },
    { id: student.id },
  ]);
}

/**
 * StudentProfilePage Component
 * Dynamic Route: /students/[id]
 * Displays detailed information about a single student.
 */
export default async function StudentProfilePage({ params }: PageProps) {
  // 1. Extract the "id" parameter from URL (e.g. "aarav-mehta" or "STU-1042")
  const { id } = await params;

  // 2. Look up the student in our data
  const student = getStudentByIdOrSlug(id);

  // 3. If student is not found, automatically trigger Next.js 404 page
  if (!student) {
    notFound();
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.inner}>
        {/* Breadcrumb Navigation with Back Button */}
        <Breadcrumbs
          items={[
            { label: "Students", href: "/" },
            { label: student.name },
          ]}
          backLink={{
            label: "Back to students",
            href: "/",
          }}
        />

        {/* Main Student Profile Card */}
        <div className={styles.profileCard}>
          {/* Header Row: Avatar, Name, ID, and Status */}
          <div className={styles.cardHeader}>
            <div
              className={styles.avatarLarge}
              style={{
                backgroundColor: student.avatarBg,
                color: student.avatarColor,
              }}
            >
              {student.initials}
            </div>

            <div className={styles.headerInfo}>
              <h1 className={styles.studentName}>{student.name}</h1>
              <div className={styles.badgeRow}>
                <span className={styles.idBadge}>{student.id}</span>
                <span className={styles.statusBadge}>
                  <span className={styles.statusDot} />
                  {student.status}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.divider} />

          {/* 2-Column Info Grid */}
          <div className={styles.metaGrid}>
            <div className={styles.metaCol}>
              <div className={styles.metaField}>
                <span className={styles.metaLabel}>DEPARTMENT</span>
                <Link
                  href={`/departments/${student.departmentSlug}`}
                  className={styles.deptLink}
                >
                  {student.department} &rarr;
                </Link>
              </div>

              <div className={styles.metaField}>
                <span className={styles.metaLabel}>EMAIL ADDRESS</span>
                <a href={`mailto:${student.email}`} className={styles.emailLink}>
                  {student.email}
                </a>
              </div>
            </div>

            <div className={styles.metaCol}>
              <div className={styles.metaField}>
                <span className={styles.metaLabel}>STUDY YEAR</span>
                <span className={styles.metaValue}>{student.studyYearFull}</span>
              </div>

              <div className={styles.metaField}>
                <span className={styles.metaLabel}>ENROLLED</span>
                <span className={styles.metaValue}>{student.enrolled}</span>
              </div>
            </div>
          </div>

          <div className={styles.divider} />

          {/* About Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>About</h2>
            <p className={styles.bioText}>{student.about}</p>
          </section>

          <div className={styles.divider} />

          {/* Enrolled Courses / Subjects Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Enrolled Subjects</h2>
            <div className={styles.subjectsList}>
              {student.subjects.map((subject, idx) => (
                <div key={idx} className={styles.subjectItem}>
                  <span className={styles.subjectName}>
                    <strong>{subject.code}:</strong> {subject.name}
                  </span>
                  <span className={styles.subjectCredits}>{subject.credits}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* System Sub-Footer */}
        <div className={styles.subFooter}>
          <span>Record ID: {student.systemRecordId}</span>
          <span>Verified: {student.lastValidated}</span>
        </div>
      </div>
    </div>
  );
}
