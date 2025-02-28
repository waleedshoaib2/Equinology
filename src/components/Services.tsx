import { motion } from 'framer-motion';
import { PenTool, Layout, Compass, Lightbulb, Ruler, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <PenTool className="w-10 h-10 text-[#3CAAFF]" />,
      title: "Equestrian Facility Design",
      description: "Comprehensive design services for state-of-the-art equestrian facilities, from initial concept to detailed planning."
    },
    {
      icon: <Layout className="w-10 h-10 text-[#3CAAFF]" />,
      title: "Stable Architecture",
      description: "Innovative stable designs that prioritize horse welfare, operational efficiency, and aesthetic excellence."
    },
    {
      icon: <Compass className="w-10 h-10 text-[#3CAAFF]" />,
      title: "Arena Planning",
      description: "Expert planning for indoor and outdoor arenas with optimal footing, lighting, and spectator accommodations."
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-[#3CAAFF]" />,
      title: "Equine Wellness Spaces",
      description: "Specialized designs for rehabilitation areas, hydrotherapy facilities, and other equine wellness spaces."
    },
    {
      icon: <Ruler className="w-10 h-10 text-[#3CAAFF]" />,
      title: "Property Development",
      description: "Full-scale property development services for equestrian estates, including landscape integration and infrastructure."
    },
    {
      icon: <Users className="w-10 h-10 text-[#3CAAFF]" />,
      title: "Consultation Services",
      description: "Expert consultation on facility improvements, operational efficiency, and sustainable equestrian practices."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDgwODA4Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMxNTE1MTUiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">
              Our Services
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#ABABAB] max-w-2xl mx-auto"
          >
            We offer a comprehensive range of design and consulting services tailored to the unique needs of equestrian facilities and horse enthusiasts.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-[#111111] to-[#0A0A0A] p-8 rounded-2xl border border-[#222222]/20 hover:border-[#3CAAFF]/30 transition-all duration-300 group hover:shadow-xl hover:shadow-[#000]/10"
            >
              <div className="bg-[#0A0A0A]/50 p-4 rounded-xl inline-block mb-6 group-hover:bg-[#111111] transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#F5F5F7]">{service.title}</h3>
              <p className="text-[#ABABAB]">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;