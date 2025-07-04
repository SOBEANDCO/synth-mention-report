
import React from 'react';
import { Button } from "@/components/ui/button";
import { BarChart3, FileText, Users, TrendingUp, Plus, Settings, LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const DashboardPage = () => {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();

  // Fetch user reports
  const { data: reports, isLoading } = useQuery({
    queryKey: ['reports', user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase
        .from('reports')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: !!user
  });

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  const stats = [
    { 
      label: 'Report Generati', 
      value: reports?.length || 0, 
      change: `${reports?.filter(r => r.created_at > new Date(Date.now() - 30*24*60*60*1000).toISOString()).length || 0} questo mese`, 
      color: 'blue' 
    },
    { 
      label: 'Report Completati', 
      value: reports?.filter(r => r.status === 'completed').length || 0, 
      change: 'analisi complete', 
      color: 'green' 
    },
    { 
      label: 'In Elaborazione', 
      value: reports?.filter(r => r.status === 'generating').length || 0, 
      change: 'report in corso', 
      color: 'purple' 
    },
    { 
      label: 'Brand Analizzati', 
      value: new Set(reports?.map(r => r.brand_name) || []).size, 
      change: 'marchi unici', 
      color: 'pink' 
    }
  ];

  const recentReports = reports?.slice(0, 3) || [];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/60 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Visibility
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/profile')}>
              <User className="w-4 h-4 mr-2" />
              Profilo
            </Button>
            <Button variant="ghost" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Esci
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Benvenuto nella Dashboard
          </h1>
          <p className="text-xl text-gray-600 font-light">
            Monitora le performance del tuo brand nell'ecosistema AI
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Button 
              onClick={() => navigate('/generate-report')}
              className="h-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-3xl text-lg font-medium flex flex-col items-center justify-center gap-2"
            >
              <Plus className="w-6 h-6" />
              Genera Nuovo Report
            </Button>
            
            {recentReports.length > 0 && (
              <Button 
                variant="outline" 
                onClick={() => navigate(`/report-v4/${recentReports[0].id}`)}
                className="h-24 rounded-3xl text-lg font-medium flex flex-col items-center justify-center gap-2 border-2"
              >
                <FileText className="w-6 h-6" />
                Vedi Ultimo Report
              </Button>
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">{stat.label}</h3>
                <BarChart3 className={`w-5 h-5 ${
                  stat.color === 'blue' ? 'text-blue-500' :
                  stat.color === 'green' ? 'text-green-500' :
                  stat.color === 'purple' ? 'text-purple-500' :
                  'text-pink-500'
                }`} />
              </div>
              <div className={`text-3xl font-light mb-2 bg-gradient-to-r ${
                stat.color === 'blue' ? 'from-blue-600 to-indigo-600' :
                stat.color === 'green' ? 'from-green-600 to-emerald-600' :
                stat.color === 'purple' ? 'from-purple-600 to-violet-600' :
                'from-pink-600 to-rose-600'
              } bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <p className="text-sm text-gray-600">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Recent Reports */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-light bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Report Recenti
            </h2>
          </div>
          
          {recentReports.length > 0 ? (
            <div className="space-y-4">
              {recentReports.map((report) => (
                <div 
                  key={report.id}
                  className="flex items-center justify-between p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/30 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{report.brand_name} Analysis</h3>
                      <p className="text-sm text-gray-600">{new Date(report.created_at).toLocaleDateString('it-IT')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      report.status === 'completed' ? 'bg-green-100 text-green-800' : 
                      report.status === 'generating' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {report.status === 'completed' ? 'Completato' : 
                       report.status === 'generating' ? 'In Elaborazione' : 'Fallito'}
                    </span>
                    {report.status === 'completed' && (
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => navigate(`/report-v4/${report.id}`)}
                      >
                        Visualizza
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">Nessun Report Generato</h3>
              <p className="text-gray-500 mb-6">Inizia creando il tuo primo report di analisi AI</p>
              <Button onClick={() => navigate('/generate-report')}>
                Genera Primo Report
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
