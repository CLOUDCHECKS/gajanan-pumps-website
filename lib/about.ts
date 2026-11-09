export type AboutIcon =
  | "target"
  | "handshake"
  | "award"
  | "factory"
  | "cog"
  | "shield-check"
  | "earth"
  | "calendar-clock"
  | "badge-check"
  | "layers"
  | "lightbulb"
  | "spline"
  | "hard-hat"
  | "positive-displacement"
  | "self-priming"
  | "uniform-flow"
  | "non-clogging"
  | "reversible"
  | "low-npsh"
  | "low-velocity"
  | "viscosity";

export const aboutHero = {
  eyebrow: "About Us",
  titleLineOne: "Engineering Progress.",
  titleLineTwoPrefix: "Moving",
  titleLineTwoHighlight: "Fluids Positively.",
  intro:
    "For more than two decades, Gajanan Pumps has been manufacturing positive displacement pumps, delivering reliable and efficient fluid-handling solutions across diverse industries worldwide.",
  pumpAlt:
    "Gajanan progressive cavity pump with cutaway rotor and golden fluid flow",
};

export const whoWeAre = {
  title: "Who We Are",
  intro:
    "For more than two decades, Gajanan Pumps has manufactured positive displacement pumps worldwide. In 2002, the Gajanan Pumps group acquired license to manufacture and distribute progressive cavity pumps.",
  points: [
    {
      icon: "target" as AboutIcon,
      title: "Our Focus",
      description:
        "Design, manufacture and supply of robust progressive cavity pumps and fluid handling solutions.",
    },
    {
      icon: "handshake" as AboutIcon,
      title: "Our Approach",
      description:
        "A partner from project planning through case management to complete service concepts.",
    },
    {
      icon: "award" as AboutIcon,
      title: "Our Commitment",
      description:
        "Reliable, efficient and long-lasting performance for demanding applications across industries.",
    },
  ],
  trustedSince: "Trusted Since",
  years: "20+",
  yearsLabel: "Years",
  signals: [
    {
      icon: "factory" as AboutIcon,
      label: "In-house Manufacturing",
    },
    {
      icon: "cog" as AboutIcon,
      label: "Engineering Expertise",
    },
    {
      icon: "shield-check" as AboutIcon,
      label: "Certified Quality",
      sublabel: "(DIN EN ISO 9001)",
    },
    {
      icon: "earth" as AboutIcon,
      label: "Global Reach",
    },
  ],
};

export const ourStory = {
  intro:
    "Established with a vision to provide robust and application-specific pumping solutions, Gajanan Pumps & Systems has grown into a trusted manufacturer of progressive cavity pumps. In 2002, the Gajanan Pumps group acquired the license to manufacture and distribute progressive cavity pumps, strengthening our technology foundation and global reach.",
  video: {
    image: "/images/about/manufacturing.jpg",
    imageAlt: "Precision CNC machining of a metal component",
    title: "Inside Our Manufacturing",
    duration: "02:48",
    posterLabel: "Manufacturing film",
  },
  trust: [
    { icon: "calendar-clock" as AboutIcon, label: "20+ Years", sublabel: "of Expertise" },
    { icon: "factory" as AboutIcon, label: "In-House", sublabel: "Manufacturing" },
    {
      icon: "badge-check" as AboutIcon,
      label: "DIN EN ISO 9001",
      sublabel: "Quality System",
    },
    {
      icon: "earth" as AboutIcon,
      label: "Domestic &",
      sublabel: "International Presence",
    },
  ],
};

export const ourApproach = {
  panelTitle: "Why Choose Gajanan?",
  intro:
    "We don’t see ourselves only as a developer and manufacturer, but as your partner from project planning through case management to complete service concepts.",
  features: [
    {
      icon: "cog" as AboutIcon,
      title: "Engineering Expertise",
      description: "Application-focused design and domain knowledge.",
    },
    {
      icon: "layers" as AboutIcon,
      title: "Quality at Every Stage",
      description: "Stringent manufacturing practices with careful inspection.",
    },
    {
      icon: "handshake" as AboutIcon,
      title: "Reliable Partnership",
      description: "Responsive support and application guidance.",
    },
    {
      icon: "lightbulb" as AboutIcon,
      title: "Continuous Innovation",
      description:
        "High-quality, globally valued products with ongoing developments and patents.",
    },
  ],
};

export const ourTechnology = {
  intro:
    "Single-screw progressive cavity pump technology for continuous, low-pulsation and accurate fluid transfer.",
  characteristics: [
    {
      icon: "positive-displacement" as AboutIcon,
      title: "Positive Displacement",
      description: "Head independent of speed",
    },
    {
      icon: "self-priming" as AboutIcon,
      title: "Self-Priming",
      description: "Can handle high percentage of air with liquid",
    },
    {
      icon: "uniform-flow" as AboutIcon,
      title: "Uniform Flow",
      description:
        "Metered, low pulsation – ideal for shear-sensitive fluids",
    },
    {
      icon: "non-clogging" as AboutIcon,
      title: "Non-Clogging",
      description: "Handles fluids with high solids content",
    },
    {
      icon: "reversible" as AboutIcon,
      title: "Reversible",
      description:
        "Suction & delivery can be interchanged by changing rotation",
    },
    {
      icon: "low-npsh" as AboutIcon,
      title: "Low NPSH(R)",
      description: "Suction capacity up to 8.4 meters",
    },
    {
      icon: "low-velocity" as AboutIcon,
      title: "Low Internal Velocity",
      description: "Negligible turbulence or agitation",
    },
    {
      icon: "viscosity" as AboutIcon,
      title: "Wide Viscosity Range",
      description: "Suitable for thin to highly viscous fluids",
    },
  ],
};

export const ourJourney = {
  milestones: [
    {
      year: "2002",
      description:
        "Acquired licence to manufacture and distribute progressive cavity pumps",
    },
    {
      year: "20+ Years",
      description:
        "Continuous innovation, product expansion and market leadership",
    },
    {
      year: "Today",
      description:
        "A complete fluid-handling partner with in-house design, manufacturing and end-to-end support",
    },
  ],
  strengths: [
    {
      icon: "factory" as AboutIcon,
      title: "Precision",
      subtitle: "Machining",
    },
    {
      icon: "spline" as AboutIcon,
      title: "Rotor & Stator",
      subtitle: "Manufacturing",
    },
    {
      icon: "layers" as AboutIcon,
      title: "Material Options",
      subtitle: "(Cast Iron, Stainless Steel & Special Materials)",
    },
    {
      icon: "hard-hat" as AboutIcon,
      title: "Skilled &",
      subtitle: "Experienced Team",
    },
  ],
};
