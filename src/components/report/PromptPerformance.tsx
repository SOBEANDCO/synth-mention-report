
import React from 'react';

const PromptPerformance = () => {
  const topPrompts = [
    {
      prompt: "Migliori brand di arredamento moderno per uffici",
      result: "Brand citato al 1° posto con descrizione dettagliata",
      mentioned: true,
      sentiment: "Positivo",
      score: 9.2
    },
    {
      prompt: "Soluzioni di design per spazi commerciali",
      result: "Citato tra i top 3 con focus su innovazione",
      mentioned: true,
      sentiment: "Positivo", 
      score: 8.8
    },
    {
      prompt: "Arredamento sostenibile e eco-friendly",
      result: "Menzionato per l'impegno ambientale",
      mentioned: true,
      sentiment: "Positivo",
      score: 8.5
    }
  ];

  const worstPrompts = [
    {
      prompt: "Mobili economici per giovani professionisti",
      result: "Non menzionato, focus su brand low-cost",
      mentioned: false,
      sentiment: "N/A",
      score: 2.1
    },
    {
      prompt: "Arredamento fai-da-te e assemblaggio facile",
      result: "Citati solo competitor con soluzioni DIY",
      mentioned: false,
      sentiment: "N/A", 
      score: 1.8
    },
    {
      prompt: "Mobili per studenti universitari budget limitato",
      result: "Focus esclusivo su opzioni economiche",
        mentioned: false,
      sentiment: "N/A",
      score: 1.5
    }
  ];

  return (
    <div className="page-break min-h-screen px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-gray-900 mb-8 tracking-tight">
          Prompt Performance Analysis
        </h1>
        
        <p className="text-gray-600 mb-12 text-lg leading-relaxed">
          Analisi dettagliata delle performance sui singoli prompt, identificando 
          i pattern di successo e le opportunità di miglioramento.
        </p>
        
        {/* Top Performing Prompts */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            🚀 Top 3 Performing Prompts
          </h2>
          
          <div className="space-y-6">
            {topPrompts.map((prompt, index) => (
              <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-green-900 mb-2">
                      "{prompt.prompt}"
                    </h3>
                    <p className="text-green-800 text-sm mb-3">
                      {prompt.result}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-light text-green-600 mb-1">
                      {prompt.score}/10
                    </div>
                    <div className="text-xs text-green-600">Performance Score</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-700">Menzionato: Sì</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-700">Sentiment: {prompt.sentiment}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Worst Performing Prompts */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            🐌 Worst 3 Performing Prompts
          </h2>
          
          <div className="space-y-6">
            {worstPrompts.map((prompt, index) => (
              <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-red-900 mb-2">
                      "{prompt.prompt}"
                    </h3>
                    <p className="text-red-800 text-sm mb-3">
                      {prompt.result}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-light text-red-600 mb-1">
                      {prompt.score}/10
                    </div>
                    <div className="text-xs text-red-600">Performance Score</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-red-700">Menzionato: No</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <span className="text-red-700">Sentiment: N/A</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Performance Insights */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance Insights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3 text-green-700">
                ✅ Pattern di Successo
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Query focalizzate su qualità e design</li>
                <li>• Settore B2B e contract performing</li>
                <li>• Menzioni in contesti premium</li>
                <li>• Forte associazione con innovazione</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-3 text-red-700">
                ❌ Gap Identificati
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Assenza nel segmento budget/economico</li>
                <li>• Mancanza in query DIY e assemblaggio</li>
                <li>• Scarsa presenza target giovani</li>
                <li>• Gap nelle soluzioni temporanee</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white rounded border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-900 mb-2">Raccomandazione Strategica</h4>
            <p className="text-blue-800 text-sm">
              Sviluppare contenuti e messaging specifici per i segmenti sotto-performanti, 
              mantenendo il posizionamento premium ma espandendo la narrativa verso 
              soluzioni accessibili e versatili.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptPerformance;
