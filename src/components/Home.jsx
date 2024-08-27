// components/Home.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS stili
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // AOS-ni ishga tushurish
  }, []);

  return (
    <main className="p-4 dark:bg-gray-900 dark:text-white home bg-[#f7f7f6] flex items-center justify-center">
      <section id="home" className="text-center my-12">
        <h1 className="text-[48px] text-[#222222] font-bold" data-aos="zoom-in">
          Muhammadali Roziqov
        </h1>
        <p
          className="mt-4 text-[27px] text-[#6F6F6F]"
          data-aos="zoom-in"
          data-aos-delay="200">
          I am a Frontend Developer
        </p>
        <Link to="/about">
          <button
            data-aos="zoom-in"
            className="bg-[#34B7A7] text-white rounded-3xl font-medium mt-4 w-[150px] h-[40px]">
            ABOUT ME
          </button>
        </Link>
      </section>
    </main>
  );
}

export default Home;
