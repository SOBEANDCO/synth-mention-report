
import React from 'react';
import { ExternalLink, Star, Globe } from 'lucide-react';

interface AppleExternalSourcesSectionProps {
  scrollY: number;
}

const AppleExternalSourcesSection = ({ scrollY }: AppleExternalSourcesSectionProps) => {
  const sources = [
    {
      source: "Casa & Design Magazine",
      title: "I migliori brand di arredamento del 2024",
      excerpt: "Il brand si distingue per l'innovazione nel design modulare e la sostenibilità dei materiali utilizzati.",
      url: "https://casadesign.it/article",
      credibility: 8.5,
      type: "Press"
    },
    {
      source: "Architetti.com",
      title: "Soluzioni d'arredo per uffici moderni",
      excerpt: "Recensione completa delle soluzioni contract, con focus su ergonomia e design contemporaneo.",
      url: "https://architetti.com/review",
      credibility: 9.2,
      type: "Industry"
    },
    {
      source: "Home Design Blog",
      title: "Tendenze arredamento 2024: sostenibilità e modularità",
      excerpt: "Il brand viene citato come leader nelle soluzioni eco-friendly per la casa moderna.",
      url: "https://homedesign.blog/trends",
      credibility: 7.8,
      type: "Blog"
    },
    {
      source: "Interior Design Weekly",
      title: "Award vincitori design competition",
      excerpt: "Riconoscimento per l'innovazione nel settore cucine modulari e soluzioni salvaspazio.",
      url: "https://interiorweekly.com/awards",
      credibility: 9.0,
      type: "Award"
    },
    {
      source: "Sustainable Living Today",
      title: "Brand italiani eco-friendly nel mondo dell'arredo",
      excerpt: "Analisi approfondita dell'impegno ambientale e delle certificazioni sostenibili ottenute.",
      url: "https://sustainableliving.com/italian-brands",
      credibility: 8.7,
      type: "Sustainability"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Press': return 'bg-gradient-to-r from-blue-100 to-indigo-200 text-blue-800';
      case 'Industry': return 'bg-gradient-to-r from-green-100 to-emerald-200 text-green-800';
      case 'Blog': return 'bg-gradient-to-r from-purple-100 to-pink-200 text-purple-800';
      case 'Award': return 'bg-gradient-to-r from-yellow-100 to-orange-200 text-yellow-800';
      case 'Sustainability': return 'bg-gradient-to-r from-emerald-100 to-teal-200 text-emerald-800';
      default: return 'bg-gradient-to-r from-gray-100 to-slate-200 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Press': return '📰';
      case 'Industry': return '🏢';
      case 'Blog': return '✍️';
      case 'Award': return '🏆';
      case 'Sustainability': return '🌱';
      default: return '📄';
    }
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-4xl font-light text-gray-400 mb-6">9</div>
          <h2 className="text-5xl font-light bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 bg-clip-text text-transparent mb-8 tracking-tight leading-tight">
            Dove vieni citato da fonti esterne?
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Which third-party sources help boost your credibility?
          </p>
        </div>

        <div className="space-y-6">
          {sources.map((source, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-white via-gray-50 to-blue-50 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">{getTypeIcon(source.type)}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-medium text-gray-900">{source.source}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(source.type)} border border-white/30`}>
                        {source.type}
                      </span>
                    </div>
                    <h4 className="text-lg text-gray-700 font-light">{source.title}</h4>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-gray-700">{source.credibility}/10</span>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{source.excerpt}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Globe className="w-4 h-4" />
                  <span className="truncate max-w-xs">{source.url}</span>
                </div>
                
                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-50 to-blue-100 hover:from-gray-100 hover:to-blue-200 rounded-full text-sm font-medium text-gray-700 transition-all group-hover:from-blue-50 group-hover:to-purple-100 group-hover:text-blue-700 border border-white/30">
                  <span>Leggi articolo</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-24 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-100 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-light bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-4">
              Credibilità delle Fonti
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-light bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">15</div>
              <div className="text-gray-700 font-medium">Fonti Totali</div>
            </div>
            <div>
              <div className="text-3xl font-light bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">8.6</div>
              <div className="text-gray-700 font-medium">Credibilità Media</div>
            </div>
            <div>
              <div className="text-3xl font-light bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">3</div>
              <div className="text-gray-700 font-medium">Award Ricevuti</div>
            </div>
            <div>
              <div className="text-3xl font-light bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">89%</div>
              <div className="text-gray-700 font-medium">Sentiment Positivo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleExternalSourcesSection;
