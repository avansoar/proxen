// src/data/portfolio-data.ts
// Portfolio projects data with serviceId for filtering by service
// Added listingImage, relatedPortfolioImage, heroBackground, buttonColor for hero
// All buttons per project now use the same consistent color (project.color = hero.buttonColor)
// External/live website links now include target="_blank" and rel="noopener noreferrer"

// ============================================================
// TYPES & INTERFACES
// ============================================================

export interface ProjectService {
  name: string;
  icon?: string;
}

export interface ProjectInfo {
  timeline: string;
  industry: string;
  location: string;
  country?: string;
}

export interface HeroSection {
  mainImage: string;
  logo: string;
  badge: string;
  headline: string;
  services: string[];
  ctaText: string;
  ctaLink: string;
  ctaTarget?: string;  // e.g. "_blank" for external links
  ctaRel?: string;     // e.g. "noopener noreferrer" for security
  buttonColor?: string;
}

export interface OverviewSection {
  image: string;
  aboutHeader: string;
  description: string;
  projectInfo: ProjectInfo;
  results?: {
    metric: string;
    value: string;
    description: string;
  }[];
}

export interface AssetSection {
  heading?: string;
  images: string[];
  buttonText: string;
  buttonLink?: string;
  buttonTarget?: string; // e.g. "_blank" for external links
  buttonRel?: string;    // e.g. "noopener noreferrer" for security
}

export interface MoreProjectsSection {
  heading: string;
  projects: {
    image: string;
    link: string;
    title?: string;
    target?: string; // e.g. "_blank" for external links
    rel?: string;    // e.g. "noopener noreferrer" for security
  }[];
  viewAllText: string;
  viewAllLink: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  serviceId?: string;
  listingImage?: string;
  relatedPortfolioImage?: string;
  country?: string;
  hero: HeroSection;
  overview: OverviewSection;
  assets: AssetSection;
  moreProjects?: MoreProjectsSection;
  featured?: boolean;
  color?: string;
  heroBackground?: string;
}

// ============================================================
// SEO SLUG CONSTANTS
// ============================================================

const SLUGS = {
  NR_ROOFING:       "best-website-designing-for-roofing-companies",
  GARDEC:           "top-web-application-development-for-hardware-manufacturers",
  HEATFLOW:         "professional-website-designing-for-hvac-services",
  GAMECHANGER:      "branding-and-design-for-fitness-businesses",
  DESIRE_MOTORS:    "mobile-app-development-for-car-dealerships",
  VANGUARD:         "seo-optimized-website-for-used-car-dealerships",
  MADE_IN_INDIA:    "ecommerce-solutions-for-indian-grocery-stores",
  ELYSIAN_LOUNGE:   "social-media-management-for-luxury-lounges",
  ICE_CREAM_TRUCKS: "content-marketing-for-event-catering-businesses",
  HSS_CONSTRUCTION: "seo-and-website-designing-for-construction-companies",
  GTA_SOFTEE:       "best-website-designing-for-ice-cream-truck-rentals",
} as const;

// ============================================================
// LIVE WEBSITE URL CONSTANTS
// ============================================================

const LIVE_URLS = {
  NR_ROOFING:       "https://nrroofingandrenos.ca/",
  GARDEC:           "https://gardec.com/",
  HEATFLOW:         "https://heatflowexperts.ca/",
  GAMECHANGER:      "https://gamechangeruniverse.myshopify.com/",
  DESIRE_MOTORS:    "https://desiremotors.ca/",
  VANGUARD:         "https://vanguardautos.ca/",
  MADE_IN_INDIA:    "https://madeinindiagrocery.com/",
  ELYSIAN_LOUNGE:   "https://elysianlounge.ca/",
  ICE_CREAM_TRUCKS: "https://torontogtaicecreamtrucks.ca/",
  HSS_CONSTRUCTION: "https://hssconcrete.ca/",
  GTA_SOFTEE:       "https://gtasoftee.com/",
} as const;

// ============================================================
// SHARED EXTERNAL LINK ATTRIBUTES
// ============================================================

const EXTERNAL_LINK = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

// ============================================================
// PROJECT 1: NR Roofing & Renos
// ============================================================

export const nrRoofingProject: PortfolioProject = {
  id: "1",
  slug: SLUGS.NR_ROOFING,
  serviceId: "web-development",
  listingImage: "https://images.prismic.io/proxen/acEBkpGXnQHGY12U_NR-1.jpg?auto=format,compress",
  relatedPortfolioImage: "https://images.prismic.io/proxen/acEBkpGXnQHGY12T_NR-2.jpg?auto=format,compress",
  country: "Canada",
  featured: true,
  color: "#D93B48",
  heroBackground: "/assets/images/work-image/nr-bg.png",

  hero: {
    mainImage: "/assets/images/work-image/nr-main-mage.png",
    logo: "/assets/images/work-image/nr-logo.png",
    badge: "NR Roofing & Renos",
    headline: "Turning a basic website into a lead engine",
    services: [
      "Brand Strategy",
      "Conversion-Focused Design",
      "Web Development",
      "SEO Optimization",
    ],
    ctaText: "Explore Results",
    ctaLink: LIVE_URLS.NR_ROOFING,
    ctaTarget: EXTERNAL_LINK.target,
    ctaRel: EXTERNAL_LINK.rel,
    buttonColor: "#D93B48",
  },

  overview: {
    image: "/assets/images/work-image/about-nr-img.jpg",
    aboutHeader: "About the Project",
    description:
      "NR Roofing & Renos is a Canada-based roofing and renovation company with 15+ years of experience. They needed a modern, high-converting website to attract quality leads and showcase their services. We redesigned their digital presence with a conversion-focused UI, improved structure, and optimized performance.",
    projectInfo: {
      timeline: "3 Weeks",
      industry: "Roofing & Renovation",
      location: "Brant, Ontario",
      country: "Canada",
    },
    results: [
      {
        metric: "Lead Increase",
        value: "340%",
        description: "More qualified leads in first 30 days",
      },
      {
        metric: "Page Speed",
        value: "92/100",
        description: "Google PageSpeed Insights score",
      },
      {
        metric: "Mobile Traffic",
        value: "64%",
        description: "Percentage of total website traffic",
      },
    ],
  },

  assets: {
    heading: "Project Showcase",
    images: [
      "/assets/images/work-image/nr-roofing-assests-1.jpg",
      "/assets/images/work-image/nr-roofing-assests-2.jpg",
      "/assets/images/work-image/nr-roofing-assests-3.jpg",
      "/assets/images/work-image/nr-roofing-assests-4.jpg",
      "/assets/images/work-image/nr-roofing-assests-1.jpg",
      "/assets/images/work-image/nr-roofing-assests-2.jpg",
      "/assets/images/work-image/nr-roofing-assests-3.jpg",
      "/assets/images/work-image/nr-roofing-assests-4.jpg",
      "/assets/images/work-image/nr-roofing-assests-1.jpg",
      "/assets/images/work-image/nr-roofing-assests-2.jpg",
    ],
    buttonText: "Experience the Website",
    buttonLink: LIVE_URLS.NR_ROOFING,
    buttonTarget: EXTERNAL_LINK.target,
    buttonRel: EXTERNAL_LINK.rel,
  },

  moreProjects: {
    heading: "Our projects",
    projects: [
      {
        image: "/assets/images/portfolio/pp10.png",
        link: `/work/${SLUGS.GARDEC}`,
        title: "Gardec",
      },
      {
        image: "/assets/images/portfolio/pp7.png",
        link: `/work/${SLUGS.HEATFLOW}`,
        title: "HeatFlow",
      },
    ],
    viewAllText: "View All Projects",
    viewAllLink: "/work",
  },
};

