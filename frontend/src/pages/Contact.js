import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';

import { Mail, MessageSquare, User, Star, Send } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_API;
const API = `${BACKEND_URL}/api`;

export default function Contact() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [reviewForm, setReviewForm] = useState({ name: '', rating: 5, message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post(`${API}/contacts`, contactForm);
      toast.success('Message sent successfully!');
      setContactForm({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post(`${API}/reviews`, reviewForm);
      toast.success('Review submitted! It will appear after approval.');
      setReviewForm({ name: '', rating: 5, message: '' });
    } catch (error) {
      toast.error('Failed to submit review. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-base sm:text-lg text-white/60 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message or leave a review.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <MessageSquare className="text-purple-400" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Send a Message</h2>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label className="block text-white/80 text-sm mb-2" htmlFor="contact-name">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                  <input
                    id="contact-name"
                    data-testid="contact-name-input"
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder:text-white/30"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 text-sm mb-2" htmlFor="contact-email">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                  <input
                    id="contact-email"
                    data-testid="contact-email-input"
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder:text-white/30"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 text-sm mb-2" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  data-testid="contact-message-input"
                  required
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder:text-white/30 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                data-testid="contact-submit-btn"
                disabled={submitting}
                className="w-full bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                <Send size={20} />
              </button>
            </form>
          </motion.div>

          {/* Review Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-yellow-500/20 p-3 rounded-lg">
                <Star className="text-yellow-400" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Leave a Review</h2>
            </div>

            <form onSubmit={handleReviewSubmit} className="space-y-6">
              <div>
                <label className="block text-white/80 text-sm mb-2" htmlFor="review-name">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                  <input
                    id="review-name"
                    data-testid="review-name-input"
                    type="text"
                    required
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder:text-white/30"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 text-sm mb-2">Rating</label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      data-testid={`rating-star-${star}`}
                      onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        size={32}
                        className={star <= reviewForm.rating ? 'fill-yellow-400 text-yellow-400' : 'text-white/20'}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-white/80 text-sm mb-2" htmlFor="review-message">
                  Your Review
                </label>
                <textarea
                  id="review-message"
                  data-testid="review-message-input"
                  required
                  value={reviewForm.message}
                  onChange={(e) => setReviewForm({ ...reviewForm, message: e.target.value })}
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder:text-white/30 resize-none"
                  placeholder="Share your experience working with us..."
                />
              </div>

              <button
                type="submit"
                data-testid="review-submit-btn"
                disabled={submitting}
                className="w-full bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <span>{submitting ? 'Submitting...' : 'Submit Review'}</span>
                <Send size={20} />
              </button>
              <p className="text-white/40 text-xs text-center">Reviews are approved by admin before appearing on the site</p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}