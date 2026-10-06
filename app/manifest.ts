const APP_NAME = "Second Brain";
const APP_DESCRIPTION = "Capture notes, ideas, and thoughts in one simple iPhone-friendly workspace.";

const manifest = {
  name: APP_NAME,
  short_name: "SecondBrain",
  description: APP_DESCRIPTION,
  start_url: "/",
  display: "standalone",
  background_color: "#f5f5f4",
  theme_color: "#2563eb",
  icons: [{
    src: "/icon.svg",
    sizes: "any",
    type: "image/svg+xml",
    purpose: "any maskable"
  }]
};

export default function manifestJson() {
  return JSON.stringify(manifest, null, 2);
}
