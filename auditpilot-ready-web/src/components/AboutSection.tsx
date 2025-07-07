
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, TrendingUp, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Medstore Inc.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We exist to give mission-driven organizations total confidence in compliance through intelligent automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Medstore Inc. is revolutionizing compliance for Medicaid, ACA, and federally funded organizations. 
                We're not just another SaaS company – we're the category leader in AI-native compliance agents.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start group">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Integrity Over Bureaucracy</h4>
                  <p className="text-slate-600">We cut through red tape with smart automation</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Own the Standard</h4>
                  <p className="text-slate-600">We set the benchmark for AI-powered compliance</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Move Fast, Stay Compliant</h4>
                  <p className="text-slate-600">Speed without compromising accuracy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-2xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&crop=faces"
                alt="Team collaboration and technology"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Our BHAG</h4>
              <p className="text-slate-600 mb-4">20% market penetration across U.S. GovTech & Medicaid organizations by 2035</p>
              <ArrowRight className="h-5 w-5 mx-auto text-blue-600 group-hover:translate-x-1 transition-transform" />
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">3-Year Goal</h4>
              <p className="text-slate-600 mb-4">$50M ARR with 1,000+ AI agents deployed across multiple compliance frameworks</p>
              <ArrowRight className="h-5 w-5 mx-auto text-green-600 group-hover:translate-x-1 transition-transform" />
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Current Focus</h4>
              <p className="text-slate-600 mb-4">Securing $2M-$5M Seed/Series A funding for rapid market expansion</p>
              <ArrowRight className="h-5 w-5 mx-auto text-purple-600 group-hover:translate-x-1 transition-transform" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
