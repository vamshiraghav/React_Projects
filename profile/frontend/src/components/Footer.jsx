import React from 'react';
import { Badge } from './ui/badge';
import { Heart, Github, Linkedin, Mail, Phone, MapPin, Code, Zap } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
    { icon: Phone, href: `tel:${personalInfo.phone}`, label: 'Phone' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
                {personalInfo.name}
              </h3>
              <p className="text-xl text-blue-400 font-semibold mb-4">
                {personalInfo.title}
              </p>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Passionate about building innovative solutions with AI/ML and modern web technologies. 
                Always excited to collaborate on challenging projects and share knowledge with the community.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-400 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-blue-400 transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Highlights</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-yellow-500 text-yellow-900">
                  Top 100
                </Badge>
                <span className="text-gray-300 text-sm">out of 3L participants</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-purple-500 text-purple-100">
                  Patents
                </Badge>
                <span className="text-gray-300 text-sm">Innovation contributions</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-500 text-green-100">
                  5M+ Views
                </Badge>
                <span className="text-gray-300 text-sm">Startup success</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-500 text-blue-100">
                  13+ Years
                </Badge>
                <span className="text-gray-300 text-sm">Professional experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                );
              })}
            </div>

            {/* Tech Stack Icons */}
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-sm">Built with</span>
              <Code className="w-4 h-4" />
              <span className="text-sm">React</span>
              <Zap className="w-4 h-4" />
              <span className="text-sm">& lots of ☕</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and passion for code.</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Available for new opportunities</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;