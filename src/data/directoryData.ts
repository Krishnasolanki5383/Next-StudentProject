// ============================================================================
// STUDENT DIRECTORY - MOCK DATABASE & HELPER FUNCTIONS
// ============================================================================
// This file stores all sample data for students and departments.
// In a real application, this data would come from a database (like MongoDB or PostgreSQL).
// Beginners can easily add, edit, or remove students and departments here!

// ----------------------------------------------------------------------------
// TypeScript Interfaces (Data Types)
// ----------------------------------------------------------------------------

// Represents a single subject/course taken by a student
export interface Subject {
  code: string;    // e.g. "CS-101"
  name: string;    // e.g. "Web Development"
  credits: string; // e.g. "4.0 Credits"
}

// Represents a student profile
export interface Student {
  id: string;                 // Student ID (e.g. "STU-1042")
  slug: string;               // URL-friendly name (e.g. "aarav-mehta")
  name: string;               // Full name
  initials: string;           // 2-letter initials for avatar
  avatarBg: string;           // Avatar background color
  avatarColor: string;        // Avatar text color
  department: string;         // Department name ("Computer Science", "Design", "Business")
  departmentSlug: string;     // URL slug for department ("computer-science")
  studyYear: string;          // Short year ("1st Year", "2nd Year", "3rd Year", "4th Year")
  studyYearFull: string;      // Full standing description
  standing: string;           // Academic standing
  enrolled: string;           // Enrollment semester (e.g. "Fall 2022")
  email: string;              // Contact email
  systemRecordId: string;     // Official record ID
  specialization: string;     // Focused field of study
  specializationSlug: string; // URL slug for specialization
  trackFocus?: string;        // Specific track or elective focus
  status: "Active Student" | "On Leave" | "Alumni";
  lastValidated: string;      // Verification date
  about: string;              // Short biography
  subjects: Subject[];        // Enrolled courses
}

// Represents an academic specialization within a department
export interface Specialization {
  name: string;
  slug: string;
  trackCode: string;
  description: string;
  academicLead: string;
  coreLab: string;
  enrolledCount: number;
  curriculumCycle: string;
}

// Represents an academic department
export interface Department {
  name: string;
  slug: string;
  icon: "code" | "design" | "business";
  description: string;
  specializationsCount: number;
  enrolledStudentsCount: number;
  specializations: Specialization[];
}