// ============================================================
// PROJECT 2: Gardec
// ============================================================

export const gardecProject: PortfolioProject = {
  id: "2",
  slug: SLUGS.GARDEC,
  serviceId: "web-development",
  listingImage: "https://images.prismic.io/proxen/acEB4JGXnQHGY12a_GARDEC-2.jpg?auto=format,compress",
  relatedPortfolioImage: "https://images.prismic.io/proxen/acEB4JGXnQHGY12a_GARDEC-2.jpg?auto=format,compress",
  country: "Canada",
  featured: true,
  color: "#FBB615",
  heroBackground: "/assets/images/work-image/gardec-bg.png",

  hero: {
    mainImage: "https://images.prismic.io/proxen/acSuoZGXnQHGY-km_gardec-main-image.png?auto=format,compress",
    logo: "/assets/images/work-image/gardec-logo.png",
    badge: "Gardec",
    headline: "B2B Hardware Website Built for Performance",
    services: [
      "B2B Web Design",
      "Conversion Optimization",
      "Catalog Structuring",
    ],
    ctaText: "Explore Project",
    ctaLink: LIVE_URLS.GARDEC,
    ctaTarget: EXTERNAL_LINK.target,
    ctaRel: EXTERNAL_LINK.rel,
    buttonColor: "#FBB615",
  },

  overview: {
    image: "/assets/images/work-image/gardec-about-img.jpg",
    aboutHeader: "About the Project",
    description:
      "Gardec is a leading manufacturer of heavy-duty hardware products for home, garden, and commercial applications across Canada. Their challenge was not product quality. It was digital presentation. The existing structure did not clearly showcase their wide product range or support easy navigation for B2B buyers searching for reliable hardware solutions online.",
    projectInfo: {
      timeline: "6 Weeks",
      industry: "Hardware Manufacturing",
      location: "San Francisco, California",
      country: "United States",
    },
    results: [
      {
        metric: "User Signups",
        value: "5000+",
        description: "In the first 30 days",
      },
      {
        metric: "Rating",
        value: "4.8/5.0",
        description: "On both Store",
      },
      {
        metric: "Conversion Rate",
        value: "12.5%",
        description: "From freemium to paid plans",
      },
    ],
  },

  assets: {
    heading: "Interface Showcase",
    images: [
      "/assets/images/work-image/gardec-assests-1.jpg",
      "/assets/images/work-image/gardec-assests-2.jpg",
      "/assets/images/work-image/gardec-assests-3.jpg",
      "/assets/images/work-image/gardec-assests-4.jpg",
      "/assets/images/work-image/gardec-assests-1.jpg",
      "/assets/images/work-image/gardec-assests-2.jpg",
      "/assets/images/work-image/gardec-assests-3.jpg",
      "/assets/images/work-image/gardec-assests-4.jpg",
      "/assets/images/work-image/gardec-assests-1.jpg",
      "/assets/images/work-image/gardec-assests-2.jpg",
    ],
    buttonText: "Experience the Website",
    buttonLink: LIVE_URLS.GARDEC,
    buttonTarget: EXTERNAL_LINK.target,
    buttonRel: EXTERNAL_LINK.rel,
  },

  moreProjects: {
    heading: "Our projects",
    projects: [
      {
        image: "/assets/images/portfolio/pp1.png",
        link: `/work/${SLUGS.NR_ROOFING}`,
        title: "NR Roofing",
      },
      {
        image: "/assets/images/portfolio/pp2.png",
        link: `/work/${SLUGS.GAMECHANGER}`,
        title: "Game Changer",
      },
    ],
    viewAllText: "View All Projects",
    viewAllLink: "/work",
  },
};

// ============================================================
// PROJECT 3: Heatflow
// ============================================================

