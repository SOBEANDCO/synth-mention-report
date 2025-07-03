
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

interface AppleCompetitiveSectionProps {
  scrollY: number;
}

const AppleCompetitiveSection = ({ scrollY }: AppleCompetitiveSectionProps) => {
  const competitorData = [
    { name: 'Il Nostro Brand', score: 65, mentions: 14, color: '#3b82f6', rank: '🥇' },
    { name: 'Westwing', score: 58, mentions: 12, color: '#ef4444', rank: '🥈' },
    { name: 'Maisons du Monde', score: 45, mentions: 9, color: '#f59e0b', rank: '🥉' },
    { name: 'Mondo Convenienza', score: 32, mentions: 7, color: '#8b5cf6', rank: '4°' },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="text-4xl font-light text-gray-400 mb-6">2</div>
          <h2 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-8 tracking-tight leading-tight">
            Quanto viene considerato affidabile e competitivo?
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            How strong is your brand positioning when compared to competitors?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Trust Score */}
          <div>
            <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-white/20 text-center">
              <div className="text-7xl font-light bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">65</div>
              <h3 className="text-3xl font-medium text-gray-900 mb-4">Trust Score</h3>
              <p className="text-lg text-gray-600 font-light mb-8">
                Basato su: posizione nelle risposte, sentiment e frequenza di citazione
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                  <span className="text-gray-700">Posizione media</span>
                  <span className="font-medium text-green-600">1.8/5</span>
                </div>
                <div className="flex justify-between items-center bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                  <span className="text-gray-700">Sentiment score</span>
                  <span className="font-medium text-green-600">+0.41</span>
                </div>
                <div className="flex justify-between items-center bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                  <span className="text-gray-700">Frequenza citazioni</span>
                  <span className="font-medium text-green-600">28%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Competitive Ranking */}
          <div>
            <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-light text-gray-900 mb-2 text-center">Ranking tra Competitor</h3>
              <p className="text-gray-600 mb-8 font-light text-center">Basato su prompt neutri (senza bias)</p>
              
              <div className="space-y-4">
                {competitorData.map((competitor, index) => (
                  <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-between shadow-lg border border-white/30">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{competitor.rank}</div>
                      <div>
                        <h4 className="font-medium text-gray-900">{competitor.name}</h4>
                        <p className="text-sm text-gray-600">{competitor.mentions} menzioni</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-light text-gray-900">{competitor.score}</div>
                      <div className="text-sm text-gray-600">Trust Score</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Chart */}
        <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-blue-100 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-white/20 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light bg-gradient-to-r from-slate-600 via-gray-700 to-blue-800 bg-clip-text text-transparent mb-4">Posizionamento Dinamico</h3>
            <p className="text-lg text-gray-600 font-light">Trust Score comparison sui principali LLM</p>
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
                    <Cell key={`cell-${index}`} fill={`url(#gradient-${index})`} />
                  ))}
                </Bar>
                <defs>
                  <linearGradient id="gradient-0" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                  <linearGradient id="gradient-1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                  <linearGradient id="gradient-2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#eab308" />
                  </linearGradient>
                  <linearGradient id="gradient-3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-100 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-white/20">
          <h3 className="text-2xl font-light bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8 text-center">
            Vantaggio Competitivo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="text-3xl font-light bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">+12%</div>
              <div className="text-gray-700 font-medium">Trust vs media competitor</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="text-3xl font-light bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">+2</div>
              <div className="text-gray-700 font-medium">Menzioni vs competitor più vicino</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="text-3xl font-light bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">1°</div>
              <div className="text-gray-700 font-medium">Posizione nel ranking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleCompetitiveSection;
