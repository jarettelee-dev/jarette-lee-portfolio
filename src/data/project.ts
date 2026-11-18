import type { CaseStudy, Project } from "@/types/project";

type RequiredKeys = "code" | "slug" | "title" | "category" | "tools" | "toolsSummary";
type ProjectInput = Pick<Project, RequiredKeys> & Partial<Omit<Project, RequiredKeys>>;

const emptyCaseStudy: CaseStudy = {
  challenge: null,
  actions: null,
  result: null,
  filesUrl: null,
};

const noMedia: Project["media"] = { thumbnail: null, before: null, after: null };

/** Fills every content field with "not written yet" so a project only lists what is real. */
function defineProject(input: ProjectInput): Project {
  return {
    scenario: null,
    delivered: [],
    caseStudy: emptyCaseStudy,
    media: noMedia,
    ...input,
  };
}

export const projects: readonly Project[] = [
  // ── Medical VA (the mock does not list tools for these) ─────────────
  defineProject({
    code: "P14",
    slug: "medical-appointment-coordinator",
    title: "Medical Appointment Coordinator",
    category: "medical-va",
    tools: [],
    toolsSummary: "",
  }),
  defineProject({
    code: "S1",
    slug: "patient-database-management",
    title: "Patient Database Management",
    category: "medical-va",
    tools: [],
    toolsSummary: "",
  }),
  defineProject({
    code: "S2",
    slug: "philhealth-claims-dashboard",
    title: "PhilHealth Claims Dashboard",
    category: "medical-va",
    tools: [],
    toolsSummary: "",
  }),
  defineProject({
    code: "S3",
    slug: "appointment-and-referral-coordinator",
    title: "Appointment and Referral Coordinator",
    category: "medical-va",
    tools: [],
    toolsSummary: "",
  }),
  defineProject({
    code: "S4",
    slug: "clinic-email-and-calendar",
    title: "Clinic Email and Calendar",
    category: "medical-va",
    tools: [],
    toolsSummary: "",
  }),

  // ── Executive VA ────────────────────────────────────────────────────
  defineProject({
    code: "P1",
    slug: "inbox-zero-management",
    title: "Inbox Zero Management",
    category: "executive-va",
    tools: ["Gmail", "Google Sheets", "Notion", "Email management"],
    toolsSummary: "Gmail",
    scenario: "A CEO has over 1,250 unread emails and needs a system to find what matters.",
    delivered: [
      "Label system and folder structure",
      "Filters and follow-up reminders",
      "Written explanation",
    ],
  }),
  defineProject({
    code: "P2",
    slug: "executive-calendar",
    title: "Executive Calendar",
    category: "executive-va",
    tools: ["Calendar"],
    toolsSummary: "Calendar",
  }),
  defineProject({
    code: "P5",
    slug: "appointment-scheduling",
    title: "Appointment Scheduling",
    category: "executive-va",
    tools: ["Calendly"],
    toolsSummary: "Calendly",
  }),
  defineProject({
    code: "P9",
    slug: "meeting-minutes",
    title: "Meeting Minutes",
    category: "executive-va",
    tools: ["Docs"],
    toolsSummary: "Docs",
  }),
  defineProject({
    code: "P15",
    slug: "executive-dashboard",
    title: "Executive Dashboard",
    category: "executive-va",
    tools: ["Notion"],
    toolsSummary: "Notion",
  }),
  defineProject({
    code: "P8",
    slug: "travel-planning",
    title: "Travel Planning",
    category: "executive-va",
    tools: ["Docs"],
    toolsSummary: "Docs",
  }),
  defineProject({
    code: "S7",
    slug: "travel-and-event-planning",
    title: "Travel and Event Planning",
    category: "executive-va",
    tools: ["Docs", "Sheets"],
    toolsSummary: "Docs, Sheets",
  }),

  // ── CRM and Leads ───────────────────────────────────────────────────
  defineProject({
    code: "P3",
    slug: "crm-cleanup",
    title: "CRM Cleanup",
    category: "crm-leads",
    tools: ["Sheets", "HubSpot"],
    toolsSummary: "Sheets, HubSpot",
  }),
  defineProject({
    code: "P4",
    slug: "client-lead-tracker",
    title: "Client Lead Tracker",
    category: "crm-leads",
    tools: ["Airtable"],
    toolsSummary: "Airtable",
  }),
  defineProject({
    code: "S9",
    slug: "recruitment-pipeline",
    title: "Recruitment Pipeline",
    category: "crm-leads",
    tools: ["Airtable"],
    toolsSummary: "Airtable",
  }),

  // ── Systems and SOPs ────────────────────────────────────────────────
  defineProject({
    code: "P7",
    slug: "company-sops",
    title: "Company SOPs",
    category: "systems-sops",
    tools: ["Notion", "Canva"],
    toolsSummary: "Notion, Canva",
  }),
  defineProject({
    code: "P11",
    slug: "project-management-board",
    title: "Project Management Board",
    category: "systems-sops",
    tools: ["Trello"],
    toolsSummary: "Trello",
  }),
  defineProject({
    code: "S6",
    slug: "virtual-office-system",
    title: "Virtual Office System",
    category: "systems-sops",
    tools: ["Notion"],
    toolsSummary: "Notion",
  }),
  defineProject({
    code: "S8",
    slug: "client-onboarding",
    title: "Client Onboarding",
    category: "systems-sops",
    tools: ["Forms", "Notion"],
    toolsSummary: "Forms, Notion",
  }),

  // ── Support and Content ─────────────────────────────────────────────
  defineProject({
    code: "P6",
    slug: "support-ticket-dashboard",
    title: "Support Ticket Dashboard",
    category: "support-content",
    tools: ["Notion"],
    toolsSummary: "Notion",
  }),
  defineProject({
    code: "P10",
    slug: "social-media-planner",
    title: "Social Media Planner",
    category: "support-content",
    tools: ["Canva"],
    toolsSummary: "Canva",
  }),

  // ── Dashboards and Finance ──────────────────────────────────────────
  defineProject({
    code: "P13",
    slug: "kpi-dashboard",
    title: "KPI Dashboard",
    category: "dashboards-finance",
    tools: ["Looker Studio"],
    toolsSummary: "Looker Studio",
  }),
  defineProject({
    code: "S10",
    slug: "weekly-report-automation",
    title: "Weekly Report Automation",
    category: "dashboards-finance",
    tools: ["Sheets"],
    toolsSummary: "Sheets",
  }),
  defineProject({
    code: "S5",
    slug: "health-unit-operations",
    title: "Health Unit Operations",
    category: "dashboards-finance",
    tools: ["Looker Studio"],
    toolsSummary: "Looker Studio",
  }),
  defineProject({
    code: "P12",
    slug: "expense-tracker",
    title: "Expense Tracker",
    category: "dashboards-finance",
    tools: ["Sheets"],
    toolsSummary: "Sheets",
  }),
];
