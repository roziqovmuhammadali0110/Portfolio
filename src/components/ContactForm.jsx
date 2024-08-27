function ContactForm() {
  return (
    <form className="w-[500px] bg-[#E9E8E6] dark:bg-gray-900 dark:text-white ">
      <div>
        <label htmlFor="name" className="block">
          Name
        </label>
        <input type="text" id="name" className="border p-2 rounded w-full" />
      </div>
      <div className="mt-2">
        <label htmlFor="email" className="block">
          Email
        </label>
        <input type="email" id="email" className="border p-2 rounded w-full" />
      </div>
      <div className="mt-2">
        <label htmlFor="message" className="block">
          Message
        </label>
        <textarea
          id="message"
          className="border p-2 rounded w-full"
          rows="4"></textarea>
      </div>
      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
        Send
      </button>
    </form>
  );
}

export default ContactForm;
