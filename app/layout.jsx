import { Playfair } from "next/font/google";
import "./globals.css";

// Component
import Navbar from "@/components/Navbar";
const playfair = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "D.O.N Oscar",
  description: "Fabricación y Remodelación de Muebles, Cocinas, Vestier, Dormitorios y Mucho Más!! Todo a Medida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
