import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { MdConnectWithoutContact } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const data = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="text-blue-600" />,
    link: "https://www.linkedin.com/in/ahmad-ullah-36945b256/",
  },
  {
    name: "WhatsApp",
    icon: <IoLogoWhatsapp className="text-green-500" />,
    link: "https://wa.me/923003331124",
  },
  {
    name: "Facebook",
    icon: <FaFacebook className="text-blue-700" />,
    link: "https://www.facebook.com/ahmad.khan.380031",
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="text-pink-500" />,
    link: "https://www.instagram.com/ahmadsha.333/?next=%2F",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const controlsTitle = useAnimation();
  const controlsSocial = useAnimation();
  const controlsForm = useAnimation();

  const [refTitle, inViewTitle] = useInView({ triggerOnce: true });
  const [refSocial, inViewSocial] = useInView({ triggerOnce: true });
  const [refForm, inViewForm] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inViewTitle) controlsTitle.start({ opacity: 1, y: 0 });
    if (inViewSocial) controlsSocial.start({ opacity: 1, x: 0 });
    if (inViewForm) controlsForm.start({ opacity: 1, x: 0 });
  }, [controlsTitle, controlsSocial, controlsForm, inViewTitle, inViewSocial, inViewForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_0lxlxog";
    const templateID = "template_0d6b9ee";
    const userID = "ddC_87w8zYuZGCHPM";

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully. I will get back to you shortly.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#FCA61F",
          background: "#1F2937",
          color: "#FFFFFF",
        });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Failed to send message. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#FCA61F",
          background: "#1F2937",
          color: "#FFFFFF",
        });
      });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200 py-16 dark:bg-gray-900 px-6 overflow-x-hidden">
      {/* Title */}
      <motion.h2
        ref={refTitle}
        initial={{ opacity: 0, y: -60 }}
        animate={controlsTitle}
        transition={{ duration: 0.8 }}
        className="text-4xl flex items-center justify-center gap-3 font-extrabold font-sans mb-8 text-center bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent"
      >
        <MdConnectWithoutContact className="text-orange-500 font-extrabold text-4xl font-mono animate-bounce" />
        Contact Us
      </motion.h2>

      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-8 overflow-hidden">
        {/* Social Media Section */}
        <motion.div
          ref={refSocial}
          initial={{ opacity: 0, x: -100 }}
          animate={controlsSocial}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3 flex flex-col items-start space-y-4 px-8 py-6 bg-gray-800 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-4">
            Connect With Me
          </h2>
          {data.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-lg font-medium text-white transition transform hover:scale-105 hover:rotate-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">{item.icon}</span>
              <span>{item.name}</span>
            </motion.a>
          ))}
          <motion.a
            href="mailto:ahmadullahk543@gmail.com"
            className="flex items-center gap-4 text-lg font-medium text-white mt-2 hover:opacity-80 transition hover:rotate-2"
            whileHover={{ scale: 1.05 }}
          >
            <FaEnvelope className="text-red-500 text-2xl" />
            <span>ahmadullahk543@gmail.com</span>
          </motion.a>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          ref={refForm}
          initial={{ opacity: 0, x: 100 }}
          animate={controlsForm}
          transition={{ duration: 0.8 }}
          className="w-full md:w-2/3 bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold font-sans text-center mb-6 bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name*"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg font-mono dark:bg-gray-600 bg-gray-200 border-yellow-500 dark:text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg font-mono dark:bg-gray-600 bg-gray-200 border-yellow-500 dark:text-white"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Mobile No."
              value={formData.phone}
              onChange={handleChange}
              className="p-3 border rounded-lg font-mono dark:bg-gray-600 bg-gray-200 border-yellow-500 dark:text-white"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              value={formData.subject}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg font-mono dark:bg-gray-600 bg-gray-200 border-yellow-500 dark:text-white"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message*"
              value={formData.message}
              onChange={handleChange}
              required
              className="col-span-1 md:col-span-2 font-mono p-3 border rounded-lg dark:bg-gray-600 bg-gray-200 border-yellow-500 dark:text-white"
            />
            <motion.button
              type="submit"
              className="flex items-center justify-center px-6 py-3 gap-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg text-white font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Send <Send size={16} className="text-gray-700 animate-bounce" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
