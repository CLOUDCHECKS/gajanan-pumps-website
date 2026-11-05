import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Gajanan Pumps & Systems — home"
      className={cn(
        "inline-flex shrink-0 items-center rounded-sm focus-visible:ring-offset-navy-900",
        className,
      )}
    >
      <Image
        src="/images/logo.png"
        alt="Gajanan Pumps & Systems"
        width={687}
        height={216}
        priority={priority}
        className="h-[50px] w-auto xl:h-[70px]"
      />
    </Link>
  );
}