export const heatFlowProject: PortfolioProject = {
  id: "3",
  slug: SLUGS.HEATFLOW,
  serviceId: "ui-ux-design",
  listingImage: "https://images.prismic.io/proxen/acECD5GXnQHGY12k_Heatflow-1.jpg?auto=format,compress",
  relatedPortfolioImage: "https://images.prismic.io/proxen/acECEJGXnQHGY12l_Heatflow-2.jpg?auto=format,compress",
  country: "Canada",
  featured: false,
  color: "#0D52A1",
  heroBackground: "/assets/images/work-image/heatflow-bg.png",

  hero: {
    mainImage: "/assets/images/work-image/heatflow-main.png",
    logo: "/assets/images/work-image/heatflow-logo.png",
    badge: "Heatflow Experts",
    headline: "Turning HVAC Services into Consistent Lead Generation",
    services: ["HVAC", "Web Design", "Lead Generation", "Marketing"],
    ctaText: "Explore Project",
    ctaLink: LIVE_URLS.HEATFLOW,
    ctaTarget: EXTERNAL_LINK.target,
    ctaRel: EXTERNAL_LINK.rel,
    buttonColor: "#0D52A1",
  },

  overview: {
    image: "/assets/images/work-image/heatflow-about.jpg",
    aboutHeader: "About the Project",
    description:
      "HeatFlow Experts is an HVAC service provider based in Edmonton, Alberta, offering heating, cooling, and air quality solutions. They needed a modern website that could clearly present their services and convert visitors into qualified leads. We designed a high-converting website with a strong service-focused structure and integrated lead capture system.",
    projectInfo: {
      timeline: "4 Weeks",
      industry: "HVAC Services",
      location: "Edmonton, Alberta",
      country: "Canada",
    },
    results: [
      {
        metric: "Client Inquiries",
        value: "250%",
        description: "Increase in qualified leads",
      },
      {
        metric: "Page Speed",
        value: "88/100",
        description: "Google PageSpeed Insights score",
      },
      {
        metric: "Conversion Rate",
        value: "4.2%",
        description: "Contact form submission rate",
      },
    ],
  },

  assets: {
    heading: "Design Showcase",
    images: [
      "/assets/images/work-image/heatflow-assets-1.jpg",
      "/assets/images/work-image/heatflow-assets-2.jpg",
      "/assets/images/work-image/heatflow-assets-3.jpg",
      "/assets/images/work-image/heatflow-assets-4.jpg",
      "/assets/images/work-image/heatflow-assets-1.jpg",
      "/assets/images/work-image/heatflow-assets-2.jpg",
      "/assets/images/work-image/heatflow-assets-3.jpg",
      "/assets/images/work-image/heatflow-assets-4.jpg",
      "/assets/images/work-image/heatflow-assets-1.jpg",
      "/assets/images/work-image/heatflow-assets-2.jpg",
    ],
    buttonText: "Visit Website",
    buttonLink: LIVE_URLS.HEATFLOW,
    buttonTarget: EXTERNAL_LINK.target,
    buttonRel: EXTERNAL_LINK.rel,
  },

  moreProjects: {
    heading: "Our projects",
    projects: [
      {
        image: "/assets/images/portfolio/pp10.png",
        link: `/work/${SLUGS.NR_ROOFING}`,
        title: "NR Roofing",
      },
      {
        image: "/assets/images/portfolio/pp7.png",
        link: `/work/${SLUGS.GARDEC}`,
        title: "Gardec",
      },
    ],
    viewAllText: "View All Projects",
    viewAllLink: "/work",
  },
};

// ============================================================
// PROJECT 4: Game Changer Universe
// ============================================================

export const gameChangerProject: PortfolioProject = {
  id: "4",
  slug: SLUGS.GAMECHANGER,
  serviceId: "ui-ux-design",
  listingImage: "https://images.prismic.io/proxen/acECQpGXnQHGY12s_Gamechanger-2.jpg?auto=format,compress",
  relatedPortfolioImage: "https://images.prismic.io/proxen/acECQpGXnQHGY12s_Gamechanger-2.jpg?auto=format,compress",
  country: "Canada",
  featured: true,
  color: "#A10D0D",
  heroBackground: "/assets/images/work-image/gamechanger-bg.png",

  hero: {
    mainImage: "https://images.prismic.io/proxen/acSvxpGXnQHGY-kq_Game-cyhanger-main.png?auto=format,compress",
    logo: "/assets/images/work-image/game-changer-logo.png",
    badge: "Game Changer Universe",
    headline: "Powerful Platform for Fitness & Transformation",
    services: ["Conversion Strategy", "Lead Generation", "Marketing"],
    ctaText: "Explore Project",
    ctaLink: LIVE_URLS.GAMECHANGER,
    ctaTarget: EXTERNAL_LINK.target,
    ctaRel: EXTERNAL_LINK.rel,
    buttonColor: "#A10D0D",
  },

  overview: {
    image: "/assets/images/work-image/game-changer-about.jpg",
    aboutHeader: "About the Project",
    description:
      "Game Changer Universe needed a platform that brings together fitness, guidance, and performance-driven products under one strong digital experience. We created a bold, structured, and conversion-focused website that motivates users while making it easy to explore programs, products, and services.",
    projectInfo: {
      timeline: "5 Weeks",
      industry: "Fitness & Wellness",
      location: "Toronto, Ontario",
      country: "Canada",
    },
    results: [
      {
        metric: "Session Duration",
        value: "+45%",
        description: "Increase in average time on site",
      },
      {
        metric: "Program Signups",
        value: "320+",
        description: "In the first two months",
      },
      {
        metric: "Bounce Rate",
        value: "-28%",
        description: "Reduction compared to old site",
      },
    ],
  },

  assets: {
    heading: "Design Showcase",
    images: [
      "/assets/images/work-image/game-changer-assests-1.jpg",
      "/assets/images/work-image/game-changer-assests-2.jpg",
      "/assets/images/work-image/game-changer-assests-3.jpg",
      "/assets/images/work-image/game-changer-assests-4.jpg",
      "/assets/images/work-image/game-changer-assests-1.jpg",
      "/assets/images/work-image/game-changer-assests-2.jpg",
      "/assets/images/work-image/game-changer-assests-3.jpg",
      "/assets/images/work-image/game-changer-assests-4.jpg",
      "/assets/images/work-image/game-changer-assests-1.jpg",
      "/assets/images/work-image/game-changer-assests-2.jpg",
    ],
    buttonText: "Visit Website",
    buttonLink: LIVE_URLS.GAMECHANGER,
    buttonTarget: EXTERNAL_LINK.target,
    buttonRel: EXTERNAL_LINK.rel,
  },

  moreProjects: {
    heading: "Our projects",
    projects: [
      {
        image: "/assets/images/portfolio/pp1.png",
        link: `/work/${SLUGS.NR_ROOFING}`,
        title: "NR Roofing",
      },
      {
        image: "/assets/images/portfolio/pp2.png",
        link: `/work/${SLUGS.GARDEC}`,
        title: "Gardec",
      },
    ],
    viewAllText: "View All Projects",
    viewAllLink: "/work",
  },
};

