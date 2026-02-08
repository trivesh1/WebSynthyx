import { motion } from 'framer-motion';
import { Users, Target, Award, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Users,
      title: 'Collaborative',
      description: 'We work closely with you at every step',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering measurable results',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Excellence in every line of code',
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our success',
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
            About <span className="gradient-text">WebSynthix</span>
          </h1>
          <p className="text-base sm:text-lg text-white/60 max-w-3xl mx-auto">
            We're a digital agency passionate about creating innovative solutions that drive real business results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1630673470267-417e4d361129?q=80&w=1000&auto=format&fit=crop"
              alt="Team"
              className="rounded-2xl w-full h-[400px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Building the Future Together
            </h2>
            <p className="text-white/60 mb-4">
              Founded with a vision to bridge the gap between technology and business, WebSynthix has grown into a trusted partner for companies looking to innovate and scale.
            </p>
            <p className="text-white/60 mb-4">
              Our team of experienced developers, designers, and strategists brings years of expertise across various industries, ensuring every project is executed with precision and creativity.
            </p>
            <p className="text-white/60">
              We don't just build products—we craft experiences that resonate with users and deliver tangible value to businesses.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-xl text-center"
                  data-testid={`value-card-${index}`}
                >
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-white/60 text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}