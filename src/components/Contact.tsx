import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock as ClockIcon,
  Trophy,
  Smile
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// Stats for animated counters
const statsConfig = [
  { icon: Trophy, label: 'Projects', end: 120, suffix: '+', gradient: 'from-yellow-400 to-red-400' },
  { icon: Smile, label: 'Happy Clients', end: 98, suffix: '%', gradient: 'from-green-400 to-teal-400' },
  { icon: ClockIcon, label: 'Avg. Response (hrs)', end: 1, suffix: 'h', gradient: 'from-blue-400 to-indigo-400' }
];

// Dummy weekly data
const weeklyData = [
  { day: 'Mon', projects: 15 },
  { day: 'Tue', projects: 18 },
  { day: 'Wed', projects: 12 },
  { day: 'Thu', projects: 22 },
  { day: 'Fri', projects: 20 },
  { day: 'Sat', projects: 8 },
  { day: 'Sun', projects: 5 }
];

// Hook for count-up animation
function useCountUp(end: number, duration = 2) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const totalFrames = duration * 60;
    const increment = end / totalFrames;
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      start += increment;
      if (frame >= totalFrames) {
        clearInterval(interval);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [end, duration]);
  return count;
}

interface FormData { name: string; email: string; subject: string; message: string; }
interface FormErrors { name: string; email: string; subject: string; message: string; }

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('80J1F42C4FTE8BasP');
  }, []);

  // Validation
  const validate = useCallback(() => {
    const errs: FormErrors = { name: '', email: '', subject: '', message: '' };
    let ok = true;
    if (!formData.name.trim()) { errs.name = 'Required'; ok = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { errs.email = formData.email ? 'Invalid' : 'Required'; ok = false; }
    if (!formData.subject.trim()) { errs.subject = 'Required'; ok = false; }
    if (formData.message.trim().length < 10) { errs.message = 'Min 10 chars'; ok = false; }
    setErrors(errs);
    return ok;
  }, [formData]);

  // Change handler
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(f => ({ ...f, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(e => ({ ...e, [name]: '' }));
    }
  }, [errors]);

  // Submit
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const res = await emailjs.send('service_v1q2oqf', 'template_fznsvjy', {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      });
      if (res.text === 'OK') {
        toast.success("Yeehaw! Your message is on its way.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else throw new Error();
    } catch {
      toast.error('Shoot—something misfired. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validate]);

  return (
    <section id="contact" className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Animated background blob */}
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 bg-purple-700 opacity-20 rounded-full filter blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
          >
            Let’s Ride Together
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
          >
            Share your vision—our experts will craft a bespoke equestrian solution.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {statsConfig.map(({ icon: Icon, label, end, suffix, gradient }) => {
            const count = useCountUp(end, 2);
            return (
              <motion.div
                key={label}
                whileHover={{ scale: 1.05 }}
                className={`relative p-6 rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} text-white shadow-2xl`}
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full mix-blend-overlay animate-pulse" />
                <div className="relative z-10 flex items-center justify-between mb-4">
                  <Icon className="w-8 h-8" />
                  <span className="text-3xl font-bold">{count}{suffix}</span>
                </div>
                <p className="uppercase text-sm tracking-wide">{label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Chart */}
        <div className="bg-gray-800 p-6 rounded-xl mb-12 shadow-lg">
          <h3 className="text-lg text-white mb-4">Weekly Projects</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={weeklyData}>
              <CartesianGrid stroke="rgba(255,255,255,0.1)" strokeDasharray="3 3" />
              <XAxis dataKey="day" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
                itemStyle={{ color: '#fff' }}
              />
              <Line
                type="monotone"
                dataKey="projects"
                stroke="#3CAAFF"
                strokeWidth={2}
                dot={{ r: 4, fill: '#00E0FF' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl space-y-6"
          >
            {(['name', 'email', 'subject'] as const).map(field => (
              <div key={field} className="relative group">
                <input
                  id={field}
                  name={field}
                  type={field === 'email' ? 'email' : 'text'}
                  value={formData[field]}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className={
                    `w-full bg-transparent border-b-2 ${errors[field] ? 'border-red-500' : 'border-gray-600'}
                    py-2 placeholder-gray-500 text-white focus:outline-none focus:border-purple-400`
                  }
                />
                {errors[field] && (
                  <motion.span
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="absolute left-0 -bottom-5 text-sm text-red-500"
                  >
                    {errors[field]}
                  </motion.span>
                )}
              </div>
            ))}

            <div className="relative group">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder="Your message…"
                className={
                  `w-full bg-transparent border-b-2 ${errors.message ? 'border-red-500' : 'border-gray-600'}
                  py-2 placeholder-gray-500 text-white resize-none focus:outline-none focus:border-purple-400`
                }
              />
              {errors.message && (
                <motion.span
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="absolute left-0 -bottom-5 text-sm text-red-500"
                >
                  {errors.message}
                </motion.span>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full flex items-center justify-center gap-2 py-3 font-semibold text-black rounded-xl
                         bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:shadow-pink-500/40 transition"
            >
              {isSubmitting ? 'Sending…' : <>Send <Send /></>}</motion.button>
          </motion.form>

          {/* Info Cards */}
          <motion.div
            initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-6" multiple":false}]}