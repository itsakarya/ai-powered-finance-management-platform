import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welth",
  description: "Ai Powered Finance management tool",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* header */}
        <Header />
        <main className="min-h-screen">{children}</main>
        {/* footer */}
        <footer className="bg-blue-100 py-10">
          <div className="container mx-auto px-4 text-center text-gray-500">
            Made with ❤️ by chill guy :)
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
