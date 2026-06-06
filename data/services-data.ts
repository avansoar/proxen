// src/data/services-data.ts
// ─────────────────────────────────────────────────────────────────────────────
// CENTRALIZED SERVICE DATA — PROXEN DIGITAL AGENCY
// Fully dynamic, scalable, content-driven architecture.
// Every service has unique content across key sections.
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// ① HERO SECTION
// ─────────────────────────────────────────────────────────────────────────────
export interface TrustAvatar {
  src: string;
  alt: string;
}

export interface HeadlinePart {
  text: string;
  accent?: boolean;
}

// ─── NEW: one entry per slide in the hero image carousel ───────────────────
export interface MockupSlide {
  src: string;
  alt: string;
}

export interface HeroSectionData {
  eyebrow: string;
  headlineParts: HeadlinePart[];
  description: string;
  primaryCta:   { label: string; href: string };
  secondaryCta: { label: string; href: string };
  trustAvatars: TrustAvatar[];
  trustText:    string;
  // ─── Replaces the old single mockupSrc / mockupAlt ───────────────────────
  // Provide 1-N slides; the hero carousel auto-advances through them.
  // A single-item array behaves as a static image (no visible sliding).
  mockupSlides: MockupSlide[];
}

const SHARED_AVATARS: TrustAvatar[] = [
  { src: "https://randomuser.me/api/portraits/men/32.jpg",   alt: "Happy client" },
  { src: "https://randomuser.me/api/portraits/women/44.jpg", alt: "Happy client" },
  { src: "https://randomuser.me/api/portraits/men/76.jpg",   alt: "Happy client" },
];

