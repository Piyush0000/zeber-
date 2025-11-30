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
    <div className="bg-slate-900">
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <p className="text-blue-400 font-semibold text-lg mb-6">AI Solutions</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business with <span className="text-blue-400">AI Automation</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
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
          
          <p className="text-slate-400">
            <span className="font-semibold text-blue-400">500+ businesses</span> already scaling with us
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-6 bg-slate-800">
        <div className="container mx-auto max-w-4xl">
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-400 text-xl mr-3">✓</span>
                <span className="text-lg text-slate-200">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We help businesses leverage AI to automate processes, enhance productivity, and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-slate-700"
              >
                <div className="text-4xl mb-4 text-center text-blue-400">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-slate-300 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Who We Work With</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We serve a diverse range of industries and business types.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientTypes.map((client, index) => (
              <div 
                key={index} 
                className="bg-slate-700 p-4 rounded-lg text-center transition-all duration-300 border border-slate-600"
              >
                <p className="font-medium text-slate-200">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Us</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Our customized approach ensures that our AI solutions perfectly align with your business goals and challenges.
          </p>
          <div className="bg-slate-800 p-8 rounded-lg shadow-lg max-w-2xl mx-auto border border-slate-700">
            <p className="text-slate-200 italic text-lg">
              "We don't just implement AI - we tailor it to your unique business needs, ensuring maximum impact and ROI."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Before Footer */}
      <section className="py-20 px-6 bg-blue-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
            Join hundreds of businesses already scaling with our AI solutions.
          </p>
          <Button variant="primary" size="large">
            Schedule a Quick Meeting with Us
          </Button>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-lg max-w-4xl w-full border border-slate-700">
            <div className="flex justify-between items-center p-4 border-b border-slate-700">
              <h3 className="text-xl font-bold text-white">How It Works</h3>
              <button 
                onClick={toggleVideo}
                className="text-slate-400 hover:text-white text-2xl transition-colors duration-300"
              >
                &times;
              </button>
            </div>
            <div className="p-4">
              <div className="aspect-w-16 aspect-h-9 bg-slate-700 rounded-lg flex items-center justify-center h-96">
                <p className="text-slate-300 text-lg">YouTube Video Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;