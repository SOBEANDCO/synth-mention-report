import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Building, Users, Target, Zap, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const GenerateReportPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    brandName: '',
    industry: '',
    description: '',
    competitors: '',
    targetAudience: '',
    keywords: ''
  });

  const steps = [
    { number: 1, title: 'Informazioni Brand', icon: Building },
    { number: 2, title: 'Competitor & Target', icon: Users },
    { number: 3, title: 'Obiettivi & Keywords', icon: Target },
    { number: 4, title: 'Generazione Report', icon: Zap }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGenerate = async () => {
    if (!user) {
      toast.error('Devi essere autenticato per generare un report');
      return;
    }

    setIsGenerating(true);
    
    try {
      // Create report record
      const { data: report, error: insertError } = await supabase
        .from('reports')
        .insert({
          user_id: user.id,
          brand_name: formData.brandName,
          industry: formData.industry,
          description: formData.description,
          competitors: formData.competitors,
          target_audience: formData.targetAudience,
          keywords: formData.keywords,
          status: 'generating'
        })
        .select()
        .single();

      if (insertError) throw insertError;

      // Call Edge Function to generate report
      const { error: functionError } = await supabase.functions.invoke('generate-report', {
        body: {
          reportId: report.id,
          brandName: formData.brandName,
          industry: formData.industry,
          description: formData.description,
          competitors: formData.competitors,
          targetAudience: formData.targetAudience,
          keywords: formData.keywords
        }
      });

      if (functionError) throw functionError;

      toast.success('Report generato con successo!');
      navigate(`/report-v4/${report.id}`);
      
    } catch (error) {
      console.error('Error generating report:', error);
      toast.error('Errore durante la generazione del report: ' + error.message);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/60 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/dashboard')}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna alla Dashboard
          </Button>
          
          <div className="text-lg font-medium text-gray-900">
            Genera Nuovo Report
          </div>
          
          <div className="w-[120px]"></div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;
              
              return (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center gap-3 ${
                    isActive ? 'text-purple-600' : 
                    isCompleted ? 'text-green-600' : 'text-gray-400'
                  }`}>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isActive ? 'bg-gradient-to-br from-purple-500 to-pink-600 text-white' :
                      isCompleted ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white' :
                      'bg-gray-100 text-gray-400'
                    }`}>
                      {isCompleted ? <CheckCircle className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                    </div>
                    <div className="hidden md:block">
                      <div className="font-medium">{step.title}</div>
                      <div className="text-sm">Step {step.number}</div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-1 mx-4 rounded-full ${
                      isCompleted ? 'bg-green-300' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
          {currentStep === 1 && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-light bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  Informazioni sul Brand
                </h2>
                <p className="text-gray-600">Raccontaci del tuo brand per creare un'analisi personalizzata</p>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="brandName" className="text-gray-700 font-medium">Nome del Brand *</Label>
                  <Input
                    id="brandName"
                    name="brandName"
                    placeholder="Es. Apple, Nike, Tesla..."
                    value={formData.brandName}
                    onChange={handleInputChange}
                    className="mt-2 py-3 rounded-2xl border-gray-200 focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="industry" className="text-gray-700 font-medium">Settore di Mercato *</Label>
                  <Input
                    id="industry"
                    name="industry"
                    placeholder="Es. Tecnologia, Fashion, Automotive..."
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="mt-2 py-3 rounded-2xl border-gray-200 focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description" className="text-gray-700 font-medium">Descrizione del Brand</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Descrivi brevemente cosa fa il tuo brand, i tuoi prodotti/servizi principali..."
                    value={formData.description}
                    onChange={handleInputChange}
                    className="mt-2 rounded-2xl border-gray-200 focus:border-purple-500"
                    rows={4}
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Competitor e Target
                </h2>
                <p className="text-gray-600">Identifica i tuoi principali competitor e il tuo target di riferimento</p>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="competitors" className="text-gray-700 font-medium">Competitor Principali</Label>
                  <Textarea
                    id="competitors"
                    name="competitors"
                    placeholder="Lista i tuoi principali competitor, separati da virgola. Es. Apple, Samsung, Google..."
                    value={formData.competitors}
                    onChange={handleInputChange}
                    className="mt-2 rounded-2xl border-gray-200 focus:border-purple-500"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="targetAudience" className="text-gray-700 font-medium">Target di Riferimento</Label>
                  <Textarea
                    id="targetAudience"
                    name="targetAudience"
                    placeholder="Descrivi il tuo target: età, professione, interessi, comportamenti di acquisto..."
                    value={formData.targetAudience}
                    onChange={handleInputChange}
                    className="mt-2 rounded-2xl border-gray-200 focus:border-purple-500"
                    rows={4}
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-light bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                  Obiettivi e Keywords
                </h2>
                <p className="text-gray-600">Definisci le parole chiave più importanti per il tuo business</p>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="keywords" className="text-gray-700 font-medium">Keywords Principali</Label>
                  <Textarea
                    id="keywords"
                    name="keywords"
                    placeholder="Lista le parole chiave più importanti per il tuo business, separate da virgola..."
                    value={formData.keywords}
                    onChange={handleInputChange}
                    className="mt-2 rounded-2xl border-gray-200 focus:border-purple-500"
                    rows={4}
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Suggerimento: includi termini legati ai tuoi prodotti, servizi e settore di mercato
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                  <h4 className="font-medium text-gray-900 mb-2">📊 Cosa Analizzeremo</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Visibilità su ChatGPT e Gemini</li>
                    <li>• Posizionamento vs competitor</li>
                    <li>• Sentiment analysis delle menzioni</li>
                    <li>• Performance per categoria di prodotto</li>
                    <li>• Raccomandazioni strategiche personalizzate</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-8 text-center">
              <div className="mb-8">
                <h2 className="text-3xl font-light bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  {isGenerating ? 'Generazione in Corso...' : 'Pronto per Generare il Report'}
                </h2>
                <p className="text-gray-600">
                  {isGenerating ? 
                    'Stiamo analizzando il tuo brand sui principali LLM. Questo processo richiede alcuni minuti.' :
                    'Abbiamo raccolto tutte le informazioni necessarie. Clicca sotto per iniziare l\'analisi.'
                  }
                </p>
              </div>

              {isGenerating ? (
                <div className="space-y-8">
                  <div className="w-16 h-16 mx-auto">
                    <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-700">Interrogazione di ChatGPT...</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-700">Analisi competitive su Gemini...</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                  <h4 className="font-medium text-gray-900 mb-4">Riepilogo Configurazione</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div>
                      <span className="text-sm text-gray-600">Brand:</span>
                      <div className="font-medium">{formData.brandName}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Settore:</span>
                      <div className="font-medium">{formData.industry}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            {currentStep > 1 && !isGenerating && (
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                className="px-8 py-3 rounded-2xl"
              >
                Indietro
              </Button>
            )}
            
            <div className="flex-1"></div>
            
            {currentStep < 4 && (
              <Button 
                onClick={handleNext}
                disabled={currentStep === 1 && (!formData.brandName || !formData.industry)}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl"
              >
                Continua
              </Button>
            )}
            
            {currentStep === 4 && !isGenerating && (
              <Button 
                onClick={handleGenerate}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-2xl"
              >
                Genera Report
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateReportPage;
