import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Temporarily log data for testing
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="w-full max-w-md p-8 mx-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Contact Us</h2>
        <p className="text-center text-gray-600 mt-2 mb-6">
          We'd love to hear from you! Send us a message below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="p-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <div className="mt-4 text-center text-green-600 font-semibold">
            Thank you for contacting us! We'll get back to you soon.
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
