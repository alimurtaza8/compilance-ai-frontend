
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bot, FileCheck, BarChart3, Clock, Shield, Zap, ArrowRight, Play } from 'lucide-react';

const ProductSection = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Native Compliance Agent",
      description: "Patent-pending AI technology specifically designed for ARC-AMPE framework compliance monitoring",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: FileCheck,
      title: "Automated Evidence Generation",
      description: "Continuously generates audit-ready documentation and compliance evidence in real-time",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: BarChart3,
      title: "Real-Time Compliance Scoring",
      description: "Advanced analytics and scoring system that tracks compliance status across all frameworks",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Clock,
      title: "Rapid Deployment",
      description: "Get fully compliant in days, not months, with our streamlined onboarding process",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Shield,
      title: "ARC-AMPE Expertise",
      description: "Purpose-built for Medicaid, ACA, and federally funded organization requirements",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: Zap,
      title: "Replaces Consultants",
      description: "Eliminate expensive consultant-led models with intelligent automation that never sleeps",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    }
  ];

  return (
    <section id="product" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 text-blue-600 border-blue-600 px-4 py-2">
            Patent-Pending Technology
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            AuditPilot™ Features
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The only AI compliance agent that understands ARC-AMPE frameworks natively, 
            delivering continuous monitoring and automated audit preparation.
          </p>
        </div>

        {/* Product demo section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">See It In Action</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Watch how our AI agent transforms months of manual compliance work into days of automated precision.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-semibold text-sm">1</span>
                </div>
                <span className="text-slate-700">Upload your organization's data</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-semibold text-sm">2</span>
                </div>
                <span className="text-slate-700">AI maps compliance requirements</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-semibold text-sm">3</span>
                </div>
                <span className="text-slate-700">Generate audit-ready reports</span>
              </div>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold group">
              <Play className="h-5 w-5 mr-2" />
              Watch 2-Minute Demo
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center"
                alt="AuditPilot dashboard showing compliance monitoring"
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                  <Play className="h-8 w-8 text-blue-600 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl text-slate-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Product Demo CTA */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 rounded-2xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-repeat" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Audit-Ready?
            </h3>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Watch how our AI agent can get your organization audit-ready in days, 
              not months, with automated ARC-AMPE compliance monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-4 text-lg group">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-4 text-lg">
                Request Live Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
