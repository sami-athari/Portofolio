import Link from 'next/link';
import { FaYoutube, FaGithub, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Name */}
          <div className="text-lg font-semibold">
            © {new Date().getFullYear()} Sami Athari Z.
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap space-x-6 my-4 md:my-0">
            <li>
              <Link href="/" className="hover:text-pink-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-pink-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="hover:text-pink-400 transition">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-pink-400 transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="mt-4 flex justify-center lg:justify-start space-x-8 text-3xl">
            <a
              href="https://youtube.com/@samiediting18?si=AogZaID3V184WIXo"
              aria-label="YouTube"
              className="hover:text-blue-400 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://github.com/sami-athari"
              aria-label="GitHub"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/samimuancap/profilecard/?igsh=aG9tY3g5N2RneDZy"
              aria-label="Instagram"
              className="hover:text-blue-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