// ============================================================
// PROJECT 5: Desire Motors
// ============================================================

export const desireMotorsProject: PortfolioProject = {
  id: "5",
  slug: SLUGS.DESIRE_MOTORS,
  serviceId: "web-development",
  listingImage: "https://images.prismic.io/proxen/acECbJGXnQHGY12y_DesireMotors-1.jpg?auto=format,compress",
  relatedPortfolioImage: "https://images.prismic.io/proxen/acECbZGXnQHGY12z_DesireMotors-2.jpg?auto=format,compress",
  country: "Canada",
  featured: false,
  color: "#FBB615",
  heroBackground: "/assets/images/work-image/desiremotors-bg.png",

  hero: {
    mainImage: "https://images.prismic.io/proxen/acSwGpGXnQHGY-kw_desire-motor-main.png?auto=format,compress",
    logo: "/assets/images/work-image/desire-motor-logo.png",
    badge: "Desire Motors",
    headline: "Car Dealership Website That Drives Conversions",
    services: ["Mobile Optimization", "Lead Generation", "SEO"],
    ctaText: "Explore Project",
    ctaLink: LIVE_URLS.DESIRE_MOTORS,
    ctaTarget: EXTERNAL_LINK.target,
    ctaRel: EXTERNAL_LINK.rel,
    buttonColor: "#FBB615",
  },

  overview: {
    image: "/assets/images/work-image/desire-about.jpg",
    aboutHeader: "About the Project",
    description:
      "Desire Motors needed more than just an online inventory. They needed a digital platform that builds trust, showcases vehicles effectively, and makes the buying process seamless. We created a clean, user-friendly, and conversion-focused website that helps customers explore, evaluate, and take action with confidence.",
    projectInfo: {
      timeline: "6 Weeks",
      industry: "Automotive Dealership",
      location: "Mississauga, Ontario",
      country: "Canada",
    },
    results: [
      {
        metric: "Lead Generation",
        value: "+180%",
        description: "Increase in test drive requests",
      },
      {
        metric: "Inventory Views",
        value: "12K+",
        description: "Monthly vehicle detail views",
      },
      {
        metric: "Mobile Traffic",
        value: "71%",
        description: "Percentage of total site visits",
      },
    ],
  },

  assets: {
    heading: "Design Showcase",
    images: [
      "/assets/images/work-image/desire-auto-assets-1.jpg",
      "/assets/images/work-image/desire-auto-assets-2.jpg",
      "/assets/images/work-image/desire-auto-assets-3.jpg",
      "/assets/images/work-image/desire-auto-assets-4.jpg",
      "/assets/images/work-image/desire-auto-assets-1.jpg",
      "/assets/images/work-image/desire-auto-assets-2.jpg",
      "/assets/images/work-image/desire-auto-assets-3.jpg",
      "/assets/images/work-image/desire-auto-assets-4.jpg",
      "/assets/images/work-image/desire-auto-assets-1.jpg",
      "/assets/images/work-image/desire-auto-assets-2.jpg",
    ],
    buttonText: "Visit Website",
    buttonLink: LIVE_URLS.DESIRE_MOTORS,
    buttonTarget: EXTERNAL_LINK.target,
    buttonRel: EXTERNAL_LINK.rel,
  },

  moreProjects: {
    heading: "Our projects",
    projects: [
      {
        image: "/assets/images/portfolio/pp7.png",
        link: `/work/${SLUGS.HEATFLOW}`,
        title: "HeatFlow",
      },
      {
        image: "/assets/images/portfolio/pp10.png",
        link: `/work/${SLUGS.GAMECHANGER}`,
        title: "Game Changer",
      },
    ],
    viewAllText: "View All Projects",
    viewAllLink: "/work",
  },
};

// ============================================================
// PROJECT 6: Vanguard Autos
// ============================================================

export const vanguardProject: PortfolioProject = {
  id: "6",
  slug: SLUGS.VANGUARD,
  serviceId: "ui-ux-design",
  listingImage: "https://images.prismic.io/proxen/acEDpZGXnQHGY13-_Anguard-2.jpg?auto=format,compress",
  relatedPortfolioImage: "https://images.prismic.io/proxen/acEDpZGXnQHGY13-_Anguard-2.jpg?auto=format,compress",
  country: "Canada",
  featured: false,
  color: "#A10D0D",
  heroBackground: "/assets/images/work-image/vanguard-bg.png",

  hero: {
    mainImage: "https://images.prismic.io/proxen/acSwfZGXnQHGY-k0_vanguard-main.png?auto=format,compress",
    logo: "/assets/images/work-image/vanguard-logo.png",
    badge: "Vanguard Autos",
    headline: "Trusted Digital Experience for Car Buyers",
    services: ["SEO-Focused Design", "Lead Generation", "Mobile Optimization"],
    ctaText: "Explore Project",
    ctaLink: LIVE_URLS.VANGUARD,
    ctaTarget: EXTERNAL_LINK.target,
    ctaRel: EXTERNAL_LINK.rel,
    buttonColor: "#A10D0D",
  },

  overview: {
    image: "/assets/images/work-image/vanguard-about.jpg",
    aboutHeader: "About the Project",
    description:
      "Vanguard Autos, a premier used car dealership, needed a digital presence that reflects their reputation for quality and trust. We designed a sleek, intuitive website that highlights their inventory, simplifies the search process, and encourages visitors to schedule test drives or apply for financing—all optimized for mobile users.",
    projectInfo: {
      timeline: "5 Weeks",
      industry: "Automotive Dealership",
      location: "Vancouver, British Columbia",
      country: "Canada",
    },
    results: [
      {
        metric: "Inventory Inquiries",
        value: "+210%",
        description: "Increase in contact form submissions",
      },
      {
        metric: "Page Load Speed",
        value: "94/100",
        description: "Google PageSpeed Insights (mobile)",
      },
      {
        metric: "Return Visits",
        value: "38%",
        description: "Increase in returning users",
      },
    ],
  },

  assets: {
    heading: "Design Showcase",
    images: [
      "/assets/images/work-image/Vanguard-auto-assests-1.jpg",
      "/assets/images/work-image/Vanguard-auto-assests-2.jpg",
      "/assets/images/work-image/Vanguard-auto-assests-3.jpg",
      "/assets/images/work-image/Vanguard-auto-assests-4.jpg",
      "/assets/images/work-image/Vanguard-auto-assests-1.jpg",
      "/assets/images/work-image/Vanguard-auto-assests-2.jpg",
      "/assets/images/work-image/Vanguard-auto-assests-3.jpg",
      "/assets/images/work-image/Vanguard-auto-assests-4.jpg",
      "/assets/images/work-image/Vanguard-auto-assests-1.jpg",
      "/assets/images/work-image/Vanguard-auto-assests-2.jpg",
    ],
    buttonText: "Visit Website",
    buttonLink: LIVE_URLS.VANGUARD,
    buttonTarget: EXTERNAL_LINK.target,
    buttonRel: EXTERNAL_LINK.rel,
  },

  moreProjects: {
    heading: "Our projects",
    projects: [
      {
        image: "/assets/images/portfolio/pp2.png",
        link: `/work/${SLUGS.DESIRE_MOTORS}`,
        title: "Desire Motors",
      },
      {
        image: "/assets/images/portfolio/pp1.png",
        link: `/work/${SLUGS.NR_ROOFING}`,
        title: "NR Roofing",
      },
    ],
    viewAllText: "View All Projects",
    viewAllLink: "/work",
  },
};

