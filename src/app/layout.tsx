import type { Metadata } from "next";
import { kurdish_sans } from "@/ui/fonts";
import "./globals.css";
import TabBar from "@/ui/tab-bar";


export const metadata: Metadata = {
  title: "kabook-demo",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kurdish_sans.className}>
        <main dir="rtl" className="flex w-full min-h-screen flex-col md:flex-row">
          <div className="flex flex-col">
            <TabBar />
          </div>
          <div className="flex flex-col w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
