// app/components/Header.tsx
'use client';

import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { FaYoutube, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 lg:px-8">
        
        {/* Right Section - Image */}
        <div className="relative lg:w-1/2 lg:mt-0 mt-8 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="rounded-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 p-1">
            <div className="rounded-full overflow-hidden p-1 ">
              <Image
                src="/assets/profile.jpg"
                alt="Profile"
                width={400}
                height={400}
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Left Section */}
        <div className="text-center lg:text-left lg:w-1/2 order-2 lg:order-1">
          <h1 className="text-6xl font-bold mb-4">
            SAMI ATHARI Z
            <br />
            <span className="text-blue-400">I AM A </span>
            <span style={{ color: 'rgb(15, 76, 117)' }}>
              <Typewriter
                words={['PHOTOGRAPHER!', 'EDITOR!', 'DESIGNER!', 'DEVELOPER!']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-lg mb-8">I AM FROM SMKN 21 JAKARTA</p>
          <div className="space-x-4 mb-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-400 to-gray-800 rounded-full shadow-lg"
            >
              Contact me
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3 bg-transparent border border-white rounded-full hover:bg-white hover:text-purple-900 transition"
            >
              My Portfolio
            </a>
          </div>

          {/* Social Icons */}
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
              href="https://instagram.com/"
              aria-label="Instagram"
              className="hover:text-blue-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}
