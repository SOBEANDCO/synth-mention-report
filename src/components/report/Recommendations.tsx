
import React from 'react';

const Recommendations = () => {
  const llmRecommendations = [
    {
      model: 'ChatGPT',
      score: 75,
      recommendations: [
        'Ottimizzare contenuti per query "arredamento economico" (+15% visibility potenziale)',
        'Sviluppare case study B2B per migliorare ranking nelle risposte aziendali',
        'Creare contenuti specifici su sostenibilità per rafforzare posizionamento green'
      ]
    },
    {
      model: 'Gemini',
      score: 43,
      recommendations: [
        'PRIORITÀ ALTA: Ottimizzazione SEO strutturata per Gemini (+25% visibility attesa)',
        'Implementare schema markup per prodotti e recensioni',
        'Aumentare presenza su Google My Business e review platforms'
      ]
    },
    {
      model: 'Claude',
      score: 72,
      recommendations: [
        'Espandere contenuti tecnici e specifiche dettagliate prodotti',
        'Sviluppare FAQ approfondite per query complesse',
        'Migliorare struttura informazioni su materiali e processi produttivi'
      ]
    },
    {
      model: 'Perplexity',
      score: 65,
      recommendations: [
        'Incrementare citazioni e fonti autorevoli nelle pagine prodotto',
        'Ottimizzare per query di ricerca scientifica e tecnica',
        'Sviluppare whitepaper e contenuti di ricerca approfonditi'
      ]
    }
  ];

  const productRecommendations = [
    {
      category: 'Sistemi Modulari',
      priority: 'Media',
      actions: [
        'Creare contenuti educational su configurazioni modulari',
        'Sviluppare tool interattivo di configurazione',
        'Case study implementazioni aziendali'
      ]
    },
    {
      category: 'Sedute Executive',
      priority: 'Bassa',
      actions: [
        'Mantenere posizionamento attuale',
        'Aggiornamenti periodici specifiche tecniche',
        'Focus su ergonomia e certificazioni'
      ]
    },
    {
      category: 'Accessori Tech',
      priority: 'Alta',
      actions: [
        'PRIORITÀ: Espansione gamma prodotti smart',
        'Partnership con tech companies',
        'Contenuti su integrazione IoT e smart office'
      ]
    }
  ];

  const personaActions = [
    {
      persona: 'Property Manager',
      gap: 'Alto',
      actions: [
        'Sviluppare contenuti su ROI e durabilità prodotti',
        'Case study risparmio energetico e manutenzione',
        'Webinar B2B specifici per property management',
        'Certificazioni e compliance normative'
      ]
    },
    {
      persona: 'Interior Designer',
      gap: 'Basso',
      actions: [
        'Mantenere partnership con design studios',
        'Espandere catalogo texture e finiture',
        'Eventi e workshop formativi'
      ]
    }
  ];

  return (
    <div className="page-break min-h-screen px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-gray-900 mb-8 tracking-tight">
          Recommendations & Action Plan
        </h1>
        
        <p className="text-gray-600 mb-12 text-lg leading-relaxed">
          Piano di azione strategico basato sui dati raccolti, con priorità chiare 
          e KPI misurabili per massimizzare la visibilità LLM.
        </p>
        
        {/* Priority Actions Summary */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-semibold text-red-900 mb-4">🚨 Azioni Prioritarie (Q2 2024)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-red-800 mb-2">Critiche (0-30 giorni)</h3>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Ottimizzazione immediata per Gemini</li>
                <li>• Sviluppo contenuti Property Manager</li>
                <li>• Espansione gamma Accessori Tech</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-orange-800 mb-2">Importanti (30-90 giorni)</h3>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Content strategy per budget segment</li>
                <li>• Implementazione schema markup</li>
                <li>• Sviluppo case study B2B</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* LLM-Specific Recommendations */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            🤖 Raccomandazioni per Singolo LLM
          </h2>
          
          <div className="space-y-6">
            {llmRecommendations.map((llm, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900 text-lg">{llm.model}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Current Score:</span>
                    <span className={`text-lg font-semibold ${
                      llm.score >= 70 ? 'text-green-600' :
                      llm.score >= 50 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {llm.score}%
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {llm.recommendations.map((rec, recIndex) => (
                    <div key={recIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Product-Specific Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            📦 Azioni per Categoria Prodotto
          </h2>
          
          <div className="space-y-4">
            {productRecommendations.map((product, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">{product.category}</h3>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    product.priority === 'Alta' ? 'bg-red-100 text-red-700' :
                    product.priority === 'Media' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    Priorità {product.priority}
                  </span>
                </div>
                
                <div className="space-y-2">
                  {product.actions.map((action, actionIndex) => (
                    <div key={actionIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        product.priority === 'Alta' ? 'bg-red-500' :
                        product.priority === 'Media' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></div>
                      <span className="text-sm text-gray-700">{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Buyer Persona Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            👥 Azioni per Buyer Persona
          </h2>
          
          <div className="space-y-6">
            {personaActions.map((persona, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">{persona.persona}</h3>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    persona.gap === 'Alto' ? 'bg-red-100 text-red-700' :
                    persona.gap === 'Medio' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    Gap {persona.gap}
                  </span>
                </div>
                
                <div className="space-y-2">
                  {persona.actions.map((action, actionIndex) => (
                    <div key={actionIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        persona.gap === 'Alto' ? 'bg-red-500' :
                        persona.gap === 'Medio' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></div>
                      <span className="text-sm text-gray-700">{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Implementation Timeline */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">📅 Timeline di Implementazione</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">Settimane 1-4 (Aprile 2024)</div>
                <div className="text-sm text-gray-600">Ottimizzazione Gemini, contenuti Property Manager</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">Settimane 5-12 (Maggio-Giugno 2024)</div>
                <div className="text-sm text-gray-600">Espansione prodotti tech, case study B2B, schema markup</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">Q3 2024</div>
                <div className="text-sm text-gray-600">Monitoraggio risultati, ottimizzazioni, prossimo report</div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
            <p className="text-sm text-blue-800">
              <strong>Target Q2 2024:</strong> Visibility Score 72% (+4%), Trust Score 8.2 (+0.4), 
              particolare focus su chiusura gap Gemini (target: 60% visibility).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
