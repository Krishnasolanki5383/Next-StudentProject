import React from "react";
import Link from "next/link";
import { Student } from "@/data/directoryData";
import styles from "./StudentCard.module.css";

interface StudentCardProps {
  student: Student;
  subFocus?: string;
  showSpecializationOnly?: boolean;
}

export default function StudentCard({
  student,
  subFocus,
  showSpecializationOnly = false,
}: StudentCardProps) {
  const getDeptBadgeClass = (dept: string) => {
    switch (dept) {
      case "Computer Science":
        return styles.deptBadgeCS;
      case "Design":
        return styles.deptBadgeDesign;
      case "Business":
        return styles.deptBadgeBusiness;
      default:
        return styles.deptBadgeCS;
    }
  };

  return (
    <div className={styles.card}>
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
        <div className={styles.idBadge}>
          {showSpecializationOnly ? `Year ${student.studyYear.charAt(0)}` : student.id}
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{student.name}</h3>
        {showSpecializationOnly && (
          <div className={styles.subId}>{student.id}</div>
        )}

        <div className={styles.metaRow}>
          {!showSpecializationOnly ? (
            <>
              <span
                className={`${styles.deptBadge} ${getDeptBadgeClass(
                  student.department
                )}`}
              >
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

      <div className={styles.footer}>
        <Link
          href={`/students/${student.slug}`}
          className={styles.profileLink}
          aria-label={`View profile of ${student.name}`}
        >
          <span>View profile</span>
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
  );
}
