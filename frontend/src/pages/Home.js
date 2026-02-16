
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Brain, Palette, Cloud, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';

// FIX 1: env name consistent
const BACKEND_URL = process.env.REACT_APP_API;
const API = `${BACKEND_URL}/api`;

export default function Home() {
  const [reviews, setReviews] = useState([]); // already array (good)

  useEffect(() => {
    fetchReviews();
  }, []);

  // FIX 2: crash-proof fetch
  const fetchReviews = async () => {
    try {
      const response = await axios.get(`${API}/reviews?approved=true`);

      // SAFETY: backend kabhi object bhej de to bhi app crash na ho
      if (Array.isArray(response.data)) {
        setReviews(response.data.slice(0, 3));
      } else {
        setReviews([]);
      }
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
      setReviews([]); // IMPORTANT
    }
  };

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies',
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications',
    },
    {
      icon: Brain,
      title: 'AI Projects',
      description: 'Intelligent solutions powered by artificial intelligence',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love',
    },
    {
      icon: Cloud,
      title: 'Deployment & Hosting',
      description: 'Reliable cloud infrastructure and DevOps services',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 hero-gradient"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="logo.png"
              alt="WebSynthix Logo"
              className="h-24 w-24 mx-auto mb-8"
            />
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 gradient-text">
              WebSynthix
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 mb-6 font-medium">
              Works With You
            </p>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-12">
             WebSynthix is a professional website development agency building modern websites and digital solutions for startups and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/portfolio"
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 font-medium transition-all inline-flex items-center justify-center space-x-2"
              >
                <span>View Our Work</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="border border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-3 transition-all inline-flex items-center justify-center"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl hover:border-purple-500/50 transition-all group card-hover"
                >
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-white/60 text-sm">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      {reviews.length > 0 && (
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Client Reviews
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                What our clients say about working with us
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-xl"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-white/20'}
                      />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm mb-4">{review.message}</p>
                  <p className="text-white font-medium text-sm">- {review.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              Let's build something amazing together
            </p>
            <Link
              to="/contact"
              className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 font-medium transition-all inline-flex items-center justify-center space-x-2"
            >
              <span>Get In Touch</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}