import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Trophy, Lightbulb, TrendingUp, Zap, Award, Target, Users, Heart } from 'lucide-react';
import { achievements } from '../data/mockData';

const Achievements = () => {
  const iconMap = {
    trophy: Trophy,
    lightbulb: Lightbulb,
    'trending-up': TrendingUp,
    zap: Zap,
    award: Award,
    target: Target,
    users: Users,
    heart: Heart
  };

  const categoryColors = {
    'Competition': 'from-yellow-500 to-orange-500',
    'Innovation': 'from-purple-500 to-pink-500',
    'Entrepreneurship': 'from-green-500 to-emerald-500',
    'Performance': 'from-blue-500 to-cyan-500',
    'Leadership': 'from-indigo-500 to-purple-500',
    'Community': 'from-pink-500 to-rose-500'
  };

  const spotlightAchievement = achievements[0]; // Top competitive programming achievement
  const otherAchievements = achievements.slice(1);

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">
            <Award className="w-3 h-3 mr-1" />
            Recognition & Success
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Demonstrating excellence in competitive programming, technical innovation, 
            entrepreneurship, and leadership that FANG companies value most
          </p>
        </div>

        {/* Spotlight Achievement - Competition Success */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 border-2 border-yellow-200 shadow-2xl">
            <CardContent className="p-10 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-8">
                <Trophy className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                🏆 Elite Competitive Programming Champion
              </h3>
              <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                {spotlightAchievement.description}
              </p>
              
              {/* Enhanced Metrics Display */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-6">
                {Object.entries(spotlightAchievement.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-600">{value}</div>
                    <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-4">
                <Badge className="bg-yellow-500 text-white text-lg px-6 py-3">
                  FANG-Ready Excellence
                </Badge>
                <Badge variant="outline" className="border-orange-500 text-orange-700 text-lg px-6 py-3">
                  {spotlightAchievement.year}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Other Major Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {otherAchievements.map((achievement) => {
            const IconComponent = iconMap[achievement.icon] || Award;
            const colorClass = categoryColors[achievement.category] || 'from-gray-500 to-gray-600';
            
            return (
              <Card key={achievement.id} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg h-full">
                <CardHeader className="pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${colorClass} rounded-xl mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {achievement.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {achievement.category}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {achievement.year}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  {/* Achievement Metrics */}
                  {achievement.metrics && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        {Object.entries(achievement.metrics).map(([key, value]) => (
                          <div key={key}>
                            <div className="font-semibold text-gray-800">{value}</div>
                            <div className="text-gray-600 text-xs capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* FANG-Ready Skills Summary */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Why FANG Companies Want This Profile
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">Elite Problem Solving</h4>
              <p className="text-sm text-gray-600">Top 0.03% globally in competitive programming</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">Proven Leadership</h4>
              <p className="text-sm text-gray-600">50+ engineers led with 95% retention</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">Scale Experience</h4>
              <p className="text-sm text-gray-600">10M+ users, 99.99% uptime systems</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Lightbulb className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">Innovation Track Record</h4>
              <p className="text-sm text-gray-600">Patents pending, $50M+ startup exit</p>
            </div>
          </div>
        </div>

        {/* Enhanced Achievement Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Career Highlights by Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">Top 100</div>
              <div className="text-gray-700">out of 300K participants</div>
              <div className="text-xs text-gray-500 mt-1">3 consecutive years</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">2</div>
              <div className="text-gray-700">Patents Pending</div>
              <div className="text-xs text-gray-500 mt-1">Multi-million $ potential</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">$50M+</div>
              <div className="text-gray-700">Startup Valuation</div>
              <div className="text-xs text-gray-500 mt-1">Successful exit</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700">Engineers Led</div>
              <div className="text-xs text-gray-500 mt-1">95% retention rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;