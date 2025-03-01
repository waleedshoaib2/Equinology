import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactHero = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-black text-white">
    <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
      <source src="/contact-bg.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-6">
      <motion.h1 
        className="text-5xl font-bold text-blue-400 drop-shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Let's Connect
      </motion.h1>
      <motion.p 
        className="text-xl text-blue-300 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Reach out to us and let’s build something great together!
      </motion.p>
    </div>
  </section>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleChange = (e:any) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  return (
    <section className="py-16 px-4 bg-[#111111]">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center text-blue-400 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Get In Touch
        </motion.h2>
        <form className="space-y-6">
          {['Name', 'Email'].map((label, index) => (
            <div key={index}>
              <label className="block text-blue-200 mb-2">{label}</label>
              <input 
                type={label === 'Email' ? 'email' : 'text'}
                name={label.toLowerCase()}
                className="w-full p-3 rounded bg-gray-800 text-blue-200"
                placeholder={`Your ${label}`}
                onChange={handleChange}
              />
            </div>
          ))}
          <div>
            <label className="block text-blue-200 mb-2">Message</label>
            <textarea 
              name="message"
              className="w-full p-3 rounded bg-gray-800 text-blue-200"
              rows={4} 
              placeholder="Your Message"
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="w-full py-3 bg-[#FFD700] hover:bg-yellow-600 text-black font-bold rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

const ContactInfo = () => (
  <section className="py-16 px-4 bg-[#0A0A0A] text-blue-200">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2 
        className="text-4xl font-bold text-blue-400 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Contact Details
      </motion.h2>
      <div className="space-y-4">
        {[{ label: 'Email', value: 'info@example.com' }, { label: 'Phone', value: '+123 456 7890' }].map((item, index) => (
          <motion.p key={index} className="text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <span className="font-bold">{item.label}:</span> {item.value}
          </motion.p>
        ))}
      </div>
    </div>
  </section>
);

const FloatingCTA = () => (
  <a
    href="#contact"
    className="fixed bottom-8 right-8 bg-[#FFD700] text-black px-4 py-2 rounded-full shadow-lg hover:shadow-2xl transition-shadow"
  >
    Contact Us
  </a>
);

const ContactPage = () => (
  <div className="font-sans">
    <ContactHero />
    <ContactForm />
    <ContactInfo />
    <FloatingCTA />
  </div>
);

export default ContactPage;
