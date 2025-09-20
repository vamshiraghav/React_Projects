import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Lightbulb, Filter } from 'lucide-react';
import { projects } from '../data/mockData';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const categoryColors = {
    'AI/ML': 'from-purple-500 to-pink-500',
    'Web Application': 'from-blue-500 to-cyan-500',
    'Big Data': 'from-indigo-500 to-purple-500',
    'Startup': 'from-green-500 to-emerald-500',
    'Mobile': 'from-orange-500 to-red-500'
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
            <Lightbulb className="w-3 h-3 mr-1" />
            Featured Work
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projects & Innovations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of cutting-edge projects spanning AI/ML applications, 
            full-stack web development, and successful startup ventures
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category 
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white' 
                  : 'hover:bg-blue-50 border-blue-200'
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const colorClass = categoryColors[project.category] || 'from-gray-500 to-gray-600';
            
            return (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                {/* Project Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${colorClass}`}></div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge 
                      variant="outline" 
                      className={`${
                        project.status === 'Production' 
                          ? 'bg-green-100 text-green-800 border-green-200' 
                          : 'bg-blue-100 text-blue-800 border-blue-200'
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <Badge variant="secondary" className="w-fit text-xs">
                    {project.category}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  {project.highlights && (
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Highlights:</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs py-0.5 px-2">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Projects Summary */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {projects.filter(p => p.category === 'AI/ML').length}
              </div>
              <div className="text-gray-600">AI/ML Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {projects.filter(p => p.status === 'Production').length}
              </div>
              <div className="text-gray-600">In Production</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {projects.length}
              </div>
              <div className="text-gray-600">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">5M+</div>
              <div className="text-gray-600">Startup Views</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;