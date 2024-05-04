import { GeistSans } from "geist/font/sans";
import "./globals.css";
import AppFooter from "@/components/AppFooter";
import Header from "@/components/Header/Header";
import Notice from "@/components/Notice";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Home | Offroad Academy",
  description: "The fastest way to get on the track",
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
        <Notice />
        <main className="min-h-screen flex flex-col items-center">
          <div className="flex-1 w-full flex flex-col gap-20 items-center">
            {children}
          </div>
        </main>
        <AppFooter />
      </body>
    </html>
  );
}
