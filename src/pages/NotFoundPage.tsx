import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Home, Search, AlertCircle } from 'lucide-react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-[0.03]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3CAAFF]/10 rounded-full filter blur-[128px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#93c5fd]/10 rounded-full filter blur-[128px] translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#3CAAFF]/10 mb-8">
            <AlertCircle className="w-12 h-12 text-[#3CAAFF]" />
          </div>
          <h1 className="text-6xl sm:text-8xl font-bold mb-6 bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white/90 mb-4">
            Oops! The page you're looking for has galloped away
          </h2>
          <p className="text-[#94a3b8]/80 max-w-xl mx-auto mb-12">
            Don't worry, we'll help you find your way back. The page you're looking for might have been moved, deleted, or never existed in the first place.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-md mx-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] text-[#0A0A0A] rounded-lg font-medium hover:shadow-lg hover:shadow-[#3CAAFF]/25 transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/contact')}
            className="flex items-center justify-center gap-2 px-6 py-3 border border-[#3CAAFF]/30 text-[#3CAAFF] rounded-lg font-medium hover:border-[#3CAAFF]/60 hover:bg-[#3CAAFF]/5 transition-all duration-300"
          >
            <Search className="w-5 h-5" />
            Contact Support
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16"
        >
          <p className="text-[#94a3b8]/60 text-sm">
            While you're here, why not check out our latest projects?
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 mt-4 text-[#3CAAFF] hover:text-[#00E0FF] transition-colors duration-300"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage; 