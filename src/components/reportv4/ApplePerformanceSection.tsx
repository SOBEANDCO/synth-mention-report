
import React from 'react';

interface ApplePerformanceSectionProps {
  scrollY: number;
}

const ApplePerformanceSection = ({ scrollY }: ApplePerformanceSectionProps) => {
  const topPrompts = [
    { text: "Migliori brand di arredamento moderno per uffici", score: 9.2, sentiment: "Positivo" },
    { text: "Soluzioni di design per spazi commerciali", score: 8.8, sentiment: "Positivo" },
    { text: "Arredamento sostenibile e eco-friendly", score: 8.5, sentiment: "Positivo" }
  ];

  const products = [
    { name: "Sistemi Modulari Ufficio", mentions: 156, percentage: 27 },
    { name: "Sedute Executive", mentions: 134, percentage: 23 },
    { name: "Tavoli Meeting", mentions: 98, percentage: 17 },
    { name: "Soluzioni Storage", mentions: 87, percentage: 15 }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div 
          className="text-center mb-20"
          style={{
            transform: `translateY(${scrollY * -0.03}px)`
          }}
        >
          <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Performance Analysis
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Analisi dettagliata dei prompt di maggior successo e dei prodotti 
            più citati nelle risposte degli LLM.
          </p>
        </div>

        {/* Top Performing Prompts */}
        <div 
          className="mb-20"
          style={{
            transform: `translateY(${scrollY * -0.02}px)`
          }}
        >
          <h3 className="text-3xl font-light text-gray-900 mb-12 text-center">
            Top Performing Prompts
          </h3>
          
          <div className="space-y-6">
            {topPrompts.map((prompt, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-semibold text-sm">
                          #{index + 1}
                        </span>
                      </div>
                      <div className="text-sm text-green-600 font-medium">
                        {prompt.sentiment}
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-900 font-medium mb-2">
                      "{prompt.text}"
                    </p>
                    
                    <p className="text-gray-600 font-light">
                      Citato al primo posto con descrizione dettagliata delle caratteristiche 
                      e vantaggi competitivi del brand.
                    </p>
                  </div>
                  
                  <div className="text-right ml-6">
                    <div className="text-3xl font-light text-gray-900 mb-1">
                      {prompt.score}
                    </div>
                    <div className="text-sm text-gray-600">Performance Score</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Cited Products */}
        <div 
          className="bg-white rounded-3xl p-12 shadow-lg"
          style={{
            transform: `translateY(${scrollY * -0.01}px)`
          }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-gray-900 mb-4">
              Prodotti Più Citati
            </h3>
            <p className="text-lg text-gray-600 font-light">
              Distribuzione delle menzioni per categoria di prodotto
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-gray-50 rounded-2xl"
              >
                <div className="text-3xl font-light text-gray-900 mb-2">
                  {product.percentage}%
                </div>
                <h4 className="font-medium text-gray-900 mb-2">
                  {product.name}
                </h4>
                <div className="text-sm text-gray-600">
                  {product.mentions} menzioni
                </div>
                
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${product.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplePerformanceSection;
