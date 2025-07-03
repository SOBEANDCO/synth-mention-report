
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
        <div 
          className="text-center mb-20"
          style={{
            transform: `translateY(${scrollY * -0.03}px)`
          }}
        >
          <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Key Insights
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Analisi approfondita dei pattern di successo e delle opportunità 
            di crescita identificate dai dati.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {insights.map((insight, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${
                insight.color === 'blue' ? 'from-blue-50 to-blue-100' :
                insight.color === 'green' ? 'from-green-50 to-green-100' :
                'from-red-50 to-red-100'
              } rounded-3xl p-8`}
              style={{
                transform: `translateY(${scrollY * (-0.02 - index * 0.005)}px)`
              }}
            >
              <div className={`text-4xl font-light mb-4 ${
                insight.color === 'blue' ? 'text-blue-600' :
                insight.color === 'green' ? 'text-green-600' :
                'text-red-600'
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
                insight.color === 'blue' ? 'bg-blue-200 text-blue-800' :
                insight.color === 'green' ? 'bg-green-200 text-green-800' :
                'bg-red-200 text-red-800'
              }`}>
                {insight.trend} vs Q4 2023
              </div>
            </div>
          ))}
        </div>

        {/* Categories Performance */}
        <div 
          className="bg-gray-50 rounded-3xl p-12"
          style={{
            transform: `translateY(${scrollY * -0.01}px)`
          }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-gray-900 mb-4">
              Performance per Categoria
            </h3>
            <p className="text-lg text-gray-600 font-light">
              Visibility score distribuito per settore di mercato
            </p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-6">
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
                      category.percentage >= 75 ? 'bg-green-500' :
                      category.percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
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
