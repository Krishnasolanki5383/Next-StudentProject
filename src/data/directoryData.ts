export interface Subject {
  code: string;
  name: string;
  credits: string;
}

export interface Student {
  id: string; // e.g. "STU-1042"
  slug: string; // e.g. "aarav-mehta"
  name: string;
  initials: string;
  avatarBg: string;
  avatarColor: string;
  department: string; // "Computer Science" | "Design" | "Business"
  departmentSlug: string; // "computer-science" | "design" | "business"
  studyYear: string; // "3rd Year"
  studyYearFull: string; // "3rd Year (Junior)"
  standing: string; // "3rd Year Undergraduate"
  enrolled: string; // "Fall 2022"
  email: string;
  systemRecordId: string; // "0948-CS-AM"
  specialization: string; // "Web Development"
  specializationSlug: string; // "web-development"
  trackFocus?: string; // "Full-Stack Architecture"
  status: "Active Student" | "On Leave" | "Alumni";
  lastValidated: string; // "Oct 24, 2024"
  about: string;
  subjects: Subject[];
}

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

export interface Department {
  name: string;
  slug: string;
  icon: "code" | "design" | "business";
  description: string;
  specializationsCount: number;
  enrolledStudentsCount: number;
  specializations: Specialization[];
}

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
    about:
      "Aarav is an undergraduate researcher focusing on distributed systems and cloud architecture. When not coding in Rust or Go, he mentors first-year engineering students in algorithm fundamentals.",
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
    about:
      "Elena explores the intersection of kinetic typography, accessibility systems, and tactile digital interfaces. She is currently researching multimodal user experiences in AR environments.",
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
    about:
      "Marcus analyzes quantitative market trends, fintech product operations, and sustainable venture funding. He serves as the president of the Campus Student Investment Committee.",
    subjects: [
      { code: "BA-410", name: "Strategic Financial Modeling", credits: "4.0 Credits" },
      { code: "BA-440", name: "Global Venture Capital & Operations", credits: "3.5 Credits" },
      { code: "BA-390", name: "Corporate Governance & Regulatory Ethics", credits: "3.0 Credits" }
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
    about:
      "Priya is passionate about modern reactive web components, accessibility-first design, and web assembly. She regularly contributes to open-source developer tooling and browser polyfills.",
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
    about:
      "Lucas designs hardware-software ergonomics, tangible interfaces, and rapid interactive prototypes. His works have been exhibited in the annual Campus Design Showcase and regional tech expos.",
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
    about:
      "Maya focuses on circular economy models, product-led growth strategies, and early-stage startup viability. She co-leads the campus Social Innovation Lab and sustainable enterprise workshop.",
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
    about:
      "Tariq works on high-throughput backend services, consensus algorithms, and decentralized architectures. He has interned at leading cloud infrastructure providers and designed distributed telemetry pipelines.",
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
    about:
      "Sophia focuses on offline-first architectures, service workers, and client-side performance engineering. She is an active organizer for Women in Tech campus workshops and student hackathons.",
    subjects: [
      { code: "CS-220", name: "Data Structures & Algorithms", credits: "4.0 Credits" },
      { code: "CS-260", name: "Progressive Web Applications", credits: "3.5 Credits" },
      { code: "CS-270", name: "Network Protocols & Security", credits: "3.5 Credits" }
    ]
  }
];

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
        description: "Deep neural representations, natural language understanding, reinforcement learning, and autonomous agent systems.",
        academicLead: "Dr. Aris Thorne",
        coreLab: "Lovelace Computing Center 201",
        enrolledCount: 110,
        curriculumCycle: "2024–2025 Revised"
      },
      {
        name: "Systems & Cloud Infrastructure",
        slug: "systems-cloud",
        trackCode: "CS-SPEC-02",
        description: "Operating system primitives, virtualized container orchestration, low-latency storage, and scalable distributed networks.",
        academicLead: "Prof. David Kroll",
        coreLab: "Hopper Systems Lab 110",
        enrolledCount: 95,
        curriculumCycle: "2024–2025 Revised"
      },
      {
        name: "Cybersecurity & Cryptography",
        slug: "cybersecurity-cryptography",
        trackCode: "CS-SPEC-03",
        description: "Zero-knowledge verification, post-quantum cipher suites, secure enclaves, and kernel-level exploit prevention.",
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
        description: "Motion mechanics, kinetic typography, user affordance modeling, and accessible design system architecture.",
        academicLead: "Prof. Margot Adler",
        coreLab: "Bauhaus Studio 102",
        enrolledCount: 70,
        curriculumCycle: "2024–2025 Revised"
      },
      {
        name: "Product & Experience Prototyping",
        slug: "product-prototyping",
        trackCode: "DS-SPEC-02",
        description: "Physical computing, tangible interface fabrication, rapid 3D user trials, and mixed-reality spatial testing.",
        academicLead: "Dr. Simon Laurent",
        coreLab: "Maker Fabrication Hall 204",
        enrolledCount: 65,
        curriculumCycle: "2024–2025 Revised"
      },
      {
        name: "Visual Communication & Brand Strategy",
        slug: "visual-communication",
        trackCode: "DS-SPEC-03",
        description: "Editorial systems, narrative branding, information visualization, and multi-channel publication aesthetics.",
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
        description: "Quantitative portfolio modeling, algorithmic trading systems, decentralized ledger economics, and predictive financial analytics.",
        academicLead: "Dr. Julian Hayes",
        coreLab: "Bloomberg Finance Suite 501",
        enrolledCount: 90,
        curriculumCycle: "2024–2025 Revised"
      },
      {
        name: "Strategic Management & Entrepreneurship",
        slug: "strategic-management",
        trackCode: "BA-SPEC-02",
        description: "Venture incubation, commercial scaling frameworks, product-led expansion, and circular economic model analysis.",
        academicLead: "Prof. Claire Donovan",
        coreLab: "Venture Incubator Hub 202",
        enrolledCount: 85,
        curriculumCycle: "2024–2025 Revised"
      },
      {
        name: "Global Supply Chain & Operations",
        slug: "supply-chain-operations",
        trackCode: "BA-SPEC-03",
        description: "International freight logistics, dynamic procurement optimization, multi-node resiliency, and ethical vendor governance.",
        academicLead: "Dr. Robert Zhang",
        coreLab: "Global Logistics Lab 304",
        enrolledCount: 65,
        curriculumCycle: "2024–2025 Revised"
      }
    ]
  }
];

