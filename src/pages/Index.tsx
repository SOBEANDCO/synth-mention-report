
import LLMDashboard from "@/components/LLMDashboard";
import { Button } from "@/components/ui/button";
import { FileText, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Pulsanti per accedere ai report */}
      <div className="fixed top-4 right-4 z-50 print:hidden flex gap-2">
        <Button 
          onClick={() => navigate('/report')}
          className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-200 flex items-center gap-2"
          variant="ghost"
        >
          <FileText className="w-4 h-4" />
          Report A4
        </Button>
        <Button 
          onClick={() => navigate('/report-v4')}
          className="bg-black/80 backdrop-blur-sm border border-gray-600 hover:bg-black/90 transition-all duration-200 flex items-center gap-2 text-white"
          variant="ghost"
        >
          <Sparkles className="w-4 h-4" />
          Report V4
        </Button>
      </div>
      
      <LLMDashboard />
    </div>
  );
};

export default Index;
