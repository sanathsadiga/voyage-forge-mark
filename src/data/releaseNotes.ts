export type ReleaseNote = {
  title: string;
  slug: string;
  version: string;
  date: string; // YYYY-MM-DD or human readable
  short: string;
  content: string; // HTML or markdown string (rendered as HTML)
  image?: string; // path under /public
};

// Add entries here. To add a new release note:
// 1. Put the feature image under `public/images/release-notes/your-image.jpg`.
// 2. Add a new object to the `releaseNotes` array with a unique `slug`.
// 3. Deploy — the static listing and pages will pick it up automatically.

export const releaseNotes: ReleaseNote[] = [
  {
    title: "Section Style Editor",
    slug: "section-style-editor",
    version: "v1.1.0",
    date: "2025-11-22",
    short:
      "A new editor is available to update the visual styling of each section — background, text size and colors.",
    content: `
      <p>
        The Section Style Editor (v1.1.0) introduces a visual editor that lets you update the visual styling of each section on your site. Change background colors or images, adjust text size, and choose text colors to better match your brand without writing CSS.
      </p>
      <br />
      <p>
        This release focuses on usability - we added presets for commonly-used styles and live preview while editing.
      </p>
      <p><strong>How to use:</strong></p>
      <ul class="list-disc pl-6">
        <li>Open any page in the editor and select a section.</li>
        <li>Use the "Style" panel to pick a background, set text sizes, and choose colors.</li>
        <li>Apply presets or create your own. Save to publish immediately.</li>
      </ul>
    `,
    image: "/images/release-notes/Section color change.png",
  },
  {
    title: "Enhanced toast messages",
    slug: "enhanced-toast-messages",
    version: "v1.0.1",
    date: "2025-11-22",
    short:
      "Redesigned toast notifications with new status-based colors for clearer success, info, and error feedback.",
    content: `
      <p>
        Toast notifications have been redesigned to make status and urgency clearer at a glance. New status-based colors (success, info, warning, error) and animations improve feedback for background actions like saving content or publishing changes.
      </p>
      <p>
        <strong>Why it helps:</strong> users get immediate, clear feedback on actions which reduces confusion and improves perceived performance.
      </p>
    `,
    image: "/images/release-notes/enhanced-toast-messages.jpg",
  },
];

export function findReleaseBySlug(slug: string) {
  return releaseNotes.find((r) => r.slug === slug) || null;
}
