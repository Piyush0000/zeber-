import React from 'react';

const EnhancedServicesPage = () => {
  const services = [
    {
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows to free up your team for higher-value work. Our AI solutions identify and streamline processes across departments.",
      icon: "🔄",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights. Our AI-powered analytics help you make informed decisions and predict future trends.",
      icon: "📊",
      gradient: "from-amber-500 to-yellow-500"
    },
    {
      title: "Customer Intelligence",
      description: "Understand your customers better with AI-driven insights. Personalize experiences and improve customer satisfaction with our intelligent systems.",
      icon: "👥",
      gradient: "from-teal-500 to-green-500"
    },
    {
      title: "Predictive Modeling",
      description: "Anticipate market changes and customer behavior with our advanced predictive models. Stay ahead of the competition with data-driven foresight.",
      icon: "🔮",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems. Our experts ensure smooth implementation with minimal disruption to your operations.",
      icon: "🔌",
      gradient: "from-blue-500 to-teal-500"
    },
    {
      title: "Custom AI Solutions",
      description: "Tailored AI systems designed specifically for your business needs. We build solutions that address your unique challenges and opportunities.",
      icon: "⚙️",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const projects = [
    {
      name: "E-commerce Optimization",
      description: "Increased conversion rates by 35% for a major e-commerce platform through personalized product recommendations.",
      client: "E-commerce Brand",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      name: "Marketing Automation",
      description: "Reduced marketing costs by 40% while increasing lead quality for a digital marketing agency through intelligent lead scoring.",
      client: "Digital Marketing Agency",
      gradient: "from-amber-600 to-yellow-600"
    },
    {
      name: "Supply Chain Intelligence",
      description: "Improved inventory management and reduced waste by 25% for a retail chain using predictive analytics.",
      client: "Retail Corporation",
      gradient: "from-teal-600 to-green-600"
    }
  ];

  return (
    <div className="bg-slate-900 enhanced-bg-pattern min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl animate-pulse"></div>
        
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-full mb-8 animate-glow">
            <span className="text-yellow-400">⚡</span>
            <span className="text-yellow-300 font-semibold text-sm">PROFESSIONAL AI SOLUTIONS</span>
            <span className="text-amber-400">⚡</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in-down">
            Our <span className="enhanced-gradient-text">AI Services</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Cutting-edge AI solutions designed to transform your business operations and drive growth.
          </p>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="enhanced-card p-8 group animate-scale-in"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className={`text-5xl mb-6 text-center bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent transform group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:enhanced-gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-300 mb-6 text-center leading-relaxed">{service.description}</p>
                <button className="enhanced-btn-secondary w-full group-hover:border-blue-500/50">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-down">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="enhanced-gradient-text-warm">Our Best Projects</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Real-world examples of how our AI solutions have transformed businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="enhanced-card overflow-hidden group animate-fade-in-up"
                style={{ animationDelay: `${400 + index * 150}ms` }}
              >
                <div className={`h-40 bg-gradient-to-r ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-6xl text-white/80 font-bold transform group-hover:scale-110 transition-transform duration-500">
                    {project.name.charAt(0)}
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:enhanced-gradient-text transition-all duration-300">
                    {project.name}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="mb-6">
                    <span className="inline-block bg-slate-700 text-amber-200 text-sm font-medium px-3 py-1 rounded-full border border-amber-500/30">
                      {project.client}
                    </span>
                  </div>
                  <button className="enhanced-btn-primary w-full group-hover:from-purple-600 group-hover:to-pink-600">
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 via-purple-900 to-amber-900 relative overflow-hidden enhanced-bg-pattern">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-down">
            Ready to leverage AI for your business?
          </h2>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Let's discuss how our AI solutions can transform your operations and drive growth.
          </p>
          <button className="enhanced-btn-accent py-4 px-8 text-lg animate-fade-in-up delay-400">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default EnhancedServicesPage;