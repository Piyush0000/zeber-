import React from 'react';
import Button from '../components/Button.jsx';

const ServicesPage = () => {
  const services = [
    {
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows to free up your team for higher-value work. Our AI solutions identify and streamline processes across departments.",
      icon: "🔄"
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights. Our AI-powered analytics help you make informed decisions and predict future trends.",
      icon: "📊"
    },
    {
      title: "Customer Intelligence",
      description: "Understand your customers better with AI-driven insights. Personalize experiences and improve customer satisfaction with our intelligent systems.",
      icon: "👥"
    },
    {
      title: "Predictive Modeling",
      description: "Anticipate market changes and customer behavior with our advanced predictive models. Stay ahead of the competition with data-driven foresight.",
      icon: "🔮"
    },
    {
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems. Our experts ensure smooth implementation with minimal disruption to your operations.",
      icon: "🔌"
    },
    {
      title: "Custom AI Solutions",
      description: "Tailored AI systems designed specifically for your business needs. We build solutions that address your unique challenges and opportunities.",
      icon: "⚙️"
    }
  ];

  const projects = [
    {
      name: "E-commerce Optimization",
      description: "Increased conversion rates by 35% for a major e-commerce platform through personalized product recommendations.",
      client: "E-commerce Brand",
      caseStudy: "#"
    },
    {
      name: "Marketing Automation",
      description: "Reduced marketing costs by 40% while increasing lead quality for a digital marketing agency through intelligent lead scoring.",
      client: "Digital Marketing Agency",
      caseStudy: "#"
    },
    {
      name: "Supply Chain Intelligence",
      description: "Improved inventory management and reduced waste by 25% for a retail chain using predictive analytics.",
      client: "Retail Corporation",
      caseStudy: "#"
    }
  ];

  return (
    <div className="bg-slate-900">
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-full mb-8 animate-pulse">
            <span className="text-yellow-400">⚡</span>
            <span className="text-yellow-300 font-semibold text-sm">PROFESSIONAL AI SOLUTIONS</span>
            <span className="text-amber-400">⚡</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">AI Services</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Cutting-edge AI solutions designed to transform your business operations and drive growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-yellow-500/50 group"
              >
                <div className="text-4xl mb-4 text-center text-blue-400 group-hover:text-yellow-400 transition-colors duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-yellow-300 transition-colors duration-300">{service.title}</h3>
                <p className="text-slate-300 mb-6 text-center">{service.description}</p>
                <Button variant="outline" size="medium" className="w-full hover:border-yellow-500 hover:text-yellow-400">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">Our Best Projects</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Real-world examples of how our AI solutions have transformed businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-slate-700 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-600 hover:border-yellow-500/50 group"
              >
                <div className="h-32 bg-gradient-to-r from-blue-900 to-amber-900 flex items-center justify-center">
                  <span className="text-4xl text-white font-bold">{project.name.charAt(0)}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">{project.name}</h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="mb-6">
                    <span className="inline-block bg-gradient-to-r from-slate-600 to-amber-900/50 text-amber-200 text-sm font-medium px-3 py-1 rounded-full">
                      {project.client}
                    </span>
                  </div>
                  <Button variant="primary" size="medium" className="w-full hover:from-yellow-600 hover:to-amber-600">
                    View Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to leverage AI for your business?
          </h2>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can transform your operations and drive growth.
          </p>
          <Button variant="primary" size="large">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;