
import React from 'react';
import { ArrowRight, Target, TrendingUp, Users, Zap } from 'lucide-react';

interface AppleRecommendationsSectionProps {
  scrollY: number;
}

const AppleRecommendationsSection = ({ scrollY }: AppleRecommendationsSectionProps) => {
  const recommendations = [
    {
      icon: Target,
      title: "Ottimizzazione Gemini",
      description: "Sviluppare contenuti specifici per migliorare la visibilità su Google Gemini",
      priority: "Alta",
      effort: "3-4 settimane",
      impact: "+25% visibility",
      color: "red"
    },
    {
      icon: Users,
      title: "Targeting Property Manager",
      description: "Creare messaggi dedicati per il segmento Property Manager",
      priority: "Media",
      effort: "2-3 settimane", 
      impact: "+15% mentions",
      color: "yellow"
    },
    {
      icon: TrendingUp,
      title: "Espansione Shopping",
      description: "Potenziare la presenza nei risultati shopping-oriented",
      priority: "Alta",
      effort: "4-6 settimane",
      impact: "+30% commercial queries",
      color: "green"
    },
    {
      icon: Zap,
      title: "Content Optimization",
      description: "Ottimizzare i contenuti esistenti per migliorare il sentiment",
      priority: "Bassa",
      effort: "1-2 settimane",
      impact: "+10% positive sentiment",
      color: "blue"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div 
          className="text-center mb-20"
          style={{
            transform: `translateY(${scrollY * -0.03}px)`
          }}
        >
          <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Raccomandazioni Strategiche
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Piano d'azione prioritizzato per massimizzare la visibilità del brand 
            nell'ecosistema dei Large Language Models.
          </p>
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {recommendations.map((rec, index) => {
            const Icon = rec.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                style={{
                  transform: `translateY(${scrollY * (-0.02 - index * 0.005)}px)`
                }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-2xl ${
                    rec.color === 'red' ? 'bg-red-100' :
                    rec.color === 'yellow' ? 'bg-yellow-100' :
                    rec.color === 'green' ? 'bg-green-100' :
                    'bg-blue-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      rec.color === 'red' ? 'text-red-600' :
                      rec.color === 'yellow' ? 'text-yellow-600' :
                      rec.color === 'green' ? 'text-green-600' :
                      'text-blue-600'
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {rec.title}
                      </h3>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        rec.priority === 'Alta' ? 'bg-red-100 text-red-800' :
                        rec.priority === 'Media' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {rec.priority}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 font-light mb-6 leading-relaxed">
                      {rec.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 font-medium">Effort</span>
                        <span className="text-sm text-gray-900">{rec.effort}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 font-medium">Impact</span>
                        <span className={`text-sm font-medium ${
                          rec.color === 'red' ? 'text-red-600' :
                          rec.color === 'yellow' ? 'text-yellow-600' :
                          rec.color === 'green' ? 'text-green-600' :
                          'text-blue-600'
                        }`}>
                          {rec.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                  <span className="text-sm font-medium">View Details</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary CTA */}
        <div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white"
          style={{
            transform: `translateY(${scrollY * -0.01}px)`
          }}
        >
          <h3 className="text-3xl font-light mb-4">
            Pronto per il prossimo passo?
          </h3>
          <p className="text-xl font-light opacity-90 mb-8 max-w-2xl mx-auto">
            Implementare queste raccomandazioni può incrementare la visibilità del brand 
            del 40% entro i prossimi 6 mesi.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold hover:bg-gray-50 transition-colors">
              Scarica Piano Dettagliato
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl font-semibold hover:bg-white/30 transition-colors">
              Pianifica Meeting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleRecommendationsSection;
