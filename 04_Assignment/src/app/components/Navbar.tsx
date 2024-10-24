import Link from "next/link";

const NavBar: React.FC = () => (
  <nav>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/contact">Contact</Link>
  </nav>
);

export default NavBar;
