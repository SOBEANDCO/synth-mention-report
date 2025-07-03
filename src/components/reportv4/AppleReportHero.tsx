
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface AppleReportHeroProps {
  scrollY: number;
}

const AppleReportHero = ({ scrollY }: AppleReportHeroProps) => {
  const parallaxOffset = scrollY * 0.5;
  const textParallax = scrollY * 0.3;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Elements with Parallax */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          transform: `translateY(${parallaxOffset}px)`
        }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="text-center max-w-5xl mx-auto px-6 relative z-10">
        {/* Company Logo */}
        <div 
          className="mb-12"
          style={{
            transform: `translateY(${textParallax * 0.5}px)`
          }}
        >
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl">B</span>
          </div>
          <h3 className="text-xl font-medium text-gray-700 mb-2">Brand Name</h3>
          <p className="text-gray-500">Generated on March 15, 2024</p>
        </div>

        {/* Main Headline */}
        <div 
          style={{
            transform: `translateY(${textParallax}px)`
          }}
        >
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight leading-tight">
            How well does your brand appear in AI conversations?
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-16 font-light leading-relaxed max-w-4xl mx-auto">
            Discover your visibility, trust and competitiveness across ChatGPT, Gemini, Claude and more.
          </p>
        </div>

        {/* Key Stats Preview */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          style={{
            transform: `translateY(${textParallax * -0.5}px)`
          }}
        >
          <div className="text-center">
            <div className="text-5xl font-light text-blue-600 mb-2">28%</div>
            <div className="text-lg text-gray-600 font-medium">LLM Visibility Score</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-light text-green-600 mb-2">65</div>
            <div className="text-lg text-gray-600 font-medium">Trust Score</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-light text-purple-600 mb-2">14</div>
            <div className="text-lg text-gray-600 font-medium">Brand Mentions</div>
          </div>
        </div>

        {/* Scroll to Explore Button */}
        <div 
          className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer group"
          style={{
            transform: `translateY(${textParallax * -0.2}px)`
          }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="font-medium">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce"
        style={{
          transform: `translateX(-50%) translateY(${textParallax * -0.3}px)`
        }}
      >
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default AppleReportHero;
