
import React from 'react';

interface AppleReportHeroProps {
  scrollY: number;
}

const AppleReportHero = ({ scrollY }: AppleReportHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Elements with Parallax */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto px-6 relative z-10">
        {/* Main Title with Parallax */}
        <div 
          style={{
            transform: `translateY(${scrollY * -0.1}px)`
          }}
        >
          <h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-6 tracking-tight leading-none">
            LLM Visibility
          </h1>
          <h2 className="text-4xl md:text-6xl font-light text-gray-600 mb-8 tracking-tight">
            Report 2024
          </h2>
        </div>

        {/* Subtitle with Different Parallax Speed */}
        <div 
          style={{
            transform: `translateY(${scrollY * -0.05}px)`
          }}
        >
          <p className="text-xl md:text-2xl text-gray-500 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
            Analisi completa della presenza del brand nell'ecosistema dei Large Language Models. 
            Insight strategici per ottimizzare la visibilità digitale.
          </p>
        </div>

        {/* Key Stats with Staggered Animation */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          style={{
            transform: `translateY(${scrollY * 0.02}px)`
          }}
        >
          <div className="text-center">
            <div className="text-5xl font-light text-blue-600 mb-2">68%</div>
            <div className="text-lg text-gray-600 font-medium">Visibility Score</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-light text-green-600 mb-2">7.8</div>
            <div className="text-lg text-gray-600 font-medium">Trust Score</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-light text-purple-600 mb-2">576</div>
            <div className="text-lg text-gray-600 font-medium">Total Mentions</div>
          </div>
        </div>

        {/* Period Badge */}
        <div 
          className="inline-flex items-center px-6 py-3 bg-black/5 rounded-full text-gray-700 font-medium"
          style={{
            transform: `translateY(${scrollY * 0.01}px)`
          }}
        >
          Periodo di analisi: Q1 2024 • 847 query analizzate
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AppleReportHero;
