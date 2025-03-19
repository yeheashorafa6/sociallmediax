import QueryProvider from "@/Providers/QueryProviders";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "L.com",
  description: "Next.js social media application",
};

export default function AppLayout({
  children,
}) {
  return (
    <ClerkProvider>
      <QueryProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </QueryProvider>
    </ClerkProvider>
  );
}