
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

interface AppleCompetitiveSectionProps {
  scrollY: number;
}

const AppleCompetitiveSection = ({ scrollY }: AppleCompetitiveSectionProps) => {
  const competitorData = [
    { name: 'Il Nostro Brand', score: 68, mentions: 576, color: '#3b82f6' },
    { name: 'Competitor A', score: 45, mentions: 445, color: '#ef4444' },
    { name: 'Competitor B', score: 38, mentions: 392, color: '#f59e0b' },
    { name: 'Competitor C', score: 32, mentions: 318, color: '#8b5cf6' },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div 
          className="text-center mb-20"
          style={{
            transform: `translateY(${scrollY * -0.04}px)`
          }}
        >
          <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Posizionamento Competitivo
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Il nostro brand mantiene una posizione di leadership consolidata, 
            con un vantaggio significativo sui principali competitor del settore.
          </p>
        </div>

        {/* Competitive Chart */}
        <div 
          className="bg-white rounded-3xl p-12 shadow-lg mb-16"
          style={{
            transform: `translateY(${scrollY * -0.02}px)`
          }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-gray-900 mb-4">Visibility Score Comparison</h3>
            <p className="text-lg text-gray-600 font-light">Confronto delle performance sui principali LLM</p>
          </div>
          
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={competitorData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 14, fill: '#6b7280' }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 14, fill: '#6b7280' }}
                />
                <Bar 
                  dataKey="score" 
                  radius={[8, 8, 0, 0]}
                  className="drop-shadow-sm"
                >
                  {competitorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Competitive Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {competitorData.map((competitor, index) => (
            <div 
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center"
              style={{
                transform: `translateY(${scrollY * (-0.01 - index * 0.005)}px)`
              }}
            >
              <div 
                className="w-4 h-4 rounded-full mx-auto mb-4"
                style={{ backgroundColor: competitor.color }}
              ></div>
              <h4 className="font-medium text-gray-900 mb-2">{competitor.name}</h4>
              <div className="text-2xl font-light text-gray-900 mb-1">{competitor.score}%</div>
              <div className="text-sm text-gray-600">{competitor.mentions} menzioni</div>
              
              {index === 0 && (
                <div className="mt-3 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  Leader
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Insights */}
        <div 
          className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12"
          style={{
            transform: `translateY(${scrollY * -0.01}px)`
          }}
        >
          <h3 className="text-2xl font-light text-gray-900 mb-8 text-center">
            Vantaggio Competitivo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-light text-blue-600 mb-2">+51%</div>
              <div className="text-gray-700 font-medium">Visibility vs media competitor</div>
            </div>
            <div>
              <div className="text-3xl font-light text-green-600 mb-2">+29%</div>
              <div className="text-gray-700 font-medium">Menzioni vs competitor più vicino</div>
            </div>
            <div>
              <div className="text-3xl font-light text-purple-600 mb-2">7.8/10</div>
              <div className="text-gray-700 font-medium">Trust Score medio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleCompetitiveSection;
