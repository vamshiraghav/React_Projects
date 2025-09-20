import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Code, Terminal, Cpu, Star, GitFork } from 'lucide-react';
import { codingPlatforms, openSourceProjects } from '../data/mockData';

const CodingPlatforms = () => {
  const iconMap = {
    github: Github,
    code: Code,
    terminal: Terminal,
    cpu: Cpu
  };

  const platformColors = {
    'GitHub': 'from-gray-800 to-gray-900',
    'LeetCode': 'from-orange-500 to-yellow-500',
    'HackerRank': 'from-green-500 to-emerald-500',
    'Codeforces': 'from-blue-500 to-cyan-500'
  };

  return (
    <section id="coding" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-gray-100 text-gray-800 border-gray-200">
            <Code className="w-3 h-3 mr-1" />
            Coding Presence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Coding Platforms & Open Source
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Active presence across major coding platforms and meaningful contributions 
            to the open source community
          </p>
        </div>

        {/* Coding Platforms */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Coding Platforms
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {codingPlatforms.map((platform) => {
              const IconComponent = iconMap[platform.icon] || Code;
              const colorClass = platformColors[platform.name] || 'from-blue-500 to-cyan-500';
              
              return (
                <Card key={platform.name} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
                  <CardHeader className="pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${colorClass} rounded-xl mb-4 mx-auto`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {platform.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600">
                      {platform.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-blue-50 border-blue-200"
                      onClick={() => window.open(platform.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Profile
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Open Source Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Open Source Contributions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openSourceProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </CardTitle>
                    <Github className="w-5 h-5 text-gray-600" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs py-0.5 px-2">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span>{project.forks}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(project.url, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Repository
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* GitHub Stats Summary */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Open Source Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {openSourceProjects.length}
              </div>
              <div className="text-gray-600">Active Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                {openSourceProjects.reduce((sum, p) => sum + p.stars, 0)}
              </div>
              <div className="text-gray-600">Total Stars</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {openSourceProjects.reduce((sum, p) => sum + p.forks, 0)}
              </div>
              <div className="text-gray-600">Total Forks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {new Set(openSourceProjects.flatMap(p => p.technologies)).size}
              </div>
              <div className="text-gray-600">Technologies Used</div>
            </div>
          </div>
          
          {/* Note about placeholder data */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm text-center">
              <strong>Note:</strong> Open source project data shown above is placeholder content. 
              You can easily update this section with your actual GitHub repositories and contributions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingPlatforms;