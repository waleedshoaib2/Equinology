import { motion } from 'framer-motion';
import { PenTool, Layout, Compass, Lightbulb, Ruler, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <PenTool className="w-10 h-10 text-[#3CAAFF]" />,
      title: "Equestrian Web Design",
      description:
        "As equestrian specialists, we speak your language. Our personal web design knowledge allows for us to help build your perfect personal website tailored to your own specific needs.",
    },
    {
      icon: <Layout className="w-10 h-10 text-[#3CAAFF]" />,
      title: "Software Development",
      description:
        "We don't just offer specialist websites, we also create specific software that reflects real horse-world knowledge to support your equestrian business. This can include anything from booking systems for riding schools to client management systems to support your business.",
    },
    {
      icon: <Compass className="w-10 h-10 text-[#3CAAFF]" />,
      title: "Detailed Planning",
      description:
        "Our in depth planning before every project execution turns your equestrian vision into reality. We carefully map each step—from inspiring concepts to precise timelines—giving you clarity, confidence, and a clear path to the success of your online presence.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-[#3CAAFF]" />,
      title: "Full Transparency",
      description:
        "We provide clear, upfront pricing with no hidden fees, extra costs, or confusing technical jargon—giving you total peace of mind and certainty from start to finish.",
    },
    {
      icon: <Ruler className="w-10 h-10 text-[#3CAAFF]" />,
      title: "Personal Touch",
      description:
        "Your equestrian business deserves more than a basic template. We handcraft every aspect of your site—no shortcuts, no pre-made themes—just fully bespoke design, uniquely tailored to your vision and equestrian needs.",
    },
    {
      icon: <Users className="w-10 h-10 text-[#3CAAFF]" />,
      title: "Feedback",
      description:
        "Our discussions are straightforward and realistic—we say 'no' as openly as we say 'yes'. Expect clear guidance, honest feedback, and achievable outcomes, all provided through a free, no-obligation quote.",
    },
  ];

  // Adjusted container variants for a smoother stagger without extra viewport margin.
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // Delay children slightly and stagger them for a more gradual reveal.
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  // Tweaked item variants with an eased transition.
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDgwODA4Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMxNTE1MTUiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[#ABABAB] max-w-2xl mx-auto"
          >
            We offer an extensive range of design and personalised services tailored to the unique needs of equestrians.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-[#111111] to-[#0A0A0A] p-8 rounded-2xl border border-[#222222]/20 transition-all duration-300 group hover:shadow-xl hover:shadow-[#000]/10"
            >
              <div className="bg-[#0A0A0A]/50 p-4 rounded-xl inline-block mb-6 transition-colors duration-300 group-hover:bg-[#111111]">
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