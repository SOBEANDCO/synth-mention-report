
import React from 'react';

const ShoppingResults = () => {
  const shoppingData = [
    { product: 'Poltrona Executive Serie A', clicks: 89, conversion: 12.4, featured: 'Spesso' },
    { product: 'Scrivania Smart Desk Pro', clicks: 76, conversion: 9.8, featured: 'Spesso' },
    { product: 'Sistema Storage Modulare', clicks: 54, conversion: 8.2, featured: 'A volte' },
    { product: 'Tavolo Meeting Round', clicks: 43, conversion: 6.7, featured: 'A volte' },
    { product: 'Accessori Tech Wireless', clicks: 32, conversion: 15.6, featured: 'Raramente' },
  ];

  return (
    <div className="page-break min-h-screen px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-gray-900 mb-8 tracking-tight">
          Shopping Result Presence
        </h1>
        
        <p className="text-gray-600 mb-12 text-lg leading-relaxed">
          Analisi della presenza nei risultati shopping degli LLM e performance 
          dei link prodotto nelle risposte generate.
        </p>
        
        {/* Shopping Stats Overview */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-blue-50 rounded-lg text-center">
            <div className="text-3xl font-light text-blue-600 mb-2">34%</div>
            <div className="text-sm text-blue-800 font-medium">Prompts con Link Shopping</div>
            <div className="text-xs text-blue-600 mt-1">+8% vs Q4 2023</div>
          </div>
          <div className="p-6 bg-green-50 rounded-lg text-center">
            <div className="text-3xl font-light text-green-600 mb-2">10.2%</div>
            <div className="text-sm text-green-800 font-medium">CTR Medio</div>
            <div className="text-xs text-green-600 mt-1">+2.1% vs Q4 2023</div>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg text-center">
            <div className="text-3xl font-light text-purple-600 mb-2">€287k</div>
            <div className="text-sm text-purple-800 font-medium">Valore Traffico Stimato</div>
            <div className="text-xs text-purple-600 mt-1">+23% vs Q4 2023</div>
          </div>
        </div>
        
        {/* Most Featured Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            🏅 Prodotti Più Presenti nei Shopping Results
          </h2>
          
          <div className="space-y-4">
            {shoppingData.map((product, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                      index === 0 ? 'bg-yellow-400 text-yellow-900' :
                      index === 1 ? 'bg-gray-300 text-gray-700' :
                      index === 2 ? 'bg-orange-300 text-orange-800' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{product.product}</h3>
                      <div className="text-sm text-gray-600">Frequenza: {product.featured}</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-8 text-center">
                    <div>
                      <div className="text-sm text-gray-600">Click Totali</div>
                      <div className="text-lg font-semibold text-gray-900">{product.clicks}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">CTR</div>
                      <div className="text-lg font-semibold text-gray-900">{product.conversion}%</div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      product.conversion >= 12 ? 'bg-green-500' :
                      product.conversion >= 8 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${product.conversion * 6}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Shopping Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-3">🎯 Opportunità Identificate</h3>
            <ul className="space-y-2 text-sm text-green-800">
              <li>• Accessori Tech hanno CTR più alto (15.6%)</li>
              <li>• Crescente interesse per soluzioni smart</li>
              <li>• Potenziale espansione categoria tech</li>
              <li>• Ottimizzazione schede prodotto prioritaria</li>
            </ul>
          </div>
          
          <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-3">📊 Performance Insights</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• Executive series guida il traffico</li>
              <li>• Desk Pro forte secondo performer</li>
              <li>• Storage modulare sotto-performante</li>
              <li>• Necessaria ottimizzazione SEO prodotti</li>
            </ul>
          </div>
        </div>
        
        {/* Sample Shopping Results */}
        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            🛒 Esempio di Shopping Result
          </h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-2">Query: "migliore poltrona ufficio ergonomica"</div>
              <div className="text-sm text-gray-600">Modello: ChatGPT</div>
            </div>
            
            <div className="bg-white border border-gray-300 rounded-lg p-4">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500">IMG</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Poltrona Executive Serie A - Premium Ergonomic
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Design italiano, materiali premium, regolazioni avanzate
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-green-600 font-semibold">€1.299</span>
                    <span className="text-gray-500">• In stock</span>
                    <span className="text-blue-600 underline cursor-pointer">Visualizza dettagli</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-xs text-gray-500">
              Risultato ottenuto: 12 click, CTR 14.2%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingResults;
