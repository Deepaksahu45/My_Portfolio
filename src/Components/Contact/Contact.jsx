import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  // EmailJS credentials
  const serviceID = "service_nxnbx7u";
  const templateID = "template_w618rmh";
  const publicKey = "ucC6QWvBFXYV2Qzfs";

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            theme: document.documentElement.classList.contains("dark")
              ? "dark"
              : "light",
          });
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast.error("Failed to send message. Please try again.", {
            theme: document.documentElement.classList.contains("dark")
              ? "dark"
              : "light",
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] 
                 bg-skills-gradient dark:bg-[#050414]"
    >
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />

      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          CONTACT
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or
          questions!
        </p>
      </div>

      {/* Contact Form */}
      <div
        className="mt-8 w-full max-w-md border border-gray-200 dark:border-white/10 
                      bg-white/70 dark:bg-white/5 backdrop-blur-md p-6 rounded-lg 
                      shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
          Connect With Me
        </h3>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-[#131025] 
                       text-gray-900 dark:text-white border border-gray-300 
                       dark:border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-[#131025] 
                       text-gray-900 dark:text-white border border-gray-300 
                       dark:border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-[#131025] 
                       text-gray-900 dark:text-white border border-gray-300 
                       dark:border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-[#131025] 
                       text-gray-900 dark:text-white border border-gray-300 
                       dark:border-gray-600 focus:outline-none focus:border-purple-500"
          ></textarea>
          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 
                       py-3 text-white font-semibold rounded-md transition 
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
