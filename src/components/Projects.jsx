// components/Projects.jsx

import { Link } from "react-router-dom";

function Projects() {
  return (
    <section
      id="projects"
      className="py-12 dark:bg-gray-900 dark:text-white flex items-center justify-center px-[8%]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          <div
            className="bg-gray-200 p-4 rounded-xl shadow-md max-w-[450px] "
            data-aos="fade-up"
            data-aos-delay="200">
            <div className="flex items-center justify-center">
              <Link to="https://fanciful-custard-6b889e.netlify.app">
                <img
                  src="https://www.dezinfeksiyatashkent.uz/assets/hero-9df3d259.jpg"
                  alt=""
                  className="w-[250px] rounded-3xl"
                />
              </Link>
            </div>
            <h3 className="text-xl font-medium text-center text-blue-800">
              <Link to="https://fanciful-custard-6b889e.netlify.app">
                {" "}
                Dezinfeksiya
              </Link>
            </h3>
            <p className="text-[14px]">
              This site was first in "tilda", then we wrote it in react. In it,
              sending a message to Telegram, changing the language and various
              settings have been made flexible.
            </p>
          </div>
          <div
            className="bg-gray-200 p-4 rounded-xl shadow-md max-w-[450px] "
            data-aos="fade-up"
            data-aos-delay="200">
            <div className="flex items-center justify-center">
              <Link to="https://topikakademy.netlify.app">
                <img
                  src="https://optim.tildacdn.pub/tild3464-3039-4433-b832-663664336461/-/resize/854x/-/format/webp/course1.png"
                  alt=""
                  className="w-[370px] rounded-3xl"
                />
              </Link>
            </div>
            <h3 className="text-xl font-medium text-center text-blue-800">
              <Link to="https://topikakademy.netlify.app"> Topik Akademy</Link>
            </h3>
            <p className="text-[14px]">
              This site was first in "tilda", then we wrote it in react. In it,
              sending a message to Telegram, changing the language and various
              settings have been made flexible.
            </p>
          </div>
          <div
            className="bg-gray-200 p-4 rounded-xl shadow-md max-w-[450px] "
            data-aos="fade-up"
            data-aos-delay="200">
            <div className="flex items-center justify-center">
              <Link to="https://buxoronaturalproduct.netlify.app">
                <img
                  src="https://buxoronaturalproduct.netlify.app/assets/headerImg-D_tj0uTK.png"
                  alt=""
                  className="w-[370px] rounded-3xl"
                />
              </Link>
            </div>
            <h3 className="text-xl font-medium text-center text-blue-800">
              <Link to="https://buxoronaturalproduct.netlify.app">
                {" "}
                Buxoro Natural Product
              </Link>
            </h3>
            <p className="text-[14px]">
              This site was first in "tilda", then we wrote it in react. In it,
              sending a message to Telegram, changing the language and various
              settings have been made flexible.
            </p>
          </div>
          <div
            className="bg-gray-200 p-4 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="200">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p>Description of the project.</p>
          </div>
          {/* Qo'shimcha loyihalar */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
