export interface NavItem {
  label: string;
  href: string;
}

/** `null` means "not provided yet". The UI shows a visible TODO marker. */
export interface ContactInfo {
  email: string | null;
  linkedin: string | null;
  timezone: string | null;
  bookingUrl: string | null;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  /** The mock's "[ONE-LINE INTRO]" slot. `null` until you write it. */
  intro: string | null;
  secondaryCtaLabel: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}
