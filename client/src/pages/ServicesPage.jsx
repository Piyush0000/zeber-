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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-32 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 animate-fade-in-down">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Services</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto animate-fade-in-down delay-100">
            Cutting-edge AI solutions designed to transform your business operations and drive growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl mb-6 text-center">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-8 text-center">{service.description}</p>
                <Button variant="outline" size="medium" className="w-full">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">Our Best Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-100">
              Real-world examples of how our AI solutions have transformed businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-5xl text-white font-bold">{project.name.charAt(0)}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.name}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="mb-8">
                    <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full">
                      {project.client}
                    </span>
                  </div>
                  <Button variant="primary" size="medium" className="w-full">
                    View Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in-up">
            Ready to leverage AI for your business?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Let's discuss how our AI solutions can transform your operations and drive growth.
          </p>
          <Button variant="primary" size="large" className="bg-white text-blue-600 hover:bg-gray-100 animate-fade-in-up delay-200">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;