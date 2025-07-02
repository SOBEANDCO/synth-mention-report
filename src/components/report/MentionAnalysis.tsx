
import React from 'react';

const MentionAnalysis = () => {
  const competitorMentions = [
    { name: 'Competitor A', count: 45, percentage: 23 },
    { name: 'Competitor B', count: 38, percentage: 19 },
    { name: 'Competitor C', count: 29, percentage: 15 },
    { name: 'Competitor D', count: 22, percentage: 11 },
    { name: 'Altri', count: 63, percentage: 32 },
  ];

  return (
    <div className="page-break min-h-screen px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-gray-900 mb-8 tracking-tight">
          Mention Deep Dive
        </h1>
        
        <p className="text-gray-600 mb-12 text-lg leading-relaxed">
          Analisi approfondita delle menzioni del brand, incluso il sentiment e 
          i pattern di co-citazione con i competitor.
        </p>
        
        {/* Sentiment Analysis */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            Analisi del Sentiment nelle Menzioni Brand
          </h2>
          
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-green-50 rounded-lg text-center">
              <div className="text-3xl font-light text-green-600 mb-2">72%</div>
              <div className="text-sm text-green-800 font-medium">Positivo</div>
              <div className="text-xs text-green-600 mt-1">+5% vs Q4 2023</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg text-center">
              <div className="text-3xl font-light text-gray-600 mb-2">21%</div>
              <div className="text-sm text-gray-800 font-medium">Neutro</div>
              <div className="text-xs text-gray-600 mt-1">-2% vs Q4 2023</div>
            </div>
            <div className="p-6 bg-red-50 rounded-lg text-center">
              <div className="text-3xl font-light text-red-600 mb-2">7%</div>
              <div className="text-sm text-red-800 font-medium">Negativo</div>
              <div className="text-xs text-red-600 mt-1">-3% vs Q4 2023</div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Esempi di Menzioni Positive</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-400 pl-4">
                <p className="text-gray-700 italic mb-2">
                  "Per l'arredamento di design italiano, il brand X si distingue per 
                  l'innovazione e la qualità dei materiali utilizzati..."
                </p>
                <div className="text-xs text-gray-500">ChatGPT • Query: "migliori brand arredamento"</div>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <p className="text-gray-700 italic mb-2">
                  "Tra le soluzioni più apprezzate dai designer, X offre un perfetto 
                  equilibrio tra estetica contemporanea e funzionalità..."
                </p>
                <div className="text-xs text-gray-500">Claude • Query: "arredamento ufficio moderno"</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Co-mentions with Competitors */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            Competitor Co-citati nelle Menzioni Brand
          </h2>
          
          <div className="space-y-3">
            {competitorMentions.map((competitor, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-semibold text-gray-700">
                    {index + 1}
                  </div>
                  <span className="font-medium text-gray-900">{competitor.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-900">{competitor.count} menzioni</div>
                    <div className="text-xs text-gray-600">{competitor.percentage}% del totale</div>
                  </div>
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 rounded-full" 
                      style={{ width: `${competitor.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Insight:</strong> Il 68% delle menzioni del nostro brand include almeno un competitor, 
              indicando un mercato altamente competitivo dove il confronto diretto è la norma.
            </p>
          </div>
        </div>
        
        {/* Context Analysis */}
        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            Contesti di Menzione Più Frequenti
          </h2>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Settori</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Arredamento Residenziale</span>
                  <span className="text-sm font-medium text-gray-900">34%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Contract & Uffici</span>
                  <span className="text-sm font-medium text-gray-900">28%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Hospitality</span>
                  <span className="text-sm font-medium text-gray-900">22%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Retail</span>
                  <span className="text-sm font-medium text-gray-900">16%</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Tipologie di Query</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Confronto Prodotti</span>
                  <span className="text-sm font-medium text-gray-900">31%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Raccomandazioni</span>
                  <span className="text-sm font-medium text-gray-900">27%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Specifiche Tecniche</span>
                  <span className="text-sm font-medium text-gray-900">24%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Prezzi & Budget</span>
                  <span className="text-sm font-medium text-gray-900">18%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionAnalysis;
