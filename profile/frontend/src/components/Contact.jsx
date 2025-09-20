import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Mail, Phone, Linkedin, Github, MapPin, MessageCircle, Send, Calendar } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-blue-500 to-cyan-500',
      description: 'Best for detailed discussions'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'from-green-500 to-emerald-500',
      description: 'Available during business hours'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Professional Network',
      href: personalInfo.linkedin,
      color: 'from-blue-600 to-blue-800',
      description: 'Connect and network professionally'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Code Repository',
      href: personalInfo.github,
      color: 'from-gray-700 to-gray-900',
      description: 'View my code and contributions'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
            <MessageCircle className="w-3 h-3 mr-1" />
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Open to exciting opportunities, collaborations, and conversations about 
            technology, AI/ML, and software engineering
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((contact) => {
            const IconComponent = contact.icon;
            
            return (
              <Card key={contact.label} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
                <CardHeader className="pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${contact.color} rounded-xl mb-4 mx-auto`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {contact.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-800 mb-1">{contact.value}</p>
                    <p className="text-sm text-gray-600">{contact.description}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-blue-50 border-blue-200"
                    onClick={() => window.open(contact.href, contact.href.startsWith('mailto') || contact.href.startsWith('tel') ? '_self' : '_blank')}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Current Status & Availability */}
        <div className="mb-16">
          <Card className="shadow-lg border-0 bg-gradient-to-r from-green-50 to-emerald-50">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Current Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-lg font-medium text-gray-800">Available for new opportunities</span>
                </div>
                <p className="text-gray-600">
                  <strong>Current Role:</strong> {personalInfo.title} at {personalInfo.currentCompany}
                </p>
                <p className="text-gray-600">
                  <strong>Location:</strong> {personalInfo.location}
                </p>
                <p className="text-gray-600">
                  <strong>Interests:</strong> AI/ML Projects, Full-Stack Development, Technical Leadership
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Let's Build Something Amazing Together
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24h</div>
              <div className="text-gray-600">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">13+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">Global</div>
              <div className="text-gray-600">Remote Ready</div>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open(`mailto:${personalInfo.email}`, '_self')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;