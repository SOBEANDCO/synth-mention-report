
import React from 'react';

const DetailedBreakdown = () => {
  const categoryData = [
    { category: 'Arredamento Residenziale', visibility: 78, mentions: 234 },
    { category: 'Contract & Uffici', visibility: 82, mentions: 198 },
    { category: 'Hospitality', visibility: 65, mentions: 87 },
    { category: 'Retail & Negozi', visibility: 58, mentions: 57 },
  ];

  const personaData = [
    { persona: 'Interior Designer', visibility: 85, sentiment: 8.4 },
    { persona: 'Property Owner', visibility: 71, sentiment: 7.9 },
    { persona: 'Architect', visibility: 69, sentiment: 8.1 },
    { persona: 'Property Manager', visibility: 52, sentiment: 7.2 },
  ];

  const productData = [
    { product: 'Sistemi Modulari Ufficio', mentions: 156, sentiment: 8.3, percentage: 27 },
    { product: 'Sedute Executive', mentions: 134, sentiment: 8.1, percentage: 23 },
    { product: 'Tavoli Meeting', mentions: 98, mentions_percentage: 17, sentiment: 7.9 },
    { product: 'Soluzioni Storage', mentions: 87, percentage: 15, sentiment: 7.6 },
    { product: 'Accessori Tech', mentions: 45, percentage: 8, sentiment: 8.0 },
    { product: 'Altri Prodotti', mentions: 56, percentage: 10, sentiment: 7.8 },
  ];

  return (
    <div className="page-break min-h-screen px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-gray-900 mb-8 tracking-tight">
          Detailed Breakdown
        </h1>
        
        <p className="text-gray-600 mb-12 text-lg leading-relaxed">
          Analisi granulare delle performance per categoria, buyer persona e prodotti specifici, 
          per identificare opportunità di ottimizzazione mirata.
        </p>
        
        {/* Visibility by Category */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            🗂️ Visibility per Categoria
          </h2>
          
          <div className="space-y-4">
            {categoryData.map((category, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">{category.category}</h3>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Visibility</div>
                      <div className="text-xl font-semibold text-gray-900">{category.visibility}%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Menzioni</div>
                      <div className="text-xl font-semibold text-gray-900">{category.mentions}</div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      category.visibility >= 75 ? 'bg-green-500' :
                      category.visibility >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${category.visibility}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Visibility by Buyer Persona */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            👥 Performance per Buyer Persona
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personaData.map((persona, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">{persona.persona}</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Visibility Score</span>
                      <span className="text-sm font-semibold text-gray-900">{persona.visibility}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${persona.visibility}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Sentiment Score</span>
                      <span className="text-sm font-semibold text-gray-900">{persona.sentiment}/10</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${persona.sentiment * 10}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Most Cited Products */}
        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            📦 Prodotti Più Citati
          </h2>
          
          <div className="space-y-3">
            {productData.map((product, index) => (
              <div key={index} className="p-4 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      index === 0 ? 'bg-yellow-400 text-yellow-900' :
                      index === 1 ? 'bg-gray-300 text-gray-700' :
                      index === 2 ? 'bg-orange-300 text-orange-800' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{product.product}</h3>
                      <div className="text-sm text-gray-600">
                        {product.mentions} menzioni • Sentiment {product.sentiment}/10
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900">
                      {product.percentage}%
                    </div>
                    <div className="text-xs text-gray-600">del totale</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="font-semibold text-yellow-900 mb-2">Opportunity Alert</h3>
            <p className="text-sm text-yellow-800">
              I "Property Manager" mostrano il visibility score più basso (52%). 
              Sviluppare contenuti specifici per questo segmento potrebbe aumentare 
              significativamente le menzioni complessive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedBreakdown;
