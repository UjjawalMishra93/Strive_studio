import { Outfit, Syne } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "../context/ModalContext";
import ProjectModal from "../components/ProjectModal";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata = {
  title: "Strive Studio - Building Bold Brands",
  description: "Strive Studio is a collection of dreamers, doers, and creators obsessed with building digital experiences that defy the ordinary.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable}`}>
      <body>
        <ModalProvider>
          <ProjectModal />
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
