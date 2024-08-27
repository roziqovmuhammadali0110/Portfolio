// components/Contact.jsx

function Contact() {
  return (
    <section
      id="contact"
      className="py-12 dark:bg-gray-900 dark:text-white bg-gray-100 h-[92vh] flex items-center justify-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">
          Contact
        </h2>
        <form
          className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
          data-aos="fade-up"
          data-aos-delay="200">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 p-2 rounded-lg"
              rows="4"></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
