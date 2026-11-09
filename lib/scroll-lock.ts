let lockCount = 0;
let originalBodyOverflow = "";
let originalHtmlOverflow = "";

type ScrollLockRelease = () => void;

/**
 * Shared body-scroll lock for stacked overlays.
 *
 * The enquiry modal can be opened from inside another dialog, so a simple
 * save-and-restore per component would unlock the page as soon as either
 * dialog closed. Counting the locks keeps the page fixed until the last
 * overlay has gone.
 */
export function lockBodyScroll(): ScrollLockRelease {
  if (typeof document === "undefined") return () => {};

  if (lockCount === 0) {
    originalBodyOverflow = document.body.style.overflow;
    originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }

  lockCount += 1;
  let released = false;

  return () => {
    if (released) return;
    released = true;
    lockCount = Math.max(0, lockCount - 1);

    if (lockCount === 0) {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    }
  };
}
