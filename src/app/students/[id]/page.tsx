import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStudentByIdOrSlug, getAllStudents } from "@/data/directoryData";
import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "./StudentProfile.module.css";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const students = getAllStudents();
  return students.flatMap((student) => [
    { id: student.slug },
    { id: student.id },
  ]);
}

export default async function StudentProfilePage({ params }: PageProps) {
  const { id } = await params;
  const student = getStudentByIdOrSlug(id);

  if (!student) {
    notFound();
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.inner}>
        {/* Breadcrumbs and back navigation */}
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

        {/* Profile Card */}
        <div className={styles.profileCard}>
          {/* Header Row */}
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

          {/* 2-Column Metadata Grid */}
          <div className={styles.metaGrid}>
            <div className={styles.metaCol}>
              <div className={styles.metaField}>
                <span className={styles.metaLabel}>DEPARTMENT</span>
                <Link
                  href={`/departments/${student.departmentSlug}`}
                  className={styles.deptLink}
                >
                  {student.department}
                </Link>
              </div>

              <div className={styles.metaField}>
                <span className={styles.metaLabel}>EMAIL</span>
                <a
                  href={`mailto:${student.email}`}
                  className={styles.emailLink}
                >
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

          {/* Academic Details Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Academic Details</h2>

            <div className={styles.academicRow}>
              <span className={styles.academicLabel}>Department</span>
              <span className={styles.academicValue}>{student.department}</span>
            </div>

            <div className={styles.academicRow}>
              <span className={styles.academicLabel}>
                Current Academic Standing
              </span>
              <span className={styles.academicValue}>{student.standing}</span>
            </div>

            <div className={styles.subjectsContainer}>
              <span className={styles.subjectsLabel}>ENROLLED SUBJECTS</span>
              <div className={styles.subjectsList}>
                {student.subjects.map((subject, idx) => (
                  <div key={idx} className={styles.subjectItem}>
                    <span className={styles.subjectName}>
                      <strong>{subject.code}:</strong> {subject.name}
                    </span>
                    <span className={styles.subjectCredits}>
                      {subject.credits}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* System Sub-Footer */}
        <div className={styles.subFooter}>
          <span className={styles.systemId}>
            System Record ID: {student.systemRecordId}
          </span>
          <span className={styles.validatedDate}>
            Last validated: {student.lastValidated}
          </span>
        </div>
      </div>
    </div>
  );
}
