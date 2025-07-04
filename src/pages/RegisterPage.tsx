
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, Lock, Eye, EyeOff, User, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Le password non coincidono');
      return;
    }
    // Simuliamo la registrazione per ora
    console.log('Registration attempt:', formData);
    navigate('/dashboard');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center p-6">
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

        {/* Register Card */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
            <h1 className="text-3xl font-light bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Inizia Gratis
            </h1>
            <p className="text-gray-600">Crea il tuo account AI Visibility</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-gray-700 font-medium">Nome</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Mario"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="pl-11 py-3 rounded-2xl border-gray-200 focus:border-purple-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-gray-700 font-medium">Cognome</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Rossi"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="py-3 rounded-2xl border-gray-200 focus:border-purple-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-gray-700 font-medium">Azienda</Label>
              <div className="relative">
                <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  id="company"
                  name="company"
                  placeholder="La tua azienda"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="pl-11 py-3 rounded-2xl border-gray-200 focus:border-purple-500"
                  required
                />
              </div>
            </div>

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
                  placeholder="Minimo 8 caratteri"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-11 pr-11 py-3 rounded-2xl border-gray-200 focus:border-purple-500"
                  required
                  minLength={8}
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

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">Conferma Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Ripeti la password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="pl-11 py-3 rounded-2xl border-gray-200 focus:border-purple-500"
                  required
                />
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <input type="checkbox" id="terms" className="rounded border-gray-300 text-purple-600 mt-1" required />
              <label htmlFor="terms" className="text-sm text-gray-600">
                Accetto i{' '}
                <a href="#" className="text-purple-600 hover:text-purple-700">Termini di Servizio</a>{' '}
                e la{' '}
                <a href="#" className="text-purple-600 hover:text-purple-700">Privacy Policy</a>
              </label>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-2xl text-lg font-medium"
            >
              Crea Account
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Hai già un account?{' '}
              <button 
                onClick={() => navigate('/login')}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Accedi qui
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
