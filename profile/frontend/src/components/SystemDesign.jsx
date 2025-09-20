import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Network, Database, Cloud, Zap, Users, TrendingUp, Code2, ArrowRight } from 'lucide-react';

const SystemDesign = () => {
  const architectures = [
    {
      id: 1,
      title: "Distributed ML Pipeline",
      description: "Designed high-throughput machine learning pipeline processing 10M+ video frames daily",
      scale: "10M+ frames/day",
      latency: "<100ms",
      availability: "99.9%",
      components: [
        "Apache Kafka for event streaming",
        "MongoDB for metadata and document storage", 
        "Redis for caching and session management", 
        "Kubernetes for container orchestration",
        "TensorFlow Serving for model deployment",
        "NVIDIA CUDA for GPU acceleration"
      ],
      challenges: "Real-time processing, auto-scaling, fault tolerance",
      impact: "Reduced processing time by 80%, saved $1M+ in infrastructure costs"
    },
    {
      id: 2,
      title: "Enterprise Microservices Platform",
      description: "Architected cloud-native platform serving 10M+ users with 99.99% uptime",
      scale: "10M+ users",
      latency: "<50ms",
      availability: "99.99%",
      components: [
        "API Gateway with rate limiting",
        "Service mesh for inter-service communication",
        "PostgreSQL with read replicas and sharding",
        "MongoDB for document and session storage",
        "ElasticSearch for full-text search",
        "Prometheus & Grafana for monitoring"
      ],
      challenges: "Data consistency, service discovery, monitoring at scale",
      impact: "60% latency reduction, 99.99% uptime, $2M annual cost savings"
    },
    {
      id: 3,
      title: "Real-Time Analytics Engine",
      description: "Built streaming analytics platform processing 100M+ events daily",
      scale: "100M+ events/day",
      latency: "<10ms",
      availability: "99.95%",
      components: [
        "Apache Kafka for real-time streaming",
        "ClickHouse for analytical queries",
        "Snowflake for data warehousing and analytics",
        "PostgreSQL for transactional data",
        "Lambda architecture for batch & stream processing",
        "Redis for real-time caching",
        "React.js for interactive dashboards"
      ],
      challenges: "Stream processing, data consistency, query optimization, multi-tenant data isolation",
      impact: "35% increase in user engagement, sub-10ms query response, petabyte-scale analytics"
    },
    {
      id: 4,
      title: "Enterprise Data Lake Platform",
      description: "Built petabyte-scale data lake with multi-database architecture serving 500+ data scientists",
      scale: "5PB+ data",
      latency: "<1s queries",
      availability: "99.95%",
      components: [
        "Snowflake for cloud data warehousing",
        "Apache Spark for large-scale data processing",
        "PostgreSQL for metadata and governance",
        "MongoDB for unstructured data storage",
        "Apache Kafka for real-time data ingestion",
        "Apache Airflow for workflow orchestration"
      ],
      challenges: "Data governance, multi-tenant access, cost optimization, schema evolution",
      impact: "60% cost reduction, 10x query performance improvement, 500+ users onboarded"
    }
  ];

  const systemDesignSkills = [
    { skill: "Distributed Systems", icon: Network, color: "from-blue-500 to-cyan-500" },
    { skill: "Database Design", icon: Database, color: "from-green-500 to-emerald-500" },
    { skill: "Cloud Architecture", icon: Cloud, color: "from-purple-500 to-pink-500" },
    { skill: "Performance Optimization", icon: Zap, color: "from-yellow-500 to-orange-500" },
    { skill: "Scalability Design", icon: TrendingUp, color: "from-red-500 to-pink-500" },
    { skill: "API Design", icon: Code2, color: "from-indigo-500 to-purple-500" }
  ];

  return (
    <section id="system-design" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-indigo-100 text-indigo-800 border-indigo-200">
            <Network className="w-3 h-3 mr-1" />
            System Architecture
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            System Design & Architecture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proven expertise in designing and implementing large-scale distributed systems 
            that serve millions of users with high availability and performance
          </p>
        </div>

        {/* System Design Skills */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {systemDesignSkills.map((item) => {
            const IconComponent = item.icon;
            return (
              <Card key={item.skill} className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg mb-3 mx-auto`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-sm text-gray-800">{item.skill}</h4>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Architecture Examples */}
        <div className="space-y-8">
          {architectures.map((arch, index) => (
            <Card key={arch.id} className="shadow-xl border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{arch.title}</h3>
                    <p className="text-gray-700">{arch.description}</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{arch.scale}</div>
                      <div className="text-xs text-gray-600">Scale</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{arch.latency}</div>
                      <div className="text-xs text-gray-600">Latency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{arch.availability}</div>
                      <div className="text-xs text-gray-600">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Architecture Components */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Database className="w-4 h-4 text-blue-500" />
                      Key Components
                    </h4>
                    <ul className="space-y-2">
                      {arch.components.map((component, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          {component}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Challenges */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-orange-500" />
                      Technical Challenges
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {arch.challenges}
                    </p>
                  </div>

                  {/* Business Impact */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      Business Impact
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {arch.impact}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* System Design Stats */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Architecture Impact Summary
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10M+</div>
              <div className="text-gray-700">Users Served Daily</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">99.99%</div>
              <div className="text-gray-700">Highest Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">80%</div>
              <div className="text-gray-700">Performance Improvement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">$3M+</div>
              <div className="text-gray-700">Cost Savings</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Discuss System Architecture?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's talk about designing scalable systems for your next big challenge
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3"
            >
              Schedule Architecture Discussion
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemDesign;