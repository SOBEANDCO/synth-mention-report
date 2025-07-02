
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Printer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ReportCover from './report/ReportCover';
import ReportIndex from './report/ReportIndex';
import ExecutiveSummary from './report/ExecutiveSummary';
import CoreMetricsSection from './report/CoreMetricsSection';
import CompetitiveAnalysis from './report/CompetitiveAnalysis';
import MentionAnalysis from './report/MentionAnalysis';
import PromptPerformance from './report/PromptPerformance';
import TimeBasedAnalysis from './report/TimeBasedAnalysis';
import DetailedBreakdown from './report/DetailedBreakdown';
import ShoppingResults from './report/ShoppingResults';
import ExternalMentions from './report/ExternalMentions';
import Recommendations from './report/Recommendations';

const LLMReport = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Simula download PDF
    console.log('Downloading PDF report...');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header per navigazione (nascosto in stampa) */}
      <div className="print:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 p-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna al Dashboard
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleDownload} className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              PDF
            </Button>
            <Button onClick={handlePrint} className="flex items-center gap-2">
              <Printer className="w-4 h-4" />
              Stampa
            </Button>
          </div>
        </div>
      </div>

      {/* Contenuto del report */}
      <div className="pt-20 print:pt-0">
        <ReportCover />
        <ReportIndex />
        <ExecutiveSummary />
        <CoreMetricsSection />
        <CompetitiveAnalysis />
        <MentionAnalysis />
        <PromptPerformance />
        <TimeBasedAnalysis />
        <DetailedBreakdown />
        <ShoppingResults />
        <ExternalMentions />
        <Recommendations />
      </div>
    </div>
  );
};

export default LLMReport;
