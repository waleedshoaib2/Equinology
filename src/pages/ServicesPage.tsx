import { ChevronRight, Code, Palette, ShoppingBag, Camera, Globe, MessageSquare, Users, Award, Heart } from 'lucide-react';

const HeroSection = () => {
  const handleScroll = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl font-light text-white tracking-wide">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Equestrian Web Design
          </span>
        </h1>

        <div className="flex justify-center my-6">
          <button
            onClick={handleScroll}
            className="px-8 py-3 bg-transparent border border-blue-400/30 text-blue-300 rounded-full font-light tracking-wide group flex items-center justify-center gap-2"
          >
            Explore Our Services
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Crafting sophisticated digital experiences for the equestrian world, 
          where timeless elegance meets modern technology.
        </p>
      </div>
    </section>
  );
};

const BrandingIdentitySection = () => {
  const items = [
    {
      title: "Logo Design",
      desc: "We create unique, eye-catching logos that capture the essence of your equestrian brand. Whether you run a livery yard, riding school, equestrian photography business, or any other equestrian venture, we design highly technical logos that seamlessly intertwine text and icons or opt for a more simplistic, elegant approach tailored to your brand.",
      image: "https://i.postimg.cc/wTJyrHBk/temp-Imagea-KPmc-D.avif",
      icon: <Palette className="w-8 h-8 text-[#3CAAFF]" />
    },
    {
      title: "Brand Collateral",
      desc: "We design high-quality business cards, signage, and digital assets tailored to the equestrian industry. Our branding materials ensure a sophsticated and professional presence across print and digital platforms, maintaining a consistent identity for your equestrian business.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600",
      icon: <Award className="w-8 h-8 text-[#3CAAFF]" />
    },
    {
      title: "Visual Identity",
      desc: "A strong visual identity sets your brand apart. We develop sophsticated branding systems, including color palettes, typography, and imagery, ensuring that your equestrian business maintains a professional and recognizable presence across all platforms.",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600",
      icon: <Heart className="w-8 h-8 text-[#3CAAFF]" />
    }
  ];

  return (
    <section className="py-32 px-4 relative bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-semibold text-center mb-16 text-white tracking-wide">
          <span className="bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">
            Branding & Identity
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-2xl shadow-xl border border-[#222] bg-gradient-to-br from-[#111111] to-[#1a1a1a] transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#3CAAFF]/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover rounded-t-2xl transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              <div className="p-8 flex flex-col items-start">
                <div className="flex items-center gap-3 mb-4">
                  {item.icon}
                  <h3 className="text-2xl font-medium text-white tracking-wide">{item.title}</h3>
                </div>
                <p className="text-[#ABABAB] text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: 'Custom Web Development',
      description: 'Bespoke websites tailored for equestrian businesses with modern design and functionality.',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Custom online stores for selling equestrian products and services with secure payment processing.',
      icon: <ShoppingBag className="w-6 h-6" />
    },
    {
      title: 'Photography & Media',
      description: 'Professional photography and media services specialized for equestrian businesses.',
      icon: <Camera className="w-6 h-6" />
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your equestrian business online.',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Social Media Management',
      description: 'Expert social media management to build and engage your equestrian community.',
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: 'Event Coverage',
      description: 'Professional coverage of equestrian events with live streaming capabilities.',
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="py-32 px-4 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-16">
          <span className="bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">
            Our Services
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-2xl shadow-xl border border-[#222] bg-gradient-to-br from-[#111111] to-[#1a1a1a] transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#3CAAFF]/50"
            >
              <div className="p-8 flex flex-col items-start">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#0A0A0A]/50 p-4 rounded-xl inline-block mb-6 group-hover:bg-[#111111] transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-medium text-white tracking-wide">{service.title}</h3>
                </div>
                <p className="text-[#ABABAB] text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function ServicesPage() {
  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F7]">
      <HeroSection />
      <BrandingIdentitySection />
      <ServicesSection />
    </div>
  );
}

export default ServicesPage;
