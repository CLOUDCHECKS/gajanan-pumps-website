import Image from "next/image";
import { cn } from "@/lib/utils";

type LaurelWreathProps = {
  className?: string;
};

/**
 * Gold laurel frame used behind the "20+ years" trust marker.
 * The artwork is a transparent PNG so it stays crisp on the white panel.
 */
export function LaurelWreath({ className }: LaurelWreathProps) {
  return (
    <Image
      src="/images/about/laurel-wreath.png"
      alt=""
      aria-hidden="true"
      width={1200}
      height={663}
      sizes="(min-width: 1024px) 330px, 80vw"
      className={cn("object-contain", className)}
    />
  );
}
