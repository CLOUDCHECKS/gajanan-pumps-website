export type EngineeringIcon =
  | "positive-displacement"
  | "self-priming"
  | "low-npsh"
  | "uniform-flow"
  | "non-clogging"
  | "reversible"
  | "low-velocity"
  | "simplicity"
  | "stuffing-box"
  | "mechanical-seal"
  | "joint"
  | "shield";

export type Characteristic = {
  title: string;
  description: string;
  icon: EngineeringIcon;
};

export type PerformanceRow = {
  label: string;
  value: string;
};

export type SelectionRow = {
  zone: string;
  velocity: string;
  abrasive: string;
  viscosity: string;
  media: string;
};

export const engineeringHero = {
  eyebrow: "Engineering",
  title: "Single-screw technology, matched to the duty.",
  intro:
    "Gajanan make single screw pumps convey many types of fluids in a continuous, low-pulsating manner while maintaining an accurate flow. Explore the characteristics, construction and selection guidance behind the range.",
};

export const engineeringStats = [
  { label: "Capacity", value: "150 m³/hr" },
  { label: "Pressure", value: "Up to 24 bar" },
  { label: "Viscosity", value: "1,00,000 cst" },
  { label: "Temperature", value: "120°C" },
] as const;

export const characteristics: Characteristic[] = [
  {
    title: "Positive Displacement",
    description:
      "Head developed is independent of speed, and capacity is approximately proportional to speed.",
    icon: "positive-displacement",
  },
  {
    title: "Self-Priming",
    description:
      "Inherently self-priming. Can work on snore — handling a high percentage of air with liquid.",
    icon: "self-priming",
  },
  {
    title: "Low NPSH (R)",
    description: "Suction capacity up to 8.4 metres.",
    icon: "low-npsh",
  },
  {
    title: "Uniform Flow",
    description:
      "Metered, uniform flow with minimal pulsation — avoiding the risk of damage to delicate, shear-sensitive products.",
    icon: "uniform-flow",
  },
  {
    title: "Non-Clogging",
    description:
      "Handles solids in suspension, including mixtures containing a high percentage of solids.",
    icon: "non-clogging",
  },
  {
    title: "Reversible",
    description:
      "Suction and delivery ends can be interchanged by merely changing the direction of rotation of the prime mover.",
    icon: "reversible",
  },
  {
    title: "Low Internal Velocity",
    description:
      "Negligible turbulence or agitation. Exceptionally low internal velocity reduces wear due to erosion and corrosion.",
    icon: "low-velocity",
  },
  {
    title: "Simplicity",
    description:
      "A single rotating element, no valves or gearing, and only one gland usually arranged on the suction side. Easy maintenance by semi-skilled labour.",
    icon: "simplicity",
  },
];

export const progressiveCavity = {
  eyebrow: "Progressive Cavity Pumps",
  title: "A continuous, sealed cavity from suction to discharge.",
  intro:
    "A single rotating element and a fixed stator form sealed cavities that move fluid continuously along the pump. The result is a gentle, low-pulsation transfer that suits viscous, abrasive, shear-sensitive and solid-laden media.",
  image: "/images/engineering/pump-cutaway.webp",
  imageAlt:
    "Cutaway of a progressive cavity pump showing the drain plug, stator, rotor, pump housing, O-ring, bearing housing and coupling rod",
  imageCaption:
    "Progressive cavity pump construction — rotor, stator, coupling rod, housing and bearing arrangement.",
  joint: {
    eyebrow: "Cardinal Joints",
    title: "Greater contact. Longer component life.",
    image: "/images/engineering/cardinal-joint.webp",
    imageAlt:
      "Cutaway of a progressive cavity pump with a Cardinal joint, showing rotor, stator, coupling rod, shaft seal unit, bearing and drive shaft",
    paragraphs: [
      "The Cardinal joint allows greater contact between load-bearing parts, resulting in a reduction of wear components. Greater freedom of angular movement allows a compact pump design. Maintenance, fitment or removal of joints is easy.",
      "Double articulated, sealed pin and bush joints ensure smooth power transmission and a longer service life of critical components — resistant to the lubricating media and the pumping media. Simple to maintain and economical too.",
    ],
    points: [
      "Greater load-bearing contact",
      "Compact pump design",
      "Easy joint fitment and removal",
      "Sealed pin and bush joints",
    ],
  },
};

export const shaftSealings = {
  eyebrow: "Shaft Sealings",
  title: "Two sealing approaches, one application focus.",
  intro:
    "The shaft sealing arrangement is selected to suit the fluid, the operating conditions and the maintenance approach. Both options are coaxially tightened between the pump body flange and the pump housing flange.",
  options: [
    {
      title: "Stuffing Box",
      icon: "stuffing-box" as EngineeringIcon,
      description:
        "Stuffing box type shaft sealing is coaxially tightened between the flange of the pump body and the pump housing flange, enabling a longer life of the gland packing.",
      emphasis: "Longer gland packing life",
    },
    {
      title: "Mechanical Seal",
      icon: "mechanical-seal" as EngineeringIcon,
      description:
        "Mechanical seal type sealing is coaxially tightened between the flange of the pump body and the pump housing flange. This type of sealing ensures zero leakage and a longer life of the pump body with maximum efficiency of the pump.",
      emphasis: "Zero-leakage sealing",
    },
  ],
};

export const performanceRows: PerformanceRow[] = [
  { label: "Capacity", value: "From a few ml to 350 m³/h" },
  { label: "Number of stages", value: "From 1 to 8" },
  { label: "Pressure", value: "From 6 to 60 bar" },
  { label: "Viscosity", value: "1 cst – 3 million cst" },
  { label: "Solid content", value: "Maximum particle size 25 mm" },
  { label: "Temperature", value: "4°C to 110°C" },
];

export const selectionRows: SelectionRow[] = [
  {
    zone: "Zone 1",
    velocity: "3 m/sec to 4 m/sec",
    abrasive: "Nil",
    viscosity: "0–2,500 cst",
    media:
      "Watery, lubricating media, thin oils, milk, clear acids and alkalis, alcohols, etc.",
  },
  {
    zone: "Zone 2",
    velocity: "1.5 m/sec to 3 m/sec",
    abrasive: "Light",
    viscosity: "250–1,000 cst",
    media:
      "Dirty water, molasses, paints, beer, bentonite, bilge water, amla pulp, etc.",
  },
  {
    zone: "Zone 3",
    velocity: "1 m/sec to 1.5 m/sec",
    abrasive: "Medium",
    viscosity: "1,000–50,000 cst",
    media:
      "Sewage sludges, mash, ice-cream, plastic dispersions, ceramic slurry, glues, soft yoghurt, etc.",
  },
  {
    zone: "Zone 4",
    velocity: "0.25 m/sec to 1 m/sec",
    abrasive: "Heavy",
    viscosity: "50,000–1,00,000 cst",
    media:
      "White wash, ceramic sludge, honey, cottage cheese, grease ointment, dry fruit mashes, whole cherries, unstoned plums, spent malt, almost dry filter cakes, paste paints, centrifugal discharge.",
  },
];
