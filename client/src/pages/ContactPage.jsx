import React, { useState } from 'react';
import Button from '../components/Button.jsx';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      // Send data to backend API
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitError(data.message || 'Failed to submit the form. Please try again.');
      }
    } catch (error) {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-32 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 animate-fade-in-down">
            Get in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto animate-fade-in-down delay-100">
            Have questions about our AI solutions? Our team is ready to help you transform your business.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-2xl shadow-xl animate-fade-in-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a message</h2>
              
              {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl mb-8 animate-fade-in">
                  <p className="font-medium">Thank you for your message!</p>
                  <p>We'll get back to you soon.</p>
                </div>
              )}
              
              {submitError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl mb-8 animate-fade-in">
                  <p>{submitError}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-3">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Tell us about your project or questions..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="large" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="animate-fade-in-right">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-10">
                <div className="flex items-start bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-blue-100 p-4 rounded-xl mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600 text-lg">+91 XXXXXXXXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-blue-100 p-4 rounded-xl mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 text-lg">contact@zeberai.com</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-blue-100 p-4 rounded-xl mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Office</h3>
                    <p className="text-gray-600 text-lg">123 AI Street, Tech City</p>
                    <p className="text-gray-600 text-lg">Bangalore, India 560001</p>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="mt-16">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Location</h3>
                <div className="bg-gradient-to-r from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 rounded-2xl w-full h-80 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-xl">Interactive Map</p>
                    <p className="text-gray-600">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;