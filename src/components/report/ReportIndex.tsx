
import React from 'react';

const ReportIndex = () => {
  const sections = [
    { title: "Executive Summary", page: 3 },
    { title: "Core Metrics Overview", page: 4 },
    { title: "Competitive Positioning", page: 6 },
    { title: "Mention Deep Dive", page: 8 },
    { title: "Prompt Performance Analysis", page: 10 },
    { title: "Time-Based Analysis", page: 12 },
    { title: "Detailed Breakdown", page: 14 },
    { title: "Shopping Result Presence", page: 16 },
    { title: "External Mentions", page: 18 },
    { title: "Recommendations & Action Plan", page: 20 }
  ];

  return (
    <div className="page-break min-h-screen px-8 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-light text-gray-900 mb-12 tracking-tight">
          Indice
        </h1>
        
        <div className="space-y-1">
          {sections.map((section, index) => (
            <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
              <span className="text-gray-800 font-medium">{section.title}</span>
              <span className="text-gray-500 font-mono text-sm">{section.page}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-3">Come leggere questo report</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>• <strong>Visibility Score:</strong> Percentuale di prompts in cui il brand appare</p>
            <p>• <strong>Trust Score:</strong> Basato su posizione, sentiment e volume delle menzioni</p>
            <p>• <strong>Competitive Analysis:</strong> Confronto con i principali competitor</p>
            <p>• <strong>Recommendations:</strong> Azioni concrete per migliorare la visibilità</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportIndex;
