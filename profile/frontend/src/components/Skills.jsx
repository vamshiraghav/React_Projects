import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Brain, Code, Database, Cloud, Smartphone, Zap } from 'lucide-react';
import { skills } from '../data/mockData';

const Skills = () => {
  const categoryIcons = {
    'AI/ML': Brain,
    'Frontend': Code,
    'Backend': Database,
    'DevOps': Cloud,
    'Mobile': Smartphone,
    'Database': Database
  };

  const categoryColors = {
    'AI/ML': 'from-purple-500 to-pink-500',
    'Frontend': 'from-blue-500 to-cyan-500',
    'Backend': 'from-green-500 to-emerald-500',
    'DevOps': 'from-orange-500 to-red-500',
    'Mobile': 'from-indigo-500 to-purple-500',
    'Database': 'from-teal-500 to-blue-500'
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
            <Zap className="w-3 h-3 mr-1" />
            Technical Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            13+ years of hands-on experience with cutting-edge technologies, 
            specializing in AI/ML and full-stack development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => {
            const IconComponent = categoryIcons[category] || Code;
            const colorClass = categoryColors[category] || 'from-gray-500 to-gray-600';
            
            return (
              <Card key={category} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${colorClass} text-white`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {skill.years}y
                          </Badge>
                          <span className="text-sm text-gray-600">{skill.level}%</span>
                        </div>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                        style={{
                          '--progress-background': `linear-gradient(to right, ${colorClass.replace('from-', '').replace('to-', ', ')})`
                        }}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skills Summary Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {skills.filter(s => s.category === 'AI/ML').length}
              </div>
              <div className="text-gray-600">AI/ML Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {skills.filter(s => s.level >= 90).length}
              </div>
              <div className="text-gray-600">Expert Level</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {Math.max(...skills.map(s => s.years))}
              </div>
              <div className="text-gray-600">Years Max Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">
                {Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length)}%
              </div>
              <div className="text-gray-600">Average Proficiency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;