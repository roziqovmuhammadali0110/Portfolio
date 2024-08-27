import { Link } from "react-router-dom";

function About() {
  return (
    <section
      id="about"
      className="pt-12 dark:bg-gray-900 dark:text-white bg-gray-100 h-[92vh] flex items-center justify-center">
      <div className="px-[15%]">
        <h2
          className="text-[50px] font-bold text-center mb-6"
          data-aos="fade-up">
          <span className="border-b-4 border-[#34B7A7]">About</span>
        </h2>
        <div className="text-3xl font-bold text-center mb-6">
          <h3 data-aos="fade-up" data-aos-delay="200">
            Frontend
          </h3>
          <p data-aos="fade-up" data-aos-delay="200">
            React & Next Developer
          </p>
        </div>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg text-[#444444] w-full pb-3">
          {" "}
          As a frontend developer with one year of experience, I specialize in
          creating efficient and intuitive web applications using React.js and
          Tailwind CSS. I transform complex designs into clean, semantic code,
          resulting in precise and responsive interfaces. I am constantly eager
          to learn new technologies and actively contribute to delivering
          high-quality solutions through teamwork.
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-6 w-full flex items-center justify-center ">
          <div className="space-y-6">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="grid grid-cols-2 items-center gap-12 justify-start ">
              <div className="flex items-center gap-2 pr-10">
                <span className="font-bold text-[20px]">Birthday: </span>
                <span className="text-[19px]"> 10 January 2000</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[20px]">Age: </span>
                <span className="text-[19px]"> 24</span>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="grid grid-cols-2 items-center gap-12 ">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[20px]">Phone: </span>
                <span className="text-[19px]"> +998880391211</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[20px]">PhEmailone: </span>
                <span className="text-[19px]">mroziqov494@gmail.com</span>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="grid grid-cols-2 items-center gap-12 ">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[20px]">Linkedln: </span>
                <span className="text-[19px]">
                  {" "}
                  <Link to="https://www.linkedin.com/in/muhammadali-roziqov-815201301/">
                    Muhammadali Roziqov
                  </Link>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[20px]">Git Hub: </span>
                <span className="text-[19px]">
                  <Link to="https://github.com/roziqovmuhammadali0110">
                    roziqovmuhammadali0110
                  </Link>
                </span>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="grid grid-cols-2 items-center gap-12">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[20px]">City: </span>
                <span className="text-[19px]"> Tashkent</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[20px]">Freelance:</span>
                <span className="text-[19px]"> Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
