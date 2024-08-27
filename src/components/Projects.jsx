// components/Projects.jsx

function Projects() {
  return (
    <section
      id="projects"
      className="py-12 h-[92vh] dark:bg-gray-900 dark:text-white flex items-center justify-center px-[8%]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          <div
            className="bg-gray-200 p-4 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="200">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p>Description of the project.</p>
          </div>
          <div
            className="bg-gray-200 p-4 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="200">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p>Description of the project.</p>
          </div>
          <div
            className="bg-gray-200 p-4 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="200">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p>Description of the project.</p>
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