// ============================================================
// PROJECT 7: Made in India
// ============================================================

export const madeInIndia: PortfolioProject = {
  id: "7",
  slug: SLUGS.MADE_IN_INDIA,
  serviceId: "ecommerce",
  listingImage: "https://images.prismic.io/proxen/acZC7JGXnQHGZB7p_Madeinindia-1.jpg?auto=format,compress",
  relatedPortfolioImage: "https://images.prismic.io/proxen/acZDJJGXnQHGZB7s_madeinindia-2.jpg?auto=format,compress",
  country: "Canada",
  featured: false,
  color: "#ED6C28",
  heroBackground: "https://images.prismic.io/proxen/agFjxaYofJOwHDLX_mia-bg.png?auto=format,compress",

  hero: {
    mainImage: "https://images.prismic.io/proxen/acZDc5GXnQHGZB72_MadeinIndiamainimg.png?auto=format,compress",
    logo: "https://images.prismic.io/proxen/acZDrpGXnQHGZB7-_MadeinIndialogo.png?auto=format,compress",
    badge: "Made in India",
    headline: "Transforming an online store into a seamless experience",
    services: ["Brand Strategy", "E-commerce Design", "UX Optimization"],
    ctaText: "Explore Project",
    ctaLink: LIVE_URLS.MADE_IN_INDIA,
    ctaTarget: EXTERNAL_LINK.target,
    ctaRel: EXTERNAL_LINK.rel,
    buttonColor: "#ED6C28",
  },

  overview: {
    image: "https://images.prismic.io/proxen/acZEI5GXnQHGZB8F_Madeinindia-about.jpg?auto=format,compress",
    aboutHeader: "About the Project",
    description:
      "Made in India is an online Indian grocery store offering a wide range of authentic products, from daily essentials to specialty items. While the platform had strong product variety, the website lacked clarity, smooth navigation, and a streamlined shopping experience. We revamped the design with a clean, intuitive interface, optimized product categories, and a seamless checkout process, resulting in higher engagement and increased sales.",
    projectInfo: {
      timeline: "4 Weeks",
      industry: "E-commerce (Grocery & Retail)",
      location: "Georgetown, Ontario",
      country: "Canada",
    },
    results: [
      {
        metric: "Conversion Rate",
        value: "+35%",
        description: "Increase in completed purchases",
      },
      {
        metric: "Average Order Value",
        value: "+18%",
        description: "Higher basket size after redesign",
      },
      {
        metric: "Mobile Traffic",
        value: "62%",
        description: "Percentage of total site visits",
      },
    ],
  },

  assets: {
    heading: "Design Showcase",
    images: [
      "https://images.prismic.io/proxen/acZE1pGXnQHGZB8f_Madeinindia-assests-1.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acZE2ZGXnQHGZB8i_Madeinindia-assests-2.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acZE1ZGXnQHGZB8e_Madeinindia-assests-4.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/agFjcKYofJOwHDLT_mia.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acZE1pGXnQHGZB8f_Madeinindia-assests-1.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acZE2ZGXnQHGZB8i_Madeinindia-assests-2.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acZE1ZGXnQHGZB8e_Madeinindia-assests-4.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/agFjcKYofJOwHDLT_mia.jpg?auto=format,compress",
    ],
    buttonText: "Visit Website",
    buttonLink: LIVE_URLS.MADE_IN_INDIA,
    buttonTarget: EXTERNAL_LINK.target,
    buttonRel: EXTERNAL_LINK.rel,
  },

  moreProjects: {
    heading: "Our projects",
    projects: [
      {
        image: "/assets/images/portfolio/pp2.png",
        link: `/work/${SLUGS.VANGUARD}`,
        title: "Vanguard Autos",
      },
      {
        image: "/assets/images/portfolio/pp1.png",
        link: `/work/${SLUGS.DESIRE_MOTORS}`,
        title: "Desire Motors",
      },
    ],
    viewAllText: "View All Projects",
    viewAllLink: "/work",
  },
};

// ============================================================
// PROJECT 8: Elysian Lounge
// ============================================================

