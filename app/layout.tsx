import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Preloader from "@/components/common/Preloader";
import ScrollToTop from "@/components/common/ScrollToTop";

export const metadata = {
  title: "Naval Srijan",
  description: "Luxury Interior Design Studio | Transforming Spaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] min-h-screen w-screen overflow-x-hidden flex flex-col">
        {/* Preloader Component */}
        <Preloader />

        <Navbar />

        <main className="flex-1 pt-20 w-screen overflow-hidden">
          {children}
        </main>

        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
