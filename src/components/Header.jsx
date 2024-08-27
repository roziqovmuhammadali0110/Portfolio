import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logoSmall.jpg";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import Modal from "./Modal";
import ContactForm from "./ContactForm";

function Header({ darkMode, setDarkMode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const location = useLocation();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className="bg-[#E9E8E6] dark:bg-gray-900 dark:text-white font-medium text-[#ABABAA] py-1 shadow-xl shadow-zinc-300 fixed top-0 left-0 right-0 z-50">
        <div
          className="px-[1%] flex items-center justify-around w-full"
          data-aos="fade-up">
          <div data-aos="fade-up">
            <a href="/home">
              <img
                src={logo}
                alt="logo"
                className="w-20 rounded-[50%] shadow-2xl"
              />
            </a>
          </div>

          <nav>
            <ul className="flex space-x-5">
              <li data-aos="fade-down" data-aos-delay="100">
                <Link
                  to="/home"
                  className={`hover:text-[#222222] hover:underline ${
                    location.pathname === "/home"
                      ? "text-[#222222] underline"
                      : ""
                  }`}>
                  Home
                </Link>
              </li>
              <li data-aos="fade-down" data-aos-delay="200">
                <Link
                  to="/about"
                  className={`hover:text-[#222222] hover:underline ${
                    location.pathname === "/about"
                      ? "text-[#222222] underline"
                      : ""
                  }`}>
                  About
                </Link>
              </li>
              <li data-aos="fade-down" data-aos-delay="300">
                <Link
                  to="/experience"
                  className={`hover:text-[#222222] hover:underline ${
                    location.pathname === "/experience"
                      ? "text-[#222222] underline"
                      : ""
                  }`}>
                  Experience
                </Link>
              </li>
              <li data-aos="fade-down" data-aos-delay="400">
                <Link
                  to="/skills"
                  className={`hover:text-[#222222] hover:underline ${
                    location.pathname === "/skills"
                      ? "text-[#222222] underline"
                      : ""
                  }`}>
                  Skills
                </Link>
              </li>
              <li data-aos="fade-down" data-aos-delay="500">
                <Link
                  to="/projects"
                  className={`hover:text-[#222222] hover:underline ${
                    location.pathname === "/projects"
                      ? "text-[#222222] underline"
                      : ""
                  }`}>
                  Projects
                </Link>
              </li>
              <li data-aos="fade-down" data-aos-delay="600">
                <Link
                  to="/contact"
                  className={`hover:text-[#222222] hover:underline ${
                    location.pathname === "/contact"
                      ? "text-[#222222] underline"
                      : ""
                  }`}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <button
            onClick={toggleDarkMode}
            className="p-2 bg-gray-700 dark:bg-gray-700 rounded-2xl">
            {darkMode ? <MdLightMode /> : <MdOutlineDarkMode />}
          </button>
          <div className="w-[180px] h-12 flex items-center justify-center font-bold bg-neutral-700 rounded-xl">
            <button onClick={openModal} className="text-white">
              Contact
            </button>
          </div>
        </div>
      </header>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm />
      </Modal>
    </>
  );
}

export default Header;
