// src/data/blogs-data.ts
// Centralized blog content for listing pages, detail pages, sidebar widgets, and SEO.

export interface BlogSection {
  heading: string;
  body: string;
}

export interface BlogComment {
  name: string;
  date: string;
  text: string;
  avatar: string;
}

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  intro: string;
  sections: BlogSection[];
  quote?: string;
  tags: string[];
  comments?: BlogComment[];
  seoDescription: string;
}

export interface BlogCategory {
  label: string;
  count: number;
  href: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "launch-product-with-a-creative-agency",
    category: "Creative Agency",
    title: "Top 5 reasons to launch your product with a creative agency",
    date: "20 June 2025",
    readTime: "10 min read",
    image: "/assets/images/blog/b11.png",
    excerpt:
      "Launching a product is more than just going live — it is about creating impact, building trust, and making every touchpoint reflect your vision.",
    intro:
      "Launching a product is more than just going live — it is about creating impact, generating buzz, and making sure every touchpoint reflects your vision.",
    sections: [
      {
        heading: "1. Strategic positioning from the start",
        body:
          "A creative agency does not just design; it thinks. From understanding your market to positioning your product, agencies bring strategic insight that ensures you are solving the right problem for the right audience.",
      },
      {
        heading: "2. Cohesive branding that builds trust",
        body:
          "First impressions matter. An agency ensures your visual identity — logo, packaging, website, and social presence — feels like one unified experience.",
      },
      {
        heading: "3. High-impact design for attention",
        body:
          "Creative agencies specialize in turning ideas into visuals that work. Whether it is your product landing page, pitch deck, or teaser video, strong design helps your message land faster.",
      },
      {
        heading: "4. Faster execution with a skilled team",
        body:
          "A product launch involves design, development, copywriting, marketing, and more. A creative agency already has a cross-functional team ready to move, saving you time and coordination effort.",
      },
      {
        heading: "5. Long-term growth support",
        body:
          "An agency does not just help you launch it helps you grow. From content marketing to UI/UX optimizations, the right partner keeps improving performance after launch.",
      },
      {
        heading: "Final Thoughts",
        body:
          "If you want your product to stand out in a crowded market, do not just build it brand it, design it, and present it with purpose.",
      },
    ],
    quote:
      "Tips: Great products can fail with poor messaging. Strategy is the first layer of creative success.",
    tags: ["Business", "Creative Agency"],
    seoDescription:
      "Learn why launching your product with a creative agency improves strategy, branding, execution, and long-term growth.",
  },
  {
    slug: "build-a-creative-agency-website-in-4-steps",
    category: "Web",
    title: "Build a creative agency website in 4 steps",
    date: "18 June 2025",
    readTime: "15 min read",
    image: "/assets/images/blog/b12.png",
    excerpt:
      "A simple process for planning, designing, and launching a web presence that supports your agency goals.",
    intro:
      "A great agency website needs clear positioning, strong visuals, and a conversion-focused structure. Here is a practical four-step process.",
    sections: [
      {
        heading: "1. Define your offer and audience",
        body:
          "Start with the services you want to sell and the exact audience you want to attract. The website should speak directly to the problems that audience is trying to solve.",
      },
      {
        heading: "2. Structure the content around outcomes",
        body:
          "Do not just list services. Show results, proof, and process. Visitors should understand what you do, why it matters, and what they should do next.",
      },
      {
        heading: "3. Design for clarity and momentum",
        body:
          "Use a clean visual hierarchy, strong calls to action, and enough breathing room so the most important messages stand out immediately.",
      },
      {
        heading: "4. Launch with SEO and performance in place",
        body:
          "A polished website only works if people can find it. Optimize page titles, headings, metadata, images, and speed before launch.",
      },
    ],
    tags: ["Web", "Business"],
    seoDescription:
      "Build a creative agency website in four clear steps with better positioning, stronger content, and launch-ready SEO.",
  },
  {
    slug: "what-is-click-fraud-and-how-to-avoid-it",
    category: "Technology",
    title: "What is click fraud and how to avoid it",
    date: "16 June 2025",
    readTime: "6 min read",
    image: "/assets/images/blog/b13.png",
    excerpt:
      "Learn how click fraud affects ad campaigns and what practical steps you can take to reduce wasted spend.",
    intro:
      "Click fraud can quietly drain advertising budgets and distort performance data. Understanding the risk is the first step toward prevention.",
    sections: [
      {
        heading: "What click fraud does",
        body:
          "It generates fake or irrelevant ad clicks that cost money without creating real business value. That means your reporting, bidding, and campaign decisions can all be affected.",
      },
      {
        heading: "How to spot the warning signs",
        body:
          "Watch for unusual spikes in clicks, low conversion rates, suspicious traffic sources, or repeated clicks from the same network patterns.",
      },
      {
        heading: "How to reduce the risk",
        body:
          "Use tighter audience targeting, monitor IP patterns, review placements, and keep an eye on campaign analytics so you can act early.",
      },
    ],
    tags: ["Technology", "Digital Marketing"],
    seoDescription:
      "Understand click fraud, recognize suspicious traffic patterns, and reduce wasted ad spend with simple prevention steps.",
  },
  {
    slug: "how-ai-is-reshaping-agency-brand-dynamics",
    category: "Technology",
    title: "How AI is reshaping agency-brand dynamics: At a glance",
    date: "28 June 2025",
    readTime: "8 min read",
    image: "/assets/images/blog/b14.png",
    excerpt:
      "AI is changing how agencies plan, produce, and personalize brand experiences across channels.",
    intro:
      "AI is changing the way brands and agencies collaborate. The real advantage comes from using it to move faster while keeping strategy and creativity aligned.",
    sections: [
      {
        heading: "Speed without losing direction",
        body:
          "AI can help teams generate ideas, variations, and drafts quickly, but the strongest results still come from human strategy and brand judgment.",
      },
      {
        heading: "More personalized brand experiences",
        body:
          "Brands can adapt messaging, design, and content to different audiences more efficiently when AI supports the workflow.",
      },
      {
        heading: "Smarter collaboration between teams",
        body:
          "Agencies that combine AI tools with creative expertise can deliver faster experimentation, better insights, and stronger campaign iteration cycles.",
      },
    ],
    tags: ["Technology", "UI/UX"],
    seoDescription:
      "See how AI is changing the relationship between agencies and brands through faster workflows and smarter personalization.",
  },
  {
    slug: "best-modern-ai-solutions-for-ui-ux-design",
    category: "UI/UX",
    title: "15 Best modern AI solutions as a foundation for UI/UX design",
    date: "16 June 2025",
    readTime: "5 min read",
    image: "/assets/images/blog/b15.png",
    excerpt:
      "A quick overview of how AI tools support wireframing, research, prototyping, and better product experiences.",
    intro:
      "UI/UX teams are using AI to speed up exploration, improve decision-making, and create more usable product experiences.",
    sections: [
      {
        heading: "Faster ideation and wireframing",
        body:
          "AI tools can generate layout ideas and content patterns in less time, helping designers move from concept to prototype more quickly.",
      },
      {
        heading: "Better research and insights",
        body:
          "With AI-assisted analysis, teams can identify patterns in user feedback, behavior, and support data more efficiently.",
      },
      {
        heading: "A stronger foundation for product design",
        body:
          "The best designs still require human judgment, but AI gives designers a stronger starting point for testing and refinement.",
      },
    ],
    tags: ["UI/UX", "Technology"],
    seoDescription:
      "Discover how AI tools can support UI/UX design through faster ideation, better research, and stronger product workflows.",
  },
  {
    slug: "fasthtml-modern-web-applications-in-pure-python",
    category: "Web Development",
    title: "FastHTML — Modern web applications in pure Python",
    date: "10 June 2025",
    readTime: "8 min read",
    image: "/assets/images/blog/b16.png",
    excerpt:
      "FastHTML is a lightweight approach to building modern web apps with Python-first development.",
    intro:
      "FastHTML is gaining attention because it simplifies how developers build interactive web applications while staying close to Python.",
    sections: [
      {
        heading: "Why developers are paying attention",
        body:
          "A smaller stack can reduce complexity, especially for teams that want to move fast without scattering logic across too many tools.",
      },
      {
        heading: "What makes it practical",
        body:
          "The appeal is in the workflow: less boilerplate, faster iteration, and a simpler mental model for building modern interfaces.",
      },
      {
        heading: "Where it fits best",
        body:
          "It works well for prototypes, internal tools, and focused products where speed and maintainability matter more than heavy framework overhead.",
      },
    ],
    tags: ["Web Development", "Technology"],
    seoDescription:
      "Explore FastHTML and how Python-first web development can simplify modern application building.",
  },
];

export const getBlogPosts = () => BLOG_POSTS;

export const getBlogPostBySlug = (slug: string) =>
  BLOG_POSTS.find((post) => post.slug === slug);

export const getFeaturedBlogPosts = (limit = 4) => BLOG_POSTS.slice(0, limit);

export const getRecentBlogPosts = (excludeSlug?: string, limit = 3) =>
  BLOG_POSTS.filter((post) => post.slug !== excludeSlug).slice(0, limit);

export const getBlogCategories = (): BlogCategory[] => {
  const counts = BLOG_POSTS.reduce<Record<string, number>>((acc, post) => {
    acc[post.category] = (acc[post.category] ?? 0) + 1;
    return acc;
  }, {});

  return Object.entries(counts).map(([label, count]) => ({
    label,
    count,
    href: "/blog",
  }));
};