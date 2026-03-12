import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Section from '../components/Section';
import Button from '../components/Button';
import { PORTFOLIO } from '../utils/constants';
import { submitContact } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus({ type: null, message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      await submitContact(formData);
      setStatus({ type: 'success', message: 'Thank you! Your message has been sent.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      const msg = err.response?.data?.message || err.response?.data?.errors?.[0]?.message || 'Failed to send message. Please try again.';
      setStatus({ type: 'error', message: msg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="I'd love to hear from you">
      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Have a project in mind or want to connect? Feel free to reach out.
          </p>
          <div className="space-y-4">
            <a
              href={`mailto:${PORTFOLIO.email}`}
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors break-all min-h-[44px]"
            >
              <FaEnvelope className="w-5 h-5 text-primary-500 shrink-0" />
              <span className="min-w-0">{PORTFOLIO.email}</span>
            </a>
            <a
              href={`tel:${PORTFOLIO.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors min-h-[44px]"
            >
              <FaPhone className="w-5 h-5 text-primary-500 shrink-0" />
              {PORTFOLIO.phone}
            </a>
            <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <FaMapMarkerAlt className="w-5 h-5 text-primary-500" />
              {PORTFOLIO.location}
            </p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 min-h-[48px] rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              inputMode="email"
              autoComplete="email"
              className="w-full px-4 py-3 min-h-[48px] rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-base min-h-[120px]"
              placeholder="Your message..."
            />
          </div>
          {status.message && (
            <p
              className={`text-sm ${
                status.type === 'success'
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'
              }`}
            >
              {status.message}
            </p>
          )}
          <Button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.form>
      </div>
    </Section>
  );
};

export default Contact;
