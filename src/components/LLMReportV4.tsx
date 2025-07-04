
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Printer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AppleReportHero from './reportv4/AppleReportHero';
import AppleMetricsSection from './reportv4/AppleMetricsSection';
import AppleCompetitiveSection from './reportv4/AppleCompetitiveSection';
import AppleInsightsSection from './reportv4/AppleInsightsSection';
import ApplePerformanceSection from './reportv4/ApplePerformanceSection';
import AppleLLMPerformanceSection from './reportv4/AppleLLMPerformanceSection';
import AppleBuyerPersonaSection from './reportv4/AppleBuyerPersonaSection';
import AppleTopPromptsSection from './reportv4/AppleTopPromptsSection';
import AppleExternalSourcesSection from './reportv4/AppleExternalSourcesSection';

interface ReportData {
  id: string;
  brand_name: string;
  industry: string;
  description?: string;
  competitors?: string;
  target_audience?: string;
  keywords?: string;
  status: string;
  chatgpt_data?: any;
  gemini_data?: any;
  analysis_results?: any;
  created_at: string;
  updated_at: string;
  user_id: string;
}

interface LLMReportV4Props {
  reportData: ReportData;
}

const LLMReportV4 = ({ reportData }: LLMReportV4Props) => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    console.log('Downloading V4 PDF report...');
  };

  return (
    <div className="min-h-screen bg-white font-sf-pro overflow-x-hidden">
      {/* Header Navigation */}
      <div className="print:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 transition-all duration-300">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 hover:bg-gray-100 text-gray-700"
          >
            <ArrowLeft className="w-4 h-4" />
            Dashboard
          </Button>
          
          <div className="text-lg font-medium text-gray-900">
            LLM Visibility Report - {reportData.brand_name}
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleDownload} className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
            <Button onClick={handlePrint} className="flex items-center gap-2 bg-black text-white hover:bg-gray-800">
              <Printer className="w-4 h-4" />
              Print
            </Button>
          </div>
        </div>
      </div>

      {/* Report Content */}
      <div className="pt-20">
        <AppleReportHero scrollY={scrollY} reportData={reportData} />
        <AppleMetricsSection scrollY={scrollY} reportData={reportData} />
        <AppleCompetitiveSection scrollY={scrollY} reportData={reportData} />
        <AppleInsightsSection scrollY={scrollY} reportData={reportData} />
        <ApplePerformanceSection scrollY={scrollY} reportData={reportData} />
        <AppleLLMPerformanceSection scrollY={scrollY} reportData={reportData} />
        <AppleBuyerPersonaSection scrollY={scrollY} reportData={reportData} />
        <AppleTopPromptsSection scrollY={scrollY} reportData={reportData} />
        <AppleExternalSourcesSection scrollY={scrollY} reportData={reportData} />
      </div>
    </div>
  );
};

export default LLMReportV4;
