import { Geist } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

const defaultUrl = process.env.NEXT_PUBLIC_APP_URL
  ? `https://` + process.env.NEXT_PUBLIC_APP_URL
  : "";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "MovieBarn - Movie & TV Show Discovery",
  description: "Your favorite movie collection and discovery app. Search from thousands of titles from TMDB and OMDB.",
  openGraph: {
    title: "MovieBarn - Movie & TV Show Discovery",
    description: "Your favorite movie collection and discovery app.",
    url: defaultUrl,
    siteName: 'MovieBarn',
    images: [
      {
        url: '/images/og-image.svg', // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MovieBarn - Movie & TV Show Discovery',
    description: 'Your favorite movie collection and discovery app.',
    // images: ['/twitter-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.className} min-h-screen flex flex-col text-black`}>
        <Header />
        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-brand-900 p-4 mt-auto">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} MovieBarn. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
