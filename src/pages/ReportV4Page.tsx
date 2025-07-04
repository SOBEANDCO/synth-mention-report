
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import LLMReportV4 from "@/components/LLMReportV4";

const ReportV4Page = () => {
  const { reportId } = useParams();
  const { user } = useAuth();

  const { data: report, isLoading, error } = useQuery({
    queryKey: ['report', reportId],
    queryFn: async () => {
      if (!reportId || !user) return null;
      
      const { data, error } = await supabase
        .from('reports')
        .select('*')
        .eq('id', reportId)
        .eq('user_id', user.id)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!reportId && !!user
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Errore</h2>
          <p className="text-gray-600">Impossibile caricare il report</p>
        </div>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600 mb-4">Report non trovato</h2>
          <p className="text-gray-600">Il report richiesto non esiste o non hai i permessi per visualizzarlo</p>
        </div>
      </div>
    );
  }

  return <LLMReportV4 reportData={report} />;
};

export default ReportV4Page;
