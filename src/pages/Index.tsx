
import LLMDashboard from "@/components/LLMDashboard";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Pulsante per accedere al report */}
      <div className="fixed top-4 right-4 z-50 print:hidden">
        <Button 
          onClick={() => navigate('/report')}
          className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-200 flex items-center gap-2"
          variant="ghost"
        >
          <FileText className="w-4 h-4" />
          Visualizza Report A4
        </Button>
      </div>
      
      <LLMDashboard />
    </div>
  );
};

export default Index;
