// app/components/Header.tsx
'use client';

import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { FaYoutube, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center px-4 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-between space-y-8 lg:space-y-0">
        
        {/* Left Section - Image */}
        <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-start lg:ml-auto">
          <div className="rounded-full bg-gradient-to-r from-gray-800 via-blue-800 to-blue-500 p-1 animate-blob">
            <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden p-1">
              <Image
                src="/samiAi.png"
                alt="Profile"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            SAMI ATHARI Z
            <br />
            <span className="text-blue-400">I AM A </span>
            <span style={{ color: 'rgb(15, 76, 117)' }}>
              <Typewriter
                words={[ 'EDITOR', 'DESIGNER', 'DEVELOPER']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-base sm:text-lg mb-8">I AM FROM SMKN 21 JAKARTA</p>
          <div className="space-x-2 sm:space-x-4 mb-4">
          <button className="text-zinc-50 hover:text-blue-400 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(166,162,162,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-blue-300 duration-700">
  Contact Me
</button>


            <a
              href="#portfolio"
              className="px-4 py-1 sm:px5 sm:py-2.5 bg-transparent border border-white rounded-md hover:bg-white hover:text-blue-900 transition text-sm sm:text-base"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-4 flex justify-center lg:justify-start space-x-6 sm:space-x-8 text-2xl sm:text-3xl">
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
          </div>
        </div>

      </div>
    </header>
  );
}