export const elysianLounge: PortfolioProject = {
  id: "8",
  slug: SLUGS.ELYSIAN_LOUNGE,
  serviceId: "horeca",
  listingImage: "https://images.prismic.io/proxen/acZWkpGXnQHGZCIj_Madeinindia-listed.jpg?auto=format,compress",
  relatedPortfolioImage: "https://images.prismic.io/proxen/acZWkpGXnQHGZCIj_Madeinindia-listed.jpg?auto=format,compress",
  country: "Canada",
  featured: false,
  color: "#FBC504",
  heroBackground: "https://images.prismic.io/proxen/ack6wJGXnQHGZE0J_elysian-bg.png?auto=format,compress",

  hero: {
    mainImage: "https://images.prismic.io/proxen/acZWTpGXnQHGZCIU_Elysian-main.png?auto=format,compress",
    logo: "https://images.prismic.io/proxen/acZGA5GXnQHGZB9A_Elysian-logo.png?auto=format,compress",
    badge: "Elysian Lounge",
    headline: "Creating a sophisticated digital presence for a premium lounge",
    services: ["Brand Identity", "Responsive Design", "Reservation System Integration"],
    ctaText: "Explore Project",
    ctaLink: LIVE_URLS.ELYSIAN_LOUNGE,
    ctaTarget: EXTERNAL_LINK.target,
    ctaRel: EXTERNAL_LINK.rel,
    buttonColor: "#FBC504",
  },

  overview: {
    image: "https://images.prismic.io/proxen/ack3-pGXnQHGZEzX_Elysian-aboy-imge.jpg?auto=format,compress",
    aboutHeader: "About the Project",
    description:
      "Elysian Lounge is a premium hospitality venue offering an upscale experience with fine dining, signature cocktails, and live entertainment. They needed a website that reflects their luxurious atmosphere while making it easy for guests to explore menus, book tables, and stay updated on events. We delivered a visually stunning, mobile-optimized site with an integrated reservation system and event calendar.",
    projectInfo: {
      timeline: "5 Weeks",
      industry: "Hospitality (Lounge & Restaurant)",
      location: "Toronto, Ontario",
      country: "Canada",
    },
    results: [
      {
        metric: "Online Reservations",
        value: "+150%",
        description: "Increase in bookings through website",
      },
      {
        metric: "Engagement Rate",
        value: "42%",
        description: "Users interacting with menus and events",
      },
      {
        metric: "Page Load Speed",
        value: "91/100",
        description: "Google PageSpeed Insights (mobile)",
      },
    ],
  },

  assets: {
    heading: "Design Showcase",
    images: [
      "https://images.prismic.io/proxen/acyWopGXnQHGZJuQ_elysian-11.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acyWopGXnQHGZJuR_elysian-12.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acyWo5GXnQHGZJuS_elysian-13.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acyWpJGXnQHGZJuT_elysian-14.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acyWopGXnQHGZJuQ_elysian-11.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acyWopGXnQHGZJuR_elysian-12.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acyWo5GXnQHGZJuS_elysian-13.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acyWpJGXnQHGZJuT_elysian-14.jpg?auto=format,compress",
    ],
    buttonText: "Visit Website",
    buttonLink: LIVE_URLS.ELYSIAN_LOUNGE,
    buttonTarget: EXTERNAL_LINK.target,
    buttonRel: EXTERNAL_LINK.rel,
  },

  moreProjects: {
    heading: "Our projects",
    projects: [
      {
        image: "/assets/images/portfolio/pp10.png",
        link: `/work/${SLUGS.NR_ROOFING}`,
        title: "NR Roofing",
      },
      {
        image: "/assets/images/portfolio/pp7.png",
        link: `/work/${SLUGS.HEATFLOW}`,
        title: "HeatFlow",
      },
    ],
    viewAllText: "View All Projects",
    viewAllLink: "/work",
  },
};

// ============================================================
// PROJECT 9: Ice Cream Truck
// ============================================================

export const torontoGtaIceream: PortfolioProject = {
  id: "9",
  slug: SLUGS.ICE_CREAM_TRUCKS,
  serviceId: "food",
  listingImage: "https://images.prismic.io/proxen/acZjD5GXnQHGZCRy_IceCreameReuckTronoto-1.jpg?auto=format,compress",
  relatedPortfolioImage: "https://images.prismic.io/proxen/acZjMJGXnQHGZCR5_IceCreameReuckTronoto-2.jpg?auto=format,compress",
  country: "Canada",
  featured: false,
  color: "#54BED7",
  heroBackground: "https://images.prismic.io/proxen/acZjh5GXnQHGZCSA_gta-bg.png?auto=format,compress",

  hero: {
    mainImage: "https://images.prismic.io/proxen/acZj25GXnQHGZCSN_gta-main-img.png?auto=format,compress",
    logo: "https://images.prismic.io/proxen/acZkAJGXnQHGZCSR_gta-logo.png?auto=format,compress",
    badge: "Toronto GTA Ice Cream Trucks",
    headline: "Transforming a simple website into a booking platform",
    services: ["Brand Strategy", "Lead Generation", "Web Development"],
    ctaText: "Explore Project",
    ctaLink: LIVE_URLS.ICE_CREAM_TRUCKS,
    ctaTarget: EXTERNAL_LINK.target,
    ctaRel: EXTERNAL_LINK.rel,
    buttonColor: "#54BED7",
  },

  overview: {
    image: "https://images.prismic.io/proxen/acZkf5GXnQHGZCSj_IceCreameReuckTronoto-about.jpg?auto=format,compress",
    aboutHeader: "About the Project",
    description:
      "Toronto Ice Cream Truck is a Canada-based ice cream catering service specializing in events across the GTA. With over 15 years of experience, they built a strong reputation offline but needed a website that truly reflected their vibrant brand and service quality. We redesigned their digital presence with a conversion focused UI, improved structure, and performance optimization to create a seamless user journey and increase event bookings.",
    projectInfo: {
      timeline: "3 Weeks",
      industry: "Ice Cream Catering & Events",
      location: "Canada (Toronto)",
      country: "Canada",
    },
    results: [
      {
        metric: "Online Reservations",
        value: "+150%",
        description: "Increase in bookings through website",
      },
      {
        metric: "Engagement Rate",
        value: "42%",
        description: "Users interacting with menus and events",
      },
      {
        metric: "Page Load Speed",
        value: "91/100",
        description: "Google PageSpeed Insights (mobile)",
      },
    ],
  },

  assets: {
    heading: "Design Showcase",
    images: [
      "https://images.prismic.io/proxen/acZm65GXnQHGZCT3_IceCreameReuckTronoto-assests-1.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acZm7JGXnQHGZCT4_IceCreameReuckTronoto-assests-2.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acZm6ZGXnQHGZCT0_IceCreameReuckTronoto-assests-3.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acZm6pGXnQHGZCT2_IceCreameReuckTronoto-assests-4.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acZm65GXnQHGZCT3_IceCreameReuckTronoto-assests-1.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acZm7JGXnQHGZCT4_IceCreameReuckTronoto-assests-2.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acZm6ZGXnQHGZCT0_IceCreameReuckTronoto-assests-3.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acZm6pGXnQHGZCT2_IceCreameReuckTronoto-assests-4.jpg?auto=format,compress",
    ],
    buttonText: "Visit Website",
    buttonLink: LIVE_URLS.ICE_CREAM_TRUCKS,
    buttonTarget: EXTERNAL_LINK.target,
    buttonRel: EXTERNAL_LINK.rel,
  },

  moreProjects: {
    heading: "Our projects",
    projects: [
      {
        image: "/assets/images/portfolio/pp10.png",
        link: `/work/${SLUGS.NR_ROOFING}`,
        title: "NR Roofing",
      },
      {
        image: "/assets/images/portfolio/pp7.png",
        link: `/work/${SLUGS.HEATFLOW}`,
        title: "HeatFlow",
      },
    ],
    viewAllText: "View All Projects",
    viewAllLink: "/work",
  },
};