export const heroSection: HeroSectionData = {
  eyebrow: "Web Design & Digital Agency",
  headlineParts: [
    { text: "Websites\nThat " },
    { text: "Convert\n", accent: true },
    { text: "Visitors ",  accent: true },
    { text: "Into\nCustomers" },
  ],
  description:
    "From strategy to launch, we craft websites, apps, and marketing systems that turn visitors into loyal, paying customers.",
  primaryCta:   { label: "Start Your Project", href: "/contact-us" },
  secondaryCta: { label: "View Our Work",        href: "/work" },
  trustAvatars: SHARED_AVATARS,
  trustText:    "Trusted by 50+ businesses worldwide  ·  Results-driven team",
  mockupSlides: [
    {
      src: "https://images.prismic.io/proxen/ahgI1LK9tuLqENns_Websitedesign.jpg?auto=format,compress",
      alt: "Custom website design mockup on laptop and mobile",
    },
    {
      src: "https://images.prismic.io/proxen/ahgI1bK9tuLqENnt_Websitedesign-1.jpg?auto=format,compress",
      alt: "Responsive website design showcase",
    },
    {
      src: "https://images.prismic.io/proxen/ahgItbK9tuLqENnr_Websitedesign-2.jpg?auto=format,compress",
      alt: "Website design portfolio example",
    },
    {
      src: "https://images.prismic.io/proxen/ahgI7LK9tuLqENn3_Websitedesign-3.jpg?auto=format,compress",
      alt: "Modern website design layout",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ② INDUSTRIES SECTION
// ─────────────────────────────────────────────────────────────────────────────
export interface IndustryTag {
  label: string;
  bg:    string;
  color: string;
}

export interface IndustriesSectionData {
  eyebrow?:    string;
  heading:     string;
  description: string;
  industries:  IndustryTag[];
}

export const DEFAULT_INDUSTRIES: IndustryTag[] = [
  { label: "Accounting",           bg: "#ffe4e6", color: "#111827" },
  { label: "Lawyer",               bg: "#fef3c7", color: "#111827" },
  { label: "Online Stores",        bg: "#dcfce7", color: "#111827" },
  { label: "Hospitals",            bg: "#dbeafe", color: "#111827" },
  { label: "Real Estate Agencies", bg: "#e5e7eb", color: "#111827" },
  { label: "Coaching Institutes",  bg: "#ffe4e6", color: "#111827" },
  { label: "Restaurants",          bg: "#ffedd5", color: "#111827" },
  { label: "Fitness & Gym",        bg: "#ede9fe", color: "#111827" },
];

export const industriesSection: IndustriesSectionData = {
  heading:     "Industries We Serve",
  description: "We design fast, modern, scalable websites that help businesses of every kind grow and convert more customers.",
  industries:  DEFAULT_INDUSTRIES,
};

// ─────────────────────────────────────────────────────────────────────────────
// ③ WHY CHOOSE SECTION
// ─────────────────────────────────────────────────────────────────────────────
// Updated to accept any string so we can pass exact SVG filenames dynamically
export type WhyChooseIconId = string;

export interface WhyChooseFeature {
  iconId: WhyChooseIconId;
  title:  string;
  desc:   string;
}

export interface WhyChooseSectionData {
  eyebrow:       string;
  headingPlain:  string;
  headingAccent: string;
  headingTrail:  string;
  description:   string;
  features:      WhyChooseFeature[];
}

export const whyChooseSection: WhyChooseSectionData = {
  eyebrow:       "Why Choose Proxen",
  headingPlain:  "Not Just Designers.",
  headingAccent: "Growth",
  headingTrail:  "Partners.",
  description:
    "We combine strategy, design, and engineering to deliver websites that work as hard as you do.",
  features: [
    { iconId: "https://proxen.cdn.prismic.io/proxen/ahFflLK9tuLqEGGd_Conversion-FirstDesign.svg", title: "Conversion-First Design", desc: "Every layout, CTA, and visual hierarchy is crafted to guide visitors toward action not just look pretty." },
    { iconId: "https://proxen.cdn.prismic.io/proxen/ahFflbK9tuLqEGGe_FastPerformance.svg", title: "Fast Performance", desc: "Our websites consistently score 95-100 on Google PageSpeed critical for rankings and user experience." },
    { iconId: "https://proxen.cdn.prismic.io/proxen/ahFfkrK9tuLqEGGb_SEOBuiltIn.svg", title: "SEO Built In", desc: "Technical SEO, schema markup, and optimized structure baked into every site from the ground up." },
    { iconId: "https://proxen.cdn.prismic.io/proxen/ahFfkbK9tuLqEGGa_Mobile-FirstAlways.svg", title: "Mobile-First Always", desc: "Over 60% of your visitors are on mobile. We design for their experience first, desktop second." },
    { iconId: "https://proxen.cdn.prismic.io/proxen/ahFfk7K9tuLqEGGc_TransparentProcess.svg", title: "Transparent Process", desc: "Weekly check-ins, milestone-based delivery, and clear communication throughout every project." },
    { iconId: "https://proxen.cdn.prismic.io/proxen/ahFfkLK9tuLqEGGZ_Long-TermSupport.svg", title: "Long-Term Support", desc: "We stay with you post-launch updates, optimizations, and technical support whenever you need it." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ④ TECHNOLOGIES SECTION
// ─────────────────────────────────────────────────────────────────────────────
export type PlatformId =
  | "shopify"
  | "wordpress"
  | "wix"
  | "webflow"
  | "nextjs"
  | "squarespace"
  | "weebly"
  | "react"
  | "vue";

export interface PlatformData {
  id:    PlatformId;
  label: string;
}

export interface TechnologiesSectionData {
  eyebrow:       string;
  headingPlain:  string;
  headingAccent: string;
  headingTrail:  string;
  description:   string;
  platforms:     PlatformData[];
}

export const technologiesSection: TechnologiesSectionData = {
  eyebrow:       "Platforms & Technologies",
  headingPlain:  "We Build On the Right",
  headingAccent: "Platform",
  headingTrail:  "For Your Business",
  description:
    "Whether you need a Shopify store, a WordPress site, a blazing-fast Next.js app, or a fully bespoke solution — we have you covered.",
  platforms: [
    { id: "shopify",     label: "Shopify"     },
    { id: "wordpress",   label: "WordPress"   },
    { id: "wix",         label: "Wix"         },
    { id: "webflow",     label: "Webflow"     },
    { id: "nextjs",      label: "Next.js"     },
    { id: "squarespace", label: "Squarespace" },
    { id: "weebly",      label: "Weebly"      },
    { id: "react",       label: "React"       },
    { id: "vue",         label: "Vue.js"      },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// TYPES & SHAPES
// ─────────────────────────────────────────────────────────────────────────────
export interface BulletPoint { bullet_point: string; }
export interface Slide { id: number; href: string; imageUrl: string; accent?: string; }

export interface ServiceListingShape {
  layoutSide:        "left" | "right";
  image:             string;
  shortDescription:  string;
  bulletPoints:      BulletPoint[];
}

export interface ServiceCarouselShape {
  title:              string;
  shortDescription:   string;
  slides:             Slide[];
  workLink?:          string;
  startProjectLink?:  string;
}

export interface ServiceData {
  id:                  number;
  slug:                string;
  title:               string;
  listing:             ServiceListingShape;
  carousel:            ServiceCarouselShape;
  hero:                HeroSectionData;
  industriesSection:   IndustriesSectionData;
  whyChoose:           WhyChooseSectionData;
  technologies:        TechnologiesSectionData;
}

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE ENTRIES — 100% UNIQUE CONTENT FOR EVERY SERVICE
// ─────────────────────────────────────────────────────────────────────────────
export const services: ServiceData[] = [

  // ══════════════════════════════════════════════════════════════════════════
  // 1. WEBSITE DESIGNING
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 1,
    slug: "website-design-services",
    title: "Website Designing",
    listing: {
      layoutSide: "left",
      image: "https://images.prismic.io/proxen/aeigocBOoF08xM_j_WebsiteDeve..png?auto=format,compress",
      shortDescription:
        "Combine custom design, modern code, and growth strategy to engineer websites that look stunning and perform flawlessly.",
      bulletPoints: [
        { bullet_point: "Custom responsive website development" },
        { bullet_point: "Conversion-optimized, mobile-first design" },
      ],
    },
    carousel: {
      title: "Website Designing",
      shortDescription:
        "We build high-performance websites that capture attention and turn every visitor into a loyal, paying customer.",
      slides: [
        { id: 1, href: "/services/website-design-services", imageUrl: "https://images.prismic.io/proxen/aeigocBOoF08xM_j_WebsiteDeve..png?auto=format,compress", accent: "#e8a020" },
        { id: 2, href: "/services/website-design-services", imageUrl: "https://images.prismic.io/proxen/aeigp8BOoF08xM_m_Branddesign.png?auto=format,compress", accent: "#e8a020" },
      ],
    },
    hero: {
      ...heroSection,
      eyebrow: "Website Design & Development",
      headlineParts: [
        { text: "Websites\nThat " },
        { text: "Convert\n",  accent: true },
        { text: "Visitors ",  accent: true },
        { text: "Into\nCustomers" },
      ],
      description:
        "From wireframe to live launch, we engineer fast, beautiful websites built on proven UX principles that drive real business results.",
      primaryCta:   { label: "Start Your Project",  href: "/contact-us" },
      secondaryCta: { label: "View Our Portfolio",  href: "/work" },
      trustText:    "Trusted by 50+ businesses worldwide  ·  95+ PageSpeed scores",
      // ── Four dedicated website design images for the carousel ─────────────
      mockupSlides: [
        {
          src: "https://images.prismic.io/proxen/ahgI1LK9tuLqENns_Websitedesign.jpg?auto=format,compress",
          alt: "Custom website design on laptop and mobile devices",
        },
        {
          src: "https://images.prismic.io/proxen/ahgI1bK9tuLqENnt_Websitedesign-1.jpg?auto=format,compress",
          alt: "Responsive website design showcase",
        },
        {
          src: "https://images.prismic.io/proxen/ahgItbK9tuLqENnr_Websitedesign-2.jpg?auto=format,compress",
          alt: "Website design portfolio example",
        },
        {
          src: "https://images.prismic.io/proxen/ahgI7LK9tuLqENn3_Websitedesign-3.jpg?auto=format,compress",
          alt: "Modern website design layout",
        },
      ],
    },
    industriesSection: {
      eyebrow:     "Who We Build For",
      heading:     "Websites For Every Industry",
      description: "From solo consultants to multi-location enterprises, we craft conversion-ready websites for every business type and size.",
      industries: [
        { label: "Law Firms",            bg: "#fef3c7", color: "#111827" },
        { label: "Medical Practices",    bg: "#dbeafe", color: "#111827" },
        { label: "Real Estate",          bg: "#e5e7eb", color: "#111827" },
        { label: "Restaurants",          bg: "#ffedd5", color: "#111827" },
        { label: "Coaching & Courses",   bg: "#ffe4e6", color: "#111827" },
        { label: "Online Stores",        bg: "#dcfce7", color: "#111827" },
        { label: "Accounting Firms",     bg: "#ede9fe", color: "#111827" },
        { label: "Fitness & Wellness",   bg: "#fce7f3", color: "#111827" },
        { label: "Dental Clinics",       bg: "#dbeafe", color: "#111827" },
        { label: "Construction",         bg: "#fef3c7", color: "#111827" },
      ],
    },
    whyChoose: {
      eyebrow:       "Why Choose Proxen",
      headingPlain:  "Not Just Designers.",
      headingAccent: "Growth",
      headingTrail:  "Partners.",
      description:   "We combine strategy, design, and engineering to deliver websites that work as hard as you do.",
      features: [
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahFflLK9tuLqEGGd_Conversion-FirstDesign.svg", title: "Conversion-First Design",  desc: "Every layout, CTA, and visual hierarchy is crafted to guide visitors toward action not just look pretty." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahFflbK9tuLqEGGe_FastPerformance.svg",        title: "Fast Performance",         desc: "Our websites consistently score 95-100 on Google PageSpeed critical for rankings and user experience." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahFfkrK9tuLqEGGb_SEOBuiltIn.svg",            title: "SEO Built In",             desc: "Technical SEO, schema markup, and optimized structure baked into every site from the ground up." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahFfkbK9tuLqEGGa_Mobile-FirstAlways.svg",     title: "Mobile-First Always",      desc: "Over 60% of your visitors are on mobile. We design for their experience first, desktop second." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahFfk7K9tuLqEGGc_TransparentProcess.svg",     title: "Transparent Process",      desc: "Weekly check-ins, milestone-based delivery, and clear communication throughout every project." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahFfkLK9tuLqEGGZ_Long-TermSupport.svg",       title: "Long-Term Support",        desc: "We stay with you post-launch updates, optimizations, and technical support whenever you need it." },
      ],
    },
    technologies: {
      eyebrow:       "Platforms & Frameworks",
      headingPlain:  "We Build On Every",
      headingAccent: "Major",
      headingTrail:  "Platform",
      description:
        "From Shopify storefronts to blazing-fast Next.js apps and WordPress powerhouses — we choose the right tool for your business, not ours.",
      platforms: [
        { id: "wordpress",   label: "WordPress"   },
        { id: "nextjs",      label: "Next.js"     },
        { id: "webflow",     label: "Webflow"     },
        { id: "shopify",     label: "Shopify"     },
        { id: "react",       label: "React"       },
        { id: "wix",         label: "Wix"         },
        { id: "squarespace", label: "Squarespace" },
        { id: "vue",         label: "Vue.js"      },
        { id: "weebly",      label: "Weebly"      },
      ],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 2. BRANDING & IDENTITY
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 2,
    slug: "branding-identity-design-company",
    title: "Branding & Identity",
    listing: {
      layoutSide: "right",
      image: "https://images.prismic.io/proxen/aeigp8BOoF08xM_m_Branddesign.png?auto=format,compress",
      shortDescription:
        "Craft enduring brand identities that resonate deeply, command premium pricing, and build lasting market recognition.",
      bulletPoints: [
        { bullet_point: "Logo design & visual identity systems" },
        { bullet_point: "Brand guidelines & corporate asset kits" },
      ],
    },
    carousel: {
      title: "Branding & Identity",
      shortDescription:
        "We pair deep research with meticulous design to create brand systems that connect authentically with your ideal customers.",
      slides: [
        { id: 1, href: "/services/branding-identity-design-company", imageUrl: "https://images.prismic.io/proxen/aeigp8BOoF08xM_m_Branddesign.png?auto=format,compress", accent: "#e8a020" },
      ],
    },
    hero: {
      ...heroSection,
      eyebrow: "Brand Strategy & Identity Design",
      headlineParts: [
        { text: "Brands\nThat " },
        { text: "Command\n",   accent: true },
        { text: "Attention ",  accent: true },
        { text: "& Premium" },
      ],
      description:
        "We craft strategically aligned brand identities that differentiate you from every competitor, justify premium pricing, and build the kind of trust that converts.",
      primaryCta:   { label: "Build My Brand",    href: "/contact-us" },
      secondaryCta: { label: "See Brand Work",    href: "/work" },
      trustAvatars: SHARED_AVATARS,
      trustText:    "50+ brands elevated  ·  Strategy-led design process",
      mockupSlides: [
        {
          src: "https://images.prismic.io/proxen/ahgJ0bK9tuLqENoi_Branding.jpg?auto=format,compress",
          alt: "Brand identity design showcase with logo and brand guidelines",
        },
        {
          src: "https://images.prismic.io/proxen/ahgJy7K9tuLqENoe_Branding-2.jpg?auto=format,compress",
          alt: "Brand colour system and typography showcase",
        },
        {
          src: "https://images.prismic.io/proxen/ahgJzbK9tuLqENof_Branding-3.jpg?auto=format,compress",
          alt: "Brand guidelines and visual identity system",
        },
        {
          src: "https://images.prismic.io/proxen/ahgJzrK9tuLqENog_Branding-4.jpg?auto=format,compress",
          alt: "Brand collateral and print design",
        },
        {
          src: "https://images.prismic.io/proxen/ahgJ0LK9tuLqENoh_Branding-5.jpg?auto=format,compress",
          alt: "Brand identity applied across digital platforms",
        },
      ],
    },
    industriesSection: {
      eyebrow:     "Sectors We Elevate",
      heading:     "Powerful Branding Across Every Sector",
      description: "Whether you're launching a new brand or redefining an existing one, we craft identities that make a bold, lasting first impression.",
      industries: [
        { label: "Fashion & Apparel",     bg: "#fce7f3", color: "#111827" },
        { label: "Luxury & Premium",      bg: "#fef3c7", color: "#111827" },
        { label: "Health & Wellness",     bg: "#dcfce7", color: "#111827" },
        { label: "Food & Beverage",       bg: "#ffedd5", color: "#111827" },
        { label: "Real Estate",           bg: "#e5e7eb", color: "#111827" },
        { label: "Tech Startups",         bg: "#dbeafe", color: "#111827" },
        { label: "Professional Services", bg: "#ffe4e6", color: "#111827" },
        { label: "Non-Profit & Charity",  bg: "#ede9fe", color: "#111827" },
        { label: "Beauty & Cosmetics",    bg: "#fce7f3", color: "#111827" },
        { label: "Hospitality",           bg: "#fef3c7", color: "#111827" },
      ],
    },
    whyChoose: {
      eyebrow:       "What We Deliver",
      headingPlain:  "A Complete",
      headingAccent: "Brand",
      headingTrail:  "Identity System",
      description:
        "Not just a logo — a fully cohesive brand system that works across every touchpoint, from your website to your business card.",
      features: [
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeILK9tuLqEGK0_LogoDesign%26Identity.svg",  title: "Logo Design & Identity", desc: "Primary logo, secondary marks, icon/favicon variants all crafted in vector with scalable precision and timeless appeal." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeH7K9tuLqEGKz_ColourSystem.svg",           title: "Colour System",          desc: "A strategic palette built for accessibility, psychology, and multi-medium consistency from digital screens to print." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeHbK9tuLqEGKx_TypographySystem.svg",       title: "Typography System",      desc: "Curated typeface pairings with hierarchy rules, sizing scales, and licensing so your brand sounds as good as it looks." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeHrK9tuLqEGKy_BrandGuidelines.svg",        title: "Brand Guidelines",       desc: "A comprehensive brand bible covering logo usage, colour, type, tone of voice, dos & don'ts so your brand stays consistent forever." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeIrK9tuLqEGK2_SocialMediaKit.svg",         title: "Social Media Kit",       desc: "Ready-to-use Canva or Figma templates for posts, stories, banners, and profile assets across all major platforms." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeIbK9tuLqEGK1_Print%26Collateral.svg",     title: "Print & Collateral",     desc: "Business cards, letterheads, email signatures, pitch decks, and packaging design — brand identity applied everywhere." },
      ],
    },
    technologies: {
      eyebrow:       "Platforms We Deploy On",
      headingPlain:  "Bringing Your Brand to",
      headingAccent: "Life",
      headingTrail:  "Everywhere",
      description:
        "Your new brand identity is built to live perfectly across every major digital platform — seamlessly consistent from your website to your checkout.",
      platforms: [
        { id: "wordpress",   label: "WordPress"   },
        { id: "webflow",     label: "Webflow"     },
        { id: "nextjs",      label: "Next.js"     },
        { id: "shopify",     label: "Shopify"     },
        { id: "squarespace", label: "Squarespace" },
        { id: "wix",         label: "Wix"         },
      ],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 3. E-COMMERCE SOLUTIONS
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 3,
    slug: "ecommerce-store-development-company",
    title: "E-Commerce Solutions",
    listing: {
      layoutSide: "left",
      image: "https://images.prismic.io/proxen/aeigtMBOoF08xM_q_Ecommerce.png?auto=format,compress",
      shortDescription:
        "Build high-converting commerce engines that eliminate checkout friction and transform browsers into loyal, repeat buyers.",
      bulletPoints: [
        { bullet_point: "Shopify & WooCommerce development" },
        { bullet_point: "UX-optimized product pages & checkout" },
      ],
    },
    carousel: {
      title: "E-Commerce Solutions",
      shortDescription:
        "We engineer digital storefronts where every design decision serves one goal: turning traffic into revenue.",
      slides: [
        { id: 1, href: "/services/ecommerce-store-development-company", imageUrl: "https://images.prismic.io/proxen/aeigtMBOoF08xM_q_Ecommerce.png?auto=format,compress", accent: "#e8a020" },
      ],
    },
    hero: {
      ...heroSection,
      eyebrow: "E-Commerce Development & Strategy",
      headlineParts: [
        { text: "Online Stores\nBuilt to " },
        { text: "Sell\n",    accent: true },
        { text: "Scale ",    accent: true },
        { text: "& Retain" },
      ],
      description:
        "We engineer lightning-fast, mobile-optimized digital storefronts with conversion-driven UX that turns one-time visitors into lifetime buyers.",
      primaryCta:   { label: "Build My Store",       href: "/contact-us" },
      secondaryCta: { label: "View Store Portfolio", href: "/work" },
      trustAvatars: SHARED_AVATARS,
      trustText:    "40+ stores launched  ·  Average 3.2× revenue increase",
      mockupSlides: [
        {
          src: "https://images.prismic.io/proxen/ahgJa7K9tuLqENoJ_Ecommerce.jpg?auto=format,compress",
          alt: "E-Commerce store design on desktop and mobile",
        },
        {
          src: "https://images.prismic.io/proxen/ahgJaLK9tuLqENoG_Ecommerce-1.jpg?auto=format,compress",
          alt: "E-Commerce product pages and conversion-optimised checkout",
        },
        {
          src: "https://images.prismic.io/proxen/ahgJabK9tuLqENoI_Ecommerce-2.jpg?auto=format,compress",
          alt: "E-Commerce storefront design and UX showcase",
        },
      ],
    },
    industriesSection: {
      eyebrow:     "Retail Verticals We Serve",
      heading:     "Commerce Solutions for Every Product Type",
      description: "From high-volume fashion brands to niche subscription boxes, we build and optimize stores around your specific category's buying psychology.",
      industries: [
        { label: "Fashion & Apparel",   bg: "#fce7f3", color: "#111827" },
        { label: "Electronics & Tech",  bg: "#dbeafe", color: "#111827" },
        { label: "Beauty & Skincare",   bg: "#ffe4e6", color: "#111827" },
        { label: "Food & Beverage",     bg: "#ffedd5", color: "#111827" },
        { label: "Sports & Outdoors",   bg: "#ede9fe", color: "#111827" },
        { label: "Home & Furniture",    bg: "#e5e7eb", color: "#111827" },
        { label: "Digital Products",    bg: "#fef3c7", color: "#111827" },
        { label: "Subscription Boxes",  bg: "#dcfce7", color: "#111827" },
        { label: "Luxury Goods",        bg: "#fce7f3", color: "#111827" },
        { label: "Pet Products",        bg: "#ffedd5", color: "#111827" },
      ],
    },
    whyChoose: {
      eyebrow:       "What We Build",
      headingPlain:  "Every Type of",
      headingAccent: "E-Commerce",
      headingTrail:  "Solution",
      description:
        "We combine strategy, design, and engineering to deliver websites that work as hard as you do.",
      features: [
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeGrK9tuLqEGKu_ShopifyStores.svg",          title: "Shopify Stores",           desc: "Custom Shopify themes, Shopify Plus enterprise builds, and headless commerce engineered for speed, UX, and conversion." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeHLK9tuLqEGKw_WooCommerceStores.svg",      title: "WooCommerce Stores",       desc: "Fully customized WordPress + WooCommerce setups with bespoke themes, plugins, and payment flows." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeGLK9tuLqEGKs_B2B%26WholesalePortals.svg", title: "B2B & Wholesale Portals",  desc: "Trade-only stores with customer pricing tiers, bulk ordering, quote systems, and CRM integrations." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeG7K9tuLqEGKv_Subscription%26Recurring.svg", title: "Subscription & Recurring", desc: "Subscription box stores, SaaS billing integrations, and recurring order management powered by Recharge or custom logic." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeGbK9tuLqEGKt_CustomStores.svg",           title: "Custom Stores",            desc: "Next.js + Shopify/Medusa headless builds for brands needing 99/100 PageSpeed and total UI freedom." },
      ],
    },
    technologies: {
      eyebrow:       "E-Commerce Platforms",
      headingPlain:  "Powered by the World's Best",
      headingAccent: "Commerce",
      headingTrail:  "Engines",
      description:
        "We build on the most powerful, scalable, and merchant-friendly commerce platforms on the market — and we're expert-level on all of them.",
      platforms: [
        { id: "shopify",   label: "Shopify"        },
        { id: "wordpress", label: "WooCommerce"    },
        { id: "nextjs",    label: "Next.js Commerce" },
        { id: "react",     label: "React"          },
        { id: "webflow",   label: "Webflow"        },
        { id: "wix",       label: "Wix eCommerce"  },
      ],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 4. SEO SERVICES
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 4,
    slug: "professional-seo-services",
    title: "SEO Services",
    listing: {
      layoutSide: "right",
      image: "https://images.prismic.io/proxen/aeigmsBOoF08xM_d_SEO.png?auto=format,compress",
      shortDescription:
        "Build an authority-first SEO ecosystem that earns first-page rankings, drives qualified traffic, and compounds in value month after month.",
      bulletPoints: [
        { bullet_point: "Technical SEO audits & on-page optimization" },
        { bullet_point: "Local map ranking & authority link building" },
      ],
    },
    carousel: {
      title: "SEO Services",
      shortDescription:
        "Our data-driven organic search strategy pairs technical mastery with content authority to generate sustainable inbound growth.",
      slides: [
        { id: 1, href: "/services/professional-seo-services", imageUrl: "https://images.prismic.io/proxen/aeigmsBOoF08xM_d_SEO.png?auto=format,compress", accent: "#e8a020" },
      ],
    },
    hero: {
      ...heroSection,
      eyebrow: "Search Engine Optimization",
      headlineParts: [
        { text: "Dominate\nSearch " },
        { text: "Rankings\n",  accent: true },
        { text: "Capture ",    accent: true },
        { text: "More\nRevenue" },
      ],
      description:
        "Stop paying for every click. We build sustainable, data-driven organic search strategies that place your business in front of high-intent buyers — for free.",
      primaryCta:   { label: "Get a Free SEO Audit",  href: "/contact-us" },
      secondaryCta: { label: "See Ranking Results",   href: "/work" },
      trustAvatars: SHARED_AVATARS,
      trustText:    "200+ page-1 rankings achieved  ·  White-hat methodology only",
      mockupSlides: [
        {
          src: "https://images.prismic.io/proxen/ahgLVLK9tuLqENpR_SEO.jpg?auto=format,compress",
          alt: "SEO analytics dashboard showing keyword ranking improvements",
        },
        {
          src: "https://images.prismic.io/proxen/ahgLVbK9tuLqENpS_SEO-1.jpg?auto=format,compress",
          alt: "On-page SEO optimisation results on screen",
        },
        {
          src: "https://images.prismic.io/proxen/ahgLULK9tuLqENpO_SEO-2.jpg?auto=format,compress",
          alt: "Technical SEO audit and performance report",
        },
        {
          src: "https://images.prismic.io/proxen/ahgLUbK9tuLqENpP_SEO-3.jpg?auto=format,compress",
          alt: "Local SEO and Google Maps ranking results",
        },
        {
          src: "https://images.prismic.io/proxen/ahgLU7K9tuLqENpQ_SEO-4.jpg?auto=format,compress",
          alt: "SEO growth and organic traffic reporting dashboard",
        },
      ],
    },
    industriesSection: {
      eyebrow:     "Markets We Rank In",
      heading:     "SEO That Wins in Every Competitive Market",
      description: "We don't use cookie-cutter playbooks. Every campaign is custom-built around the competitive dynamics of your specific industry.",
      industries: [
        { label: "Law Firms",             bg: "#fef3c7", color: "#111827" },
        { label: "Medical & Dental",      bg: "#dbeafe", color: "#111827" },
        { label: "Real Estate",           bg: "#e5e7eb", color: "#111827" },
        { label: "Home Services",         bg: "#dcfce7", color: "#111827" },
        { label: "Accounting & Finance",  bg: "#ffe4e6", color: "#111827" },
        { label: "E-Commerce Stores",     bg: "#ffedd5", color: "#111827" },
        { label: "SaaS & Technology",     bg: "#ede9fe", color: "#111827" },
        { label: "Local Restaurants",     bg: "#fce7f3", color: "#111827" },
        { label: "Insurance Brokers",     bg: "#fef3c7", color: "#111827" },
        { label: "Contractors & Trades",  bg: "#dbeafe", color: "#111827" },
      ],
    },
    whyChoose: {
      eyebrow:       "We Help Your Website Get Found",
      headingPlain:  "Smarter",
      headingAccent: "SEO Strategies",
      headingTrail:  "For Long-Term Growth",
      description:
        "At Proxen, our SEO services are focused on visibility, authority, and conversions. We combine technical optimization, keyword strategy, and content growth to help your website rank better and perform stronger.",
      features: [
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeFbK9tuLqEGKp_On-PageSEO.svg",          title: "On-Page SEO",          desc: "We optimize every important element of your website including headings, meta tags, URLs, content structure, and internal linking." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeF7K9tuLqEGKr_TechnicalSEO.svg",        title: "Technical SEO",        desc: "A strong technical foundation is essential for SEO success. We improve website speed, mobile responsiveness, indexing, crawlability, and site architecture." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeFLK9tuLqEGKo_LocalSEO.svg",            title: "Local SEO",            desc: "Increase your visibility in local search results and Google Maps. We optimize your business listings, location pages, and local keywords." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeE7K9tuLqEGKn_ContentOptimization.svg", title: "Content Optimization", desc: "Content plays a major role in organic growth. We create and optimize SEO-friendly content that not only ranks higher on search engines but also drives conversions." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeFrK9tuLqEGKq_SEOReporting.svg",        title: "SEO Reporting",        desc: "Stay updated with transparent performance reports and insights. We monitor keyword rankings, organic traffic, and user behavior to keep your growth on track." },
      ],
    },
    technologies: {
      eyebrow:       "SEO-Optimized Platforms",
      headingPlain:  "Architected for",
      headingAccent: "Search",
      headingTrail:  "Dominance",
      description:
        "We optimize and build on the CMS platforms with the strongest technical foundations for search engine crawling and indexing.",
      platforms: [
        { id: "wordpress", label: "WordPress"   },
        { id: "nextjs",    label: "Next.js"     },
        { id: "webflow",   label: "Webflow"     },
        { id: "shopify",   label: "Shopify"     },
        { id: "react",     label: "React"       },
        { id: "wix",       label: "Wix"         },
      ],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 5. SOCIAL MEDIA MARKETING
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 5,
    slug: "social-media-marketing-agency",
    title: "Social Media Marketing",
    listing: {
      layoutSide: "left",
      image: "https://images.prismic.io/proxen/aeigncBOoF08xM_f_SMM.png?auto=format,compress",
      shortDescription:
        "Build an engaged, loyal community and convert followers into customers through platform-native, scroll-stopping content strategy.",
      bulletPoints: [
        { bullet_point: "Data-driven content calendars & strategy" },
        { bullet_point: "Paid social campaigns & organic growth" },
      ],
    },
    carousel: {
      title: "Social Media Marketing",
      shortDescription:
        "We create thumb-stopping creative that builds community, drives engagement, and produces measurable commercial results.",
      slides: [
        { id: 1, href: "/services/social-media-marketing-agency", imageUrl: "https://images.prismic.io/proxen/aeigncBOoF08xM_f_SMM.png?auto=format,compress", accent: "#e8a020" },
      ],
    },
    hero: {
      ...heroSection,
      eyebrow: "Social Media Marketing Agency",
      headlineParts: [
        { text: "Turn Followers\nInto " },
        { text: "Loyal\n",   accent: true },
        { text: "Paying ",   accent: true },
        { text: "Customers" },
      ],
      description:
        "We transform your social channels into genuine growth engines — pairing platform-native creative with precision-targeted ad campaigns and active community management.",
      primaryCta:   { label: "Grow My Audience",    href: "/contact-us" },
      secondaryCta: { label: "View Social Results", href: "/work" },
      trustAvatars: SHARED_AVATARS,
      trustText:    "500K+ followers grown for clients  ·  Avg. 4.2× engagement lift",
      mockupSlides: [
        {
          src: "https://images.prismic.io/proxen/ahgKQ7K9tuLqENo1_SMM.jpg?auto=format,compress",
          alt: "Social media marketing dashboards across Instagram, TikTok, and LinkedIn",
        },
        {
          src: "https://images.prismic.io/proxen/ahgKPLK9tuLqENov_SMM-2.jpg?auto=format,compress",
          alt: "Social media content creation and scheduling",
        },
        {
          src: "https://images.prismic.io/proxen/ahgKPrK9tuLqENow_SMM-3.jpg?auto=format,compress",
          alt: "Paid social media campaign performance results",
        },
        {
          src: "https://images.prismic.io/proxen/ahgKP7K9tuLqENox_SMM-4.jpg?auto=format,compress",
          alt: "Social media audience engagement and community growth",
        },
        {
          src: "https://images.prismic.io/proxen/ahgKQLK9tuLqENoy_SMM-5.jpg?auto=format,compress",
          alt: "Social media strategy and content calendar",
        },
        {
          src: "https://images.prismic.io/proxen/ahgKQrK9tuLqENo0_SMM-6.jpg?auto=format,compress",
          alt: "Social media brand presence and follower growth",
        },
      ],
    },
    industriesSection: {
      eyebrow:     "Niches We Grow",
      heading:     "Social Strategies Tailored to Your Audience",
      description: "Every platform, every demographic, every niche is different. We build custom strategies around where your customers actually spend their time scrolling.",
      industries: [
        { label: "Fashion & Lifestyle",    bg: "#fce7f3", color: "#111827" },
        { label: "Fitness & Wellness",     bg: "#dcfce7", color: "#111827" },
        { label: "Food & Restaurants",     bg: "#ffedd5", color: "#111827" },
        { label: "Travel & Hospitality",   bg: "#dbeafe", color: "#111827" },
        { label: "Beauty & Skincare",      bg: "#ffe4e6", color: "#111827" },
        { label: "E-Commerce & Retail",    bg: "#ede9fe", color: "#111827" },
        { label: "Real Estate",            bg: "#e5e7eb", color: "#111827" },
        { label: "Coaches & Creators",     bg: "#fef3c7", color: "#111827" },
        { label: "B2B & Professional",     bg: "#dbeafe", color: "#111827" },
        { label: "Music & Entertainment",  bg: "#fce7f3", color: "#111827" },
      ],
    },
    whyChoose: {
      eyebrow:       "Social Growth Engine",
      headingPlain:  "Beyond Vanity Metrics.",
      headingAccent: "Real",
      headingTrail:  "Revenue.",
      description:
        "We don't celebrate follower counts. We build social systems designed to move real people through a journey from awareness to purchase to loyal advocate.",
      features: [
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeErK9tuLqEGKm_SocialMediaStrategy.svg",   title: "Social Media Strategy",   desc: "We create customized strategies based on your business goals, audience behavior, and industry trends to build a strong and consistent brand presence." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeD7K9tuLqEGKj_ContentCreation.svg",       title: "Content Creation",        desc: "Our team develops engaging graphics, reels, carousels, captions, and creative content that reflects your brand identity and captures audience attention." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeEbK9tuLqEGKl_SocialMediaManagement.svg", title: "Social Media Management", desc: "We handle your complete social media presence including posting schedules, content planning, audience interaction, and profile optimization." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeELK9tuLqEGKk_PaidCampaigns.svg",         title: "Paid Campaigns",          desc: "Run high-performing Meta and social media ad campaigns designed to increase reach, generate leads, and maximize your return on investment." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeDrK9tuLqEGKi_AudienceEngagement.svg",    title: "Audience Engagement",     desc: "We help your brand stay connected with followers through comments, messages, and engagement strategies that build trust and community." },
      ],
    },
    technologies: {
      eyebrow:       "Platform Integrations",
      headingPlain:  "Connecting Social to Your",
      headingAccent: "Website",
      headingTrail:  "& Store",
      description:
        "Your social ads and organic content are only as effective as the destination they send traffic to. We ensure seamless integration across every platform.",
      platforms: [
        { id: "shopify",     label: "Shopify"     },
        { id: "wordpress",   label: "WordPress"   },
        { id: "webflow",     label: "Webflow"     },
        { id: "squarespace", label: "Squarespace" },
        { id: "wix",         label: "Wix"         },
        { id: "nextjs",      label: "Next.js"     },
      ],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 6. PPC ADVERTISING
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 6,
    slug: "ppc-advertising-services",
    title: "PPC Advertising",
    listing: {
      layoutSide: "right",
      image: "https://images.prismic.io/proxen/aeiguMBOoF08xM_r_PayPerClick.png?auto=format,compress",
      shortDescription:
        "Deploy high-ROAS paid campaigns across Google and Meta that slash acquisition costs and deliver predictable, scalable revenue.",
      bulletPoints: [
        { bullet_point: "Google Search, Shopping & Display ads" },
        { bullet_point: "Meta, TikTok & YouTube campaign management" },
      ],
    },
    carousel: {
      title: "PPC Advertising",
      shortDescription:
        "We treat your ad budget like our own — relentlessly optimizing every campaign for the lowest cost per acquisition and highest return.",
      slides: [
        { id: 1, href: "/services/ppc-advertising-services", imageUrl: "https://images.prismic.io/proxen/aeiguMBOoF08xM_r_PayPerClick.png?auto=format,compress", accent: "#e8a020" },
      ],
    },
    hero: {
      ...heroSection,
      eyebrow: "PPC & Paid Advertising Management",
      headlineParts: [
        { text: "Maximize\nEvery " },
        { text: "Ad Dollar\n",  accent: true },
        { text: "Minimize ",    accent: true },
        { text: "Your CPA" },
      ],
      description:
        "Precision-targeted paid search and social campaigns that place your brand in front of high-intent buyers the exact second they're ready to purchase.",
      primaryCta:   { label: "Audit My Ad Account",  href: "/contact-us" },
      secondaryCta: { label: "View PPC Results",     href: "/work" },
      trustAvatars: SHARED_AVATARS,
      trustText:    "Average 4.7× ROAS across all managed accounts  ·  Google Premier Partner",
      mockupSlides: [
        {
          src: "https://images.prismic.io/proxen/ahgLBLK9tuLqENpH_PPC.jpg?auto=format,compress",
          alt: "PPC advertising performance dashboard with ROAS and CPA metrics",
        },
        {
          src: "https://images.prismic.io/proxen/ahgK_rK9tuLqENpD_PPC-1.jpg?auto=format,compress",
          alt: "Google Ads campaign setup and keyword targeting",
        },
        {
          src: "https://images.prismic.io/proxen/ahgK_7K9tuLqENpE_PPC-2.jpg?auto=format,compress",
          alt: "Meta Ads management and audience targeting results",
        },
        {
          src: "https://images.prismic.io/proxen/ahgLAbK9tuLqENpF_PPC-3.jpg?auto=format,compress",
          alt: "PPC conversion tracking and ad creative performance",
        },
        {
          src: "https://images.prismic.io/proxen/ahgLArK9tuLqENpG_PPC-4.jpg?auto=format,compress",
          alt: "PPC analytics and return on ad spend reporting",
        },
      ],
    },
    industriesSection: {
      eyebrow:     "Industries We Advertise For",
      heading:     "High-Performance Ads for Every Business",
      description: "We manage paid media across every industry — tailoring bidding strategies, messaging, and funnel design to the specific economics of your sector.",
      industries: [
        { label: "Legal Services",       bg: "#fef3c7", color: "#111827" },
        { label: "Healthcare & Dental",  bg: "#dbeafe", color: "#111827" },
        { label: "Home Improvement",     bg: "#dcfce7", color: "#111827" },
        { label: "E-Commerce & Retail",  bg: "#ffe4e6", color: "#111827" },
        { label: "Real Estate",          bg: "#e5e7eb", color: "#111827" },
        { label: "Education & Courses",  bg: "#ede9fe", color: "#111827" },
        { label: "Finance & Insurance",  bg: "#ffedd5", color: "#111827" },
        { label: "Auto & Dealerships",   bg: "#fce7f3", color: "#111827" },
        { label: "SaaS & Technology",    bg: "#dbeafe", color: "#111827" },
        { label: "Contractors & Trades", bg: "#fef3c7", color: "#111827" },
      ],
    },
    whyChoose: {
      eyebrow:       "Our PPC Philosophy",
      headingPlain:  "Stop Burning",
      headingAccent: "Budget.",
      headingTrail:  "Start Scaling.",
      description:
        "Our certified media buyers manage your campaigns with the rigour of a CFO — every dollar is tracked, justified, and optimized toward your actual business goals.",
      features: [
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeDLK9tuLqEGKg_GoogleAdsCampaigns.svg",      title: "Google Ads Campaigns",    desc: "We create optimized Google Search, Display, Shopping, and YouTube ad campaigns that help your business appear in front of customers actively searching for your services." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeDbK9tuLqEGKh_MetaAdsManagement.svg",       title: "Meta Ads Management",     desc: "Run powerful Facebook and Instagram advertising campaigns designed to increase brand awareness and generate high-quality leads for your business." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeCrK9tuLqEGKe_AudienceTargeting.svg",       title: "Audience Targeting",      desc: "We identify the right audience based on demographics, interests, behaviors, and search intent to ensure your ads reach people most likely to convert." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeK7K9tuLqEGK__AdCreative.svg",              title: "Ad Creative",             desc: "Our team designs high-converting ad creatives, headlines, and compelling copy that captures attention and encourages users to take action." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeC7K9tuLqEGKf_ConversionTracking.svg",      title: "Conversion Tracking",     desc: "We continuously monitor campaign performance, optimize bidding strategies, improve ad quality, and refine targeting to maximize return on ad spend." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeLLK9tuLqEGLA_Analytics%26Performance.svg", title: "Analytics & Performance", desc: "Get transparent reporting with detailed insights into clicks, conversions, traffic, and campaign performance to track growth and improve results." },
      ],
    },
    technologies: {
      eyebrow:       "Landing Page Technology",
      headingPlain:  "Clicks That Actually",
      headingAccent: "Convert",
      headingTrail:  "Into Revenue",
      description:
        "Ad clicks mean nothing without a landing page built to convert. We engineer dedicated, lightning-fast pages designed to match each campaign's intent.",
      platforms: [
        { id: "webflow",   label: "Webflow"   },
        { id: "wordpress", label: "WordPress" },
        { id: "nextjs",    label: "Next.js"   },
        { id: "react",     label: "React"     },
        { id: "wix",       label: "Wix"       },
        { id: "shopify",   label: "Shopify"   },
      ],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 7. MOBILE APP DEVELOPMENT
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 7,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    listing: {
      layoutSide: "left",
      image: "https://images.prismic.io/proxen/aeigpMBOoF08xM_k_AppDevelopment.png?auto=format,compress",
      shortDescription:
        "Engineer clean, performant mobile applications for iOS and Android that users love, keep, and tell others about.",
      bulletPoints: [
        { bullet_point: "Native iOS & Android engineering" },
        { bullet_point: "React Native & cross-platform development" },
      ],
    },
    carousel: {
      title: "Mobile App Development",
      shortDescription:
        "We combine world-class UX design with robust engineering to deliver apps that users open daily and recommend to others.",
      slides: [
        { id: 1, href: "/services/mobile-app-development", imageUrl: "https://images.prismic.io/proxen/aeigpMBOoF08xM_k_AppDevelopment.png?auto=format,compress", accent: "#e8a020" },
      ],
    },
    hero: {
      ...heroSection,
      eyebrow: "iOS & Android App Development",
      headlineParts: [
        { text: "Apps Users\n" },
        { text: "Love,\n",     accent: true },
        { text: "Keep ",       accent: true },
        { text: "& Recommend" },
      ],
      description:
        "From concept to App Store approval, we design and engineer high-performance mobile applications that deliver exceptional experiences and measurable business outcomes.",
      primaryCta:   { label: "Discuss My App Idea",   href: "/contact-us" },
      secondaryCta: { label: "View App Portfolio",    href: "/work" },
      trustAvatars: SHARED_AVATARS,
      trustText:    "30+ apps launched  ·  4.8★ average App Store rating",
      mockupSlides: [
        {
          src: "https://images.prismic.io/proxen/ahgLpbK9tuLqENpe_mobileappdev1.jpg?auto=format,compress",
          alt: "Mobile app running on iPhone and Android devices",
        },
        {
          src: "https://images.prismic.io/proxen/ahgLprK9tuLqENpg_mobileappdev2.jpg?auto=format,compress",
          alt: "Mobile app UI design and user experience showcase",
        },
        {
          src: "https://images.prismic.io/proxen/ahgLp7K9tuLqENph_mobileappdev3.jpg?auto=format,compress",
          alt: "Cross-platform mobile app development on React Native",
        },
        {
          src: "https://images.prismic.io/proxen/ahgLqLK9tuLqENpj_mobileappdev.jpg?auto=format,compress",
          alt: "App development dashboard and mobile UI screens",
        },
      ],
    },
    industriesSection: {
      eyebrow:     "App Categories We Build",
      heading:     "Mobile Solutions for Every Market",
      description: "We engineer apps across every major consumer and enterprise vertical — always starting with deep user research and always ending with exceptional UX.",
      industries: [
        { label: "Retail & Shopping",     bg: "#dcfce7", color: "#111827" },
        { label: "Healthcare & Fitness",  bg: "#dbeafe", color: "#111827" },
        { label: "Food & Delivery",       bg: "#ffedd5", color: "#111827" },
        { label: "Finance & Fintech",     bg: "#fef3c7", color: "#111827" },
        { label: "Logistics & Tracking",  bg: "#e5e7eb", color: "#111827" },
        { label: "EdTech & eLearning",    bg: "#ede9fe", color: "#111827" },
        { label: "Real Estate & Prop",    bg: "#ffe4e6", color: "#111827" },
        { label: "Travel & Booking",      bg: "#fce7f3", color: "#111827" },
        { label: "Social & Community",    bg: "#dbeafe", color: "#111827" },
        { label: "On-Demand Services",    bg: "#dcfce7", color: "#111827" },
      ],
    },
    whyChoose: {
      eyebrow:       "Our App Development Edge",
      headingPlain:  "Built for",
      headingAccent: "Scale.",
      headingTrail:  "Loved by Users.",
      description:
        "We don't just code features — we engineer entire user experiences designed to maximize retention, engagement, and the metrics that matter most to your business.",
      features: [
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeJbK9tuLqEGK5_CustomDevelopment.svg", title: "Custom Development", desc: "We build custom mobile applications tailored to your business goals, industry needs, and user expectations with scalable and future-ready solutions." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeJbK9tuLqEGK5_CustomDevelopment.svg", title: "UI/UX Design",       desc: "Our team designs intuitive and visually engaging user interfaces that provide smooth navigation and an excellent user experience across all devices." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeKLK9tuLqEGK8_Android%26iOS.svg",     title: "Android & iOS",     desc: "Develop high-performance native and cross-platform applications optimized for Android and iOS devices with seamless functionality and responsiveness." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeKrK9tuLqEGK-_AppTesting.svg",        title: "App Testing",       desc: "We ensure your application is secure, bug-free, fast, and optimized through detailed testing and quality assurance processes before launch." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeI7K9tuLqEGK3_APIIntegrations.svg",   title: "API Integrations",  desc: "Integrate payment gateways, CRMs, analytics tools, chat systems, and other third-party services to improve app functionality and performance." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeKbK9tuLqEGK9_AppMaintenance.svg",    title: "App Maintenance",   desc: "We provide ongoing updates, performance monitoring, security improvements, and technical support to keep your application running smoothly." },
      ],
    },
    technologies: {
      eyebrow:       "Mobile Engineering Stack",
      headingPlain:  "Modern Frameworks for",
      headingAccent: "Performant",
      headingTrail:  "Apps",
      description:
        "We build with the frameworks that power the world's most-used mobile apps — proven at scale, backed by large communities, and built for longevity.",
      platforms: [
        { id: "react",     label: "React Native" },
        { id: "vue",       label: "Vue / Ionic"  },
        { id: "nextjs",    label: "API Backend"  },
        { id: "wordpress", label: "Headless CMS" },
      ],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 8. WEB APPLICATION DEVELOPMENT
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 8,
    slug: "web-application-development",
    title: "Web Application Development",
    listing: {
      layoutSide: "right",
      image: "https://images.prismic.io/proxen/aeign8BOoF08xM_h_WebApplicationDevelopment.png?auto=format,compress",
      shortDescription:
        "Solve complex operational problems with secure, cloud-native web applications custom-built to automate workflows and eliminate bottlenecks.",
      bulletPoints: [
        { bullet_point: "Progressive Web Apps (PWA) & SaaS platforms" },
        { bullet_point: "RESTful API design & third-party integrations" },
      ],
    },
    carousel: {
      title: "Web Application Development",
      shortDescription:
        "We deliver bespoke digital tools that streamline operations, scale with demand, and replace the software you've been forcing to fit.",
      slides: [
        { id: 1, href: "/services/web-application-development", imageUrl: "https://images.prismic.io/proxen/aeign8BOoF08xM_h_WebApplicationDevelopment.png?auto=format,compress", accent: "#e8a020" },
      ],
    },
    hero: {
      ...heroSection,
      eyebrow: "Custom Web Application Development",
      headlineParts: [
        { text: "Custom Software\nBuilt " },
        { text: "Exactly\n",  accent: true },
        { text: "For ",        accent: true },
        { text: "Your Business" },
      ],
      description:
        "We architect secure, scalable, cloud-native web applications that eliminate operational friction, automate repetitive workflows, and give your team real competitive leverage.",
      primaryCta:   { label: "Scope My Project",       href: "/contact-us" },
      secondaryCta: { label: "View Case Studies",      href: "/work" },
      trustAvatars: SHARED_AVATARS,
      trustText:    "25+ enterprise platforms shipped  ·  Zero critical bugs guarantee",
      mockupSlides: [
        {
          src: "https://images.prismic.io/proxen/ahgL97K9tuLqENqG_webapps.jpg?auto=format,compress",
          alt: "Custom web application dashboard running in a browser",
        },
        {
          src: "https://images.prismic.io/proxen/ahgL9bK9tuLqENqF_webapps4.jpg?auto=format,compress",
          alt: "Web application admin panel and workflow automation",
        },
        {
          src: "https://images.prismic.io/proxen/ahgL9LK9tuLqENqE_webapps3.jpg?auto=format,compress",
          alt: "SaaS platform interface and data management system",
        },
        {
          src: "https://images.prismic.io/proxen/ahgL8rK9tuLqENqD_webapps2.jpg?auto=format,compress",
          alt: "Cloud-native web application on desktop and mobile",
        },
        {
          src: "https://images.prismic.io/proxen/ahgL8bK9tuLqENqC_webapps1.jpg?auto=format,compress",
          alt: "Web application interface on laptop and mobile devices",
        },
      ],
    },
    industriesSection: {
      eyebrow:     "Problems We Solve",
      heading:     "Custom Web Applications Across Every Sector",
      description: "Off-the-shelf software forces your operations to fit its limitations. We build tools that fit your operations exactly — reducing cost, errors, and friction at scale.",
      industries: [
        { label: "SaaS Platforms",        bg: "#dbeafe", color: "#111827" },
        { label: "Finance & Banking",     bg: "#fef3c7", color: "#111827" },
        { label: "Healthcare Portals",    bg: "#dcfce7", color: "#111827" },
        { label: "Logistics & Supply",    bg: "#e5e7eb", color: "#111827" },
        { label: "HR & Recruitment",      bg: "#ffe4e6", color: "#111827" },
        { label: "Manufacturing & Ops",   bg: "#ffedd5", color: "#111827" },
        { label: "Legal Tech",            bg: "#fce7f3", color: "#111827" },
        { label: "EdTech Platforms",      bg: "#ede9fe", color: "#111827" },
        { label: "Real Estate PropTech",  bg: "#dbeafe", color: "#111827" },
        { label: "Government & Civic",    bg: "#fef3c7", color: "#111827" },
      ],
    },
    whyChoose: {
      eyebrow:       "Our Engineering Philosophy",
      headingPlain:  "Software That",
      headingAccent: "Scales",
      headingTrail:  "With You.",
      description:
        "We don't just write code — we architect intelligent systems that improve your operations, reduce your overhead, and grow alongside your business.",
      features: [
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeJbK9tuLqEGK5_CustomDevelopment.svg",      title: "Custom Development",     desc: "We build custom web applications tailored to your business goals, industry needs, and user expectations with scalable and future-ready solutions." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeJbK9tuLqEGK5_CustomDevelopment.svg",      title: "UI/UX Design",           desc: "Our team designs intuitive and visually engaging user interfaces that provide smooth navigation and an excellent user experience across all devices." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeJrK9tuLqEGK6_Frontend%26Backend.svg",     title: "Frontend & Backend",     desc: "We build fast, secure, and scalable frontend and backend systems using modern technologies to ensure seamless functionality, better performance, and long-term reliability." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeJLK9tuLqEGK4_CRM.svg",                    title: "CRM",                    desc: "Develop custom CRM platforms, admin dashboards, ERP systems, and workflow management tools that help businesses automate processes and manage operations efficiently." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeI7K9tuLqEGK3_APIIntegrations.svg",        title: "API Integrations",       desc: "Integrate payment gateways, chat systems, analytics tools, cloud services, and external APIs to enhance your web application's capabilities and overall performance." },
        { iconId: "https://proxen.cdn.prismic.io/proxen/ahGeJ7K9tuLqEGK7_Security%26Maintenance.svg", title: "Security & Maintenance", desc: "We provide continuous monitoring, performance optimization, security updates, and technical support to ensure your web application remains secure and fully optimized." },
      ],
    },
    technologies: {
      eyebrow:       "Engineering Stack",
      headingPlain:  "Enterprise-Grade",
      headingAccent: "Technology",
      headingTrail:  "Choices",
      description:
        "We build on modern, well-supported JavaScript and TypeScript frameworks that ensure your application is maintainable, extensible, and built to last for years.",
      platforms: [
        { id: "react",   label: "React"         },
        { id: "nextjs",  label: "Next.js"       },
        { id: "vue",     label: "Vue.js"        },
        { id: "webflow", label: "Webflow Logic" },
      ],
    },
  },

];

// ─────────────────────────────────────────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────
export function getAllServices(): ServiceData[] {
  return services;
}

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export function toServiceListing(service: ServiceData) {
  return {
    id:    service.id,
    slug:  service.slug,
    title: { rendered: service.title },
    acf: {
      layout_side:               service.listing.layoutSide,
      listing_image:             service.listing.image,
      service_short_description: service.listing.shortDescription,
      feature_bullet_points:     service.listing.bulletPoints,
    },
  };
}