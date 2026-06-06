// src/data/menu-data.ts

interface MenuItem {
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    title: string;
    link: string;
    has_sub_dropdown?: boolean;
    sub_menus?: {
      title: string;
      link: string;
    }[];
  }[];
}

const menu_data: MenuItem[] = [
  {
    title: "Work",
    link: "/work",
    has_dropdown: false,
  },
  {
    title: "Website Design",
    link: "/services/website-design-services",
    has_dropdown: false,
  },
  {
    title: "Ecommerce",
    link: "/services/ecommerce-store-development-company",
    has_dropdown: false,
  },
  {
    title: "Branding & Identity",
    link: "/services/branding-identity-design-company",
    has_dropdown: false,
  },
  {
    title: "Startups",
    link: "/startups",
    has_dropdown: false,
  },
];

export default menu_data;
