import {
  Activity,
  ArrowUpFromLine,
  Award,
  BadgeCheck,
  CalendarClock,
  CircleDot,
  Cog,
  Droplet,
  Droplets,
  Earth,
  Factory,
  Gauge,
  Handshake,
  HardHat,
  Layers,
  Lightbulb,
  RefreshCw,
  ShieldCheck,
  Spline,
  Target,
  Waves,
} from "lucide-react";
import type { AboutIcon } from "@/lib/about";

const iconMap: Record<AboutIcon, typeof Target> = {
  target: Target,
  handshake: Handshake,
  award: Award,
  factory: Factory,
  cog: Cog,
  "shield-check": ShieldCheck,
  earth: Earth,
  "calendar-clock": CalendarClock,
  "badge-check": BadgeCheck,
  layers: Layers,
  lightbulb: Lightbulb,
  spline: Spline,
  "hard-hat": HardHat,
  "positive-displacement": Gauge,
  "self-priming": ArrowUpFromLine,
  "uniform-flow": Waves,
  "non-clogging": CircleDot,
  reversible: RefreshCw,
  "low-npsh": Droplet,
  "low-velocity": Activity,
  viscosity: Droplets,
};

type AboutGlyphProps = {
  icon: AboutIcon;
  className?: string;
  strokeWidth?: number;
};

export function AboutGlyph({
  icon,
  className,
  strokeWidth = 1.6,
}: AboutGlyphProps) {
  const Icon = iconMap[icon];
  return (
    <Icon className={className} strokeWidth={strokeWidth} aria-hidden="true" />
  );
}
