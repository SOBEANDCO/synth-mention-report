
import React from 'react';

interface AppleBuyerPersonaSectionProps {
  scrollY: number;
}

const AppleBuyerPersonaSection = ({ scrollY }: AppleBuyerPersonaSectionProps) => {
  const personas = [
    { name: 'Neo-acquirenti', percentage: 53, color: '#3b82f6', description: 'Prime case, budget limitato' },
    { name: 'Interior Designers', percentage: 30, color: '#10b981', description: 'Professionisti del settore' },
    { name: 'Affittuari', percentage: 8, color: '#f59e0b', description: 'Soluzioni temporanee' },
    { name: 'Ristrutturatori', percentage: 9, color: '#8b5cf6', description: 'Rinnovo completo' }
  ];

  const categories = [
    { name: 'Cucine', percentage: 40, mentions: 178 },
    { name: 'Armadi', percentage: 32, mentions: 142 },
    { name: 'Letti', percentage: 22, mentions: 98 },
    { name: 'Soggiorno', percentage: 18, mentions: 67 }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-4xl font-light text-gray-400 mb-6">7</div>
          <h2 className="text-5xl font-light bg-gradient-to-r from-purple-500 via-pink-500 to-rose-600 bg-clip-text text-transparent mb-8 tracking-tight leading-tight">
            Chi ti cerca di più e su cosa?
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Which buyer personas are most likely to trigger your brand?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Buyer Personas */}
          <div>
            <div className="bg-gradient-to-br from-gray-50 via-slate-50 to-blue-100 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-light text-gray-900 mb-8 text-center">Buyer Personas</h3>
              
              <div className="space-y-4">
                {personas.map((persona, index) => (
                  <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-medium text-gray-900">{persona.name}</h4>
                        <p className="text-sm text-gray-600">{persona.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-light text-gray-900">{persona.percentage}%</div>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="h-3 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${persona.percentage}%`,
                          background: `linear-gradient(45deg, ${persona.color}, ${persona.color}CC)`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-light text-gray-900 mb-8 text-center">Categorie più Efficaci</h3>
              
              <div className="space-y-6">
                {categories.map((category, index) => (
                  <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium text-gray-900">{category.name}</h4>
                      <div className="text-right">
                        <div className="text-2xl font-light text-gray-900">{category.percentage}%</div>
                        <div className="text-sm text-gray-600">{category.mentions} menzioni</div>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          index === 0 ? 'bg-gradient-to-r from-blue-500 to-indigo-600' :
                          index === 1 ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
                          index === 2 ? 'bg-gradient-to-r from-yellow-500 to-orange-600' : 
                          'bg-gradient-to-r from-purple-500 to-pink-600'
                        }`}
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="bg-gradient-to-br from-white via-gray-50 to-blue-100 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-100 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30">
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="font-medium text-green-800 mb-2">Target Primario</h4>
              <p className="text-green-700">
                I <strong>Neo-acquirenti</strong> rappresentano il 53% del tuo pubblico. 
                Focalizzati su soluzioni economiche e complete per prime case.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-100 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30">
              <div className="text-2xl mb-2">🏆</div>
              <h4 className="font-medium text-blue-800 mb-2">Categoria Leader</h4>
              <p className="text-blue-700">
                Le <strong>Cucine</strong> sono la tua categoria più forte con 40% di menzioni. 
                Ottimizza i contenuti per questa categoria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleBuyerPersonaSection;
