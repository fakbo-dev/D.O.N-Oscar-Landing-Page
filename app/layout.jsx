import { Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], variable: "--font-playfair", });

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"], variable: "--font-roboto", });

export const metadata = {
  title: "Don Oscar",
  description: "Carpintería/Ebanistería, Fabricación y Remodelación de Muebles, Cocinas, Vestier, Dormitorios y Mucho Más!! Todo a Medida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Maybe put bg-gray-200 in the body but for now i'm gonna deleted */}
      <body className={`${roboto.variable} ${playfair.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
