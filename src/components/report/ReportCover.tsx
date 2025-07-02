
import React from 'react';

const ReportCover = () => {
  return (
    <div className="page-break h-screen flex flex-col items-center justify-center text-center px-8">
      {/* Logo placeholder */}
      <div className="w-20 h-20 bg-gray-900 rounded-2xl mb-8 flex items-center justify-center">
        <span className="text-white font-bold text-2xl">L</span>
      </div>
      
      <h1 className="text-5xl font-light text-gray-900 mb-4 tracking-tight">
        LLM Visibility Report
      </h1>
      
      <div className="w-16 h-px bg-gray-300 mb-8"></div>
      
      <p className="text-xl text-gray-600 mb-2 max-w-2xl leading-relaxed">
        Analisi completa della visibilità del brand nelle risposte dei Large Language Models
      </p>
      
      <p className="text-lg text-gray-500 mb-16">
        Una valutazione strategica per l'ottimizzazione della presenza digitale
      </p>
      
      <div className="space-y-4 text-sm text-gray-500">
        <div className="flex justify-center items-center gap-8">
          <div className="text-center">
            <div className="font-medium text-gray-700">Periodo di Analisi</div>
            <div>Gennaio - Marzo 2024</div>
          </div>
          <div className="w-px h-8 bg-gray-300"></div>
          <div className="text-center">
            <div className="font-medium text-gray-700">Prompts Testati</div>
            <div>847 query analizzate</div>
          </div>
        </div>
        
        <div className="pt-8">
          <div className="font-medium text-gray-700 mb-2">Generato il</div>
          <div>{new Date().toLocaleDateString('it-IT', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</div>
        </div>
      </div>
      
      <div className="absolute bottom-8 text-xs text-gray-400">
        Confidenziale - Solo per uso interno
      </div>
    </div>
  );
};

export default ReportCover;