// ----------------------------------------------------------------------------
// Students List (8 Sample Students)
// ----------------------------------------------------------------------------
export const STUDENTS_DATA: Student[] = [
  {
    id: "STU-1042",
    slug: "aarav-mehta",
    name: "Aarav Mehta",
    initials: "AM",
    avatarBg: "#dbeafe",
    avatarColor: "#1d4ed8",
    department: "Computer Science",
    departmentSlug: "computer-science",
    studyYear: "3rd Year",
    studyYearFull: "3rd Year (Junior)",
    standing: "3rd Year Undergraduate",
    enrolled: "Fall 2022",
    email: "aarav.mehta@campus.edu",
    systemRecordId: "0948-CS-AM",
    specialization: "Web Development",
    specializationSlug: "web-development",
    trackFocus: "Full-Stack Architecture",
    status: "Active Student",
    lastValidated: "Oct 24, 2024",
    about: "Aarav is an undergraduate researcher focusing on distributed systems and cloud architecture. He mentors first-year engineering students in algorithm fundamentals.",
    subjects: [
      { code: "CS-301", name: "Distributed Systems & Microservices", credits: "4.0 Credits" },
      { code: "CS-340", name: "Web Application Architecture", credits: "4.0 Credits" },
      { code: "CS-280", name: "Algorithms & Complexity", credits: "3.5 Credits" }
    ]
  },
  {
    id: "STU-1089",
    slug: "elena-rostova",
    name: "Elena Rostova",
    initials: "ER",
    avatarBg: "#ede9fe",
    avatarColor: "#6d28d9",
    department: "Design",
    departmentSlug: "design",
    studyYear: "2nd Year",
    studyYearFull: "2nd Year (Sophomore)",
    standing: "2nd Year Undergraduate",
    enrolled: "Fall 2023",
    email: "elena.rostova@campus.edu",
    systemRecordId: "1089-DS-ER",
    specialization: "Interaction & UI Design",
    specializationSlug: "interaction-ui-design",
    trackFocus: "Spatial Interface Systems",
    status: "Active Student",
    lastValidated: "Oct 24, 2024",
    about: "Elena explores typography, accessibility systems, and tactile digital interfaces. She is currently researching multimodal user experiences in AR environments.",
    subjects: [
      { code: "DS-210", name: "Visual Design Systems", credits: "4.0 Credits" },
      { code: "DS-230", name: "Interaction Principles & Micro-animations", credits: "3.5 Credits" },
      { code: "DS-180", name: "Typography & Layout Engineering", credits: "3.0 Credits" }
    ]
  },
  {
    id: "STU-1120",
    slug: "marcus-chen",
    name: "Marcus Chen",
    initials: "MC",
    avatarBg: "#ffedd5",
    avatarColor: "#c2410c",
    department: "Business",
    departmentSlug: "business",
    studyYear: "4th Year",
    studyYearFull: "4th Year (Senior)",
    standing: "4th Year Undergraduate",
    enrolled: "Fall 2021",
    email: "marcus.chen@campus.edu",
    systemRecordId: "1120-BS-MC",
    specialization: "Financial Technology & Analytics",
    specializationSlug: "fintech-analytics",
    trackFocus: "Quantitative Venture Modeling",
    status: "Active Student",
    lastValidated: "Oct 24, 2024",
    about: "Marcus analyzes quantitative market trends, fintech operations, and venture funding. He serves as president of the Student Investment Committee.",
    subjects: [
      { code: "BA-410", name: "Strategic Financial Modeling", credits: "4.0 Credits" },
      { code: "BA-440", name: "Global Venture Capital & Operations", credits: "3.5 Credits" },
      { code: "BA-390", name: "Corporate Governance & Ethics", credits: "3.0 Credits" }
    ]
  },
  {
    id: "STU-1155",
    slug: "priya-sharma",
    name: "Priya Sharma",
    initials: "PS",
    avatarBg: "#e0f2fe",
    avatarColor: "#0284c7",
    department: "Computer Science",
    departmentSlug: "computer-science",
    studyYear: "1st Year",
    studyYearFull: "1st Year (Freshman)",
    standing: "1st Year Undergraduate",
    enrolled: "Fall 2024",
    email: "priya.sharma@campus.edu",
    systemRecordId: "1155-CS-PS",
    specialization: "Web Development",
    specializationSlug: "web-development",
    trackFocus: "Reactive UI Design",
    status: "Active Student",
    lastValidated: "Oct 24, 2024",
    about: "Priya is passionate about modern reactive web components, accessibility-first design, and open-source tooling.",
    subjects: [
      { code: "CS-110", name: "Introduction to Computer Systems", credits: "4.0 Credits" },
      { code: "CS-140", name: "Web Foundations & Declarative UI", credits: "4.0 Credits" },
      { code: "MA-150", name: "Discrete Mathematics for Computing", credits: "3.5 Credits" }
    ]
  },
  {
    id: "STU-1201",
    slug: "lucas-dubois",
    name: "Lucas Dubois",
    initials: "LD",
    avatarBg: "#fee2e2",
    avatarColor: "#b91c1c",
    department: "Design",
    departmentSlug: "design",
    studyYear: "3rd Year",
    studyYearFull: "3rd Year (Junior)",
    standing: "3rd Year Undergraduate",
    enrolled: "Fall 2022",
    email: "lucas.dubois@campus.edu",
    systemRecordId: "1201-DS-LD",
    specialization: "Product & Experience Prototyping",
    specializationSlug: "product-prototyping",
    trackFocus: "Hardware-Software Ergonomics",
    status: "Active Student",
    lastValidated: "Oct 24, 2024",
    about: "Lucas designs hardware-software ergonomics, tangible interfaces, and rapid interactive prototypes displayed in design showcases.",
    subjects: [
      { code: "DS-320", name: "Advanced Product Ergonomics", credits: "4.0 Credits" },
      { code: "DS-350", name: "Tangible Computing Interfaces", credits: "4.0 Credits" },
      { code: "DS-290", name: "Design Research Methodologies", credits: "3.0 Credits" }
    ]
  },
  {
    id: "STU-1244",
    slug: "maya-lin",
    name: "Maya Lin",
    initials: "ML",
    avatarBg: "#f3e8ff",
    avatarColor: "#7e22ce",
    department: "Business",
    departmentSlug: "business",
    studyYear: "2nd Year",
    studyYearFull: "2nd Year (Sophomore)",
    standing: "2nd Year Undergraduate",
    enrolled: "Fall 2023",
    email: "maya.lin@campus.edu",
    systemRecordId: "1244-BS-ML",
    specialization: "Strategic Management & Entrepreneurship",
    specializationSlug: "strategic-management",
    trackFocus: "Sustainable Venture Acceleration",
    status: "Active Student",
    lastValidated: "Oct 24, 2024",
    about: "Maya focuses on circular economy models, startup growth strategies, and social innovation labs.",
    subjects: [
      { code: "BA-220", name: "Managerial Economics & Strategy", credits: "4.0 Credits" },
      { code: "BA-250", name: "Innovation & Entrepreneurship", credits: "3.5 Credits" },
      { code: "BA-210", name: "Organizational Behavior & Leadership", credits: "3.0 Credits" }
    ]
  },
  {
    id: "STU-1310",
    slug: "tariq-al-mansoor",
    name: "Tariq Al-Mansoor",
    initials: "TA",
    avatarBg: "#dbeafe",
    avatarColor: "#1e40af",
    department: "Computer Science",
    departmentSlug: "computer-science",
    studyYear: "4th Year",
    studyYearFull: "4th Year (Senior)",
    standing: "4th Year Undergraduate",
    enrolled: "Fall 2021",
    email: "tariq.almansoor@campus.edu",
    systemRecordId: "1310-CS-TA",
    specialization: "Web Development",
    specializationSlug: "web-development",
    trackFocus: "Distributed Web Systems",
    status: "Active Student",
    lastValidated: "Oct 24, 2024",
    about: "Tariq works on high-throughput backend services, consensus algorithms, and scalable cloud architectures.",
    subjects: [
      { code: "CS-410", name: "Distributed Consensus Protocols", credits: "4.0 Credits" },
      { code: "CS-450", name: "Scalable Cloud Architecture", credits: "4.0 Credits" },
      { code: "CS-490", name: "Senior Capstone Engineering", credits: "4.0 Credits" }
    ]
  },
  {
    id: "STU-1388",
    slug: "sophia-muller",
    name: "Sophia Müller",
    initials: "SM",
    avatarBg: "#e0f2fe",
    avatarColor: "#0369a1",
    department: "Computer Science",
    departmentSlug: "computer-science",
    studyYear: "2nd Year",
    studyYearFull: "2nd Year (Sophomore)",
    standing: "2nd Year Undergraduate",
    enrolled: "Fall 2023",
    email: "sophia.muller@campus.edu",
    systemRecordId: "1388-CS-SM",
    specialization: "Web Development",
    specializationSlug: "web-development",
    trackFocus: "Progressive Web Apps",
    status: "Active Student",
    lastValidated: "Oct 24, 2024",
    about: "Sophia focuses on offline-first architectures, service workers, and client-side performance engineering.",
    subjects: [
      { code: "CS-220", name: "Data Structures & Algorithms", credits: "4.0 Credits" },
      { code: "CS-260", name: "Progressive Web Applications", credits: "3.5 Credits" },
      { code: "CS-270", name: "Network Protocols & Security", credits: "3.5 Credits" }
    ]
  }
];

