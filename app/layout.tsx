export const metadata = {
  title: "Second Brain",
  description: "Capture notes, ideas, and thoughts in one simple iPhone-friendly workspace.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Second Brain",
    statusBarStyle: "default",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
