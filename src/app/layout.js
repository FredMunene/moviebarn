import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "MovieBarn",
  description: "Your favorite movie collection app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.className} min-h-screen flex flex-col`}>
        <header className="bg-brand-900 text-white p-4">
          <nav className="container mx-auto flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              MovieBarn
            </Link>
            <ul className="flex gap-4">
              <li>
                <Link href="/movies" className="hover:text-brand-300">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-300">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>

        <footer className="bg-brand-900 text-black p-4 mt-auto">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} MovieBarn. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