// ----------------------------------------------------------------------------
// Departments List (3 Academic Departments)
// ----------------------------------------------------------------------------
export const DEPARTMENTS_DATA: Department[] = [
  {
    name: "Computer Science",
    slug: "computer-science",
    icon: "code",
    description: "Software engineering, artificial intelligence, algorithms, and systems infrastructure.",
    specializationsCount: 4,
    enrolledStudentsCount: 320,
    specializations: [
      {
        name: "Web Development",
        slug: "web-development",
        trackCode: "CS-SPEC-04",
        description: "Focusing on modern frontend architectures, full-stack frameworks, reactive interfaces, and distributed web APIs.",
        academicLead: "Prof. Elena Vance",
        coreLab: "Turing Hall 408",
        enrolledCount: 4,
        curriculumCycle: "2024–2025 Revised"
      },
      {
        name: "Artificial Intelligence & Machine Learning",
        slug: "ai-machine-learning",
        trackCode: "CS-SPEC-01",
        description: "Deep neural representations, natural language understanding, and autonomous agent systems.",
        academicLead: "Dr. Aris Thorne",
        coreLab: "Lovelace Computing Center 201",
        enrolledCount: 110,
        curriculumCycle: "2024–2025 Revised"
      },
      {
        name: "Systems & Cloud Infrastructure",
        slug: "systems-cloud",
        trackCode: "CS-SPEC-02",
        description: "Operating system primitives, container orchestration, and scalable distributed networks.",
        academicLead: "Prof. David Kroll",
        coreLab: "Hopper Systems Lab 110",
        enrolledCount: 95,
        curriculumCycle: "2024–2025 Revised"
      },
      {
        name: "Cybersecurity & Cryptography",
        slug: "cybersecurity-cryptography",
        trackCode: "CS-SPEC-03",
        description: "Zero-knowledge verification, secure enclaves, and kernel-level exploit prevention.",
        academicLead: "Dr. Nina Chen",
        coreLab: "Shannon Cryptography Annex 305",
        enrolledCount: 75,
        curriculumCycle: "2024–2025 Revised"
      }
    ]
  },
  {
    name: "Design",
    slug: "design",
    icon: "design",
    description: "User experience research, visual communication, interaction design, and product prototyping.",
    specializationsCount: 3,
    enrolledStudentsCount: 185,
    specializations: [
      {
        name: "Interaction & UI Design",
        slug: "interaction-ui-design",
        trackCode: "DS-SPEC-01",
        description: "Motion mechanics, kinetic typography, user affordance modeling, and accessible design systems.",
        academicLead: "Prof. Margot Adler",
        coreLab: "Bauhaus Studio 102",
        enrolledCount: 70,
        curriculumCycle: "2024–2025 Revised"
      },
      {
        name: "Product & Experience Prototyping",
        slug: "product-prototyping",
        trackCode: "DS-SPEC-02",
        description: "Physical computing, tangible interface fabrication, and rapid 3D user trials.",
        academicLead: "Dr. Simon Laurent",
        coreLab: "Maker Fabrication Hall 204",
        enrolledCount: 65,
        curriculumCycle: "2024–2025 Revised"
      },
      {
        name: "Visual Communication & Brand Strategy",
        slug: "visual-communication",
        trackCode: "DS-SPEC-03",
        description: "Editorial systems, narrative branding, information visualization, and publication aesthetics.",
        academicLead: "Prof. Rachel Sterling",
        coreLab: "Graphic Media Center 310",
        enrolledCount: 50,
        curriculumCycle: "2024–2025 Revised"
      }
    ]
  },
  {
    name: "Business",
    slug: "business",
    icon: "business",
    description: "Strategic management, financial technology, international entrepreneurship, and analytics.",
    specializationsCount: 3,
    enrolledStudentsCount: 240,
    specializations: [
      {
        name: "Financial Technology & Analytics",
        slug: "fintech-analytics",
        trackCode: "BA-SPEC-01",
        description: "Quantitative portfolio modeling, algorithmic trading systems, and predictive financial analytics.",
        academicLead: "Dr. Julian Hayes",
        coreLab: "Bloomberg Finance Suite 501",
        enrolledCount: 90,
        curriculumCycle: "2024–2025 Revised"
      },
      {
        name: "Strategic Management & Entrepreneurship",
        slug: "strategic-management",
        trackCode: "BA-SPEC-02",
        description: "Venture incubation, commercial scaling frameworks, and circular economic model analysis.",
        academicLead: "Prof. Claire Donovan",
        coreLab: "Venture Incubator Hub 202",
        enrolledCount: 85,
        curriculumCycle: "2024–2025 Revised"
      },
      {
        name: "Global Supply Chain & Operations",
        slug: "supply-chain-operations",
        trackCode: "BA-SPEC-03",
        description: "International freight logistics, dynamic procurement optimization, and ethical vendor governance.",
        academicLead: "Dr. Robert Zhang",
        coreLab: "Global Logistics Lab 304",
        enrolledCount: 65,
        curriculumCycle: "2024–2025 Revised"
      }
    ]
  }
];