export function getAllStudents(): Student[] {
  return STUDENTS_DATA;
}

export function getStudentByIdOrSlug(idOrSlug: string): Student | undefined {
  const normalized = decodeURIComponent(idOrSlug).toLowerCase();
  return STUDENTS_DATA.find(
    (s) =>
      s.id.toLowerCase() === normalized ||
      s.slug.toLowerCase() === normalized ||
      s.name.toLowerCase().replace(/\s+/g, "-") === normalized
  );
}

export function getDepartmentBySlug(slug: string): Department | undefined {
  const normalized = decodeURIComponent(slug).toLowerCase();
  return DEPARTMENTS_DATA.find((d) => d.slug.toLowerCase() === normalized);
}

export function getSpecialization(
  deptSlug: string,
  specSlug: string
): { department: Department; specialization: Specialization } | undefined {
  const dept = getDepartmentBySlug(deptSlug);
  if (!dept) return undefined;
  const spec = dept.specializations.find(
    (s) => s.slug.toLowerCase() === decodeURIComponent(specSlug).toLowerCase()
  );
  if (!spec) return undefined;
  return { department: dept, specialization: spec };
}

export function getStudentsBySpecialization(specSlug: string): Student[] {
  const normalized = decodeURIComponent(specSlug).toLowerCase();
  return STUDENTS_DATA.filter((s) => s.specializationSlug.toLowerCase() === normalized);
}
