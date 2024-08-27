function Experience() {
  return (
    <section
      id="experience"
      className="py-12 dark:bg-gray-900 dark:text-white h-[92vh] space-y-4 flex items-center justify-center flex-col px-5">
      <div className="flex items-center justify-center pr-20">
        <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">
          Experience
        </h2>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="flex items-center justify-center mx-auto gap-5">
        <div className="text-lg text-gray-700 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-2">
            Freelance Frontend Developer
          </h3>
          <p>August 2023 – June 2024</p>
          <ul className="list-disc list-inside font-medium text-left mt-4">
            <li>
              Developed and maintained responsive web applications using
              React.js and Tailwind CSS for various clients.
            </li>
            <li>
              Translated complex UI/UX designs into clean, efficient, and
              semantic code, ensuring a seamless user experience across
              different devices.
            </li>
            <li>
              Collaborated with clients to understand their requirements and
              delivered high-quality solutions within tight deadlines.
            </li>
            <li>
              Continuously learned and integrated new technologies to enhance
              project outcomes.
            </li>
          </ul>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg text-gray-700 max-w-2xl">
          <h3 className="text-2xl font-semibold mb-2">
            Frontend Developer | IT TIME ACADEMY
          </h3>
          <p>June 2024 – Present</p>
          <ul className="list-disc font-medium list-inside text-left mt-4">
            <li>
              Currently working at IT TIME ACADEMY, where I apply my frontend
              skills to real-world projects and contribute to the development of
              educational platforms.
            </li>
            <li>
              Collaborating with a team to implement modern web solutions,
              ensuring they meet the academy's high standards for performance
              and user experience.
            </li>
            <li>
              Actively engaging in the ongoing learning and integration of new
              technologies to improve the effectiveness and quality of projects.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
