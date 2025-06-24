import { Geist } from "next/font/google";
import Header from "@/components/layout/Header";
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
