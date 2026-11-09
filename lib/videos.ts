import { promises as fs } from "node:fs";
import path from "node:path";

export type StoryVideoItem = {
  src: string;
  poster?: string;
  title: string;
  mimeType: string;
  fileName: string;
};

const VIDEO_TYPES: Record<string, string> = {
  ".mp4": "video/mp4",
  ".m4v": "video/mp4",
  ".webm": "video/webm",
  ".ogv": "video/ogg",
  ".ogg": "video/ogg",
};

const POSTER_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

function titleFromFileName(fileName: string) {
  const base = fileName
    .replace(/\.[^.]+$/, "")
    .replace(/^\d+[\s._-]*/, "")
    .replace(/[-_]+/g, " ")
    .trim();

  if (!base) return "Gajanan film";

  return base
    .split(/\s+/)
    .map((word) =>
      word.length <= 2
        ? word.toUpperCase()
        : `${word.charAt(0).toUpperCase()}${word.slice(1)}`,
    )
    .join(" ");
}

/**
 * Build-time discovery for the About page video carousel.
 *
 * Drop supported video files into `public/videos` and they appear in the
 * carousel in filename order. A still image with the same base name can be
 * used as the poster, e.g. `01-inside-our-plant.mp4` +
 * `01-inside-our-plant.jpg`.
 */
export async function getStoryVideos(): Promise<StoryVideoItem[]> {
  const directory = path.join(process.cwd(), "public", "videos");

  let entries: string[];
  try {
    entries = await fs.readdir(directory);
  } catch {
    return [];
  }

  const files = entries.filter((entry) => !entry.startsWith("."));
  const videoFiles = files
    .filter((entry) => {
      const extension = path.extname(entry).toLowerCase();
      return extension in VIDEO_TYPES;
    })
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }));

  return videoFiles.map((fileName) => {
    const extension = path.extname(fileName).toLowerCase();
    const baseName = path.basename(fileName, path.extname(fileName));
    const posterFile = files.find(
      (entry) =>
        path.basename(entry, path.extname(entry)) === baseName &&
        POSTER_EXTENSIONS.includes(path.extname(entry).toLowerCase()),
    );

    return {
      fileName,
      title: titleFromFileName(fileName),
      src: `/videos/${encodeURIComponent(fileName)}`,
      poster: posterFile
        ? `/videos/${encodeURIComponent(posterFile)}`
        : undefined,
      mimeType: VIDEO_TYPES[extension],
    };
  });
}
