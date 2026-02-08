import { motion } from 'framer-motion';
import { Code, Smartphone, Brain, Palette, Cloud, Zap } from 'lucide-react';


export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites built with modern frameworks',
      features: ['React & Next.js', 'Node.js & Python', 'RESTful APIs', 'Database Design'],
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile solutions',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'],
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: Brain,
      title: 'AI Projects',
      description: 'Intelligent solutions powered by AI/ML',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Chatbots & Assistants'],
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful interfaces that users love',
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing'],
      gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
      icon: Cloud,
      title: 'Deployment & Hosting',
      description: 'Reliable infrastructure and DevOps',
      features: ['AWS & Google Cloud', 'Docker & Kubernetes', 'CI/CD Pipelines', '24/7 Monitoring'],
      gradient: 'from-indigo-500/20 to-purple-500/20',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed and efficiency improvements',
      features: ['Code Optimization', 'Caching Strategies', 'SEO Optimization', 'Load Time Reduction'],
      gradient: 'from-yellow-500/20 to-orange-500/20',
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-base sm:text-lg text-white/60 max-w-3xl mx-auto">
            Comprehensive digital solutions to transform your business and drive growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
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
                data-testid={`service-detail-${index}`}
              >
                <div className={`bg-gradient-to-br ${service.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-white/50 text-sm flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}