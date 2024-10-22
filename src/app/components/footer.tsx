import Link from 'next/link';

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
          <div className="flex space-x-4">
            <Link
              href="https://github.com/sami-athari"
              aria-label="GitHub"
              className="hover:text-pink-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.6-1.2-1.6-.9-.7.1-.7.1-.7 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1 2.9.7.1-.6.4-1 .7-1.3-2.6-.3-5.4-1.3-5.4-5.7 0-1.2.4-2.1 1-2.9-.1-.2-.4-1.3.1-2.7 0 0 .8-.3 2.7 1 .8-.2 1.7-.3 2.6-.3.9 0 1.8.1 2.6.3 2-.1 2.7 1 2.7 1 .5 1.4.2 2.5.1 2.7.7.8 1 1.8 1 2.9 0 4.4-2.8 5.4-5.5 5.7.5.4.7 1.1.7 2.2v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z" />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-pink-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.119 2.5-2.5 2.5S0 4.881 0 3.5 1.119 1 2.5 1s2.5 1.119 2.5 2.5zM.5 8.5H5V24H.5V8.5zM8.499 8.5h4.045v2.119h.057c.563-.951 1.943-1.953 4.002-1.953C21.992 8.666 24 11.018 24 16.12V24h-4.5v-7.519c0-1.777-.031-4.063-2.477-4.063-2.479 0-2.854 1.938-2.854 3.94V24h-4.5V8.5z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