// ----------------------------------------------------------------------------
// Helper Functions (Easy data lookups for pages and components)
// ----------------------------------------------------------------------------

/**
 * Returns all students in the directory.
 */
export function getAllStudents(): Student[] {
  return STUDENTS_DATA;
}

/**
 * Finds a student by either their ID (e.g. "STU-1042") or their slug (e.g. "aarav-mehta").
 * Returns undefined if not found.
 */
export function getStudentByIdOrSlug(idOrSlug: string): Student | undefined {
  const query = decodeURIComponent(idOrSlug).toLowerCase();
  return STUDENTS_DATA.find(
    (student) =>
      student.id.toLowerCase() === query ||
      student.slug.toLowerCase() === query ||
      student.name.toLowerCase().replace(/\s+/g, "-") === query
  );
}

/**
 * Finds a department by its URL slug (e.g. "computer-science").
 * Returns undefined if not found.
 */
export function getDepartmentBySlug(slug: string): Department | undefined {
  const query = decodeURIComponent(slug).toLowerCase();
  return DEPARTMENTS_DATA.find((dept) => dept.slug.toLowerCase() === query);
}

/**
 * Finds a specific specialization inside a department.
 */
export function getSpecialization(
  deptSlug: string,
  specSlug: string
): { department: Department; specialization: Specialization } | undefined {
  const department = getDepartmentBySlug(deptSlug);
  if (!department) return undefined;

  const specialization = department.specializations.find(
    (spec) => spec.slug.toLowerCase() === decodeURIComponent(specSlug).toLowerCase()
  );
  if (!specialization) return undefined;

  return { department, specialization };
}

/**
 * Returns all students enrolled in a particular specialization.
 */
export function getStudentsBySpecialization(specSlug: string): Student[] {
  const query = decodeURIComponent(specSlug).toLowerCase();
  return STUDENTS_DATA.filter((s) => s.specializationSlug.toLowerCase() === query);
}
