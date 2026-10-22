import React from "react";
import Link from "next/link";
import { Student } from "@/data/directoryData";
import styles from "./StudentCard.module.css";

// Props that this card accepts
interface StudentCardProps {
  student: Student;
  subFocus?: string;
  showSpecializationOnly?: boolean;
}

/**
 * StudentCard Component
 * Displays a summary card for a single student.
 * Clicking "View profile" navigates to /students/[slug].
 */
export default function StudentCard({
  student,
  subFocus,
  showSpecializationOnly = false,
}: StudentCardProps) {
  // Helper to choose badge color based on department
  const getBadgeClass = (dept: string) => {
    if (dept === "Design") return styles.deptBadgeDesign;
    if (dept === "Business") return styles.deptBadgeBusiness;
    return styles.deptBadgeCS;
  };

  return (
    <div className={styles.card}>
      {/* Card Header: Avatar & Student ID */}
      <div className={styles.header}>
        <div
          className={styles.avatar}
          style={{
            backgroundColor: student.avatarBg,
            color: student.avatarColor,
          }}
        >
          {student.initials}
        </div>
        <span className={styles.idBadge}>
          {showSpecializationOnly ? `Year ${student.studyYear.charAt(0)}` : student.id}
        </span>
      </div>

      {/* Card Body: Student Name & Department/Year */}
      <div className={styles.body}>
        <h3 className={styles.name}>{student.name}</h3>

        {showSpecializationOnly && (
          <div className={styles.subId}>{student.id}</div>
        )}

        <div className={styles.metaRow}>
          {!showSpecializationOnly ? (
            <>
              <span className={`${styles.deptBadge} ${getBadgeClass(student.department)}`}>
                {student.department}
              </span>
              <span className={styles.yearText}>{student.studyYear}</span>
            </>
          ) : (
            <span className={styles.focusText}>
              {subFocus || student.trackFocus || student.specialization}
            </span>
          )}
        </div>
      </div>

      {/* Card Footer: Profile Link */}
      <div className={styles.footer}>
        <Link
          href={`/students/${student.slug}`}
          className={styles.profileLink}
          aria-label={`View profile of ${student.name}`}
        >
          <span>View profile &rarr;</span>
        </Link>
      </div>
    </div>
  );
}
