"use client";

import React, { useState, useMemo } from "react";
import { STUDENTS_DATA, Student } from "@/data/directoryData";
import StudentCard from "@/components/StudentCard";
import styles from "./page.module.css";

/**
 * HomePage / Students Directory
 * This page displays all students with real-time search, department filtering, and pagination.
 */
export default function StudentsPage() {
  // --------------------------------------------------------------------------
  // Component State
  // --------------------------------------------------------------------------
  // 1. Text entered in the search bar
  const [searchTerm, setSearchTerm] = useState("");

  // 2. Department selected in the dropdown ("All", "Computer Science", etc.)
  const [selectedDept, setSelectedDept] = useState("All");

  // 3. Current page number for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8; // Number of students shown per page

  // --------------------------------------------------------------------------
  // Filter Logic
  // --------------------------------------------------------------------------
  // Filters the student list based on searchTerm and selectedDept
  const filteredStudents = useMemo(() => {
    return STUDENTS_DATA.filter((student) => {
      // Check if student matches search query (searches name, ID, specialization, or email)
      const query = searchTerm.toLowerCase();
      const matchesSearch =
        student.name.toLowerCase().includes(query) ||
        student.id.toLowerCase().includes(query) ||
        student.specialization.toLowerCase().includes(query) ||
        student.email.toLowerCase().includes(query);

      // Check if student matches the selected department
      const matchesDept =
        selectedDept === "All" || student.department === selectedDept;

      return matchesSearch && matchesDept;
    });
  }, [searchTerm, selectedDept]);

  // --------------------------------------------------------------------------
  // Pagination Calculations
  // --------------------------------------------------------------------------
  const totalStudents = filteredStudents.length;
  const totalPages = Math.ceil(totalStudents / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const currentStudents = filteredStudents.slice(startIndex, startIndex + pageSize);

  // Handlers for user interactions
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleDeptChange = (dept: string) => {
    setSelectedDept(dept);
    setCurrentPage(1); // Reset to first page when filtering
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.inner}>
        {/* Page Title & Subtitle */}
        <header className={styles.header}>
          <h1 className={styles.title}>Students Directory</h1>
          <p className={styles.subtitle}>
            Browse student profiles, search by name, or filter by academic department.
          </p>
        </header>

        {/* Search Bar & Department Filter Controls */}
        <div className={styles.filterBar}>
          {/* Search Input Box */}
          <div className={styles.searchWrapper}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              id="student-search-input"
              className={styles.searchInput}
              placeholder="Search by name, ID, or specialization..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
            {searchTerm && (
              <button
                type="button"
                className={styles.clearSearchBtn}
                onClick={() => handleSearchChange("")}
                aria-label="Clear search"
              >
                &times;
              </button>
            )}
          </div>

          {/* Department Filter Dropdown */}
          <div className={styles.deptFilter}>
            <label htmlFor="dept-select" className={styles.filterLabel}>
              Department:
            </label>
            <select
              id="dept-select"
              className={styles.deptSelect}
              value={selectedDept}
              onChange={(e) => handleDeptChange(e.target.value)}
            >
              <option value="All">All Departments</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Design">Design</option>
              <option value="Business">Business</option>
            </select>
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
          /* Empty State if no students match */
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}>🔍</span>
            <h3 className={styles.emptyTitle}>No students found</h3>
            <p className={styles.emptyText}>
              We couldn&apos;t find any students matching &ldquo;{searchTerm}&rdquo;.
            </p>
            <button
              type="button"
              className={styles.resetFilterBtn}
              onClick={() => {
                setSearchTerm("");
                setSelectedDept("All");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pagination & Count Summary */}
        <div className={styles.paginationRow}>
          <div className={styles.countText}>
            Showing <strong>{currentStudents.length}</strong> of{" "}
            <strong>{totalStudents}</strong> students
          </div>

          {totalPages > 1 && (
            <div className={styles.paginationActions}>
              <button
                type="button"
                className={styles.pageBtn}
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              >
                &larr; Previous
              </button>
              <span className={styles.pageIndicator}>
                Page {currentPage} of {totalPages}
              </span>
              <button
                type="button"
                className={styles.pageBtn}
                disabled={currentPage >= totalPages}
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              >
                Next &rarr;
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
