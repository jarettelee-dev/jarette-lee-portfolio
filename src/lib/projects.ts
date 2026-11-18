import { categories } from "@/data/categories";
import { projects } from "@/data/project";
import type { Category, CategorySlug, Project } from "@/types/project";

export function getAllProjects(): readonly Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(slug: CategorySlug): Project[] {
  return projects.filter((project) => project.category === slug);
}

export function getCategory(slug: CategorySlug): Category {
  const category = categories.find((item) => item.slug === slug);
  if (!category) {
    throw new Error(`Unknown category "${slug}". Add it to src/data/categories.ts.`);
  }
  return category;
}

/** Filter pills: "All 25", "Medical VA 5", and so on. */
export function getCategoryCounts() {
  return categories.map((category) => ({
    slug: category.slug,
    label: category.label,
    count: getProjectsByCategory(category.slug).length,
  }));
}

/** The dark "My specialty" band. */
export function getSpecialtyProjects(): Project[] {
  const specialtySlugs = new Set(
    categories.filter((category) => category.specialty).map((category) => category.slug),
  );
  return projects.filter((project) => specialtySlugs.has(project.category));
}

/** The "Browse by service" cards: every non-specialty category with its projects. */
export function getServiceGroups(): { category: Category; projects: Project[] }[] {
  return categories
    .filter((category) => !category.specialty)
    .map((category) => ({ category, projects: getProjectsByCategory(category.slug) }));
}

/** Previous and next project, wrapping around at either end. */
export function getAdjacentProjects(slug: string): { previous: Project; next: Project } | null {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return null;

  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  if (!previous || !next) return null;

  return { previous, next };
}
