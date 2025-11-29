import React, { useState } from 'react';
import Button from '../components/Button.jsx';

const HomePage = () => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  const benefits = [
    "Streamline operations with smart automation",
    "Boost team productivity by 150%",
    "Reduce operational costs by 40%"
  ];

  const services = [
    {
      title: "Automate Tasks",
      description: "Eliminate repetitive work with our intelligent automation solutions.",
      icon: "🤖"
    },
    {
      title: "Improve Productivity",
      description: "Enhance team efficiency with AI-powered workflows.",
      icon: "⚡"
    },
    {
      title: "Boost ROI",
      description: "Maximize returns with data-driven decision making.",
      icon: "📈"
    },
    {
      title: "Scale with Data",
      description: "Grow your business with actionable insights.",
      icon: "📊"
    }
  ];

  const clientTypes = [
    "Digital Marketing Agencies",
    "E-commerce Brands",
    "SaaS Companies",
    "Business Consultants",
    "Service Providers",
    "Startups"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <p className="text-blue-600 font-semibold text-lg mb-4">Near-Gen AI Solutions</p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Business with AI Automation
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Scale your operations 2× faster with our cutting-edge AI solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button variant="primary" size="large">
              Schedule a Demo
            </Button>
            <Button variant="outline" size="large" onClick={toggleVideo}>
              Watch How It Works
            </Button>
          </div>
          
          <p className="text-gray-600">
            <span className="font-semibold text-blue-600">500+ businesses</span> already scaling with us
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <span className="text-lg text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We help businesses leverage AI to automate processes, enhance productivity, and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Work With</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We serve a diverse range of industries and business types.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clientTypes.map((client, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition-colors duration-300">
                <p className="font-medium text-gray-800">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Our customized approach ensures that our AI solutions perfectly align with your business goals and challenges.
          </p>
          <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto">
            <p className="text-gray-600 italic">
              "We don't just implement AI - we tailor it to your unique business needs, ensuring maximum impact and ROI."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Before Footer */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to transform your business?
          </h2>
          <Button variant="primary" size="large" className="bg-white text-blue-600 hover:bg-gray-100">
            Schedule a Quick Meeting with Us
          </Button>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold">How It Works</h3>
              <button 
                onClick={toggleVideo}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>
            <div className="p-4">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center h-96">
                <p className="text-gray-500">YouTube Video Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;