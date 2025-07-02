
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const TimeBasedAnalysis = () => {
  const quarterlyData = [
    { quarter: 'Q1 2023', visibility: 45, trust: 6.2 },
    { quarter: 'Q2 2023', visibility: 52, trust: 6.8 },
    { quarter: 'Q3 2023', visibility: 59, trust: 7.1 },
    { quarter: 'Q4 2023', visibility: 63, trust: 7.4 },
    { quarter: 'Q1 2024', visibility: 68, trust: 7.8 },
  ];

  const modelPerformance = [
    { model: 'ChatGPT', visibility: 75, sentiment: 8.1 },
    { model: 'Claude', visibility: 72, sentiment: 7.9 },
    { model: 'Perplexity', visibility: 65, sentiment: 7.2 },
    { model: 'Gemini', visibility: 43, sentiment: 6.8 },
  ];

  return (
    <div className="page-break min-h-screen px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-gray-900 mb-8 tracking-tight">
          Time-Based Analysis
        </h1>
        
        <p className="text-gray-600 mb-12 text-lg leading-relaxed">
          Analisi dell'evoluzione temporale delle metriche chiave e proiezioni 
          per i prossimi trimestri basate sui trend attuali.
        </p>
        
        {/* Quarterly Trend */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            📆 Evoluzione Trimestrale
          </h2>
          
          <div className="h-80 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={quarterlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="quarter" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Line 
                  type="monotone" 
                  dataKey="visibility" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  name="Visibility Score"
                />
                <Line 
                  type="monotone" 
                  dataKey="trust" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  name="Trust Score"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Visibility Score</h3>
              <div className="text-2xl font-light text-blue-600 mb-1">+23%</div>
              <p className="text-sm text-blue-800">Crescita nell'ultimo anno</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Trust Score</h3>
              <div className="text-2xl font-light text-green-600 mb-1">+1.6</div>
              <p className="text-sm text-green-800">Miglioramento nell'ultimo anno</p>
            </div>
          </div>
        </div>
        
        {/* Model-Specific Performance */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            🤖 Performance per Modello AI
          </h2>
          
          <div className="space-y-4">
            {modelPerformance.map((model, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900 text-lg">{model.model}</h3>
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Visibility</div>
                      <div className="text-xl font-semibold text-gray-900">{model.visibility}%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Sentiment</div>
                      <div className="text-xl font-semibold text-gray-900">{model.sentiment}/10</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Visibility Progress</span>
                    <span className="text-gray-900">{model.visibility}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${model.visibility}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Quarterly Projection */}
        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            📈 Proiezione Q2 2024
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6">
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-light text-blue-600 mb-2">72%</div>
                <div className="text-sm text-blue-800">Visibility Score Atteso</div>
                <div className="text-xs text-blue-600 mt-1">+4% vs Q1</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-green-600 mb-2">8.2</div>
                <div className="text-sm text-green-800">Trust Score Atteso</div>
                <div className="text-xs text-green-600 mt-1">+0.4 vs Q1</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-purple-600 mb-2">650+</div>
                <div className="text-sm text-purple-800">Menzioni Stimate</div>
                <div className="text-xs text-purple-600 mt-1">+13% vs Q1</div>
              </div>
            </div>
            
            <div className="border-t border-blue-200 pt-4">
              <h3 className="font-semibold text-gray-900 mb-2">Fattori di Crescita Previsti</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Ottimizzazione contenuti per Gemini (+15% visibility attesa)</li>
                <li>• Lancio nuovi prodotti eco-friendly (+8% menzioni positive)</li>
                <li>• Espansione presenza B2B (+12% trust score settore contract)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeBasedAnalysis;
