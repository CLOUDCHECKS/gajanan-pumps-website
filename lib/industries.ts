export type IndustryIcon =
  | "environment"
  | "chemical"
  | "food"
  | "oil-seed"
  | "oil-gas"
  | "namkeen"
  | "mineral"
  | "textile"
  | "dosing";

export type ApplicationGroup = {
  title?: string;
  items: string[];
};

export type Industry = {
  slug: string;
  name: string;
  /** Two-line label used on cards. */
  lines: [string, string?];
  image: string;
  /** CSS object-position for landscape card crops. */
  imagePosition: string;
  icon: IndustryIcon;
  /** Short card-level description. */
  summary: string;
  /** Detail-page introduction. */
  intro: string;
  applicationGroups: ApplicationGroup[];
  /** Show in the homepage six-card grid. */
  featuredOnHome: boolean;
  /** Show in the Industries page card grid. */
  showOnListing: boolean;
};

export const industries: Industry[] = [
  {
    slug: "environment-energy",
    name: "Environment & Energy",
    lines: ["Environment &", "Energy"],
    image: "/images/industries/industry-1.png",
    imagePosition: "50% 42%",
    icon: "environment",
    summary:
      "Dependable transfer and dosing for wastewater, water treatment, agriculture and renewable energy processes.",
    intro:
      "From wastewater treatment and drinking water purification to agriculture, construction, mining and renewable energy, our pumps keep challenging media moving. Sludge, abrasive slurries and variable solids are handled with a configuration matched to the duty.",
    applicationGroups: [
      {
        items: [
          "Waste water treatment",
          "Agriculture",
          "Construction industry",
          "Mining and smelting works",
          "Renewable energies",
          "Waste water and drinking water purification",
        ],
      },
    ],
    featuredOnHome: true,
    showOnListing: true,
  },
  {
    slug: "chemical-pulp-paper",
    name: "Chemical, Pulp & Paper",
    lines: ["Chemical,", "Pulp & Paper"],
    image: "/images/industries/industry-2.png",
    imagePosition: "50% 38%",
    icon: "chemical",
    summary:
      "Corrosion-aware pumping for aggressive chemicals, pulp stock, coatings and process slurries.",
    intro:
      "Aggressive chemicals, pulp stock, paints, varnishes and process slurries demand materials and seals that stand up to the duty. We match the rotor, stator and sealing arrangement to the fluid, its pH and its operating temperature.",
    applicationGroups: [
      {
        items: [
          "Building material",
          "Biofuel",
          "Chemical and biochemical",
          "Paint and varnish",
          "Wood processing",
          "Ceramics and glass",
          "Leather / tanneries",
          "Paper and pulp",
          "Textiles and similar",
        ],
      },
    ],
    featuredOnHome: true,
    showOnListing: true,
  },
  {
    slug: "food-pharmaceutical",
    name: "Food & Pharmaceutical",
    lines: ["Food &", "Pharmaceutical"],
    image: "/images/industries/industry-3.png",
    imagePosition: "50% 38%",
    icon: "food",
    summary:
      "Gentle, hygienic handling for sugar, starch, beverages, bakery, dairy and pharmaceutical products.",
    intro:
      "Hygienic construction and gentle handling help protect product integrity across sugar, starch, beverages, bakery, meat and pharmaceutical processes. Pumps are configured around the product, cleaning regime and production duty.",
    applicationGroups: [
      {
        items: [
          "Sugar and starch",
          "Wine",
          "Breweries",
          "Distilleries",
          "Fruit processing",
          "Beverages",
          "Pharmaceutical and cosmetic products",
          "Bakery products",
          "Meat processing and similar",
        ],
      },
    ],
    featuredOnHome: true,
    showOnListing: true,
  },
  {
    slug: "vegetable-oil-refinery",
    name: "Vegetable Oil & Refinery",
    lines: ["Vegetable Oil", "& Refinery"],
    image: "/images/industries/industry-4.png",
    imagePosition: "50% 52%",
    icon: "oil-seed",
    summary:
      "Careful transfer of crude oil, gums, wax, acid oil and lecithin without compromising the product.",
    intro:
      "Crude oil, gums, wax, acid oil and lecithin are transferred with care to avoid emulsification and product damage. Smooth, low-shear pumping supports refinery and noodle-processing lines alike.",
    applicationGroups: [
      {
        items: [
          "Oil transfer",
          "Gums",
          "Wax",
          "Acid oil",
          "Lecithin transfer",
          "Noodles transfer",
          "Refineries reinjection and similar",
        ],
      },
    ],
    featuredOnHome: true,
    showOnListing: true,
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    lines: ["Oil & Gas"],
    image: "/images/industries/industry-5.png",
    imagePosition: "50% 46%",
    icon: "oil-gas",
    summary:
      "Robust upstream and downstream solutions for drilling muds, oily water, crude and petrochemical streams.",
    intro:
      "From onshore and offshore production to petrochemical transfer and reinjection, our pumps are configured for viscous fluids, remote locations and demanding duty cycles.",
    applicationGroups: [
      {
        title: "Upstream",
        items: ["On and offshore oil production"],
      },
      {
        title: "Downstream",
        items: ["Oil transfer", "Petrochemical and reinjection and similar"],
      },
    ],
    featuredOnHome: true,
    showOnListing: true,
  },
  {
    slug: "namkeen-manufacturing",
    name: "Namkeen Manufacturing",
    lines: ["Namkeen", "Manufacturing"],
    image: "/images/industries/industry-6.png",
    imagePosition: "50% 58%",
    icon: "namkeen",
    summary:
      "Purpose-built extrusion and transfer for bhujia, soya sticks, papdi, ghatiya and other savoury snacks.",
    intro:
      "Our extrusion systems and pumps support the consistent production of a wide range of savoury snacks, from bhujia and soya sticks to papdi, ghatiya and chana dal.",
    applicationGroups: [
      {
        items: [
          "Bhujia",
          "Soya sticks",
          "Papdi",
          "Ghatiya",
          "Bhawangri",
          "Peanuts",
          "Roasted matar",
          "Chana dal and similar",
        ],
      },
    ],
    featuredOnHome: true,
    showOnListing: true,
  },
  {
    slug: "mineral-cement-construction",
    name: "Mineral, Cement & Construction",
    lines: ["Mineral, Cement", "& Construction"],
    image: "/images/industries/industry-7.jpg",
    imagePosition: "50% 55%",
    icon: "mineral",
    summary:
      "Abrasive-duty pumping for mineral processing, cement, aggregates and construction slurries.",
    intro:
      "Mining, cement and construction processes involve abrasive slurries, high solids and tough operating conditions. Pumps are configured for reliable transfer where wear and uptime matter.",
    applicationGroups: [
      {
        items: [
          "Mineral processing",
          "Cement production",
          "Construction materials",
          "Mining and smelting",
          "Aggregates and slurries",
        ],
      },
    ],
    featuredOnHome: false,
    showOnListing: true,
  },
  {
    slug: "textile-other-process-industries",
    name: "Textile & Other Process Industries",
    lines: ["Textile &", "Other Process Industries"],
    image: "/images/industries/industry-8.jpg",
    imagePosition: "50% 50%",
    icon: "textile",
    summary:
      "Reliable process pumping for textiles, leather, coatings, ceramics and other demanding applications.",
    intro:
      "Textile, leather, coating and ceramics processes involve viscous, aggressive and shear-sensitive fluids. We configure each pump around the fluid, the process and the operating environment.",
    applicationGroups: [
      {
        items: [
          "Textiles",
          "Leather and tanneries",
          "Paint and varnish",
          "Ceramics and glass",
          "Other process industries",
        ],
      },
    ],
    featuredOnHome: false,
    showOnListing: true,
  },
  {
    slug: "dosing-technology",
    name: "Dosing Technology",
    lines: ["Dosing", "Technology"],
    image: "/images/industries/industry-dosing.jpg",
    imagePosition: "50% 50%",
    icon: "dosing",
    summary:
      "Precise, repeatable dosing for automotive, food, electrical, renewable energy, pharmaceutical and bonding applications.",
    intro:
      "Accurate, repeatable dosing for automotive, food, electrical, renewable energy, pharmaceutical and bonding and sealing applications. Each system is matched to the medium, the dose and the production rhythm.",
    applicationGroups: [
      {
        items: [
          "Cars, trains, planes and ship construction",
          "Food",
          "Electrical",
          "Renewable energies",
          "Pharmacy",
          "Bonding and sealing and similar",
        ],
      },
    ],
    featuredOnHome: false,
    showOnListing: false,
  },
];

export const listingIndustries = industries.filter(
  (industry) => industry.showOnListing,
);

export const featuredIndustries = industries.filter(
  (industry) => industry.featuredOnHome,
);

export const applicationCapabilities = [
  "High solid contents or free of solids",
  "Low to high viscosity",
  "Thixotropic and dilatant (pumping fluid with changing viscosities)",
  "Shear sensitive",
  "Abrasive",
  "Lubricating and non-lubricating",
  "Aggressive (pH 0–14)",
  "Adhesive",
  "Toxic",
] as const;

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
