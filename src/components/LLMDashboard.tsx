import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";
import {
  Eye,
  Shield,
  TrendingUp,
  Users,
  Target,
  Award,
  Calendar,
  Brain,
  ShoppingCart,
  ExternalLink,
  Lightbulb
} from "lucide-react";

const LLMDashboard = () => {
  // Mock data
  const kpiData = [
    { month: "Feb", visibility: 45, trust: 38 },
    { month: "Mar", visibility: 52, trust: 42 },
    { month: "Apr", visibility: 48, trust: 45 },
    { month: "May", visibility: 63, trust: 58 },
    { month: "Jun", visibility: 67, trust: 61 },
    { month: "Jul", visibility: 72, trust: 65 }
  ];

  const sentimentData = [
    { name: "Positivo", value: 45, color: "hsl(var(--success))" },
    { name: "Neutro", value: 38, color: "hsl(var(--muted))" },
    { name: "Negativo", value: 17, color: "hsl(var(--destructive))" }
  ];

  const competitorData = [
    { name: "Brand A", mentions: 245, sentiment: 72 },
    { name: "Brand B", mentions: 198, sentiment: 68 },
    { name: "Il Tuo Brand", mentions: 156, sentiment: 75 },
    { name: "Brand C", mentions: 134, sentiment: 62 },
    { name: "Brand D", mentions: 89, sentiment: 58 }
  ];

  const modelPerformance = [
    { model: "GPT-4", visibility: 78, sentiment: 72 },
    { model: "Claude", visibility: 65, sentiment: 69 },
    { model: "Gemini", visibility: 58, sentiment: 66 },
    { model: "Perplexity", visibility: 52, sentiment: 61 }
  ];

  return (
    <div className="min-h-screen bg-background p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">LLM Visibility Report</h1>
          <p className="text-muted-foreground text-lg">Dashboard di analisi delle menzioni AI</p>
        </div>
        <div className="text-right">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Generato il 15 Gen 2025
          </Badge>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-sm text-muted-foreground">LLM Score:</span>
            <Badge className="bg-primary text-primary-foreground">72.5</Badge>
          </div>
        </div>
      </div>

      {/* Core Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visibility Score</CardTitle>
            <Eye className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">67.2%</div>
            <p className="text-xs text-muted-foreground mt-1">
              +5.3% rispetto al mese scorso
            </p>
            <Progress value={67.2} className="mt-3" />
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Trust Score</CardTitle>
            <Shield className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">61.8%</div>
            <p className="text-xs text-muted-foreground mt-1">
              +3.2% rispetto al mese scorso
            </p>
            <Progress value={61.8} className="mt-3" />
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Mentions</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">1,547</div>
            <p className="text-xs text-muted-foreground mt-1">
              +156 rispetto al mese scorso
            </p>
            <div className="mt-3 flex items-center gap-2">
              <Badge variant="outline" className="text-xs">Con Brand: 891</Badge>
              <Badge variant="outline" className="text-xs">Senza Brand: 656</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* KPI Trend */}
        <Card className="border-border shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5 text-primary" />
              Trend KPI Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={kpiData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Line type="monotone" dataKey="visibility" stroke="hsl(var(--primary))" strokeWidth={3} />
                <Line type="monotone" dataKey="trust" stroke="hsl(var(--chart-2))" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Sentiment Analysis */}
        <Card className="border-border shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Sentiment Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {sentimentData.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Competitive Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="border-border shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Posizionamento Competitivo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {competitorData.map((competitor, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    <Badge variant={competitor.name === "Il Tuo Brand" ? "default" : "outline"}>
                      #{index + 1}
                    </Badge>
                    <span className={competitor.name === "Il Tuo Brand" ? "font-bold" : ""}>
                      {competitor.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">{competitor.mentions} menzioni</span>
                    <Badge variant="secondary">{competitor.sentiment}% sentiment</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              Performance per Modello
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {modelPerformance.map((model, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{model.model}</span>
                    <div className="flex gap-2 text-sm">
                      <span>Vis: {model.visibility}%</span>
                      <span>Sent: {model.sentiment}%</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Progress value={model.visibility} className="h-2" />
                    <Progress value={model.sentiment} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-border shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-primary" />
              Shopping Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-2xl font-bold text-primary">34%</div>
              <p className="text-sm text-muted-foreground">
                Prodotti presenti nei risultati shopping
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Prodotto A</span>
                  <Badge variant="outline">67%</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Prodotto B</span>
                  <Badge variant="outline">45%</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Prodotto C</span>
                  <Badge variant="outline">23%</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5 text-primary" />
              Menzioni Esterne
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-2xl font-bold text-primary">23</div>
              <p className="text-sm text-muted-foreground">
                Fonti di terze parti che citano il brand
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-2 bg-muted/30 rounded">
                  <div className="font-medium">TechCrunch</div>
                  <div className="text-muted-foreground">Articolo su innovazione</div>
                </div>
                <div className="p-2 bg-muted/30 rounded">
                  <div className="font-medium">Forbes</div>
                  <div className="text-muted-foreground">Recensione prodotto</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              Raccomandazioni
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-accent/50 rounded-lg">
                <div className="font-medium text-sm mb-1">Ottimizza per GPT-4</div>
                <div className="text-xs text-muted-foreground">
                  Migliorare contenuti tecnici per aumentare visibilità
                </div>
              </div>
              <div className="p-3 bg-accent/50 rounded-lg">
                <div className="font-medium text-sm mb-1">Focus su Sentiment</div>
                <div className="text-xs text-muted-foreground">
                  Sviluppare case study positivi
                </div>
              </div>
              <div className="p-3 bg-accent/50 rounded-lg">
                <div className="font-medium text-sm mb-1">Competitor Gap</div>
                <div className="text-xs text-muted-foreground">
                  Opportunità in query "eco-friendly"
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LLMDashboard;