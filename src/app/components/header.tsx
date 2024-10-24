'use client';

import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { FaYoutube, FaGithub, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center px-4 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-between space-y-8 lg:space-y-0">
        
        {/* Left Section - Image */}
        <motion.div
          className="relative w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-start lg:ml-auto"
          initial={{ opacity: 0, x: 100 }} // Starting point (off-screen to the right)
          whileInView={{ opacity: 1, x: 0 }} // Animate to normal position
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="rounded-full bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-400 p-1 animate-blob">
            <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden p-1 group">
              <Image
                src="/samiAi.png"
                alt="Profile"
                width={400}
                height={400}
                className="object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="text-center lg:text-left w-full lg:w-1/2"
          initial={{ opacity: 0, x: -100 }} // Slide in from the left
          whileInView={{ opacity: 1, x: 0 }} // Slide to the normal position
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-zinc-50">
            SAMI ATHARI Z
            <br />
            <span className="text-zinc-400">I AM A </span>
            <span className="bg-gradient-to-r from-gray-400 via-zinc-600 to-zinc-900 text-transparent bg-clip-text">
              <Typewriter
                words={['EDITOR', 'DESIGNER', 'DEVELOPER']}
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
            <motion.button
              className="text-zinc-50 hover:text-zinc-50 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(255,255,255,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-50 duration-700"
              whileHover={{ scale: 1.05 }} // Slight scale up on hover
              whileTap={{ scale: 0.95 }} // Shrink a little when clicked
            >
              Contact Me
            </motion.button>

            <motion.a
              href="#portfolio"
              className="px-4 py-2.5 sm:px2.5 sm:py-2.5 bg-transparent border border-white rounded-md hover:bg-white hover:text-zinc-900 transition text-sm sm:text-base"
              whileHover={{ scale: 1.05 }} // Slight scale up on hover
              whileTap={{ scale: 0.95 }} // Shrink a little when clicked
            >
              Download CV
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="mt-4 flex justify-center lg:justify-start space-x-6 sm:space-x-8 text-2xl sm:text-3xl">
            <motion.a
              href="https://youtube.com/@samiediting18?si=AogZaID3V184WIXo"
              aria-label="YouTube"
              className="hover:text-red-700 transition"
              whileHover={{ scale: 1.2 }} // Scale up on hover
              transition={{ duration: 0.3 }}
            >
              <FaYoutube />
            </motion.a>
            <motion.a
              href="https://github.com/sami-athari"
              aria-label="GitHub"
              className="hover:text-gray-700 transition"
              whileHover={{ scale: 1.2 }} // Scale up on hover
              transition={{ duration: 0.3 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/samimuancap/profilecard/?igsh=aG9tY3g5N2RneDZy"
              aria-label="Instagram"
              className="hover:text-pink-500 transition"
              whileHover={{ scale: 1.2 }} // Scale up on hover
              transition={{ duration:   0.3 }}
            >
              <FaInstagram />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </header>
  );
}
