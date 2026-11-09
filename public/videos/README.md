# About page videos

Drop video files into this folder. They are picked up automatically at build
time and appear in the **Our Story** carousel on the About page.

## Supported formats

- `.mp4` (recommended — H.264 + AAC for the widest browser support)
- `.webm`
- `.ogv` / `.ogg`
- `.m4v`

## Naming

- Files play in filename order. Use a numeric prefix to control the order:
  `01-inside-our-plant.mp4`, `02-rotor-machining.mp4`, `03-final-assembly.mp4`.
- The filename becomes the film title. Hyphens and underscores become spaces,
  and leading numbers are removed automatically.

## Optional poster image

Add an image with the same base name next to the video to set the preview frame:

```
01-inside-our-plant.mp4
01-inside-our-plant.jpg
```

Supported poster formats: `.jpg`, `.jpeg`, `.png`, `.webp`.

## Notes

- The folder is read during `next build`, so redeploy the site after adding or
  removing a video.
- Keep file sizes reasonable — large videos increase page weight. Aim for
  1080p web-optimised MP4 files under ~30 MB each.
- Do not delete this README; the folder must exist for the build.