// ============================================================
// PROJECT 10: HSS Construction
// ============================================================

export const hssConstruction: PortfolioProject = {
  id: "10",
  slug: SLUGS.HSS_CONSTRUCTION,
  serviceId: "construction",
  listingImage: "https://images.prismic.io/proxen/acadWZGXnQHGZDLj_HSSconstruction-2main.jpg?auto=format,compress",
  relatedPortfolioImage: "https://images.prismic.io/proxen/acadWZGXnQHGZDLj_HSSconstruction-2main.jpg?auto=format,compress",
  country: "Canada",
  featured: false,
  color: "#F4B53D",
  heroBackground: "https://images.prismic.io/proxen/acadk5GXnQHGZDLx_hss-bg.png?auto=format,compress",

  hero: {
    mainImage: "https://images.prismic.io/proxen/acad1JGXnQHGZDMD_HSS-main-img.png?auto=format,compress",
    logo: "https://images.prismic.io/proxen/acad8ZGXnQHGZDML_HSS-main-logo.png?auto=format,compress",
    badge: "HSS Construction & Concrete",
    headline: "Building a digital foundation for consistent, high quality leads",
    services: ["Concrete Services", "Lead Generation", "Web Development"],
    ctaText: "Explore Project",
    ctaLink: LIVE_URLS.HSS_CONSTRUCTION,
    ctaTarget: EXTERNAL_LINK.target,
    ctaRel: EXTERNAL_LINK.rel,
    buttonColor: "#F4B53D",
  },

  overview: {
    image: "https://images.prismic.io/proxen/ack45JGXnQHGZEzv_hss-overview.jpg?auto=format,compress",
    aboutHeader: "About the Project",
    description:
      "HSS Construction & Concrete is a Canada-based company specializing in residential and commercial concrete services. With solid on-ground expertise, they needed a website that clearly showcased their services and built trust with potential clients. We redesigned their digital presence with a clean, conversion-focused layout, improved service structure, and optimized performance to increase visibility and generate consistent project inquiries.",
    projectInfo: {
      timeline: "3 Weeks",
      industry: "Construction & Concrete Services",
      location: "Canada (Toronto)",
      country: "Canada",
    },
    results: [
      {
        metric: "Online Reservations",
        value: "+150%",
        description: "Increase in bookings through website",
      },
      {
        metric: "Engagement Rate",
        value: "42%",
        description: "Users interacting with menus and events",
      },
      {
        metric: "Page Load Speed",
        value: "91/100",
        description: "Google PageSpeed Insights (mobile)",
      },
    ],
  },

  assets: {
    heading: "Design Showcase",
    images: [
      "https://images.prismic.io/proxen/acae4JGXnQHGZDM9_HSSconstruction-assets-2.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acae45GXnQHGZDNB_HSSconstruction-assets-1.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acae4ZGXnQHGZDM-_HSSconstruction-assets-3.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acae4pGXnQHGZDM__HSSconstruction-assets-4.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acae4JGXnQHGZDM9_HSSconstruction-assets-2.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acae45GXnQHGZDNB_HSSconstruction-assets-1.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acae4ZGXnQHGZDM-_HSSconstruction-assets-3.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/acae4pGXnQHGZDM__HSSconstruction-assets-4.jpg?auto=format,compress",
    ],
    buttonText: "Visit Website",
    buttonLink: LIVE_URLS.HSS_CONSTRUCTION,
    buttonTarget: EXTERNAL_LINK.target,
    buttonRel: EXTERNAL_LINK.rel,
  },

  moreProjects: {
    heading: "Our projects",
    projects: [
      {
        image: "/assets/images/portfolio/pp10.png",
        link: `/work/${SLUGS.NR_ROOFING}`,
        title: "NR Roofing",
      },
      {
        image: "/assets/images/portfolio/pp7.png",
        link: `/work/${SLUGS.HEATFLOW}`,
        title: "HeatFlow",
      },
    ],
    viewAllText: "View All Projects",
    viewAllLink: "/work",
  },
};

// ============================================================
// PROJECT 11: GTA Softee Inc.
// ============================================================

