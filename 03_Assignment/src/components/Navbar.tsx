import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          Nasir
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-white">
            Services
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          {/* Add a mobile menu icon here if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
