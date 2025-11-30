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
      <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 py-32 px-6 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animate-pulse"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 animate-wave"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 animate-bounce"></div>
        
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <p className="text-purple-400 font-semibold text-lg mb-6 animate-fade-in-down animate-neon-glow">Near-Gen AI Solutions</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-fade-in-down delay-100">
            Transform Your Business with <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent animate-rainbow animate-glitch">AI Automation</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto animate-fade-in-down delay-200 animate-wave">
            Scale your operations 2× faster with our cutting-edge AI solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16 animate-fade-in-up delay-300 animate-hue-shift">
            <Button variant="primary" size="large">
              Schedule a Demo
            </Button>
            <Button variant="outline" size="large" onClick={toggleVideo}>
              Watch How It Works
            </Button>
          </div>
          
          <p className="text-slate-300 animate-fade-in-up delay-500 animate-neon-glow">
            <span className="font-semibold text-purple-400 animate-wave">500+ businesses</span> already scaling with us
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="container mx-auto max-w-4xl">
          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start animate-fade-in-up animate-wave" style={{ animationDelay: `${index * 100}ms` }}>
                <span className="text-purple-400 text-2xl mr-4 animate-bounce">✓</span>
                <span className="text-lg text-slate-200">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up animate-neon-glow">What We Do</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto animate-fade-in-up delay-100 animate-wave">
              We help businesses leverage AI to automate processes, enhance productivity, and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up border border-purple-500/30 hover:border-pink-500/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl mb-6 text-center text-purple-400 animate-pulse animate-wave">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center animate-fade-in-up animate-glitch">{service.title}</h3>
                <p className="text-slate-300 text-center animate-fade-in-up delay-100 animate-hue-shift">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24 px-6 bg-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up animate-neon-glow">Who We Work With</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto animate-fade-in-up delay-100 animate-wave">
              We serve a diverse range of industries and business types.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clientTypes.map((client, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl text-center hover:from-slate-700 hover:to-slate-800 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg animate-fade-in-up border border-purple-500/30 hover:border-pink-500/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="font-medium text-slate-200 animate-wave">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in-up animate-neon-glow">Why Choose Us</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100 animate-wave">
            Our customized approach ensures that our AI solutions perfectly align with your business goals and challenges.
          </p>
          <div className="bg-slate-800 p-10 rounded-2xl shadow-xl max-w-2xl mx-auto animate-fade-in-up delay-200 border border-purple-500/30 hover:border-pink-500/50">
            <p className="text-slate-200 italic text-lg animate-fade-in-up animate-neon-glow">
              "We don't just implement AI - we tailor it to your unique business needs, ensuring maximum impact and ROI."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Before Footer */}
      <section className="py-24 px-6 bg-gradient-to-r from-purple-700 to-pink-800 animate-hue-shift">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in-up animate-neon-glow">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100 animate-wave">
            Join hundreds of businesses already scaling with our AI solutions.
          </p>
          <Button variant="primary" size="large" className="animate-fade-in-up delay-200 animate-pulse">
            Schedule a Quick Meeting with Us
          </Button>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-90 flex items-center justify-center z-50 p-4 animate-fade-in animate-hue-shift">
          <div className="bg-slate-800 rounded-2xl max-w-4xl w-full animate-scale-in border border-purple-500/30">
            <div className="flex justify-between items-center p-6 border-b border-slate-700">
              <h3 className="text-2xl font-bold text-white animate-neon-glow">How It Works</h3>
              <button 
                onClick={toggleVideo}
                className="text-slate-400 hover:text-white text-3xl transition-colors duration-300 animate-pulse"
              >
                &times;
              </button>
            </div>
            <div className="p-6">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl flex items-center justify-center h-96 animate-wave">
                <p className="text-slate-300 text-xl animate-bounce">YouTube Video Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;