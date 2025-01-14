// components/Projects.jsx
import house from "../assets/house.png";
import { Link } from "react-router-dom";
import star from "../assets/image.png";

function Projects() {
  return (
    <section
      id="projects"
      className="py-12 dark:bg-gray-900 dark:text-white flex items-center justify-center px-[5%]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">
          Projects
        </h2>
        <div className="flex flex-wrap items-center justify-around space-y-5 gap-4">
          <div
            className="bg-gray-200 p-4 rounded-xl shadow-md max-w-[450px] "
            data-aos="fade-up"
            data-aos-delay="200">
            <div className="flex items-center justify-center">
              <Link to="https://fanciful-custard-6b889e.netlify.app">
                <img
                  src="https://www.dezinfeksiyatashkent.uz/assets/hero-9df3d259.jpg"
                  alt=""
                  className="w-[230px] rounded-3xl"
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
                  src="	https://buxoronaturalproduct.netlify.app/assets/logo-DDXHFmis.png"
                  alt=""
                  className="w-[370px] rounded-3xl"
                />
              </Link>
            </div>
            <h3 className="text-xl py-3 font-medium text-center text-blue-800">
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
            className="bg-gray-200 p-4 rounded-xl shadow-md max-w-[450px] "
            data-aos="fade-up"
            data-aos-delay="200">
            <div className="flex items-center justify-center">
              <Link to="https://newhouses.netlify.app">
                <img
                  src={house}
                  alt="house"
                  className=" rounded-3xl h-[130px]"
                />
              </Link>
            </div>
            <h3 className="text-xl font-medium text-center text-blue-800">
              <Link to="https://newhouses.netlify.app">
                {" "}
                Rent Your Dream House
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
              <Link to="https://starnew.netlify.app/">
                <img src={star} alt="star" className=" rounded-3xl h-[130px]" />
              </Link>
            </div>
            <h3 className="text-xl font-medium text-center text-blue-800">
              <Link to="https://starnew.netlify.app/"> Star New Tech</Link>
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
              <Link to="https://zamontour.uz/">
                <img
                  src="https://zamontour.uz/assets/images/zamon.svg"
                  alt="star"
                  className=" rounded-3xl h-[130px]"
                />
              </Link>
            </div>
            <h3 className="text-xl text-center text-blue-800">
              <Link to="https://zamontour.uz/" className="font-medium">
                {" "}
                ZAMON travel tour
              </Link>
            </h3>
            <p className="text-[14px]">
              This site was first in "tilda", then we wrote it in react. In it,
              sending a message to Telegram, changing the language and various
              settings have been made flexible.
            </p>
          </div>

          {/* Qo'shimcha loyihalar */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
