/** URL-safe identifiers for the six service categories. */
export type CategorySlug =
  | "medical-va"
  | "executive-va"
  | "crm-leads"
  | "systems-sops"
  | "support-content"
  | "dashboards-finance";

export interface Category {
  slug: CategorySlug;
  /** Full name, used on filter pills, service cards, and project eyebrows. */
  label: string;
  /** Short name for the navbar. */
  navLabel: string;
  /** One sentence for the Services page. */
  summary: string;
  /** Shown in the dark "My specialty" band instead of the "Browse by service" grid. */
  specialty?: boolean;
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * Case study fields. `null` means "not written yet": the UI shows a visible
 * TODO marker, and nothing is ever invented in its place.
 */
export interface CaseStudy {
  challenge: string | null;
  actions: string | null;
  result: string | null;
  filesUrl: string | null;
}

export interface Project {
  /** Display ID shown in the mock, such as "P14" or "S1". */
  code: string;
  /** URL segment: /projects/[slug]. Keep stable once published. */
  slug: string;
  title: string;
  category: CategorySlug;
  /** Every tool or skill, shown as chips on the detail page. */
  tools: readonly string[];
  /** Compact text for list rows, such as "Sheets, HubSpot". */
  toolsSummary: string;
  /** The fictional client problem. `null` until written. */
  scenario: string | null;
  /** "What I delivered" bullets. An empty array means not written yet. */
  delivered: readonly string[];
  caseStudy: CaseStudy;
  media: {
    thumbnail: ProjectImage | null;
    before: ProjectImage | null;
    after: ProjectImage | null;
  };
}
