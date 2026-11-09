import { products } from "@/lib/products";
import { industries } from "@/lib/industries";

export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = NavLink & {
  children?: NavLink[];
};

export const productLinks: NavLink[] = products.map((product) => ({
  label: product.subtitle ? `${product.code} · ${product.subtitle}` : product.name,
  href: `/products/${product.slug}`,
}));

export const industryLinks: NavLink[] = industries.map((industry) => ({
  label: industry.name,
  href: `/industries/${industry.slug}`,
}));

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products", children: productLinks },
  { label: "Industries", href: "/industries", children: industryLinks },
  { label: "Engineering", href: "/engineering" },
  { label: "Resources", href: "/resources" },
];

export const footerLinks: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Engineering", href: "/engineering" },
      { label: "Resources", href: "/resources" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: productLinks.slice(0, 5),
  },
  {
    title: "Industries",
    links: industryLinks.slice(0, 5),
  },
];

export const trustItems = [
  { icon: "expertise", label: "20+ Years", sub: "of Expertise" },
  { icon: "manufacturing", label: "In-House", sub: "Manufacturing" },
  { icon: "quality", label: "DIN EN ISO 9001", sub: "Quality System" },
  { icon: "presence", label: "Domestic &", sub: "International Presence" },
  { icon: "support", label: "End-to-End", sub: "Support" },
] as const;
