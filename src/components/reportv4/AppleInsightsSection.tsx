
import React from 'react';

interface AppleInsightsSectionProps {
  scrollY: number;
}

const AppleInsightsSection = ({ scrollY }: AppleInsightsSectionProps) => {
  const insights = [
    {
      title: "Dominanza B2B",
      description: "Forte presenza nelle query contract e arredamento uffici",
      metric: "82%",
      trend: "+15%",
      color: "blue"
    },
    {
      title: "Sentiment Positivo", 
      description: "Prevalenza di menzioni positive e raccomandazioni",
      metric: "72%",
      trend: "+5%",
      color: "green"
    },
    {
      title: "Gap su Gemini",
      description: "Opportunità di crescita su Google Gemini",
      metric: "43%",
      trend: "-25%",
      color: "red"
    }
  ];

  const categories = [
    { name: "Contract & Uffici", percentage: 82, mentions: 198 },
    { name: "Residenziale", percentage: 78, mentions: 234 },
    { name: "Hospitality", percentage: 65, mentions: 87 },
    { name: "Retail", percentage: 58, mentions: 57 }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent mb-8 tracking-tight leading-tight">
            Key Insights
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Analisi approfondita dei pattern di successo e delle opportunità 
            di crescita identificate dai dati.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {insights.map((insight, index) => (
            <div 
              key={index}
              className={`rounded-3xl p-8 shadow-xl border border-white/20 backdrop-blur-xl ${
                insight.color === 'blue' ? 'bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-100' :
                insight.color === 'green' ? 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100' :
                'bg-gradient-to-br from-red-50 via-rose-50 to-pink-100'
              }`}
            >
              <div className={`text-4xl font-light mb-4 ${
                insight.color === 'blue' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent' :
                insight.color === 'green' ? 'bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent' :
                'bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent'
              }`}>
                {insight.metric}
              </div>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {insight.title}
              </h3>
              
              <p className="text-gray-700 font-light mb-4 leading-relaxed">
                {insight.description}
              </p>
              
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                insight.color === 'blue' ? 'bg-blue-200/60 text-blue-800' :
                insight.color === 'green' ? 'bg-green-200/60 text-green-800' :
                'bg-red-200/60 text-red-800'
              }`}>
                {insight.trend} vs Q4 2023
              </div>
            </div>
          ))}
        </div>

        {/* Categories Performance */}
        <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-blue-100 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light bg-gradient-to-r from-slate-600 via-gray-700 to-blue-800 bg-clip-text text-transparent mb-4">
              Performance per Categoria
            </h3>
            <p className="text-lg text-gray-600 font-light">
              Visibility score distribuito per settore di mercato
            </p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <div key={index} className="bg-gradient-to-r from-white/70 via-gray-50/70 to-blue-50/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    {category.name}
                  </h4>
                  <div className="text-right">
                    <div className="text-2xl font-light text-gray-900">
                      {category.percentage}%
                    </div>
                    <div className="text-sm text-gray-600">
                      {category.mentions} menzioni
                    </div>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-1000 ${
                      category.percentage >= 75 ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
                      category.percentage >= 60 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 
                      'bg-gradient-to-r from-red-500 to-rose-600'
                    }`}
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleInsightsSection;
