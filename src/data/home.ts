import type { HeroContent, ProcessStep } from "@/types/site";

export const hero: HeroContent = {
  eyebrow: "Virtual Assistant · Healthcare and Executive Support",
  headline: "Organized inboxes, accurate records, clear reports.",
  intro: null, // TODO: one line on your healthcare admin and IT background, timezone, availability
  secondaryCtaLabel: "Watch 60-second intro",
};

export const trustNote = "All data fictional and confidential-by-design";

export const processSteps: readonly ProcessStep[] = [
  {
    step: "01",
    title: "Scenario",
    description: "Every project starts with a clear, fictional client problem.",
  },
  {
    step: "02",
    title: "Before and after",
    description: "Screenshots and files show exactly what changed.",
  },
  {
    step: "03",
    title: "Case study",
    description: "Challenge, actions, tools, and a measurable result.",
  },
];

export const ctaContent = {
  heading: "Let us work together",
  buttonLabel: "Book a 15-minute call",
} as const;
