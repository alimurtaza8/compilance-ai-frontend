import { 
  Leaf, 
  Shield, 
  Droplets, 
  Building, 
  Zap, 
  Bell, 
  Plus, 
  Settings, 
  CheckCircle, 
  AlertTriangle, 
  ToggleLeft, 
  ToggleRight,
  RefreshCw
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, ResponsiveContainer, ComposedChart, Line, YAxis } from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Chart data
const environmentalChartData = [
  { month: 'Jan', value: 30 },
  { month: 'Feb', value: 40 },
  { month: 'Mar', value: 35 },
  { month: 'Apr', value: 50 },
  { month: 'May', value: 30 },
  { month: 'Jun', value: 40 },
  { month: 'Jul', value: 35 },
  { month: 'Aug', value: 45 },
  { month: 'Sep', value: 40 },
];

const healthSafetyChartData = [
  { month: 'Jan', bar: 250, line: 45 },
  { month: 'Feb', bar: 180, line: 50 },
  { month: 'Mar', bar: 200, line: 48 },
  { month: 'Apr', bar: 220, line: 52 },
  { month: 'May', bar: 150, line: 55 },
  { month: 'Jun', bar: 280, line: 58 },
  { month: 'Jul', bar: 190, line: 62 },
  { month: 'Aug', bar: 240, line: 65 },
  { month: 'Sep', bar: 210, line: 68 },
  { month: 'Oct', bar: 300, line: 70 },
];

const tscaData = [
  { name: 'Q1', value: 85 },
  { name: 'Q2', value: 78 },
  { name: 'Q3', value: 90 },
  { name: 'Q4', value: 82 },
];

const ssaData = [
  { name: 'Q1', value: 65 },
  { name: 'Q2', value: 72 },
  { name: 'Q3', value: 68 },
  { name: 'Q4', value: 75 },
];

const facilitiesChartData = [
  { month: 'Q1', value: 220 },
  { month: 'Q2', value: 180 },
  { month: 'Q3', value: 240 },
  { month: 'Q4', value: 190 },
  { month: 'Q1', value: 260 },
  { month: 'Q2', value: 210 },
  { month: 'Q3', value: 280 },
];

const colorMap = {
  green: "bg-compliance-green",
  orange: "bg-compliance-orange", 
  red: "bg-compliance-red",
  blue: "bg-compliance-blue",
  teal: "bg-compliance-teal"
};

interface ComplianceCardProps {
  title: string;
  subtitle: string;
  score: number;
  status: "compliant" | "action-required";
  color: "green" | "orange" | "red" | "blue" | "teal";
  icon?: React.ReactNode;
}

