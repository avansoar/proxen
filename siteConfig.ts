export const siteConfig = {
  // Basic Site Info
  title: "Proxen",
  tagline: "Digital Solutions",
  description: "Proxen Digital is an IT consulting and digital marketing company specializing in innovative web solutions.",
  
  // Company Info
  url: "https://proxen.ca",
  phone: "+1 (905) 782 6558",
  phoneLink: "tel:+19057826558",
  email: "business@proxen.ca",
  emailLink: "mailto:business@proxen.ca",
  address: "Your Company Address", // Add if available
  
  // SEO & Meta
  seo: {
    defaultTitle: "Proxen - Digital Solutions | IT Consulting & Digital Marketing",
    titleTemplate: " - Proxen",
    defaultDescription: "Proxen Digital is an IT consulting and digital marketing company specializing in innovative web solutions, web development, and digital transformation.",
    defaultImage: "/og-image.jpg",
    siteUrl: "https://proxen.ca",
    twitterHandle: "@proxendigital",
    canonicalUrl: "https://proxen.ca"
  },
  
  // Social Media (Updated for consistency)
  social: {
    instagram: "https://www.instagram.com/proxen.ca/",
    linkedin: "https://www.linkedin.com/company/proxen.ca",
    facebook: "https://www.facebook.com/proxen.ca",
    behance: "#",
    // Consider adding if you have these
    // twitter: "https://twitter.com/proxendigital",
    // youtube: "https://youtube.com/@proxen",
  },
  
  // Services/Keywords for SEO
  keywords: [
    "IT consulting",
    "digital marketing", 
    "web development",
    "web solutions",
    "digital transformation",
    "Canada IT services",
    "Toronto web development",
    "digital agency Canada"
  ],
  
  // Business Info
  business: {
    name: "Proxen Digital",
    foundingYear: "2023", // Update with actual year
    services: [
      "IT Consulting",
      "Digital Marketing",
      "Web Development",
      "Digital Transformation"
    ]
  }
} as const;