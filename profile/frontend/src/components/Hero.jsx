import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Content */}
        <div className="mb-8">
          <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
            <MapPin className="w-3 h-3 mr-1" />
            {personalInfo.location}
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {personalInfo.name}
          </h1>
          
          <div className="text-2xl md:text-3xl text-blue-600 font-semibold mb-4">
            {personalInfo.title}
          </div>
          
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.subtitle}
          </p>
          
          <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto">
            {personalInfo.bio}
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{personalInfo.yearsOfExperience}+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600">Top 100</div>
            <div className="text-gray-600">out of 3L participants</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600">5M+</div>
            <div className="text-gray-600">Startup Views</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">Patent</div>
            <div className="text-gray-600">Worthy Ideas</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 text-lg"
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
        </div>

        {/* Contact Links */}
        <div className="flex justify-center gap-6">
          <a 
            href={`mailto:${personalInfo.email}`}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">{personalInfo.email}</span>
          </a>
          <a 
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Linkedin className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a 
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a 
            href={`tel:${personalInfo.phone}`}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">{personalInfo.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;