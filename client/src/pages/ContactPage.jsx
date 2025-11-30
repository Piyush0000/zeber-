import React, { useState } from 'react';
import Button from '../components/Button.jsx';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    teamMembers: '',
    budget: '',
    expectedTraffic: '',
    projectTypes: [],
    message: ''
  });

  const [activeTab, setActiveTab] = useState('email'); // email or phone
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const projectTypeOptions = [
    { id: 'app-android-ios', label: 'App - Android & iOS' },
    { id: 'app-android', label: 'Android Only' },
    { id: 'app-ios', label: 'iOS Only' },
    { id: 'website', label: 'Website Only' },
    { id: 'app-website', label: 'App & Website' },
    { id: 'software', label: 'Software' },
    { id: 'chrome-extension', label: 'Chrome Extension' },
    { id: 'crm', label: 'CRM Software' },
    { id: 'ai-solutions', label: 'AI Solutions' },
    { id: 'ai-agents', label: 'AI Agents' },
    { id: 'ai-integration', label: 'AI Integration to Your Website' },
    { id: 'saas', label: 'SaaS Projects or Apps' },
    { id: 'backend', label: 'Scalable Backend Apps' }
  ];

  const budgetOptions = [
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹5,00,000',
    '₹5,00,000 - ₹10,00,000',
    '₹10,00,000 - ₹25,00,000',
    '₹25,00,000+'
  ];

  const trafficOptions = [
    '0 - 1,000 users/month',
    '1,000 - 10,000 users/month',
    '10,000 - 1,00,000 users/month',
    '1,00,000 - 10,00,000 users/month',
    '10,00,000+ users/month'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (checked) {
        setFormData(prevState => ({
          ...prevState,
          projectTypes: [...prevState.projectTypes, value]
        }));
      } else {
        setFormData(prevState => ({
          ...prevState,
          projectTypes: prevState.projectTypes.filter(type => type !== value)
        }));
      }
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      // Prepare data for submission
      const submissionData = {
        ...formData,
        contactMethod: activeTab,
        contactValue: activeTab === 'email' ? formData.email : formData.phone
      };

      // Send data to backend API
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          companyName: '',
          teamMembers: '',
          budget: '',
          expectedTraffic: '',
          projectTypes: [],
          message: ''
        });
        setActiveTab('email');
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
    <div className="bg-slate-900">
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-full mb-8">
            <span className="text-amber-400">💼</span>
            <span className="text-yellow-300 font-semibold text-sm">QUOTE YOUR PROJECT</span>
            <span className="text-yellow-400">💼</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Get a <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">Quote</span> for Your Project
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Tell us about your project and we'll provide a customized quote within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quote Request Form */}
            <div className="lg:col-span-2 bg-slate-800 p-8 rounded-lg shadow-lg border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">Project Details</h2>
              
              {submitSuccess && (
                <div className="bg-green-900/30 border border-green-800 text-green-400 px-4 py-3 rounded-lg mb-6">
                  <p className="font-medium">Thank you for your request!</p>
                  <p>We'll get back to you with a quote within 24 hours.</p>
                </div>
              )}
              
              {submitError && (
                <div className="bg-red-900/30 border border-red-800 text-red-400 px-4 py-3 rounded-lg mb-6">
                  <p>{submitError}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                {/* Personal Information */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="mr-2">👤</span> Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-slate-300 font-medium mb-2">
                        Preferred Contact Method *
                      </label>
                      <div className="flex space-x-4">
                        <button
                          type="button"
                          onClick={() => handleTabChange('email')}
                          className={`flex-1 py-2 px-4 rounded-lg transition-all duration-300 ${
                            activeTab === 'email' 
                              ? 'bg-blue-700 text-white' 
                              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                          }`}
                        >
                          Email
                        </button>
                        <button
                          type="button"
                          onClick={() => handleTabChange('phone')}
                          className={`flex-1 py-2 px-4 rounded-lg transition-all duration-300 ${
                            activeTab === 'phone' 
                              ? 'bg-blue-700 text-white' 
                              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                          }`}
                        >
                          Phone
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor={activeTab} className="block text-slate-300 font-medium mb-2">
                        {activeTab === 'email' ? 'Business Email *' : 'Phone Number *'}
                      </label>
                      {activeTab === 'email' ? (
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required={activeTab === 'email'}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-all duration-300"
                          placeholder="your.email@company.com"
                        />
                      ) : (
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required={activeTab === 'phone'}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-all duration-300"
                          placeholder="+91 XXXXXXXXXX"
                        />
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Company Information */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="mr-2">🏢</span> Company Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companyName" className="block text-slate-300 font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="teamMembers" className="block text-slate-300 font-medium mb-2">
                        Team Members
                      </label>
                      <input
                        type="number"
                        id="teamMembers"
                        name="teamMembers"
                        value={formData.teamMembers}
                        onChange={handleChange}
                        min="1"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-all duration-300"
                        placeholder="Number of team members"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="mr-2">📋</span> Project Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="budget" className="block text-slate-300 font-medium mb-2">
                        Estimated Budget *
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-all duration-300"
                      >
                        <option value="">Select your budget range</option>
                        {budgetOptions.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="expectedTraffic" className="block text-slate-300 font-medium mb-2">
                        Expected Traffic (Monthly) *
                      </label>
                      <select
                        id="expectedTraffic"
                        name="expectedTraffic"
                        value={formData.expectedTraffic}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-all duration-300"
                      >
                        <option value="">Select expected traffic</option>
                        {trafficOptions.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-slate-300 font-medium mb-2">
                      Project Type *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {projectTypeOptions.map((option) => (
                        <div key={option.id} className="flex items-center">
                          <input
                            type="checkbox"
                            id={option.id}
                            name="projectTypes"
                            value={option.id}
                            checked={formData.projectTypes.includes(option.id)}
                            onChange={handleChange}
                            className="w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
                          />
                          <label htmlFor={option.id} className="ml-2 text-slate-300">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Additional Information */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="mr-2">📝</span> Additional Information
                  </h3>
                  
                  <div>
                    <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                      Project Description
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-all duration-300"
                      placeholder="Tell us more about your project requirements..."
                    ></textarea>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="large" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Processing...' : 'Get Your Quote'}
                </Button>
              </form>
            </div>
            
            {/* Sidebar Information */}
            <div>
              <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="mr-2">⭐</span> Why Choose Us?
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2 mt-1">✓</span>
                    <span className="text-slate-300">Expert team with 10+ years of experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2 mt-1">✓</span>
                    <span className="text-slate-300">Transparent pricing with no hidden costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2 mt-1">✓</span>
                    <span className="text-slate-300">24/7 support throughout the project</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2 mt-1">✓</span>
                    <span className="text-slate-300">On-time delivery guaranteed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2 mt-1">✓</span>
                    <span className="text-slate-300">Free consultation and quote</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-900/50 to-amber-900/50 p-6 rounded-lg shadow-lg border border-blue-700/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="mr-2">📞</span> Contact Us Directly
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-slate-300">+91 7065273202</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-slate-300">shivamtiwari@zeber.in</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-slate-300">Delhi, India</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-700">
                  <p className="text-slate-300 text-sm">
                    We typically respond to quote requests within 24 hours during business days.
                  </p>
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