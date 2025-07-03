
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, CartesianGrid } from 'recharts';

interface AppleMetricsSectionProps {
  scrollY: number;
}

const AppleMetricsSection = ({ scrollY }: AppleMetricsSectionProps) => {
  const parallaxText = scrollY * 0.1;
  const parallaxChart = scrollY * 0.05;

  const visibilityData = [
    { model: 'ChatGPT', score: 24 },
    { model: 'Gemini', score: 18 },
    { model: 'Claude', score: 12 },
    { model: 'Perplexity', score: 8 }
  ];

  const sentimentData = [
    { name: 'Positive', value: 65, color: '#34d399' },
    { name: 'Neutral', value: 28, color: '#94a3b8' },
    { name: 'Negative', value: 7, color: '#f87171' }
  ];

  const trendData = [
    { week: 'W1', brand: 22, competitor: 18 },
    { week: 'W2', brand: 25, competitor: 19 },
    { week: 'W3', brand: 23, competitor: 20 },
    { week: 'W4', brand: 28, competitor: 22 },
    { week: 'W5', brand: 30, competitor: 21 },
    { week: 'W6', brand: 28, competitor: 24 }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section 1: Brand Presence */}
        <div className="mb-32">
          <div 
            className="text-center mb-20"
            style={{
              transform: `translateY(${parallaxText}px)`
            }}
          >
            <div className="text-4xl font-light text-gray-400 mb-4">1</div>
            <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Quanto è presente il tuo brand nelle ricerche AI?
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed mb-8">
              In how many prompts does your brand appear?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div 
              style={{
                transform: `translateY(${parallaxText * 0.5}px)`
              }}
            >
              <div className="bg-gray-50 rounded-3xl p-12 text-center">
                <div className="text-7xl font-light text-blue-600 mb-4">28%</div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">LLM Visibility Score</h3>
                <p className="text-lg text-gray-600 font-light mb-8">
                  Your brand was mentioned in 14 out of 50 relevant prompts
                </p>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Prompts testati</span>
                    <span className="font-medium">50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Menzioni totali</span>
                    <span className="font-medium">14</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Performance GPT vs Altri</span>
                    <span className="font-medium text-green-600">+12%</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              style={{
                transform: `translateY(${parallaxChart}px)`
              }}
            >
              <div className="bg-gray-50/50 rounded-3xl p-8">
                <h3 className="text-2xl font-light text-gray-900 mb-2">Performance per Modello</h3>
                <p className="text-gray-600 mb-8 font-light">Distribuzione delle menzioni sui principali LLM</p>
                
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
            </div>
          </div>
        </div>

        {/* Section 2: Sentiment Analysis */}
        <div className="mb-32">
          <div 
            className="text-center mb-20"
            style={{
              transform: `translateY(${parallaxText * 0.8}px)`
            }}
          >
            <div className="text-4xl font-light text-gray-400 mb-4">3</div>
            <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Quando viene menzionato, cosa viene detto?
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              What's the sentiment when your brand is mentioned?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div 
              style={{
                transform: `translateY(${parallaxChart * 0.8}px)`
              }}
            >
              <div className="bg-gray-50/50 rounded-3xl p-8">
                <h3 className="text-2xl font-light text-gray-900 mb-8">Analisi del Sentiment</h3>
                
                <div className="h-64 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sentimentData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
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

            <div 
              style={{
                transform: `translateY(${parallaxText * 0.6}px)`
              }}
            >
              <div className="space-y-6">
                <div className="bg-green-50 rounded-2xl p-6">
                  <h4 className="font-medium text-green-800 mb-2">Sentiment Positivo</h4>
                  <p className="text-green-700 italic">"Ottima qualità e design moderno, perfetto per arredare casa"</p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-medium text-gray-800 mb-2">Sentiment Neutro</h4>
                  <p className="text-gray-700 italic">"Il brand offre una vasta gamma di mobili per ogni ambiente"</p>
                </div>
                
                <div className="bg-red-50 rounded-2xl p-6">
                  <h4 className="font-medium text-red-800 mb-2">Sentiment Negativo</h4>
                  <p className="text-red-700 italic">"I prezzi sono leggermente più alti della media di mercato"</p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 mt-8">
                  <h4 className="font-medium text-blue-800 mb-2">Comparazioni Frequenti</h4>
                  <p className="text-blue-700">Il tuo brand viene spesso confrontato con: <strong>Westwing, Mondo Convenienza, Maisons du Monde</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Trend Analysis */}
        <div>
          <div 
            className="text-center mb-20"
            style={{
              transform: `translateY(${parallaxText * 0.6}px)`
            }}
          >
            <div className="text-4xl font-light text-gray-400 mb-4">5</div>
            <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Come cambia la visibilità nel tempo?
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              How is your visibility evolving week by week?
            </p>
          </div>
          
          <div 
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12"
            style={{
              transform: `translateY(${parallaxChart * 0.4}px)`
            }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-light text-gray-900 mb-4">Trend delle Menzioni</h3>
              <p className="text-lg text-gray-600 font-light">Evoluzione settimanale: Brand vs Competitor</p>
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
                    dataKey="brand" 
                    stroke="#3b82f6" 
                    strokeWidth={4}
                    dot={{ fill: '#3b82f6', strokeWidth: 0, r: 6 }}
                    name="Your Brand"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="competitor" 
                    stroke="#ef4444" 
                    strokeWidth={4}
                    dot={{ fill: '#ef4444', strokeWidth: 0, r: 6 }}
                    name="Top Competitor"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="text-center">
                <div className="text-2xl font-light text-blue-600 mb-2">+27%</div>
                <div className="text-gray-700">Crescita ultimo mese</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-green-600 mb-2">+4pts</div>
                <div className="text-gray-700">Vantaggio vs competitor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleMetricsSection;
