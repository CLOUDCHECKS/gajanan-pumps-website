export type Product = {
  slug: string;
  code: string;
  name: string;
  subtitle?: string;
  image: string;
  /** Short, factual descriptor used in menus and quick views. */
  category: string;
};

export const products: Product[] = [
  {
    slug: "nymbt-tt",
    code: "NYMBT/TT",
    name: "NYMBT/TT",
    subtitle: "General Purpose",
    image: "/images/products/product-1.png",
    category: "General purpose progressive cavity pump",
  },
  {
    slug: "nymb-c-tt",
    code: "NYMB-C/TT",
    name: "NYMB-C/TT",
    subtitle: "Cardinal Joint",
    image: "/images/products/product-2.png",
    category: "Cardinal joint progressive cavity pump",
  },
  {
    slug: "nymb-w-tt",
    code: "NYMB-W/TT",
    name: "NYMB-W/TT",
    subtitle: "Hopper Pump",
    image: "/images/products/product-3.png",
    category: "Hopper-fed progressive cavity pump",
  },
  {
    slug: "nymb-b-tt",
    code: "NYMB-B/TT",
    name: "NYMB-B/TT",
    subtitle: "Chemical Pump",
    image: "/images/products/product-4.png",
    category: "Chemical duty progressive cavity pump",
  },
  {
    slug: "nymb-h-tt",
    code: "NYMB-H/TT",
    name: "NYMB-H/TT",
    subtitle: "Hygienic Pump",
    image: "/images/products/product-5.png",
    category: "Hygienic progressive cavity pump",
  },
  {
    slug: "nymb-d-tt",
    code: "NYMB-D/TT",
    name: "NYMB-D/TT",
    subtitle: "Dosing Pump",
    image: "/images/products/product-6.png",
    category: "Metering and dosing progressive cavity pump",
  },
  {
    slug: "namkeen-extruder",
    code: "Namkeen",
    name: "Namkeen Extruder",
    image: "/images/products/product-7.png",
    category: "Namkeen extrusion system",
  },
];

export const getProduct = (slug: string) =>
  products.find((product) => product.slug === slug);
