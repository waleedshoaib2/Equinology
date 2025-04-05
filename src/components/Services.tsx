import { motion } from "framer-motion";
import {
  PenTool,
  Layout,
  Compass,
  Lightbulb,
  Ruler,
  Users,
} from "lucide-react";

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
        "We don't just offer specialist websites, we also create specific software that reflects real horse-world knowledge to support your equestrian business, this can include anything from booking systems for riding schools to client management systems to support your business.",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold tracking-wide mb-4 text-sky-400"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#ABABAB] max-w-2xl mx-auto"
          >
            We offer an extensive range of design and personalised services
            tailored to the unique needs of equestrians.
          </motion.p>
        </div>

        {/* Grid with 3 cards per row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 justify-items-center"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500"
            >
              <div
                className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 hover:rotate-12 flex justify-center items-center origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8"
                style={{ height: "17rem", width: "22rem" }}
              >
                <div className="z-10 flex flex-col items-center gap-2 text-center px-4">
                  <div className="mb-1">{service.icon}</div>
                  <span className="text-slate-400 text-xl font-bold">
                    {service.title}
                  </span>
                  <p className="text-gray-50 text-sm px-2 text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
