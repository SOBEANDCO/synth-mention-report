
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, User, Mail, Building, Save, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Mario',
    lastName: 'Rossi',
    email: 'mario.rossi@email.com',
    company: 'TechCorp Italia',
    role: 'Marketing Manager',
    phone: '+39 333 123 4567'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // Simuliamo il salvataggio
    console.log('Saving profile:', profileData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
            Profilo Utente
          </div>
          
          <div className="w-[120px]"></div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
          {/* Profile Header */}
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-3xl">
                  {profileData.firstName.charAt(0)}{profileData.lastName.charAt(0)}
                </span>
              </div>
              <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100">
                <Camera className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            
            <h1 className="text-3xl font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              {profileData.firstName} {profileData.lastName}
            </h1>
            <p className="text-gray-600">{profileData.role} at {profileData.company}</p>
          </div>

          {/* Profile Form */}
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-light text-gray-900">Informazioni Personali</h2>
              <Button 
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className={isEditing ? 
                  "bg-gradient-to-r from-green-500 to-emerald-600 text-white" : 
                  "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                }
              >
                {isEditing ? (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Salva Modifiche
                  </>
                ) : (
                  <>
                    <User className="w-4 h-4 mr-2" />
                    Modifica Profilo
                  </>
                )}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-gray-700 font-medium">Nome</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={profileData.firstName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="py-3 rounded-2xl border-gray-200 focus:border-purple-500 disabled:bg-gray-50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-gray-700 font-medium">Cognome</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={profileData.lastName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="py-3 rounded-2xl border-gray-200 focus:border-purple-500 disabled:bg-gray-50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="pl-11 py-3 rounded-2xl border-gray-200 focus:border-purple-500 disabled:bg-gray-50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700 font-medium">Telefono</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="py-3 rounded-2xl border-gray-200 focus:border-purple-500 disabled:bg-gray-50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-gray-700 font-medium">Azienda</Label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    id="company"
                    name="company"
                    value={profileData.company}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="pl-11 py-3 rounded-2xl border-gray-200 focus:border-purple-500 disabled:bg-gray-50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-gray-700 font-medium">Ruolo</Label>
                <Input
                  id="role"
                  name="role"
                  value={profileData.role}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="py-3 rounded-2xl border-gray-200 focus:border-purple-500 disabled:bg-gray-50"
                />
              </div>
            </div>

            {/* Account Stats */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-light text-gray-900 mb-6">Statistiche Account</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-100 rounded-2xl">
                  <div className="text-3xl font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    12
                  </div>
                  <div className="text-gray-700">Report Generati</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-100 rounded-2xl">
                  <div className="text-3xl font-light bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    45
                  </div>
                  <div className="text-gray-700">Giorni Attivo</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl">
                  <div className="text-3xl font-light bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    8
                  </div>
                  <div className="text-gray-700">Competitor Tracciati</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
