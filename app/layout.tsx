import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SlackMeet – Turn Slack Threads into Calendar Meetings",
  description: "Detects when Slack conversations need a meeting and auto-suggests calendar times based on participant availability."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e38395aa-2b35-46ed-8c88-20a8ac331242"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
