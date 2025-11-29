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
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-32 px-6 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <p className="text-blue-700 font-semibold text-lg mb-6 animate-fade-in-down">Near-Gen AI Solutions</p>
          <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-8 animate-fade-in-down delay-100">
            Transform Your Business with <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent animate-rainbow">AI Automation</span>
          </h1>
          <p className="text-xl text-blue-800 mb-12 max-w-2xl mx-auto animate-fade-in-down delay-200">
            Scale your operations 2× faster with our cutting-edge AI solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16 animate-fade-in-up delay-300">
            <Button variant="primary" size="large">
              Schedule a Demo
            </Button>
            <Button variant="outline" size="large" onClick={toggleVideo}>
              Watch How It Works
            </Button>
          </div>
          
          <p className="text-blue-700 animate-fade-in-up delay-500">
            <span className="font-semibold text-blue-600">500+ businesses</span> already scaling with us
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="container mx-auto max-w-4xl">
          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <span className="text-blue-500 text-2xl mr-4">✓</span>
                <span className="text-lg text-blue-800">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-6 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 animate-fade-in-up">What We Do</h2>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto animate-fade-in-up delay-100">
              We help businesses leverage AI to automate processes, enhance productivity, and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up border border-blue-100"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl mb-6 text-center text-blue-600 animate-pulse">{service.icon}</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center animate-fade-in-up">{service.title}</h3>
                <p className="text-blue-700 text-center animate-fade-in-up delay-100">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24 px-6 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 animate-fade-in-up">Who We Work With</h2>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto animate-fade-in-up delay-100">
              We serve a diverse range of industries and business types.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clientTypes.map((client, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl text-center hover:from-blue-50 hover:to-blue-100 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg animate-fade-in-up border border-blue-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="font-medium text-blue-800">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 animate-fade-in-up">Why Choose Us</h2>
          <p className="text-xl text-blue-700 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Our customized approach ensures that our AI solutions perfectly align with your business goals and challenges.
          </p>
          <div className="bg-white p-10 rounded-2xl shadow-xl max-w-2xl mx-auto animate-fade-in-up delay-200 border border-blue-200">
            <p className="text-blue-700 italic text-lg animate-fade-in-up">
              "We don't just implement AI - we tailor it to your unique business needs, ensuring maximum impact and ROI."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Before Footer */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in-up">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Join hundreds of businesses already scaling with our AI solutions.
          </p>
          <Button variant="primary" size="large" className="animate-fade-in-up delay-200">
            Schedule a Quick Meeting with Us
          </Button>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-4xl w-full animate-scale-in">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold">How It Works</h3>
              <button 
                onClick={toggleVideo}
                className="text-gray-500 hover:text-gray-700 text-3xl transition-colors duration-300"
              >
                &times;
              </button>
            </div>
            <div className="p-6">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl flex items-center justify-center h-96">
                <p className="text-gray-500 text-xl">YouTube Video Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;