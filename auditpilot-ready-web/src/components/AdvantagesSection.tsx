
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, X, TrendingUp } from 'lucide-react';

const AdvantagesSection = () => {
  const comparisonData = [
    {
      feature: "Time to Compliance",
      traditional: "6-12 months",
      auditpilot: "3-7 days",
      advantage: true
    },
    {
      feature: "Cost Structure",
      traditional: "$50K-$200K+ per audit",
      auditpilot: "Subscription model",
      advantage: true
    },
    {
      feature: "Continuous Monitoring",
      traditional: "Manual, periodic reviews",
      auditpilot: "24/7 AI monitoring",
      advantage: true
    },
    {
      feature: "Evidence Generation",
      traditional: "Manual documentation",
      auditpilot: "Automated evidence",
      advantage: true
    },
    {
      feature: "ARC-AMPE Native",
      traditional: "Generic compliance tools",
      auditpilot: "Purpose-built for ARC-AMPE",
      advantage: true
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose AuditPilot™?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our AI-powered approach outperforms traditional consultant-led compliance models 
            across every metric that matters.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-medstore-blue text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Feature</th>
                      <th className="px-6 py-4 text-center font-semibold">Traditional Consultants</th>
                      <th className="px-6 py-4 text-center font-semibold">AuditPilot™</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                        <td className="px-6 py-4 text-center text-gray-600">
                          <div className="flex items-center justify-center">
                            <X className="h-5 w-5 text-red-500 mr-2" />
                            {row.traditional}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-900 font-semibold">
                          <div className="flex items-center justify-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            {row.auditpilot}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Differentiators */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-medstore-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Speed = Trust</h3>
              <p className="text-gray-600">
                Get audit-ready in days, not months. Our AI agent works 24/7 to ensure 
                continuous compliance without the delays of traditional consulting.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-medstore-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Own the Standard</h3>
              <p className="text-gray-600">
                Purpose-built for ARC-AMPE frameworks with patent-pending AI technology 
                that understands compliance requirements natively.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-medstore-blue-light rounded-full flex items-center justify-center mx-auto mb-6">
                <X className="h-8 w-8 text-white transform rotate-45" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity Over Bureaucracy</h3>
              <p className="text-gray-600">
                Cut through red tape with intelligent automation that maintains accuracy 
                while eliminating manual, error-prone processes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
