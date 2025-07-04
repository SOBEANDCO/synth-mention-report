
import React from 'react';

interface AppleLLMPerformanceSectionProps {
  scrollY: number;
}

const AppleLLMPerformanceSection = ({ scrollY }: AppleLLMPerformanceSectionProps) => {
  const llmData = [
    { name: 'ChatGPT', visibility: 24, sentiment: 0.41, icon: '🤖' },
    { name: 'Gemini', visibility: 18, sentiment: 0.30, icon: '🔮' },
    { name: 'Claude', visibility: 12, sentiment: 0.22, icon: '🧠' },
    { name: 'Perplexity', visibility: 8, sentiment: 0.15, icon: '🔍' }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Layout laterale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Testo a sinistra */}
          <div>
            <div className="text-4xl font-light text-gray-400 mb-4">6</div>
            <h2 className="text-5xl font-light bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent mb-6 tracking-tight">
              In quali modelli AI sei più forte?
            </h2>
            <p className="text-xl text-gray-600 font-light mb-8 leading-relaxed">
              Which LLMs recognize your brand the most?
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="text-2xl">🧠</div>
                <div>
                  <h4 className="font-medium text-blue-900 mb-2">AI Insight</h4>
                  <p className="text-blue-800">
                    Your brand performs best on ChatGPT with 24% visibility. Consider focusing your SEO and LLM optimization strategies there for maximum impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabella a destra */}
          <div>
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-6 font-medium text-gray-900">LLM</th>
                      <th className="text-center py-4 px-6 font-medium text-gray-900">Visibility</th>
                      <th className="text-center py-4 px-6 font-medium text-gray-900">Sentiment</th>
                      <th className="text-center py-4 px-6 font-medium text-gray-900">Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {llmData.map((llm, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-6 px-6">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{llm.icon}</span>
                            <span className="font-medium text-gray-900">{llm.name}</span>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className="text-2xl font-light text-gray-900 mb-1">{llm.visibility}%</div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${llm.visibility}%` }}
                            ></div>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className={`text-2xl font-light mb-1 ${
                            llm.sentiment > 0.3 ? 'text-green-600' : 
                            llm.sentiment > 0.2 ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            +{llm.sentiment.toFixed(2)}
                          </div>
                          <div className="text-sm text-gray-600">Sentiment Score</div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          {index === 0 && (
                            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-medium rounded-full">
                              🏆 Best Performer
                            </div>
                          )}
                          {index === 1 && (
                            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-medium rounded-full">
                              📈 Growing
                            </div>
                          )}
                          {index === 2 && (
                            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 text-sm font-medium rounded-full">
                              ⚡ Potential
                            </div>
                          )}
                          {index === 3 && (
                            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 text-sm font-medium rounded-full">
                              🔍 Emerging
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleLLMPerformanceSection;
