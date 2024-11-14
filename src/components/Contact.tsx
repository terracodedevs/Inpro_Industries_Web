// ContactForm.tsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ContactUs from './Number';

const YOUR_SERVICE_ID = 'service_qvu70e2';
const YOUR_TEMPLATE_ID = 'template_4ysoxgw';
const YOUR_USER_ID = 'vv70io4ATQTdvlk6o';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formData, YOUR_USER_ID);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message, please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
   <div className='grid grid-cols-1 sm:grid-cols-2'>
    <div>
      <ContactUs/>
    </div>
    <div className='flex justify-center items-center min-h-screen bg-gray-100 mt-7'>
    <div className="w-full mx-[10%] p-6 bg-white shadow-lg rounded-lg ">
      <h2 className="text-3xl text-center font-bold bg-gradient-to-r from-blue-900 to-purple-700  bg-clip-text text-transparent mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-md transition duration-200 disabled:bg-blue-300"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
    </div>
    
    </div> 
  );
};

export default ContactForm;
