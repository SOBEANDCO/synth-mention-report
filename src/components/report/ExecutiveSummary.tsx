
import React from 'react';

const ExecutiveSummary = () => {
  return (
    <div className="page-break min-h-screen px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-gray-900 mb-8 tracking-tight">
          Executive Summary
        </h1>
        
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-light text-gray-900 mb-2">68%</div>
            <div className="text-sm text-gray-600">Visibility Score</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-light text-gray-900 mb-2">7.8/10</div>
            <div className="text-sm text-gray-600">Trust Score</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-light text-gray-900 mb-2">576</div>
            <div className="text-sm text-gray-600">Total Mentions</div>
          </div>
        </div>
        
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Panoramica Generale</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            L'analisi condotta nel primo trimestre 2024 rivela una presenza significativa del brand 
            nell'ecosistema dei Large Language Models, con un Visibility Score del 68% che posiziona 
            l'azienda tra i leader del settore.
          </p>
          
          <h3 className="text-xl font-medium text-gray-900 mb-4">Punti di Forza</h3>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li>• Forte presenza nelle query relative al settore arredamento (78% visibility)</li>
            <li>• Sentiment prevalentemente positivo (72% delle menzioni)</li>
            <li>• Eccellenti performance su ChatGPT e Claude</li>
            <li>• Crescita costante delle menzioni (+15% vs Q4 2023)</li>
          </ul>
          
          <h3 className="text-xl font-medium text-gray-900 mb-4">Aree di Miglioramento</h3>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li>• Bassa visibilità su Gemini (43% vs media 68%)</li>
            <li>• Presenza limitata nelle query shopping-oriented</li>
            <li>• Necessità di ottimizzazione per buyer persona "Property Manager"</li>
          </ul>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Raccomandazione Strategica</h3>
            <p className="text-blue-800">
              Concentrare gli sforzi sull'ottimizzazione per Gemini e sullo sviluppo di contenuti 
              orientati agli shopping results per massimizzare il potenziale commerciale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
