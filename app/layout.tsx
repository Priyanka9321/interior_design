import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Priyanka Interiors",
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
        <Navbar />
        <main className="flex-1 pt-24 w-screen overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
