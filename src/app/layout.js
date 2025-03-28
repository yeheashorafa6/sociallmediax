import QueryProvider from "@/Providers/QueryProviders";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "L.com",
  description: "Next.js social media application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <QueryProvider>
            {children}
          </QueryProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}