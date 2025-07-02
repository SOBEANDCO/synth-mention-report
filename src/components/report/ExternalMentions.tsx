
import React from 'react';

const ExternalMentions = () => {
  const externalSources = [
    {
      title: "Best Office Furniture Brands 2024 - Design Magazine",
      url: "designmagazine.com/office-furniture-guide",
      context: "Citato tra i top 5 brand per innovazione e sostenibilità",
      anchor: "Italian design excellence",
      domain: "Design Magazine",
      authority: 8.5
    },
    {
      title: "Sustainable Workspace Solutions - EcoBuilding Today",
      url: "ecobuilding.com/sustainable-workspace-2024",
      context: "Riconoscimento per l'impegno ambientale e materiali eco-friendly",
      anchor: "leading sustainable furniture manufacturer",
      domain: "EcoBuilding Today",
      authority: 7.8
    },
    {
      title: "Contract Furniture Trends - Architecture Weekly",
      url: "archweekly.com/contract-trends-2024",
      context: "Analisi delle tendenze contract con focus sui nostri sistemi modulari",
      anchor: "innovative modular systems",
      domain: "Architecture Weekly",
      authority: 8.9
    },
    {
      title: "Hospitality Design Awards 2024 - Hotel Design Journal",
      url: "hoteldesign.com/awards-2024",
      context: "Menzione per progetti hospitality con nostre soluzioni custom",
      anchor: "bespoke hospitality solutions",
      domain: "Hotel Design Journal",
      authority: 7.3
    },
    {
      title: "Smart Office Technology Integration - TechSpaces",
      url: "techspaces.com/smart-office-furniture",
      context: "Innovazione tech integrata nell'arredamento per uffici intelligenti",
      anchor: "tech-integrated furniture solutions",
      domain: "TechSpaces",
      authority: 6.9
    }
  ];

  return (
    <div className="page-break min-h-screen px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-gray-900 mb-8 tracking-tight">
          External Mentions
        </h1>
        
        <p className="text-gray-600 mb-12 text-lg leading-relaxed">
          Analisi delle fonti esterne che citano il brand nelle risposte degli LLM, 
          contribuendo all'autorevolezza e alla credibilità complessiva.
        </p>
        
        {/* Summary Stats */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          <div className="p-6 bg-blue-50 rounded-lg text-center">
            <div className="text-2xl font-light text-blue-600 mb-2">87</div>
            <div className="text-sm text-blue-800 font-medium">Fonti Uniche</div>
          </div>
          <div className="p-6 bg-green-50 rounded-lg text-center">
            <div className="text-2xl font-light text-green-600 mb-2">234</div>
            <div className="text-sm text-green-800 font-medium">Menzioni Totali</div>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg text-center">
            <div className="text-2xl font-light text-purple-600 mb-2">7.8</div>
            <div className="text-sm text-purple-800 font-medium">Authority Media</div>
          </div>
          <div className="p-6 bg-yellow-50 rounded-lg text-center">
            <div className="text-2xl font-light text-yellow-600 mb-2">12</div>
            <div className="text-sm text-yellow-800 font-medium">Settori Coperti</div>
          </div>
        </div>
        
        {/* Top External Sources */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            📚 Principali Fonti Esterne
          </h2>
          
          <div className="space-y-6">
            {externalSources.map((source, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {source.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {source.context}
                    </p>
                    <div className="text-xs text-blue-600 mb-2">
                      🔗 {source.url}
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-lg font-semibold text-gray-900 mb-1">
                      {source.authority}/10
                    </div>
                    <div className="text-xs text-gray-600">Authority Score</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-600 mb-1">Anchor Text:</div>
                  <div className="text-sm text-gray-800 italic">
                    "{source.anchor}"
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
                  <span>Fonte: {source.domain}</span>
                  <span className={`px-2 py-1 rounded ${
                    source.authority >= 8.5 ? 'bg-green-100 text-green-700' :
                    source.authority >= 7.5 ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {source.authority >= 8.5 ? 'Alta Autorità' :
                     source.authority >= 7.5 ? 'Media Autorità' : 'Bassa Autorità'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Source Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-3">✅ Punti di Forza</h3>
            <ul className="space-y-2 text-sm text-green-800">
              <li>• Forte presenza su media di settore autorevoli</li>
              <li>• Riconoscimento per innovazione e sostenibilità</li>
              <li>• Coverage equilibrata su diversi segmenti</li>
              <li>• Anchor text semanticamente rilevanti</li>
            </ul>
          </div>
          
          <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="font-semibold text-yellow-900 mb-3">🎯 Opportunità</h3>
            <ul className="space-y-2 text-sm text-yellow-800">
              <li>• Incrementare presenza su tech media</li>
              <li>• Sviluppare relazioni con design influencer</li>
              <li>• Espandere coverage internazionale</li>
              <li>• Intensificare PR su sostenibilità</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExternalMentions;
