"use client";

import React, { useState, useMemo } from "react";
import { STUDENTS_DATA, Student } from "@/data/directoryData";
import StudentCard from "@/components/StudentCard";
import styles from "./page.module.css";

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  // Filter students by search term and selected department
  const filteredStudents = useMemo(() => {
    return STUDENTS_DATA.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDept =
        selectedDept === "All" || student.department === selectedDept;

      return matchesSearch && matchesDept;
    });
  }, [searchTerm, selectedDept]);

  const totalFiltered = filteredStudents.length;
  const totalPages = Math.ceil(totalFiltered / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const currentStudents = filteredStudents.slice(
    startIndex,
    startIndex + pageSize
  );

  const handleDeptChange = (dept: string) => {
    setSelectedDept(dept);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchTerm(val);
    setCurrentPage(1);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.inner}>
        {/* Header Section */}
        <header className={styles.header}>
          <h1 className={styles.title}>Students</h1>
          <p className={styles.subtitle}>
            Browse students and view their profiles.
          </p>
        </header>

        {/* Filter and Search Bar */}
        <div className={styles.filterBar}>
          <div className={styles.searchWrapper}>
            <svg
              className={styles.searchIcon}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              id="student-search-input"
              className={styles.searchInput}
              placeholder="Search students"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
            {searchTerm && (
              <button
                type="button"
                className={styles.clearSearchBtn}
                onClick={() => handleSearchChange("")}
                aria-label="Clear search input"
              >
                &times;
              </button>
            )}
          </div>

          <div className={styles.deptFilter}>
            <label htmlFor="dept-select" className={styles.filterLabel}>
              Department:
            </label>
            <div className={styles.selectWrapper}>
              <select
                id="dept-select"
                className={styles.deptSelect}
                value={selectedDept}
                onChange={(e) => handleDeptChange(e.target.value)}
              >
                <option value="All">All departments</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Design">Design</option>
                <option value="Business">Business</option>
              </select>
              <svg
                className={styles.selectChevron}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Students Cards Grid */}
        {currentStudents.length > 0 ? (
          <div className={styles.grid}>
            {currentStudents.map((student: Student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
            <h3 className={styles.emptyTitle}>No students found</h3>
            <p className={styles.emptyText}>
              No directory profiles matched &ldquo;{searchTerm}&rdquo;
              {selectedDept !== "All" ? ` in ${selectedDept}` : ""}.
            </p>
            <button
              type="button"
              className={styles.resetFilterBtn}
              onClick={() => {
                setSearchTerm("");
                setSelectedDept("All");
              }}
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Pagination & Counter Footer */}
        <div className={styles.paginationRow}>
          <div className={styles.countText}>
            Showing <strong>{currentStudents.length}</strong> of{" "}
            <strong>{totalFiltered}</strong> students
          </div>

          <div className={styles.paginationActions}>
            <button
              type="button"
              className={styles.pageBtn}
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              aria-label="Previous page"
            >
              Previous
            </button>
            <button
              type="button"
              className={styles.pageBtn}
              disabled={currentPage >= totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              aria-label="Next page"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
