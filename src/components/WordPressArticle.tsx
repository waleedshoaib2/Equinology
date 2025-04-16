import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, AlertTriangle, Zap, Shield, Clock, DollarSign, Code, Palette, Database } from 'lucide-react';

const WordPressArticle = () => {
  const pros = [
    {
      icon: <DollarSign className="w-6 h-6 text-blue-400" />,
      title: "Cost-Effective",
      description: "WordPress is free to use, with many themes and plugins available at low or no cost, making it an attractive option for budget-conscious equestrian businesses."
    },
    {
      icon: <Palette className="w-6 h-6 text-blue-400" />,
      title: "User-Friendly Design",
      description: "The intuitive interface allows stable owners and equestrian professionals to manage their content without technical expertise."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: "Quick Setup",
      description: "WordPress sites can be set up relatively quickly, allowing equestrian businesses to establish an online presence faster than custom development."
    },
    {
      icon: <Database className="w-6 h-6 text-blue-400" />,
      title: "Content Management",
      description: "Easy to update and manage content, perfect for sharing news, events, and horse-related information."
    }
  ];

  const cons = [
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: "Security Vulnerabilities",
      description: "As the most popular CMS, WordPress is a frequent target for hackers. Equestrian businesses handling sensitive client data need additional security measures."
    },
    {
      icon: <Clock className="w-6 h-6 text-red-400" />,
      title: "Performance Issues",
      description: "Plugin bloat and unoptimized themes can lead to slow loading times, which is crucial for mobile users at stables or shows."
    },
    {
      icon: <Code className="w-6 h-6 text-red-400" />,
      title: "Limited Customization",
      description: "While flexible, WordPress can be restrictive for unique equestrian business needs, especially for specialized booking systems or horse management features."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-red-400" />,
      title: "Hidden Costs",
      description: "Premium plugins, themes, and necessary security measures can add up, potentially making it more expensive than initially anticipated."
    }
  ];

  const recommendations = [
    "Consider your specific business needs before choosing WordPress",
    "Invest in proper security measures and regular maintenance",
    "Optimize for mobile users who may be accessing your site from stables",
    "Plan for scalability as your equestrian business grows",
    "Consider hybrid solutions that combine WordPress with custom features"
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Is WordPress Suitable for Equestrian Businesses?
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 mb-8">
            WordPress powers over 40% of all websites, but is it the right choice for equestrian businesses? 
            This comprehensive analysis explores the benefits and limitations of using WordPress for stables, 
            riding schools, and equestrian service providers.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white">The Pros of WordPress for Equestrian Businesses</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {pros.map((pro, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111111] p-6 rounded-lg border border-gray-800"
              >
                <div className="flex items-center gap-3 mb-3">
                  {pro.icon}
                  <h3 className="text-xl font-semibold text-white">{pro.title}</h3>
                </div>
                <p className="text-gray-400">{pro.description}</p>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white">The Limitations and Challenges</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {cons.map((con, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111111] p-6 rounded-lg border border-gray-800"
              >
                <div className="flex items-center gap-3 mb-3">
                  {con.icon}
                  <h3 className="text-xl font-semibold text-white">{con.title}</h3>
                </div>
                <p className="text-gray-400">{con.description}</p>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Key Considerations for Equestrian Businesses</h2>
          <div className="bg-[#111111] p-6 rounded-lg border border-gray-800 mb-12">
            <ul className="space-y-4">
              {recommendations.map((recommendation, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>{recommendation}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-400/10 p-6 rounded-lg border border-blue-400/20">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Final Verdict</h3>
                <p className="text-gray-300">
                  WordPress can be a suitable solution for many equestrian businesses, particularly those with 
                  straightforward needs and limited technical resources. However, businesses requiring specialized 
                  features, handling sensitive data, or expecting significant growth should carefully consider 
                  their options and potentially invest in a custom solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </article>
  );
};

export default WordPressArticle; 