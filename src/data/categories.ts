import type { Category } from "@/types/project";

export const categories: readonly Category[] = [
  {
    slug: "medical-va",
    label: "Medical VA",
    navLabel: "Medical VA",
    summary: "Appointments, patient records, claims, and clinic communication.",
    specialty: true,
  },
  {
    slug: "executive-va",
    label: "Executive VA",
    navLabel: "Executive",
    summary: "Inbox, calendar, scheduling, meeting minutes, and travel for busy leaders.",
  },
  {
    slug: "crm-leads",
    label: "CRM and Leads",
    navLabel: "CRM",
    summary: "Clean contact data and trackable lead and recruitment pipelines.",
  },
  {
    slug: "systems-sops",
    label: "Systems and SOPs",
    navLabel: "Systems",
    summary: "Documented processes, project boards, and onboarding that teams can follow.",
  },
  {
    slug: "support-content",
    label: "Support and Content",
    navLabel: "Support",
    summary: "Support ticket tracking and social media planning.",
  },
  {
    slug: "dashboards-finance",
    label: "Dashboards and Finance",
    navLabel: "Dashboards",
    summary: "KPI, operations, and expense reporting in clear dashboards and sheets.",
  },
];
