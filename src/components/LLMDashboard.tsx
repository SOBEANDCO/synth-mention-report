
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
  Building,
  TrendingDown,
  Activity,
  DollarSign,
  FileText,
  Info,
  ArrowRight,
  Menu
} from "lucide-react";

const LLMDashboard = () => {
  // Mock data with more comprehensive statistics
  const kpiData = [
    { month: "Gen", visibility: 42, trust: 35, mentions: 198 },
    { month: "Feb", visibility: 45, trust: 38, mentions: 234 },
    { month: "Mar", visibility: 52, trust: 42, mentions: 267 },
    { month: "Apr", visibility: 48, trust: 45, mentions: 298 },
    { month: "May", visibility: 63, trust: 58, mentions: 321 },
    { month: "Jun", visibility: 67, trust: 61, mentions: 356 },
    { month: "Lug", visibility: 72, trust: 65, mentions: 389 }
  ];

  const sentimentData = [
    { name: "Positivo", value: 58, color: "#22c55e" },
    { name: "Neutro", value: 31, color: "#94a3b8" },
    { name: "Negativo", value: 11, color: "#ef4444" }
  ];

  const competitorRanking = [
    { name: "Il Tuo Brand", mentions: 389, sentiment: 75, position: 1, growth: "+12%" },
    { name: "Competitor A", mentions: 356, sentiment: 68, position: 2, growth: "+8%" },
    { name: "Competitor B", mentions: 334, sentiment: 72, position: 3, growth: "+5%" },
    { name: "Competitor C", mentions: 298, sentiment: 65, position: 4, growth: "-2%" },
    { name: "Competitor D", mentions: 267, sentiment: 61, position: 5, growth: "-5%" }
  ];

  const modelPerformance = [
    { model: "GPT-4", visibility: 78, sentiment: 72, mentions: 145, trust: 68 },
    { model: "Claude", visibility: 65, sentiment: 69, mentions: 123, trust: 62 },
    { model: "Gemini", visibility: 58, sentiment: 66, mentions: 98, trust: 59 },
    { model: "Perplexity", visibility: 52, sentiment: 61, mentions: 87, trust: 55 }
  ];

  const categoryBreakdown = [
    { category: "Arredamento", visibility: 82, mentions: 156, avgPosition: 1.2, sentiment: 78 },
    { category: "Design", visibility: 74, mentions: 134, avgPosition: 1.8, sentiment: 71 },
    { category: "Pagamenti", visibility: 67, mentions: 89, avgPosition: 2.1, sentiment: 65 },
    { category: "E-commerce", visibility: 59, mentions: 76, avgPosition: 2.4, sentiment: 62 }
  ];

  const buyerPersonas = [
    { persona: "Interior Designer", visibility: 78, mentions: 234, avgSession: "12min", sentiment: 82 },
    { persona: "Property Owner", visibility: 65, mentions: 187, avgSession: "8min", sentiment: 68 },
    { persona: "Architect", visibility: 52, mentions: 123, avgSession: "15min", sentiment: 71 },
    { persona: "Retailer", visibility: 48, mentions: 98, avgSession: "6min", sentiment: 59 }
  ];

  const topProducts = [
    { product: "Divano Modulare Premium", mentions: 89, sentiment: 85, shopResults: 67 },
    { product: "Sistema Illuminazione Smart", mentions: 76, sentiment: 78, shopResults: 45 },
    { product: "Tavolo Design Contemporaneo", mentions: 54, sentiment: 72, shopResults: 23 },
    { product: "Poltrona Ergonomica Deluxe", mentions: 43, sentiment: 69, shopResults: 34 }
  ];

  const topPrompts = [
    { 
      prompt: "Migliori soluzioni per arredamento moderno", 
      mentioned: true, 
      sentiment: "Positivo", 
      score: 92,
      position: 1,
      context: "Raccomandato come leader nel settore"
    },
    { 
      prompt: "Piattaforme di pagamento sicure per e-commerce", 
      mentioned: true, 
      sentiment: "Positivo", 
      score: 88,
      position: 2,
      context: "Citato per affidabilità e sicurezza"
    },
    { 
      prompt: "Software di design per interni professionali", 
      mentioned: true, 
      sentiment: "Positivo", 
      score: 85,
      position: 1,
      context: "Preferito da designer professionisti"
    }
  ];

  const worstPrompts = [
    { 
      prompt: "Alternative economiche per mobili", 
      mentioned: false, 
      sentiment: "Assente", 
      score: 0,
      position: null,
      context: "Non citato in query price-sensitive"
    },
    { 
      prompt: "Soluzioni low-cost per arredamento", 
      mentioned: false, 
      sentiment: "Assente", 
      score: 0,
      position: null,
      context: "Mercato budget non coperto"
    },
    { 
      prompt: "Problemi comuni con servizi digitali", 
      mentioned: true, 
      sentiment: "Negativo", 
      score: 28,
      position: 4,
      context: "Citato per problematiche tecniche"
    }
  ];

  const externalMentions = [
    { 
      source: "Design Magazine Italia", 
      title: "Tendenze arredamento 2025", 
      context: "Innovazioni nel design contemporaneo",
      sentiment: "Positivo",
      authority: 85,
      date: "12 Gen 2025"
    },
    { 
      source: "Casa & Design Blog", 
      title: "Recensione prodotti premium", 
      context: "Test comparativo mobili di lusso",
      sentiment: "Positivo",
      authority: 78,
      date: "10 Gen 2025"
    },
    { 
      source: "Interior Design Today", 
      title: "Innovazioni nel settore", 
      context: "Caso studio trasformazione digitale",
      sentiment: "Neutro",
      authority: 72,
      date: "8 Gen 2025"
    }
  ];

  const navigationSections = [
    { id: "overview", title: "Panoramica", icon: BarChart3 },
    { id: "metrics", title: "Metriche Core", icon: Target },
    { id: "competitive", title: "Analisi Competitiva", icon: Trophy },
    { id: "performance", title: "Performance Prompt", icon: Star },
    { id: "temporal", title: "Analisi Temporale", icon: Calendar },
    { id: "breakdown", title: "Dettaglio Segmenti", icon: PieChartIcon },
    { id: "shopping", title: "Shopping Results", icon: ShoppingCart },
    { id: "external", title: "Menzioni Esterne", icon: ExternalLink },
    { id: "recommendations", title: "Raccomandazioni", icon: Lightbulb }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

      {/* Navigation Menu on Right */}
      <div className="fixed right-0 top-0 w-72 h-full glass-sidebar p-6 z-10">
        <div className="flex items-center gap-3 mb-8">
          <Menu className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-semibold">Navigazione Report</h3>
        </div>
        
        <nav className="space-y-2">
          {navigationSections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="glass-button rounded-lg p-3 hover:bg-white/10 w-full text-left transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <section.icon className="h-4 w-4 text-primary" />
                <span className="text-sm">{section.title}</span>
                <ArrowRight className="h-3 w-3 ml-auto opacity-50" />
              </div>
            </button>
          ))}
        </nav>

        <div className="mt-8 glass-card rounded-lg p-4">
          <div className="text-xs text-muted-foreground mb-2">Report Info</div>
          <div className="space-y-1 text-xs">
            <div>Generato: 15 Gen 2025</div>
            <div>Prompts testati: 1,247</div>
            <div>Periodo: Nov 2024 - Gen 2025</div>
            <div>Modelli: 4 LLM principali</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 mr-72 space-y-12">
        {/* 1. OVERVIEW SECTION */}
        <section id="overview" className="space-y-8">
          <div className="glass-card rounded-2xl p-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold mb-4">LLM Visibility Report</h1>
                <p className="text-lg text-muted-foreground mb-6">Dashboard completo di analisi delle menzioni AI per il tuo brand</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="glass-button rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">1,247</div>
                    <div className="text-xs text-muted-foreground">Total Prompts</div>
                  </div>
                  <div className="glass-button rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">743</div>
                    <div className="text-xs text-muted-foreground">Con Brand</div>
                  </div>
                  <div className="glass-button rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">504</div>
                    <div className="text-xs text-muted-foreground">Senza Brand</div>
                  </div>
                  <div className="glass-button rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">4</div>
                    <div className="text-xs text-muted-foreground">Modelli LLM</div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Badge className="bg-primary text-primary-foreground text-2xl px-8 py-4 mb-4">
                  LLM Score: 72.5
                </Badge>
                <div className="text-sm text-muted-foreground">
                  <div>Generato il 15 Gen 2025 - 14:30</div>
                  <div className="mt-2 flex items-center gap-2 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    +8.3% vs periodo precedente
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. CORE METRICS SECTION */}
        <section id="metrics" className="space-y-8">
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
              <Target className="h-7 w-7 text-primary" />
              Metriche Core
            </h2>
            <p className="text-muted-foreground mb-6">Indicatori chiave delle performance del brand nelle risposte AI</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Eye className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">Visibility Score</h3>
                    <p className="text-xs text-muted-foreground">% di prompt con menzione brand</p>
                  </div>
                </div>
                <Info className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">67.2%</div>
              <div className="flex items-center gap-2 text-sm text-green-600 mb-4">
                <TrendingUp className="h-4 w-4" />
                +5.3% vs mese scorso
              </div>
              <Progress value={67.2} className="h-3 mb-4" />
              <div className="text-xs text-muted-foreground">
                743 menzioni su 1,247 prompt totali testati
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">Trust Score</h3>
                    <p className="text-xs text-muted-foreground">Posizione media + sentiment</p>
                  </div>
                </div>
                <Info className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">61.8%</div>
              <div className="flex items-center gap-2 text-sm text-green-600 mb-4">
                <TrendingUp className="h-4 w-4" />
                +3.2% vs mese scorso
              </div>
              <Progress value={61.8} className="h-3 mb-4" />
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>Pos. media: 1.8</div>
                <div>Sentiment: 75%</div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">Total Mentions</h3>
                    <p className="text-xs text-muted-foreground">Numero totale citazioni</p>
                  </div>
                </div>
                <Info className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">1,547</div>
              <div className="flex items-center gap-2 text-sm text-green-600 mb-4">
                <TrendingUp className="h-4 w-4" />
                +156 vs mese scorso
              </div>
              <div className="grid grid-cols-3 gap-2">
                <Badge variant="default" className="text-xs justify-center">Pos: 58%</Badge>
                <Badge variant="secondary" className="text-xs justify-center">Neu: 31%</Badge>
                <Badge variant="outline" className="text-xs justify-center">Neg: 11%</Badge>
              </div>
            </div>
          </div>

          {/* Additional Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-6 text-center">
              <Activity className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">2.3</div>
              <div className="text-sm font-medium mb-1">Posizione Media</div>
              <div className="text-xs text-muted-foreground">Ranking nelle risposte</div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">89%</div>
              <div className="text-sm font-medium mb-1">Consistenza</div>
              <div className="text-xs text-muted-foreground">Menzioni regolari</div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <DollarSign className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">34%</div>
              <div className="text-sm font-medium mb-1">Shopping Results</div>
              <div className="text-xs text-muted-foreground">Presenza e-commerce</div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">23</div>
              <div className="text-sm font-medium mb-1">Fonti Esterne</div>
              <div className="text-xs text-muted-foreground">Menzioni terze parti</div>
            </div>
          </div>
        </section>

        {/* 3. CHARTS SECTION */}
        <section className="space-y-8">
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
              <BarChart3 className="h-7 w-7 text-primary" />
              Analisi Trend e Sentiment
            </h2>
            <p className="text-muted-foreground mb-6">Evoluzione temporale delle metriche chiave e distribuzione sentiment</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* KPI Trend */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Trend KPI Score</h3>
                  <p className="text-sm text-muted-foreground">Evoluzione mensile di Visibility e Trust Score</p>
                </div>
                <Info className="h-4 w-4 text-muted-foreground" />
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
                  <Area type="monotone" dataKey="visibility" stroke="#D97706" fillOpacity={1} fill="url(#visibilityGradient)" strokeWidth={3} name="Visibility %" />
                  <Area type="monotone" dataKey="trust" stroke="#7C3AED" fillOpacity={1} fill="url(#trustGradient)" strokeWidth={3} name="Trust %" />
                </AreaChart>
              </ResponsiveContainer>
              <div className="mt-4 flex items-center justify-center gap-6 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-600 rounded"></div>
                  <span>Visibility Score</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-600 rounded"></div>
                  <span>Trust Score</span>
                </div>
              </div>
            </div>

            {/* Sentiment Analysis */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sentiment Analysis</h3>
                  <p className="text-sm text-muted-foreground">Distribuzione del sentiment nelle menzioni brand</p>
                </div>
                <Info className="h-4 w-4 text-muted-foreground" />
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
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div className="glass-button rounded-lg p-3">
                  <div className="text-lg font-bold text-green-600">897</div>
                  <div className="text-xs text-muted-foreground">Menzioni Positive</div>
                </div>
                <div className="glass-button rounded-lg p-3">
                  <div className="text-lg font-bold text-gray-600">479</div>
                  <div className="text-xs text-muted-foreground">Menzioni Neutrali</div>
                </div>
                <div className="glass-button rounded-lg p-3">
                  <div className="text-lg font-bold text-red-600">171</div>
                  <div className="text-xs text-muted-foreground">Menzioni Negative</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. COMPETITIVE ANALYSIS */}
        <section id="competitive" className="space-y-8">
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
              <Trophy className="h-7 w-7 text-primary" />
              Analisi Competitiva
            </h2>
            <p className="text-muted-foreground mb-6">Posizionamento vs competitor e performance per modello LLM</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Competitor Ranking</h3>
                  <p className="text-sm text-muted-foreground">Basato su prompt senza brand mention</p>
                </div>
                <Badge variant="outline">No Brand Prompts</Badge>
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
                          <div className="text-sm text-muted-foreground flex items-center gap-3">
                            {competitor.mentions} menzioni
                            <span className={`text-xs ${competitor.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                              {competitor.growth}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="mb-1">{competitor.sentiment}%</Badge>
                        <div className="text-xs text-muted-foreground">sentiment</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Performance per Modello LLM</h3>
                  <p className="text-sm text-muted-foreground">Visibility e sentiment per ciascun modello AI</p>
                </div>
                <Info className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="space-y-6">
                {modelPerformance.map((model, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Brain className="h-5 w-5 text-primary" />
                        <span className="font-medium">{model.model}</span>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <span>Vis: {model.visibility}%</span>
                        <span>Sent: {model.sentiment}%</span>
                        <Badge variant="outline">{model.mentions}</Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Visibility Score</span>
                        <span>{model.visibility}%</span>
                      </div>
                      <Progress value={model.visibility} className="h-2" />
                      <div className="flex justify-between text-xs">
                        <span>Trust Score</span>
                        <span>{model.trust}%</span>
                      </div>
                      <Progress value={model.trust} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. PROMPT PERFORMANCE */}
        <section id="performance" className="space-y-8">
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
              <Star className="h-7 w-7 text-primary" />
              Performance Prompt
            </h2>
            <p className="text-muted-foreground mb-6">Analisi delle query con migliori e peggiori performance</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-green-600">Top 3 Performing Prompts</h3>
                  <p className="text-sm text-muted-foreground">Query con migliori risultati e posizionamento</p>
                </div>
                <Trophy className="h-6 w-6 text-green-600" />
              </div>
              <div className="space-y-4">
                {topPrompts.map((prompt, index) => (
                  <div key={index} className="glass-button rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="font-medium text-sm leading-relaxed flex-1">{prompt.prompt}</div>
                        <Badge className="ml-2 bg-green-100 text-green-800 text-xs">#{prompt.position}</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground italic">
                        "{prompt.context}"
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <Badge variant="default" className="text-xs">
                            Menzionato
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {prompt.sentiment}
                          </Badge>
                        </div>
                        <div className="text-lg font-bold text-green-600">{prompt.score}%</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-red-600">Worst 3 Performing Prompts</h3>
                  <p className="text-sm text-muted-foreground">Query con necessità di miglioramento</p>
                </div>
                <TrendingDown className="h-6 w-6 text-red-600" />
              </div>
              <div className="space-y-4">
                {worstPrompts.map((prompt, index) => (
                  <div key={index} className="glass-button rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="font-medium text-sm leading-relaxed flex-1">{prompt.prompt}</div>
                        {prompt.position && (
                          <Badge variant="destructive" className="ml-2 text-xs">#{prompt.position}</Badge>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground italic">
                        "{prompt.context}"
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <Badge variant={prompt.mentioned ? "default" : "outline"} className="text-xs">
                            {prompt.mentioned ? "Menzionato" : "Non menzionato"}
                          </Badge>
                          <Badge variant={prompt.sentiment === "Negativo" ? "destructive" : "outline"} className="text-xs">
                            {prompt.sentiment}
                          </Badge>
                        </div>
                        <div className="text-lg font-bold text-red-600">{prompt.score}%</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. TIME-BASED ANALYSIS */}
        <section id="temporal" className="space-y-8">
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
              <Calendar className="h-7 w-7 text-primary" />
              Analisi Temporale
            </h2>
            <p className="text-muted-foreground mb-6">Proiezioni e trend temporali delle performance</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proiezione Trimestrale</h3>
                  <p className="text-sm text-muted-foreground">Baseline stabilita per comparazioni future</p>
                </div>
                <Info className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="text-center p-8">
                <div className="text-4xl font-bold text-primary mb-4">Baseline Established</div>
                <p className="text-muted-foreground mb-4">Primo report completato con successo</p>
                <Badge variant="outline" className="mb-6">Prossimo report in 4 settimane</Badge>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="glass-button rounded-lg p-3">
                    <div className="font-bold text-primary">72.5</div>
                    <div className="text-xs text-muted-foreground">Score Attuale</div>
                  </div>
                  <div className="glass-button rounded-lg p-3">
                    <div className="font-bold text-green-600">+8.3%</div>
                    <div className="text-xs text-muted-foreground">Growth Rate</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Visibility by Buyer Persona</h3>
                  <p className="text-sm text-muted-foreground">Performance per tipologia di utente target</p>
                </div>
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-4">
                {buyerPersonas.map((persona, index) => (
                  <div key={index} className="glass-button rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <span className="font-medium">{persona.persona}</span>
                        <div className="text-xs text-muted-foreground mt-1">
                          {persona.mentions} menzioni • {persona.avgSession} sessione media
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-primary font-bold text-lg">{persona.visibility}%</span>
                        <div className="text-xs text-muted-foreground">visibility</div>
                      </div>
                    </div>
                    <Progress value={persona.visibility} className="h-2 mb-2" />
                    <div className="flex items-center justify-between text-xs">
                      <span>Sentiment Score: {persona.sentiment}%</span>
                      <Badge variant="outline" className="text-xs">{persona.mentions}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. DETAILED BREAKDOWN */}
        <section id="breakdown" className="space-y-8">
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
              <PieChartIcon className="h-7 w-7 text-primary" />
              Dettaglio per Segmenti
            </h2>
            <p className="text-muted-foreground mb-6">Breakdown dettagliato per categoria e prodotto</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Visibility by Category</h3>
                  <p className="text-sm text-muted-foreground">Performance per categoria di prodotto/servizio</p>
                </div>
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-4">
                {categoryBreakdown.map((category, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{category.category}</span>
                        <div className="text-xs text-muted-foreground">
                          Pos. media: {category.avgPosition} • Sentiment: {category.sentiment}%
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-primary">{category.visibility}%</span>
                        <Badge variant="outline" className="text-xs">{category.mentions}</Badge>
                      </div>
                    </div>
                    <Progress value={category.visibility} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Prodotti Più Citati</h3>
                  <p className="text-sm text-muted-foreground">Ranking prodotti per numero di menzioni</p>
                </div>
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="glass-button rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="font-medium text-sm flex-1">{product.product}</div>
                        <Badge className="ml-2 text-xs">#{index + 1}</Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-xs">
                        <div className="text-center">
                          <div className="font-bold text-primary">{product.mentions}</div>
                          <div className="text-muted-foreground">Menzioni</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-green-600">{product.sentiment}%</div>
                          <div className="text-muted-foreground">Sentiment</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-blue-600">{product.shopResults}%</div>
                          <div className="text-muted-foreground">Shopping</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. SHOPPING RESULTS & EXTERNAL MENTIONS */}
        <section id="shopping" className="space-y-8">
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
              <ShoppingCart className="h-7 w-7 text-primary" />
              Shopping Results & Menzioni Esterne
            </h2>
            <p className="text-muted-foreground mb-6">Presenza nei risultati di shopping e citazioni da fonti terze</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Shopping Result Presence</h3>
                  <p className="text-sm text-muted-foreground">Frequenza di apparizione nei risultati shopping</p>
                </div>
                <ShoppingCart className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">34%</div>
                  <p className="text-sm text-muted-foreground">Prodotti presenti nei risultati shopping</p>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div className="glass-button rounded-lg p-3">
                      <div className="font-bold text-primary">156</div>
                      <div className="text-xs text-muted-foreground">Apparizioni totali</div>
                    </div>
                    <div className="glass-button rounded-lg p-3">
                      <div className="font-bold text-green-600">67%</div>
                      <div className="text-xs text-muted-foreground">Click-through rate</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {topProducts.slice(0, 3).map((product, index) => (
                    <div key={index} className="glass-button rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{product.product}</span>
                        <Badge variant="outline">{product.shopResults}%</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">External Mentions</h3>
                  <p className="text-sm text-muted-foreground">Citazioni da fonti di terze parti autorevoli</p>
                </div>
                <ExternalLink className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-primary mb-2">23</div>
                  <p className="text-sm text-muted-foreground">Fonti esterne che citano il brand</p>
                </div>
                <div className="space-y-3">
                  {externalMentions.map((mention, index) => (
                    <div key={index} className="glass-button rounded-lg p-4">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <div className="font-medium text-sm">{mention.source}</div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">DA: {mention.authority}</Badge>
                            <Badge variant={mention.sentiment === "Positivo" ? "default" : "secondary"} className="text-xs">
                              {mention.sentiment}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-xs font-medium text-muted-foreground">{mention.title}</div>
                        <div className="text-xs text-muted-foreground italic">"{mention.context}"</div>
                        <div className="text-xs text-muted-foreground">{mention.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. RECOMMENDATIONS */}
        <section id="recommendations" className="space-y-8">
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
              <Lightbulb className="h-7 w-7 text-primary" />
              Raccomandazioni & Optimization Tips
            </h2>
            <p className="text-muted-foreground mb-6">Suggerimenti strategici per migliorare la visibility e il posizionamento</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Ottimizzazioni per Modello LLM
              </h3>
              <div className="space-y-4">
                <div className="glass-button rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">GPT-4 Optimization</span>
                    <Badge variant="destructive" className="text-xs">High Priority</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Migliorare contenuti tecnici e approfondimenti per aumentare visibility del 15%
                  </p>
                  <div className="text-xs">
                    <strong>Azioni:</strong> Creare guide tecniche dettagliate, FAQ avanzate
                  </div>
                </div>
                
                <div className="glass-button rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">Claude Enhancement</span>
                    <Badge variant="outline" className="text-xs">Medium Priority</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Ottimizzare per query analitiche e comparazioni dettagliate
                  </p>
                  <div className="text-xs">
                    <strong>Azioni:</strong> Sviluppare comparison charts, analisi competitive
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Opportunità per Categoria
              </h3>
              <div className="space-y-4">
                <div className="glass-button rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">Sostenibilità & Eco-friendly</span>
                    <Badge variant="default" className="text-xs">New Opportunity</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Gap identificato in query "eco-friendly" e "sostenibilità" - competitor dominano
                  </p>
                  <div className="text-xs">
                    <strong>Potenziale:</strong> +25% visibility in segmento green
                  </div>
                </div>
                
                <div className="glass-button rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">Budget-Friendly Solutions</span>
                    <Badge variant="outline" className="text-xs">Medium Priority</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Assente in query price-sensitive - sviluppare linea entry-level
                  </p>
                  <div className="text-xs">
                    <strong>Azioni:</strong> Creare contenuti su soluzioni economiche
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Ottimizzazioni per Persona
              </h3>
              <div className="space-y-4">
                <div className="glass-button rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">Interior Designer Focus</span>
                    <Badge variant="default" className="text-xs">High Impact</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Sviluppare case study e portfolio per aumentare trust score
                  </p>
                  <div className="text-xs">
                    <strong>ROI Stimato:</strong> +12% trust score, +8% menzioni
                  </div>
                </div>
                
                <div className="glass-button rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">Architect Outreach</span>
                    <Badge variant="outline" className="text-xs">Growth Potential</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Visibility più bassa - creare contenuti tecnici specifici
                  </p>
                  <div className="text-xs">
                    <strong>Azioni:</strong> Specifiche tecniche, certificazioni, normative
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-primary" />
                Shopping Optimization
              </h3>
              <div className="space-y-4">
                <div className="glass-button rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">Product Descriptions</span>
                    <Badge variant="outline" className="text-xs">Quick Win</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Ottimizzare descrizioni prodotti per aumentare presenza shopping results
                  </p>
                  <div className="text-xs">
                    <strong>Obiettivo:</strong> Da 34% a 50% presenza shopping
                  </div>
                </div>
                
                <div className="glass-button rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">Rich Snippets</span>
                    <Badge variant="default" className="text-xs">Technical SEO</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Implementare structured data per migliorare visibility
                  </p>
                  <div className="text-xs">
                    <strong>Impatto:</strong> +15% click-through rate stimato
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Items Summary */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Piano di Azione Prioritario
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-button rounded-lg p-4 border-l-4 border-red-500">
                <div className="font-medium text-sm mb-2 text-red-600">Settimana 1-2</div>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Ottimizzazione GPT-4 content</li>
                  <li>• Case study Interior Designer</li>
                  <li>• Fix query price-sensitive</li>
                </ul>
              </div>
              <div className="glass-button rounded-lg p-4 border-l-4 border-yellow-500">
                <div className="font-medium text-sm mb-2 text-yellow-600">Settimana 3-4</div>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Contenuti sostenibilità</li>
                  <li>• Technical docs for Architects</li>
                  <li>• Shopping optimization</li>
                </ul>
              </div>
              <div className="glass-button rounded-lg p-4 border-l-4 border-green-500">
                <div className="font-medium text-sm mb-2 text-green-600">Mese 2</div>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Monitoring e adjustment</li>
                  <li>• Structured data implementation</li>
                  <li>• Next report comparison</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LLMDashboard;