export const gtaSoftee: PortfolioProject = {
  id: "11",
  slug: SLUGS.GTA_SOFTEE,
  serviceId: "icecream-truck",   // or "events", "food-truck" – choose what fits your categorisation
  listingImage: "https://images.prismic.io/proxen/acbX1JGXnQHGZD_gta-softee-listing.jpg?auto=format,compress",
  relatedPortfolioImage: "https://images.prismic.io/proxen/agFf9KYofJOwHDKx_gra-about.png?auto=format,compress",
  country: "Canada",
  featured: false,
  color: "#3daef4",               // Could use a brand colour from GTA Softee; adjust if needed
  heroBackground: "https://images.prismic.io/proxen/agFf86YofJOwHDKw_gta-maion-bg.png?auto=format,compress",

  hero: {
    mainImage: "https://images.prismic.io/proxen/agFf8qYofJOwHDKv_GTAsofte1.png?auto=format,compress",   // Show the website or an ice cream truck
    logo: "https://images.prismic.io/proxen/agFf8aYofJOwHDKu_gta-logo.png?auto=format,compress",            // GTA Softee company logo
    badge: "GTA Softee Inc.",
    headline: "Scooping up more bookings with a modern website built for leads and credibility",
    services: [
      "Ice Cream Truck Rentals",
      "Corporate Events",
      "Private Parties",
      "Brand Activations",
    ],
    ctaText: "Explore Project",
    ctaLink: LIVE_URLS.GTA_SOFTEE,
    ctaTarget: EXTERNAL_LINK.target,
    ctaRel: EXTERNAL_LINK.rel,
    buttonColor: "#3daef4",
  },

  overview: {
    image: "https://images.prismic.io/proxen/agFf9KYofJOwHDKx_gra-about.png?auto=format,compress",
    aboutHeader: "About the Project",
    description:
      "GTA Softee Inc. has been a trusted ice cream truck rental provider in Toronto and the GTA since 2010. To stand out in a growing market and increase online bookings, they needed a website that clearly presented their services, built trust with corporate and private clients, and made it easy to request a quote. We redesigned their digital presence with a clean, conversion-focused layout, high-quality imagery, and a streamlined enquiry flow that now drives consistent leads for corporate events, school fun fairs, and private celebrations.",
    projectInfo: {
      timeline: "4 Weeks",
      industry: "Ice Cream Truck Rentals & Events",
      location: "Toronto, Ontario",
      country: "Canada",
    },
    results: [
      {
        metric: "Online Quote Requests",
        value: "+120%",
        description: "Increase in event booking inquiries through the website",
      },
      {
        metric: "Engagement Rate",
        value: "48%",
        description: "Users interacting with service pages and gallery",
      },
      {
        metric: "Page Load Speed",
        value: "95/100",
        description: "Google PageSpeed Insights (mobile)",
      },
    ],
  },

  assets: {
    heading: "Design Showcase",
    images: [
      "https://images.prismic.io/proxen/agFgHKYofJOwHDK1_gta-image-1.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/agFgGaYofJOwHDKy_gta-image-2.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/agFgGqYofJOwHDKz_gta-image-3.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/agFgG6YofJOwHDK0_gta-image-4.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/agFgHKYofJOwHDK1_gta-image-1.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/agFgGaYofJOwHDKy_gta-image-2.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/agFgGqYofJOwHDKz_gta-image-3.jpg?auto=format,compress",
      "https://images.prismic.io/proxen/agFgG6YofJOwHDK0_gta-image-4.jpg?auto=format,compress",
    ],
    buttonText: "Visit Website",
    buttonLink: LIVE_URLS.GTA_SOFTEE,
    buttonTarget: EXTERNAL_LINK.target,
    buttonRel: EXTERNAL_LINK.rel,
  },

  moreProjects: {
    heading: "Our projects",
    projects: [
      {
        image: "/assets/images/portfolio/pp10.png",
        link: `/work/${SLUGS.NR_ROOFING}`,
        title: "NR Roofing",
      },
      {
        image: "/assets/images/portfolio/pp7.png",
        link: `/work/${SLUGS.HEATFLOW}`,
        title: "HeatFlow",
      },
    ],
    viewAllText: "View All Projects",
    viewAllLink: "/work",
  },
};

// ============================================================
// PORTFOLIO PROJECTS COLLECTION
// ============================================================

export const portfolioProjects: PortfolioProject[] = [
  nrRoofingProject,
  gardecProject,
  heatFlowProject,
  gameChangerProject,
  desireMotorsProject,
  vanguardProject,
  madeInIndia,
  elysianLounge,
  torontoGtaIceream,
  hssConstruction,
  gtaSoftee,
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================

export const getProjectBySlug = (slug: string): PortfolioProject | undefined => {
  return portfolioProjects.find((project) => project.slug === slug);
};

export const getProjectById = (id: string): PortfolioProject | undefined => {
  return portfolioProjects.find((project) => project.id === id);
};

export const getFeaturedProjects = (): PortfolioProject[] => {
  return portfolioProjects.filter((project) => project.featured === true);
};

export const getProjectsByServiceId = (serviceId: string): PortfolioProject[] => {
  return portfolioProjects.filter((project) => project.serviceId === serviceId);
};

export const getProjectsByCountry = (country: string): PortfolioProject[] => {
  return portfolioProjects.filter(
    (project) => project.overview.projectInfo.country?.toLowerCase() === country.toLowerCase()
  );
};

export const getProjectsByTopLevelCountry = (country: string): PortfolioProject[] => {
  return portfolioProjects.filter((project) => project.country?.toLowerCase() === country.toLowerCase());
};

export const getAllTopLevelCountries = (): string[] => {
  const countries = portfolioProjects.map((p) => p.country).filter((c): c is string => c !== undefined);
  return [...new Set(countries)];
};

export const getAllCountries = (): string[] => {
  const countries = portfolioProjects.map((p) => p.overview.projectInfo.country).filter((c): c is string => c !== undefined);
  return [...new Set(countries)];
};

export const getAllIndustries = (): string[] => {
  const industries = portfolioProjects.map((p) => p.overview.projectInfo.industry).filter((i): i is string => i !== undefined);
  return [...new Set(industries)];
};

export const getProjectBySlugOrFallback = (
  slug: string,
  fallback: string = SLUGS.NR_ROOFING
): PortfolioProject => {
  return getProjectBySlug(slug) || getProjectBySlug(fallback) || nrRoofingProject;
};