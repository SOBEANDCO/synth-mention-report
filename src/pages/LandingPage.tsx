
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, Zap, Shield, Star, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BarChart3,
      title: "LLM Analytics",
      description: "Analizza la presenza del tuo brand sui principali modelli AI"
    },
    {
      icon: Users,
      title: "Competitive Intelligence",
      description: "Confronta le performance con i tuoi competitor principali"
    },
    {
      icon: Zap,
      title: "Real-time Insights",
      description: "Dati aggiornati in tempo reale per decisioni rapide"
    },
    {
      icon: Shield,
      title: "Sicurezza Avanzata",
      description: "I tuoi dati sono protetti con crittografia enterprise"
    }
  ];

  const testimonials = [
    {
      name: "Marco Rossi",
      role: "CMO, TechCorp",
      content: "Incredibile come abbiamo migliorato la visibilità del nostro brand del 300%",
      rating: 5
    },
    {
      name: "Laura Bianchi",
      role: "Digital Marketing Manager",
      content: "La piattaforma più completa per l'analisi AI che abbia mai usato",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Visibility
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/login')}>
              Accedi
            </Button>
            <Button onClick={() => navigate('/register')} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              Inizia Gratis
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 tracking-tight">
            Il futuro dell'analisi AI è qui
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light mb-12 max-w-4xl mx-auto leading-relaxed">
            Scopri come il tuo brand appare nelle conversazioni AI. 
            Analizza, ottimizza e domina la visibilità su ChatGPT, Gemini e Claude.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              onClick={() => navigate('/register')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 text-lg rounded-2xl"
            >
              Inizia Gratis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/report-v4')}
              className="px-8 py-4 text-lg rounded-2xl border-2"
            >
              Vedi Demo Report
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">1000+</div>
              <div className="text-gray-600">Brand Analizzati</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">50M+</div>
              <div className="text-gray-600">Query Processate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Garantito</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Funzionalità Avanzate
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Tutto quello che serve per dominare l'ecosistema AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Cosa Dicono i Clienti
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Pronto a Dominare l'AI?
          </h2>
          <p className="text-xl text-white/90 font-light mb-12 max-w-3xl mx-auto">
            Unisciti a migliaia di brand che stanno già vincendo nell'era dell'intelligenza artificiale
          </p>
          
          <Button 
            size="lg" 
            onClick={() => navigate('/register')}
            className="bg-white text-purple-600 hover:bg-gray-50 px-12 py-4 text-lg rounded-2xl font-semibold"
          >
            Inizia Gratis Oggi
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="text-lg font-semibold">AI Visibility</span>
          </div>
          <p className="text-gray-400">© 2024 AI Visibility. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
