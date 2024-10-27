/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: (e.target as HTMLFormElement).email.value,
      subject: (e.target as HTMLFormElement).subject.value,
      message: (e.target as HTMLFormElement).message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    // Mock submission
    setEmailSubmitted(true);
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="contact"
      className="grid md:grid-cols-2 my-12 py-24 px-8"
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the section is in view
    >
      <motion.div className="flex flex-col justify-center items-start text-white pl-5" variants={sectionVariants}>
        <h5 className="text-xl font-bold mb-4">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-6 max-w-md">
        I&apos;m open to new opportunities! Whether you have a question or just want to say hello, I&apos;ll do my best to respond promptly.
        </p>
      </motion.div>
      <motion.div
  className="relative w-full max-w-md mx-auto p-6 border-none rounded-lg shadow-md form-container"
  variants={sectionVariants}
  whileHover={{ scale: 1.05 }} // Add this for zoom on hover
  transition={{ duration: 0.05 }} // Smooth transition
>
  <div className="rainbow-border"></div> {/* Rainbow border */}
  <div className="w-full max-w-md mx-auto p-6 bg-[#232427] border border-[#33353F] rounded-lg shadow-md relative z-10">
    {emailSubmitted ? (
      <motion.p
        className="text-green-500 text-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Email sent successfully!
      </motion.p>
    ) : (
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="text-white block mb-2 text-sm font-medium"
          >
            Your email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            required
            className="bg-[#232427] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="your@gmail.com"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="text-white block mb-2 text-sm font-medium"
          >
            Subject
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            required
            className="bg-[#232427] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Just saying hi"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="text-white block mb-2 text-sm font-medium"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            className="bg-[#232427] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Let's talk about..."
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="bg-zinc-600 hover:bg-zinc-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
        >
          Send Message
        </button>
      </form>
    )}
  </div>
</motion.div>

    </motion.section>
  );
};

export default EmailSection;
