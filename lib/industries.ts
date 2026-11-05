export type IndustryIcon =
  | "environment"
  | "chemical"
  | "food"
  | "oil-seed"
  | "oil-gas"
  | "namkeen";

export type Industry = {
  slug: string;
  name: string;
  lines: [string, string?];
  image: string;
  icon: IndustryIcon;
};

export const industries: Industry[] = [
  {
    slug: "environment-energy",
    name: "Environment & Energy",
    lines: ["Environment", "& Energy"],
    image: "/images/industries/industry-1.png",
    icon: "environment",
  },
  {
    slug: "chemical-pulp-paper",
    name: "Chemical, Pulp & Paper",
    lines: ["Chemical,", "Pulp & Paper"],
    image: "/images/industries/industry-2.png",
    icon: "chemical",
  },
  {
    slug: "food-pharmaceutical",
    name: "Food & Pharmaceutical",
    lines: ["Food &", "Pharmaceutical"],
    image: "/images/industries/industry-3.png",
    icon: "food",
  },
  {
    slug: "vegetable-oil-refinery",
    name: "Vegetable Oil & Refinery",
    lines: ["Vegetable Oil", "& Refinery"],
    image: "/images/industries/industry-4.png",
    icon: "oil-seed",
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    lines: ["Oil & Gas"],
    image: "/images/industries/industry-5.png",
    icon: "oil-gas",
  },
  {
    slug: "namkeen-manufacturing",
    name: "Namkeen Manufacturing",
    lines: ["Namkeen", "Manufacturing"],
    image: "/images/industries/industry-6.png",
    icon: "namkeen",
  },
];
