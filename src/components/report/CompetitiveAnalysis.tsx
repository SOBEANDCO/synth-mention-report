
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';

const CompetitiveAnalysis = () => {
  const trendData = [
    { week: 'W1', brand: 45, competitor1: 32, competitor2: 28 },
    { week: 'W2', brand: 48, competitor1: 35, competitor2: 30 },
    { week: 'W3', brand: 52, competitor1: 33, competitor2: 32 },
    { week: 'W4', brand: 58, competitor1: 38, competitor2: 35 },
    { week: 'W5', brand: 61, competitor1: 40, competitor2: 33 },
    { week: 'W6', brand: 65, competitor1: 42, competitor2: 36 },
    { week: 'W7', brand: 68, competitor1: 45, competitor2: 38 },
  ];

  const rankingData = [
    { competitor: 'Il Nostro Brand', mentions: 576, sentiment: 7.8, position: 1 },
    { competitor: 'Competitor A', mentions: 445, sentiment: 6.9, position: 2 },
    { competitor: 'Competitor B', mentions: 392, sentiment: 6.5, position: 3 },
    { competitor: 'Competitor C', mentions: 318, sentiment: 6.2, position: 4 },
    { competitor: 'Competitor D', mentions: 287, sentiment: 5.8, position: 5 },
  ];

  return (
    <div className="page-break min-h-screen px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-gray-900 mb-8 tracking-tight">
          Competitive Positioning
        </h1>
        
        <p className="text-gray-600 mb-12 text-lg leading-relaxed">
          L'analisi competitiva rivela una posizione di leadership consolidata, 
          con opportunità di ulteriore distanziamento dai competitor principali.
        </p>
        
        {/* Trend delle Menzioni */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            Trend Settimanale delle Menzioni
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="week" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Line 
                  type="monotone" 
                  dataKey="brand" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  name="Il Nostro Brand"
                />
                <Line 
                  type="monotone" 
                  dataKey="competitor1" 
                  stroke="#ef4444" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Competitor A"
                />
                <Line 
                  type="monotone" 
                  dataKey="competitor2" 
                  stroke="#f59e0b" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Competitor B"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-blue-500"></div>
              <span className="text-gray-700">Il Nostro Brand</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-red-500 opacity-70"></div>
              <span className="text-gray-700">Competitor A</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-yellow-500 opacity-70"></div>
              <span className="text-gray-700">Competitor B</span>
            </div>
          </div>
        </div>
        
        {/* Ranking Competitor */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            Ranking Competitivo
          </h2>
          <div className="space-y-3">
            {rankingData.map((item, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg border ${
                  index === 0 
                    ? 'bg-blue-50 border-blue-200' 
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      index === 0 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-400 text-white'
                    }`}>
                      {item.position}
                    </div>
                    <span className={`font-medium ${
                      index === 0 ? 'text-blue-900' : 'text-gray-700'
                    }`}>
                      {item.competitor}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="text-center">
                      <div className="text-gray-500">Menzioni</div>
                      <div className="font-semibold text-gray-900">{item.mentions}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-500">Trust Score</div>
                      <div className="font-semibold text-gray-900">{item.sentiment}/10</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Competitive Insights */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Competitive Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Vantaggio Competitivo</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• +29% menzioni vs competitor più vicino</li>
                <li>• Trust Score superiore di 0.9 punti</li>
                <li>• Crescita costante nelle ultime 7 settimane</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Aree di Attenzione</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Competitor A sta guadagnando terreno</li>
                <li>• Gap ridotto nelle query B2B</li>
                <li>• Necessario presidio settore contract</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveAnalysis;
