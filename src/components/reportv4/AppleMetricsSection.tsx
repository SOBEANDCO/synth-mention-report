
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, CartesianGrid } from 'recharts';

interface AppleMetricsSectionProps {
  scrollY: number;
}

const AppleMetricsSection = ({ scrollY }: AppleMetricsSectionProps) => {
  const visibilityData = [
    { model: 'ChatGPT', score: 75 },
    { model: 'Claude', score: 72 },
    { model: 'Perplexity', score: 65 },
    { model: 'Gemini', score: 43 }
  ];

  const sentimentData = [
    { name: 'Positivo', value: 72, color: '#34d399' },
    { name: 'Neutro', value: 21, color: '#94a3b8' },
    { name: 'Negativo', value: 7, color: '#f87171' }
  ];

  const trendData = [
    { week: 'W1', mentions: 45 },
    { week: 'W2', mentions: 52 },
    { week: 'W3', mentions: 48 },
    { week: 'W4', mentions: 61 },
    { week: 'W5', mentions: 68 },
    { week: 'W6', mentions: 75 }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Text Content with Parallax */}
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className="text-center mb-20"
          style={{
            transform: `translateY(${scrollY * -0.05}px)`
          }}
        >
          <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Metriche Core
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Una panoramica completa delle performance del brand attraverso 
            i principali Large Language Models, con analisi del sentiment e trend temporali.
          </p>
        </div>

        {/* Charts Grid with Staggered Parallax */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Visibility Chart */}
          <div 
            className="bg-gray-50/50 backdrop-blur-sm rounded-3xl p-8"
            style={{
              transform: `translateY(${scrollY * -0.02}px)`
            }}
          >
            <h3 className="text-2xl font-light text-gray-900 mb-2">Visibility per Modello</h3>
            <p className="text-gray-600 mb-8 font-light">Performance del brand sui principali LLM</p>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={visibilityData}>
                  <XAxis 
                    dataKey="model" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 14, fill: '#6b7280' }}
                  />
                  <YAxis hide />
                  <Bar 
                    dataKey="score" 
                    fill="#3b82f6" 
                    radius={[8, 8, 0, 0]}
                    className="drop-shadow-sm"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Sentiment Chart */}
          <div 
            className="bg-gray-50/50 backdrop-blur-sm rounded-3xl p-8"
            style={{
              transform: `translateY(${scrollY * -0.03}px)`
            }}
          >
            <h3 className="text-2xl font-light text-gray-900 mb-2">Distribuzione Sentiment</h3>
            <p className="text-gray-600 mb-8 font-light">Analisi del tono delle menzioni</p>
            
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sentimentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={100}
                    dataKey="value"
                    strokeWidth={0}
                  >
                    {sentimentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex justify-center gap-6 mt-4">
              {sentimentData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-700 font-medium">{item.name} {item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trend Chart - Full Width */}
        <div 
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12"
          style={{
            transform: `translateY(${scrollY * -0.01}px)`
          }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-gray-900 mb-4">Trend delle Menzioni</h3>
            <p className="text-lg text-gray-600 font-light">Crescita costante della visibilità nel tempo</p>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="week" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 14, fill: '#6b7280' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 14, fill: '#6b7280' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="mentions" 
                  stroke="#3b82f6" 
                  strokeWidth={4}
                  dot={{ fill: '#3b82f6', strokeWidth: 0, r: 6 }}
                  activeDot={{ r: 8, fill: '#1d4ed8' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleMetricsSection;
