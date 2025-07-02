
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
  Cell,
  Area,
  AreaChart
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
  Lightbulb,
  Search,
  MessageSquare,
  Star,
  Trophy,
  Clock,
  Zap,
  BarChart3,
  PieChart as PieChartIcon,
  Globe,
  Settings,
  User,
  ChevronDown,
  Building
} from "lucide-react";

const LLMDashboard = () => {
  // Mock data based on your requirements
  const kpiData = [
    { month: "Feb", visibility: 45, trust: 38, mentions: 234 },
    { month: "Mar", visibility: 52, trust: 42, mentions: 267 },
    { month: "Apr", visibility: 48, trust: 45, mentions: 298 },
    { month: "May", visibility: 63, trust: 58, mentions: 321 },
    { month: "Jun", visibility: 67, trust: 61, mentions: 356 },
    { month: "Jul", visibility: 72, trust: 65, mentions: 389 }
  ];

  const sentimentData = [
    { name: "Positivo", value: 58, color: "#22c55e" },
    { name: "Neutro", value: 31, color: "#94a3b8" },
    { name: "Negativo", value: 11, color: "#ef4444" }
  ];

  const competitorRanking = [
    { name: "Il Tuo Brand", mentions: 389, sentiment: 75, position: 1 },
    { name: "Competitor A", mentions: 356, sentiment: 68, position: 2 },
    { name: "Competitor B", mentions: 334, sentiment: 72, position: 3 },
    { name: "Competitor C", mentions: 298, sentiment: 65, position: 4 },
    { name: "Competitor D", mentions: 267, sentiment: 61, position: 5 }
  ];

  const modelPerformance = [
    { model: "GPT-4", visibility: 78, sentiment: 72, mentions: 145 },
    { model: "Claude", visibility: 65, sentiment: 69, mentions: 123 },
    { model: "Gemini", visibility: 58, sentiment: 66, mentions: 98 },
    { model: "Perplexity", visibility: 52, sentiment: 61, mentions: 87 }
  ];

  const categoryBreakdown = [
    { category: "Arredamento", visibility: 82, mentions: 156 },
    { category: "Pagamenti", visibility: 67, mentions: 89 },
    { category: "Design", visibility: 74, mentions: 134 },
    { category: "E-commerce", visibility: 59, mentions: 76 }
  ];

  const topPrompts = [
    { prompt: "Migliori soluzioni per arredamento moderno", mentioned: true, sentiment: "Positivo", score: 92 },
    { prompt: "Piattaforme di pagamento sicure", mentioned: true, sentiment: "Positivo", score: 88 },
    { prompt: "Software di design per interni", mentioned: false, sentiment: "Neutro", score: 76 }
  ];

  const worstPrompts = [
    { prompt: "Alternative economiche per mobili", mentioned: false, sentiment: "Negativo", score: 34 },
    { prompt: "Problemi con servizi digitali", mentioned: true, sentiment: "Negativo", score: 28 },
    { prompt: "Recensioni negative design", mentioned: false, sentiment: "Negativo", score: 22 }
  ];

  return (
    <div className="min-h-screen p-6 space-y-8">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full glass-sidebar p-6 z-10">
        <div className="flex items-center gap-3 mb-8">
          <Building className="h-8 w-8 text-primary" />
          <h2 className="text-xl font-bold">LLM Analytics</h2>
        </div>
        
        <nav className="space-y-2">
          <div className="glass-button rounded-lg p-3 bg-primary/20">
            <div className="flex items-center gap-3">
              <BarChart3 className="h-5 w-5" />
              <span className="font-medium">Dashboard</span>
            </div>
          </div>
          <div className="glass-button rounded-lg p-3 hover:bg-white/10">
            <div className="flex items-center gap-3">
              <Search className="h-5 w-5" />
              <span>Prompt Analysis</span>
            </div>
          </div>
          <div className="glass-button rounded-lg p-3 hover:bg-white/10">
            <div className="flex items-center gap-3">
              <Trophy className="h-5 w-5" />
              <span>Competitors</span>
            </div>
          </div>
          <div className="glass-button rounded-lg p-3 hover:bg-white/10">
            <div className="flex items-center gap-3">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </div>
          </div>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="glass-card rounded-lg p-4">
            <div className="flex items-center gap-3">
              <User className="h-8 w-8 rounded-full bg-primary/20 p-1" />
              <div>
                <div className="font-medium">Admin User</div>
                <div className="text-xs text-muted-foreground">admin@company.com</div>
              </div>
              <ChevronDown className="h-4 w-4 ml-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 space-y-8">
        {/* Header */}
        <div className="glass-card rounded-2xl p-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">LLM Visibility Report</h1>
              <p className="text-lg text-muted-foreground">Dashboard di analisi delle menzioni AI</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-4 text-sm">
                  <Badge variant="outline" className="glass-button">
                    Total Prompts: 1,247
                  </Badge>
                  <Badge variant="outline" className="glass-button">
                    Con Brand: 743
                  </Badge>
                  <Badge variant="outline" className="glass-button">
                    Senza Brand: 504
                  </Badge>
                </div>
              </div>
            </div>
            <div className="text-right">
              <Badge className="bg-primary text-primary-foreground text-lg px-6 py-3 mb-3">
                LLM Score: 72.5
              </Badge>
              <div className="text-sm text-muted-foreground">
                Generato il 15 Gen 2025 - 14:30
              </div>
            </div>
          </div>
        </div>

        {/* Core Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Eye className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Visibility Score</h3>
                  <p className="text-xs text-muted-foreground">% di prompt con menzione</p>
                </div>
              </div>
            </div>
            <div className="text-3xl font-bold text-primary mb-2">67.2%</div>
            <div className="flex items-center gap-2 text-sm text-green-600 mb-4">
              <TrendingUp className="h-4 w-4" />
              +5.3% vs mese scorso
            </div>
            <Progress value={67.2} className="h-3" />
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Trust Score</h3>
                  <p className="text-xs text-muted-foreground">Posizione + sentiment</p>
                </div>
              </div>
            </div>
            <div className="text-3xl font-bold text-primary mb-2">61.8%</div>
            <div className="flex items-center gap-2 text-sm text-green-600 mb-4">
              <TrendingUp className="h-4 w-4" />
              +3.2% vs mese scorso
            </div>
            <Progress value={61.8} className="h-3" />
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Total Mentions</h3>
                  <p className="text-xs text-muted-foreground">Numero citazioni</p>
                </div>
              </div>
            </div>
            <div className="text-3xl font-bold text-primary mb-2">1,547</div>
            <div className="flex items-center gap-2 text-sm text-green-600 mb-4">
              <TrendingUp className="h-4 w-4" />
              +156 vs mese scorso
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary" className="text-xs">Positive: 58%</Badge>
              <Badge variant="outline" className="text-xs">Neutral: 31%</Badge>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* KPI Trend */}
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Trend KPI Score</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={kpiData}>
                <defs>
                  <linearGradient id="visibilityGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D97706" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#D97706" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="trustGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#7C3AED" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="rgba(0,0,0,0.6)" />
                <YAxis stroke="rgba(0,0,0,0.6)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "rgba(255,255,255,0.9)", 
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "12px",
                    backdropFilter: "blur(10px)"
                  }}
                />
                <Area type="monotone" dataKey="visibility" stroke="#D97706" fillOpacity={1} fill="url(#visibilityGradient)" strokeWidth={3} />
                <Area type="monotone" dataKey="trust" stroke="#7C3AED" fillOpacity={1} fill="url(#trustGradient)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Sentiment Analysis */}
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <PieChartIcon className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Sentiment Analysis</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
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
          </div>
        </div>

        {/* Competitive Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Competitor Ranking</h3>
              <Badge variant="outline" className="ml-auto">No Brand Prompts</Badge>
            </div>
            <div className="space-y-4">
              {competitorRanking.map((competitor, index) => (
                <div key={index} className="glass-button rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Badge variant={competitor.name === "Il Tuo Brand" ? "default" : "outline"} className="w-8 h-8 rounded-full flex items-center justify-center">
                        #{competitor.position}
                      </Badge>
                      <div>
                        <div className={`font-medium ${competitor.name === "Il Tuo Brand" ? "text-primary" : ""}`}>
                          {competitor.name}
                        </div>
                        <div className="text-sm text-muted-foreground">{competitor.mentions} menzioni</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">{competitor.sentiment}%</Badge>
                      <div className="text-xs text-muted-foreground mt-1">sentiment</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Performance per Modello</h3>
            </div>
            <div className="space-y-6">
              {modelPerformance.map((model, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{model.model}</span>
                    <div className="flex gap-4 text-sm">
                      <span>Vis: {model.visibility}%</span>
                      <span>Sent: {model.sentiment}%</span>
                      <Badge variant="outline">{model.mentions}</Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Visibility</span>
                      <span>{model.visibility}%</span>
                    </div>
                    <Progress value={model.visibility} className="h-2" />
                    <div className="flex justify-between text-xs">
                      <span>Sentiment</span>
                      <span>{model.sentiment}%</span>
                    </div>
                    <Progress value={model.sentiment} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Visibility by Category</h3>
            </div>
            <div className="space-y-4">
              {categoryBreakdown.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{category.category}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{category.visibility}%</span>
                      <Badge variant="outline" className="text-xs">{category.mentions}</Badge>
                    </div>
                  </div>
                  <Progress value={category.visibility} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Star className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Top 3 Performing Prompts</h3>
            </div>
            <div className="space-y-4">
              {topPrompts.map((prompt, index) => (
                <div key={index} className="glass-button rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="font-medium text-sm">{prompt.prompt}</div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <Badge variant={prompt.mentioned ? "default" : "outline"} className="text-xs">
                          {prompt.mentioned ? "Menzionato" : "Non menzionato"}
                        </Badge>
                        <Badge variant={prompt.sentiment === "Positivo" ? "default" : "secondary"} className="text-xs">
                          {prompt.sentiment}
                        </Badge>
                      </div>
                      <div className="text-sm font-bold text-primary">{prompt.score}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="h-6 w-6 text-destructive" />
              <h3 className="text-xl font-semibold">Worst 3 Performing Prompts</h3>
            </div>
            <div className="space-y-4">
              {worstPrompts.map((prompt, index) => (
                <div key={index} className="glass-button rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="font-medium text-sm">{prompt.prompt}</div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <Badge variant={prompt.mentioned ? "default" : "outline"} className="text-xs">
                          {prompt.mentioned ? "Menzionato" : "Non menzionato"}
                        </Badge>
                        <Badge variant="destructive" className="text-xs">
                          {prompt.sentiment}
                        </Badge>
                      </div>
                      <div className="text-sm font-bold text-destructive">{prompt.score}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Time-Based Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Quarterly Visibility Projection</h3>
            </div>
            <div className="text-center p-8">
              <div className="text-4xl font-bold text-primary mb-4">Baseline Established</div>
              <p className="text-muted-foreground">Primo report completato</p>
              <Badge variant="outline" className="mt-4">Prossimo report in 4 settimane</Badge>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={kpiData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="rgba(0,0,0,0.6)" />
                <YAxis stroke="rgba(0,0,0,0.6)" />
                <Line type="monotone" dataKey="visibility" stroke="#D97706" strokeWidth={2} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Visibility by Buyer Persona</h3>
            </div>
            <div className="space-y-4">
              <div className="glass-button rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Interior Designer</span>
                  <span className="text-primary font-bold">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div className="glass-button rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Property Owner</span>
                  <span className="text-primary font-bold">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div className="glass-button rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Architect</span>
                  <span className="text-primary font-bold">52%</span>
                </div>
                <Progress value={52} className="h-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Shopping Results & External Mentions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <ShoppingCart className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Shopping Result Presence</h3>
            </div>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">34%</div>
                <p className="text-sm text-muted-foreground">Prodotti presenti nei risultati shopping</p>
              </div>
              <div className="space-y-3">
                <div className="glass-button rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Divano Modulare Premium</span>
                    <Badge>67%</Badge>
                  </div>
                </div>
                <div className="glass-button rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sistema Illuminazione Smart</span>
                    <Badge>45%</Badge>
                  </div>
                </div>
                <div className="glass-button rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Tavolo Design Contemporaneo</span>
                    <Badge>23%</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <ExternalLink className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">External Mentions</h3>
            </div>
            <div className="space-y-4">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-primary mb-2">23</div>
                <p className="text-sm text-muted-foreground">Fonti di terze parti che citano il brand</p>
              </div>
              <div className="space-y-3">
                <div className="glass-button rounded-lg p-4">
                  <div className="font-medium text-sm mb-1">Design Magazine Italia</div>
                  <div className="text-xs text-muted-foreground mb-2">Tendenze arredamento 2025</div>
                  <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Menzione positiva</div>
                </div>
                <div className="glass-button rounded-lg p-4">
                  <div className="font-medium text-sm mb-1">Casa & Design Blog</div>
                  <div className="text-xs text-muted-foreground mb-2">Recensione prodotti premium</div>
                  <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Recensione 4.5/5</div>
                </div>
                <div className="glass-button rounded-lg p-4">
                  <div className="font-medium text-sm mb-1">Interior Design Today</div>
                  <div className="text-xs text-muted-foreground mb-2">Innovazioni nel settore</div>
                  <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Caso studio</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">Recommendations & Optimization Tips</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass-button rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="h-5 w-5 text-primary" />
                <span className="font-medium text-sm">GPT-4 Optimization</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                Migliorare contenuti tecnici per aumentare visibilità del 15%
              </p>
              <Badge variant="outline" className="text-xs">Priority: High</Badge>
            </div>
            
            <div className="glass-button rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Target className="h-5 w-5 text-primary" />
                <span className="font-medium text-sm">Sentiment Focus</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                Sviluppare case study positivi per Interior Designer persona
              </p>
              <Badge variant="outline" className="text-xs">Priority: Medium</Badge>
            </div>
            
            <div className="glass-button rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="h-5 w-5 text-primary" />
                <span className="font-medium text-sm">Competitor Gap</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                Opportunità in query "eco-friendly" e "sostenibilità"
              </p>
              <Badge variant="outline" className="text-xs">Priority: Medium</Badge>
            </div>
            
            <div className="glass-button rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingCart className="h-5 w-5 text-primary" />
                <span className="font-medium text-sm">Shopping Optimization</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                Ottimizzare descrizioni prodotti per aumentare presenza
              </p>
              <Badge variant="outline" className="text-xs">Priority: Low</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LLMDashboard;
