import type { Metadata, Viewport } from "next"; 
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  variable: "--font-sans", 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Birthday! 🎂",
  description: "A special digital gift for a special person.",
};


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}