'use client';

import { FaYoutube, FaGithub, FaInstagram, FaShareAlt } from 'react-icons/fa';

const Footer = () => {
  const sharePortfolio = () => {
    const shareData = {
      title: 'Check out my Portfolio',
      text: 'Hi! I wanted to share my portfolio with you. Take a look at my work!',
      url: 'https://your-portfolio-link.com', // Replace with your actual portfolio URL
    };

    try {
      navigator.share(shareData);
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <footer className="bg-[rgb(17,17,17)] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Name */}
          <div className="text-lg font-semibold">
            © {new Date().getFullYear()} Sami Athari Z.
          </div>

          {/* Social Media Icons */}
          <div className="mt-4 flex justify-center lg:justify-start space-x-8 text-3xl">
            <a
              href="https://youtube.com/@samiediting18?si=AogZaID3V184WIXo"
              aria-label="YouTube"
              className="hover:text-red-700 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://github.com/sami-athari"
              aria-label="GitHub"
              className="hover:text-gray-700 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/samimuancap/profilecard/?igsh=aG9tY3g5N2RneDZy"
              aria-label="Instagram"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            {/* Share Button */}
            <button
              onClick={sharePortfolio}
              aria-label="Share Portfolio"
              className="hover:text-zinc-500 transition flex items-center"
            >
              <FaShareAlt className="mr-2" />
              Share
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
