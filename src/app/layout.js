import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio | Zayyan Mustafa",
  description: "Portfolio website for Zayyan Mustafa, a Front-End Developer.",
  image: "/portfolio.png",
  url: "https://zayyanmustafa.vercel.app/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} select-none antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