const ComplianceCard = ({ 
  title, 
  subtitle, 
  score, 
  status, 
  color, 
  icon 
}: ComplianceCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg ${colorMap[color]} flex items-center justify-center text-white`}>
            {icon}
          </div>
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Compliance Score</span>
          <span className="text-2xl font-bold">{score}%</span>
        </div>
        
        <Progress 
          value={score} 
          className="h-2"
          style={{
            background: `hsl(var(--muted))`,
          }}
        />
        
        <div className="flex items-center gap-2 pt-2">
          {status === "compliant" ? (
            <>
              <CheckCircle className="w-4 h-4 text-compliance-green" />
              <Badge variant="secondary" className="text-compliance-green bg-compliance-green/10">
                Compliant
              </Badge>
            </>
          ) : (
            <>
              <AlertTriangle className="w-4 h-4 text-compliance-orange" />
              <Badge variant="secondary" className="text-compliance-orange bg-compliance-orange/10">
                Action Required
              </Badge>
            </>
          )}
        </div>
      </div>
    </Card>
  );
};

const ComplianceDashboard = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-7xl mx-auto">
          {/* Dashboard Header */}
          <div className="mt-14 text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-3">
              Interactive Dashboard Demo
            </h1>
            <p className="text-lg text-muted-foreground">
              Experience real-time compliance monitoring across all CERM categories
            </p>
          </div>
          
          {/* Light theme section - Top cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <ComplianceCard
              title="Environmental Compliance"
              subtitle="EPA, TSCA, CWA, CAA, RCRA"
              score={90}
              status="compliant"
              color="green"
              icon={<Leaf className="w-5 h-5" />}
            />
            
            <ComplianceCard
              title="Health & Safety"
              subtitle="OSHA, 29 CFR 1926"
              score={96}
              status="action-required"
              color="orange"
              icon={<Shield className="w-5 h-5" />}
            />
            
            <ComplianceCard
              title="Chemical Risk Management"
              subtitle="TSCA, PMNs, SDS"
              score={98}
              status="compliant"
              color="red"
              icon={<Droplets className="w-5 h-5" />}
            />
            
            <ComplianceCard
              title="Federal Compliance"
              subtitle="EPA, DOD, FAA"
              score={80}
              status="compliant"
              color="blue"
              icon={<Building className="w-5 h-5" />}
            />
            
            <ComplianceCard
              title="Facilities & Sustainability"
              subtitle="IoT Monitoring, Energy"
              score={81}
              status="action-required"
              color="teal"
              icon={<Zap className="w-5 h-5" />}
            />
          </div>
          
          {/* Dark theme section - AuditPilot dashboard */}
          <div className="bg-slate-900 rounded-xl p-6">
            {/* AuditPilot Header */}
            <div className="flex items-center justify-between mb-8 bg-card p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-compliance-teal rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <span className="text-xl font-semibold">AuditPilot</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>3Q 94%</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon">
                  <Bell className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Plus className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Settings className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Environmental Compliance */}
              <Card className="p-6 bg-slate-800 text-white">
                <h3 className="text-lg font-semibold mb-4">Environmental Compliance</h3>
                
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-compliance-green" />
                    <span className="text-sm">EPA</span>
                    <ToggleRight className="w-6 h-6 text-compliance-green" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">TSCA</span>
                    <ToggleLeft className="w-6 h-6 text-muted-foreground" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">Parent Recoved</span>
                </div>
                
                <div className="h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={environmentalChartData}>
                      <XAxis 
                        dataKey="month" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10, fill: '#6b7280' }}
                      />
                      <Bar 
                        dataKey="value" 
                        fill="hsl(var(--compliance-green))"
                        radius={[2, 2, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              {/* Health & Safety */}
              <Card className="p-6 bg-slate-800 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Health & Safety</h3>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-compliance-orange" />
                    <Badge variant="secondary" className="text-compliance-orange bg-compliance-orange/20">
                      0.1329 JPC
                    </Badge>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">OSHA</span>
                </div>
                
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={healthSafetyChartData}>
                      <XAxis 
                        dataKey="month" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10, fill: '#6b7280' }}
                      />
                      <YAxis hide />
                      <Bar 
                        dataKey="bar" 
                        fill="hsl(var(--compliance-blue))"
                        radius={[2, 2, 0, 0]}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="line" 
                        stroke="hsl(var(--compliance-green))" 
                        strokeWidth={2}
                        dot={false}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Chemical Risk Management */}
              <Card className="p-6 bg-slate-800 text-white">
                <h3 className="text-lg font-semibold mb-6">Chemical Risk Management</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted-foreground">TSCA first Score</span>
                    </div>
                    <Progress value={75} className="h-2 mb-4" />
                    <div className="h-16">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={tscaData}>
                          <XAxis 
                            dataKey="name" 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: '#6b7280' }}
                          />
                          <Bar 
                            dataKey="value" 
                            fill="hsl(var(--compliance-green))"
                            radius={[2, 2, 0, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted-foreground">SSA  Redist Score</span>
                    </div>
                    <div className="h-16 mb-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={ssaData}>
                          <XAxis 
                            dataKey="name" 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: '#6b7280' }}
                          />
                          <Bar 
                            dataKey="value" 
                            fill="hsl(var(--compliance-blue))"
                            radius={[2, 2, 0, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Federal Compliance */}
              <Card className="p-6 bg-slate-800 text-white">
                <h3 className="text-lg font-semibold mb-4">Federal Compliance</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-compliance-green" />
                    <span className="text-sm">DOD</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-compliance-green" />
                    <span className="text-sm">FAA</span>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-sm text-muted-foreground">Mobilization</span>
                    <Progress value={60} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-sm text-muted-foreground">TSH%</span>
                    <Progress value={85} className="h-2" />
                  </div>
                  
                  <div className="mt-6">
                    <Select>
                      <SelectTrigger className="w-full bg-slate-700 border-slate-600">
                        <SelectValue placeholder="ESID" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="esid1">ESID Option 1</SelectItem>
                        <SelectItem value="esid2">ESID Option 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-sm text-muted-foreground">TAH%</span>
                    <Progress value={70} className="h-2 flex-1" />
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4">
                    <AlertTriangle className="w-4 h-4 text-compliance-orange" />
                    <span className="text-sm">rmacl.rutton</span>
                    <Badge variant="secondary" className="text-compliance-orange bg-compliance-orange/20">
                      Admintimert
                    </Badge>
                  </div>
                </div>
              </Card>

              {/* Facilities & Sustainability */}
              <Card className="p-6 bg-slate-800 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Facillities & Sustansability</h3>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-compliance-orange" />
                    <Badge variant="secondary" className="text-compliance-orange bg-compliance-orange/20">
                      New opstation detected
                    </Badge>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">Compliance Progress</span>
                </div>
                
                <div className="h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={facilitiesChartData}>
                      <XAxis 
                        dataKey="month" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10, fill: '#6b7280' }}
                      />
                      <Bar 
                        dataKey="value" 
                        fill="hsl(var(--compliance-blue))"
                        radius={[2, 2, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Dashboard Footer */}
          <div className="text-center mt-8 p-4 bg-card rounded-lg">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <RefreshCw className="w-4 h-4" />
              <span>Live Data Updates</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Dashboard updates automatically every 3 seconds with real-time compliance data
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};


export default ComplianceDashboard;