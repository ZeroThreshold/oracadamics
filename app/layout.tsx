import { GeistSans } from "geist/font/sans";
import "./globals.css";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import Header from "@/components/Header";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <Header />
        <main className="min-h-screen flex flex-col items-center">
          <div className="flex-1 w-full flex flex-col gap-20 items-center">
            {children}
            <AppFooter />
          </div>
        </main>
      </body>
    </html>
  );
}
