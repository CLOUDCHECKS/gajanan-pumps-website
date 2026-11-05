import type { IndustryIcon } from "@/lib/industries";

type IconProps = {
  className?: string;
};

function DerrickIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 21h18M6.5 21 12 3l5.5 18M8.4 12h7.2M9.6 7.5h4.8M10.6 16.5h2.8" />
      <path d="M3 8h3M4.5 5.5V8M18 10h3M19.5 10V7.5" />
    </svg>
  );
}

function ExtruderIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 3h8l-1.4 4H9.4L8 3Z" />
      <path d="M9.4 7h5.2l1.9 3.2H7.5L9.4 7Z" />
      <path d="M7.5 10.2h9v4.3h-9z" />
      <path d="M16.5 12h3.2M16.5 14h2.4" />
      <circle cx="10" cy="12.3" r=".6" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12.3" r=".6" fill="currentColor" stroke="none" />
      <circle cx="14" cy="12.3" r=".6" fill="currentColor" stroke="none" />
      <path d="M9 14.5v3.2M12 14.5v2.4M15 14.5v3.2" />
    </svg>
  );
}

export function IndustryGlyph({
  icon,
  className = "h-6 w-6",
}: {
  icon: IndustryIcon;
  className?: string;
}) {
  switch (icon) {
    case "environment":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M12 21.5c3.7-3.1 6-6.6 6-10.1A6 6 0 0 0 6 11.4c0 3.5 2.3 7 6 10.1Z" />
          <path d="M12 18c-2.2-1.7-3.5-3.5-4-5.6 2.4-.2 4 .7 4 5.6Zm.4-3.1c1.8-1.2 3-2.6 3.4-4.4-2.2-.1-3.4 1-3.4 4.4Z" />
        </svg>
      );
    case "chemical":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M3 21V9l5 2.5V9l5 2.5V9l5 2.5V21H3Z" />
          <path d="M3 21h18M18 21v-8h3v8M6 17h1.5M11 17h1.5" />
          <path d="M6.5 6.5V3M11 5V3M15.5 6V3" />
        </svg>
      );
    case "food":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M9 3h6M10 3v6.2L5.8 17a2.5 2.5 0 0 0 2.2 3.7h8a2.5 2.5 0 0 0 2.2-3.7L14 9.2V3" />
          <path d="M7.4 14h9.2M9 17.5h.01M12 18.5h.01M14.8 17h.01" />
        </svg>
      );
    case "oil-seed":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M12 2.8S5.8 9.5 5.8 14.4a6.2 6.2 0 0 0 12.4 0C18.2 9.5 12 2.8 12 2.8Z" />
          <path d="M8.8 15.2c1.2 1.6 2.6 2.4 4.2 2.4" />
        </svg>
      );
    case "oil-gas":
      return <DerrickIcon className={className} />;
    case "namkeen":
      return <ExtruderIcon className={className} />;
  }
}
