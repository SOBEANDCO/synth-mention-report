
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const CoreMetricsSection = () => {
  const visibilityData = [
    { model: 'ChatGPT', score: 75 },
    { model: 'Claude', score: 72 },
    { model: 'Perplexity', score: 65 },
    { model: 'Gemini', score: 43 }
  ];

  const sentimentData = [
    { name: 'Positivo', value: 72, color: '#10b981' },
    { name: 'Neutro', value: 21, color: '#6b7280' },
    { name: 'Negativo', value: 7, color: '#ef4444' }
  ];

  return (
    <div className="page-break min-h-screen px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-gray-900 mb-8 tracking-tight">
          Core Metrics Overview
        </h1>
        
        <p className="text-gray-600 mb-12 text-lg leading-relaxed">
          Le metriche fondamentali offrono una visione d'insieme delle performance del brand 
          nell'ecosistema LLM, evidenziando punti di forza e opportunità di crescita.
        </p>
        
        <div className="grid grid-cols-2 gap-12">
          {/* Visibility by Model */}
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-6">
              Visibility Score per Modello
            </h2>
            <div className="h-64 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={visibilityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="model" stroke="#6b7280" fontSize={12} />
                  <YAxis stroke="#6b7280" fontSize={12} />
                  <Bar dataKey="score" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600">
              ChatGPT e Claude mostrano le migliori performance, mentre Gemini 
              presenta un gap significativo da colmare.
            </p>
          </div>
          
          {/* Sentiment Analysis */}
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-6">
              Distribuzione Sentiment
            </h2>
            <div className="h-64 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sentimentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {sentimentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {sentimentData.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-gray-700">{item.name}</span>
                  </div>
                  <span className="font-medium text-gray-900">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Key Insights */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-light text-gray-900">Key Insights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-green-50 rounded-lg border-l-4 border-green-400">
              <h3 className="font-semibold text-green-900 mb-2">Sentiment Positivo</h3>
              <p className="text-green-800 text-sm">
                Il 72% delle menzioni presenta sentiment positivo, indicando una 
                forte reputazione del brand nell'ecosistema AI.
              </p>
            </div>
            
            <div className="p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <h3 className="font-semibold text-yellow-900 mb-2">Gap su Gemini</h3>
              <p className="text-yellow-800 text-sm">
                La performance su Gemini è del 32% inferiore alla media, 
                rappresentando la principale opportunità di crescita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreMetricsSection;
