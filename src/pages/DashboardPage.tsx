
import React from 'react';
import { Button } from "@/components/ui/button";
import { BarChart3, FileText, Users, TrendingUp, Plus, Settings, LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Report Generati', value: '12', change: '+3 questo mese', color: 'blue' },
    { label: 'Visibility Score', value: '67%', change: '+12% vs ultimo mese', color: 'green' },
    { label: 'Competitor Tracciati', value: '8', change: '2 nuovi aggiunti', color: 'purple' },
    { label: 'Query Analizzate', value: '1,247', change: '+89 questa settimana', color: 'pink' }
  ];

  const recentReports = [
    { id: 1, name: 'Brand Analysis Q4 2024', date: '15 Mar 2024', status: 'completed' },
    { id: 2, name: 'Competitor Comparison', date: '12 Mar 2024', status: 'completed' },
    { id: 3, name: 'LLM Performance Review', date: '08 Mar 2024', status: 'processing' },
  ];

  const handleLogout = () => {
    // Simuliamo il logout
    navigate('/');
  };

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
            <Button variant="ghost" onClick={() => navigate('/settings')}>
              <Settings className="w-4 h-4 mr-2" />
              Impostazioni
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button 
              onClick={() => navigate('/generate-report')}
              className="h-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-3xl text-lg font-medium flex flex-col items-center justify-center gap-2"
            >
              <Plus className="w-6 h-6" />
              Genera Nuovo Report
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => navigate('/report-v4')}
              className="h-24 rounded-3xl text-lg font-medium flex flex-col items-center justify-center gap-2 border-2"
            >
              <FileText className="w-6 h-6" />
              Vedi Ultimo Report
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => navigate('/competitors')}
              className="h-24 rounded-3xl text-lg font-medium flex flex-col items-center justify-center gap-2 border-2"
            >
              <Users className="w-6 h-6" />
              Gestisci Competitor
            </Button>
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
            <Button 
              onClick={() => navigate('/reports')}
              variant="outline" 
              className="rounded-2xl"
            >
              Vedi Tutti
            </Button>
          </div>
          
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
                    <h3 className="font-medium text-gray-900">{report.name}</h3>
                    <p className="text-sm text-gray-600">{report.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    report.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {report.status === 'completed' ? 'Completato' : 'In Elaborazione'}
                  </span>
                  <Button size="sm" variant="ghost">
                    Visualizza
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
