
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuliamo il login per ora
    console.log('Login attempt:', formData);
    navigate('/dashboard');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Torna alla Home
        </Button>

        {/* Login Card */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
            <h1 className="text-3xl font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Bentornato
            </h1>
            <p className="text-gray-600">Accedi al tuo account AI Visibility</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tua@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-11 py-3 rounded-2xl border-gray-200 focus:border-purple-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="La tua password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-11 pr-11 py-3 rounded-2xl border-gray-200 focus:border-purple-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-purple-600 mr-2" />
                <span className="text-gray-600">Ricordami</span>
              </label>
              <button type="button" className="text-purple-600 hover:text-purple-700">
                Password dimenticata?
              </button>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-2xl text-lg font-medium"
            >
              Accedi
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Non hai un account?{' '}
              <button 
                onClick={() => navigate('/register')}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Registrati qui
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
