
import React from 'react';
import { CheckCircle, XCircle, TrendingUp, TrendingDown } from 'lucide-react';

interface AppleTopPromptsSectionProps {
  scrollY: number;
}

const AppleTopPromptsSection = ({ scrollY }: AppleTopPromptsSectionProps) => {
  const parallaxText = scrollY * 0.03;
  const parallaxContent = scrollY * 0.015;

  const topPrompts = [
    {
      text: "What are the best modular kitchens for small spaces?",
      reason: "Brand citato al 1° posto con dettagli su modularità",
      score: 9.2
    },
    {
      text: "Sustainable furniture brands for modern homes",
      reason: "Enfasi su sostenibilità e design contemporaneo",
      score: 8.8
    },
    {
      text: "Best Italian furniture companies for office spaces",
      reason: "Made in Italy + focus su contract business",
      score: 8.5
    }
  ];

  const worstPrompts = [
    {
      text: "Cheapest home furniture online",
      reason: "Competizione su prezzo, non su qualità",
      score: 2.1
    },
    {
      text: "Vintage antique furniture dealers",
      reason: "Categoria completamente diversa dal brand",
      score: 1.8
    },
    {
      text: "DIY furniture assembly tips",
      reason: "Focus su fai-da-te, non su prodotti finiti",
      score: 1.3
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className="text-center mb-20"
          style={{
            transform: `translateY(${parallaxText}px)`
          }}
        >
          <div className="text-4xl font-light text-gray-400 mb-4">8</div>
          <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Quali domande fanno emergere il tuo brand?
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Which prompts make your brand stand out?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Top Performing Prompts */}
          <div 
            style={{
              transform: `translateY(${parallaxContent}px)`
            }}
          >
            <div className="bg-green-50 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-light text-green-800">Top 3 Prompts</h3>
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              
              <div className="space-y-6">
                {topPrompts.map((prompt, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 font-semibold text-sm">#{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 mb-2">"{prompt.text}"</p>
                        <p className="text-sm text-gray-600 mb-3">{prompt.reason}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">Performance Score:</span>
                          <span className="text-sm font-medium text-green-600">{prompt.score}/10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-green-100 rounded-2xl p-6">
                <h4 className="font-medium text-green-800 mb-2">💡 Raccomandazione</h4>
                <p className="text-green-700 text-sm">
                  Ottimizza i contenuti per query su <strong>sostenibilità</strong> e <strong>modularità</strong>. 
                  Queste parole chiave generano le menzioni migliori.
                </p>
              </div>
            </div>
          </div>

          {/* Worst Performing Prompts */}
          <div 
            style={{
              transform: `translateY(${parallaxContent * 0.8}px)`
            }}
          >
            <div className="bg-red-50 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-light text-red-800">Worst 3 Prompts</h3>
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
              
              <div className="space-y-6">
                {worstPrompts.map((prompt, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-red-600 font-semibold text-sm">#{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 mb-2">"{prompt.text}"</p>
                        <p className="text-sm text-gray-600 mb-3">{prompt.reason}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">Performance Score:</span>
                          <span className="text-sm font-medium text-red-600">{prompt.score}/10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-red-100 rounded-2xl p-6">
                <h4 className="font-medium text-red-800 mb-2">⚠️ Attenzione</h4>
                <p className="text-red-700 text-sm">
                  Evita di competere su <strong>prezzo</strong> e <strong>categorie vintage</strong>. 
                  Concentrati su qualità e design moderno.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleTopPromptsSection;
