const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('./models/Service');
const TeamMember = require('./models/TeamMember');

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/zeberai')
.then(() => console.log('MongoDB connected for seeding'))
.catch(err => console.log('MongoDB connection error:', err));

// Sample services data
const services = [
  {
    title: "Process Automation",
    description: "Eliminate repetitive work with our intelligent automation solutions that save 100+ hours monthly.",
    icon: "🤖",
    category: "automation",
    features: [
      "Workflow automation",
      "Data processing automation",
      "Report generation",
      "Integration with existing systems"
    ],
    pricing: "Starting at $2,500/month",
    duration: "2-4 weeks implementation"
  },
  {
    title: "Data Analytics",
    description: "Unlock actionable insights from your data to make smarter business decisions and predict trends.",
    icon: "📊",
    category: "analytics",
    features: [
      "Custom dashboards",
      "Predictive analytics",
      "Data visualization",
      "KPI tracking"
    ],
    pricing: "Starting at $3,000/month",
    duration: "3-5 weeks implementation"
  },
  {
    title: "AI Integration",
    description: "Seamlessly integrate cutting-edge AI into your existing systems without disrupting operations.",
    icon: "🔌",
    category: "integration",
    features: [
      "API integration",
      "System migration support",
      "Performance monitoring",
      "Security implementation"
    ],
    pricing: "Starting at $5,000/month",
    duration: "4-6 weeks implementation"
  },
  {
    title: "Custom AI Solutions",
    description: "Tailored AI systems designed specifically for your unique business challenges and opportunities.",
    icon: "⚙️",
    category: "custom",
    features: [
      "Requirement analysis",
      "Custom algorithm development",
      "Testing and validation",
      "Ongoing support"
    ],
    pricing: "Starting at $10,000/month",
    duration: "6-12 weeks implementation"
  }
];

// Sample team members data
const teamMembers = [
  {
    name: "Shivam Tiwari",
    role: "Founder and CEO",
    background: "Ex-Engineering Director at Microsoft, B.Tech from IIT Bombay",
    bio: "Building scalable AI systems that power enterprise solutions for clients worldwide.",
    image: "../assets/Shivam.jpeg",
    gradient: "from-blue-500 to-purple-500",
    expertise: [
      {
        title: "Top Tech Alumni",
        description: "Former employees from Google, Microsoft, Amazon, IBM, and Meta",
        icon: "💻"
      },
      {
        title: "Elite Education",
        description: "Graduates from IITs, IIITs, MIT, Stanford, and top business schools",
        icon: "🎓"
      },
      {
        title: "Multidisciplinary",
        description: "AI Engineers, Data Scientists, Product Managers, and Business Consultants",
        icon: "🤝"
      }
    ]
  },
  {
    name: "Piyush Rathore",
    role: "Chief Technology Officer",
    background: "Former Google AI Research Lead, PhD in Machine Learning from MIT",
    bio: "Leading our AI research initiatives with over 15 years of experience in machine learning and neural networks.",
    image: "../assets/Piyush.jpg",
    gradient: "from-amber-500 to-yellow-500",
    expertise: [
      {
        title: "Top Tech Alumni",
        description: "Former employees from Google, Microsoft, Amazon, IBM, and Meta",
        icon: "💻"
      },
      {
        title: "Elite Education",
        description: "Graduates from IITs, IIITs, MIT, Stanford, and top business schools",
        icon: "🎓"
      },
      {
        title: "Multidisciplinary",
        description: "AI Engineers, Data Scientists, Product Managers, and Business Consultants",
        icon: "🤝"
      }
    ]
  },
  {
    name: "Shubham Raj",
    role: "Chief Marketing Officer",
    background: "Former Senior Data Scientist at Amazon, MBA from IIM Bangalore",
    bio: "Driving growth through data-driven marketing strategies and customer intelligence platforms.",
    image: "../assets/Shubham.jpeg",
    gradient: "from-teal-500 to-green-500",
    expertise: [
      {
        title: "Top Tech Alumni",
        description: "Former employees from Google, Microsoft, Amazon, IBM, and Meta",
        icon: "💻"
      },
      {
        title: "Elite Education",
        description: "Graduates from IITs, IIITs, MIT, Stanford, and top business schools",
        icon: "🎓"
      },
      {
        title: "Multidisciplinary",
        description: "AI Engineers, Data Scientists, Product Managers, and Business Consultants",
        icon: "🤝"
      }
    ]
  }
];

// Seed the database
const seedDatabase = async () => {
  try {
    // Clear existing data
    await Service.deleteMany({});
    await TeamMember.deleteMany({});
    
    // Insert new data
    await Service.insertMany(services);
    await TeamMember.insertMany(teamMembers);
    
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seeder
seedDatabase();