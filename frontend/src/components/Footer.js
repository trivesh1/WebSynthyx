import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_dcbfcb33-f727-4503-be07-af4fc803bc4e/artifacts/318nxd4a_Screenshot%202026-02-07%20at%2010.15.58%E2%80%AFPM.png" 
                alt="WebSynthix Logo" 
                className="h-10 w-10"
              />
              <span className="text-xl font-semibold text-white">WebSynthix</span>
            </div>
            <p className="text-white/60 text-sm mb-6 max-w-md">
              Works With You. We build modern websites, apps & AI solutions that transform your business.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/60 text-sm">
                <Mail size={16} />
                <span>hello@websynthix.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/60 text-sm">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-white/60 text-sm">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-white/60 text-sm hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="block text-white/60 text-sm hover:text-white transition-colors">About</Link>
              <Link to="/services" className="block text-white/60 text-sm hover:text-white transition-colors">Services</Link>
              <Link to="/portfolio" className="block text-white/60 text-sm hover:text-white transition-colors">Portfolio</Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <div className="space-y-3">
              <p className="text-white/60 text-sm">Web Development</p>
              <p className="text-white/60 text-sm">App Development</p>
              <p className="text-white/60 text-sm">AI Projects</p>
              <p className="text-white/60 text-sm">UI/UX Design</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} WebSynthix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}