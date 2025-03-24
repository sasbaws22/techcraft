import React, { useState, useEffect } from 'react'; 
import { motion } from 'framer-motion';
import { ChevronDown, Code, ShoppingCart, Palette, MessageSquare, MapIcon as WhatsappIcon, Database, Globe, Cloud, Link, Search, Cpu, Rocket, CheckCircle, CreditCard, Percent, Gift } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'process', 'technologies', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/233595703977', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className={`text-2xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              TechCraft Studio
            </h1>
            <div className="hidden md:flex space-x-6">
              {['about', 'services', 'process', 'technologies', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  } hover:text-blue-500 transition-colors duration-300 ${
                    activeSection === section ? 'font-bold' : ''
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="bg-blue-800/50 px-6 py-2 rounded-full inline-block mb-6">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400">Special Offer: Up to 20% off on first projects!</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">TechCraft Studio</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-200">Innovative Website Development for Your Business</p>
		   <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-lg font-medium text-yellow-600"
          >
            No Upfront Payment – Pay Only When You're 100% Satisfied!
          </motion.div>
          <div className="space-x-4">
            <button onClick={openWhatsApp} className="cta-button">
              <WhatsappIcon className="w-5 h-5" />
              <span>Start Your Project</span>
            </button>
          </div>
          <div 
            className="nav-indicator"
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown className="w-8 h-8" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="group">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                alt="Team working"
                className="rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                At TechCraft Studio, we transform digital ideas into powerful realities. With years of expertise in website and software development, we craft solutions that drive business growth and user engagement.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team of passionate developers and designers work together to deliver exceptional digital experiences that stand out in today's competitive landscape.
              </p>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-center gap-3 mb-2">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-blue-900">Client-First Payment Policy</h3>
                </div>
                <p className="text-gray-700">
                  We believe in delivering value before expecting payment. Full payment is only required after project completion and client satisfaction is guaranteed.
                </p>
              </div>
              <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="flex items-center gap-3 mb-2">
                  <Percent className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-900">Flexible Pricing & Discounts</h3>
                </div>
                <p className="text-gray-700">
                  Enjoy discounts ranging from 10% to 40% based on project scope. Watch out for seasonal promotions and special offers throughout the year!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="w-8 h-8" />, title: 'Custom Web Development', description: 'Tailored websites that perfectly match your brand and goals' },
              { icon: <ShoppingCart className="w-8 h-8" />, title: 'E-commerce Solutions', description: 'Powerful online stores with seamless shopping experiences' },
              { icon: <Code className="w-8 h-8" />, title: 'API Development', description: 'Robust and scalable APIs for your business needs' },
              { icon: <Palette className="w-8 h-8" />, title: 'UI/UX Design', description: 'Beautiful and intuitive user interfaces that convert' },
              { icon: <Link className="w-8 h-8" />, title: 'Mulesoft Integration', description: 'Enterprise-grade API integration and management solutions' },
              { icon: <Cloud className="w-8 h-8" />, title: 'Salesforce Solutions', description: 'Custom Salesforce development and integration services' },
            ].map((service, index) => (
              <div key={index} className="group service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Development Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="w-12 h-12" />,
                stage: "1. Discovery",
                title: "Requirements Analysis",
                description: "We deeply analyze your needs and objectives to create a comprehensive project roadmap."
              },
              {
                icon: <Palette className="w-12 h-12" />,
                stage: "2. Design",
                title: "UI/UX Design",
                description: "Creating intuitive interfaces and user flows that align with your brand identity."
              },
              {
                icon: <Cpu className="w-12 h-12" />,
                stage: "3. Development",
                title: "Agile Development",
                description: "Building your solution using cutting-edge technologies and best practices."
              },
              {
                icon: <Rocket className="w-12 h-12" />,
                stage: "4. Deployment",
                title: "Launch & Support",
                description: "Rigorous testing, seamless deployment, and ongoing maintenance support."
              }
            ].map((stage, index) => (
              <div key={index} className="stage-card group">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-100 rounded-full transition-all duration-300 group-hover:scale-110" />
                  <div className="relative z-10 text-blue-600 transition-transform duration-300 group-hover:scale-110">
                    {stage.icon}
                  </div>
                </div>
                <p className="text-blue-600 font-semibold mt-6">{stage.stage}</p>
                <h3 className="text-xl font-bold mt-2 mb-3">{stage.title}</h3>
                <p className="text-gray-600">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: <Code className="w-12 h-12" />, name: 'React' },
              { icon: <Database className="w-12 h-12" />, name: 'PostgreSQL' },
              { icon: <Globe className="w-12 h-12" />, name: 'FastAPI' },
              { icon: <Palette className="w-12 h-12" />, name: 'Tailwind CSS' },
              { icon: <Link className="w-12 h-12" />, name: 'Mulesoft' },
              { icon: <Cloud className="w-12 h-12" />, name: 'Salesforce' },
            ].map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-icon">{tech.icon}</div>
                <p className="font-semibold mt-2">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-yellow-400/20 p-4 rounded-lg mb-8 inline-block">
            <div className="flex items-center justify-center gap-2">
              <Gift className="w-6 h-6 text-yellow-400" />
              <span className="font-semibold text-yellow-400">Current Promotion: Up to 40% off on selected projects!</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-8">Let's discuss your project!</h2>
          <p className="text-xl mb-4">Ready to transform your digital presence? Get in touch with us today.</p>
          <div className="bg-blue-800 p-6 rounded-lg mb-8 inline-block">
            <div className="flex items-center justify-center gap-3 mb-2">
              <CreditCard className="w-6 h-6" />
              <span className="font-semibold">Satisfaction-First Payment Policy</span>
            </div>
            <p className="text-blue-100">Pay only after your project is completed and you're 100% satisfied</p>
          </div>
          <button onClick={openWhatsApp} className="cta-button">
            <WhatsappIcon className="w-6 h-6" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2024 TechCraft Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;