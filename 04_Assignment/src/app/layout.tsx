import "./globals.css";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <Hero />
        <main>{children}</main>
      </body>
    </html>
  );
}
