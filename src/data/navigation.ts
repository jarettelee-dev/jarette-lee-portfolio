import { categories } from "@/data/categories";
import type { NavItem } from "@/types/site";

/** Each link jumps to that category's section on the home page. */
export const mainNav: readonly NavItem[] = categories.map((category) => ({
  label: category.navLabel,
  href: `/#${category.slug}`,
}));

export const hireMeHref = "/contact";
