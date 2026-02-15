import { useState } from 'react';
import { ArrowLeft, IdCard, Lock, User, Phone } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Screen } from '../../App';
import sahelLogo from 'figma:asset/b6b82356c56afc4d51279aff1309cadb8de167eb.png';

interface LoginRegisterProps {
  navigate: (screen: Screen) => void;
}

export default function LoginRegister({ navigate }: LoginRegisterProps) {
  const [activeTab, setActiveTab] = useState('login');

  const handleLogin = () => {
    navigate('patient-dashboard');
  };

  const handleRegister = () => {
    navigate('patient-profile');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-teal-50 pb-6">
      {/* Header */}
      <div className="px-4 sm:px-6 py-4 sm:py-6">
        <button onClick={() => navigate('welcome')} className="text-teal-600 hover:bg-teal-50 rounded-lg p-2 transition-colors active:scale-95">
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="px-4 sm:px-6 py-4">
        <div className="flex justify-center mb-6">
          <img src={sahelLogo} alt="Sahel Logo" className="w-20 h-20" />
        </div>
        
        <h1 className="text-slate-900 mb-2">Welcome Back</h1>
        <p className="text-slate-600 text-sm">Sign in to access your medical records</p>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
          <TabsList className="grid w-full grid-cols-2 bg-slate-100 rounded-full p-1">
            <TabsTrigger value="login" className="rounded-full">Login</TabsTrigger>
            <TabsTrigger value="register" className="rounded-full">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="national-id">National ID</Label>
              <div className="relative">
                <IdCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input 
                  id="national-id"
                  type="text" 
                  placeholder="Enter your National ID"
                  className="pl-11 rounded-xl h-12"
                  defaultValue="123-45-6789"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input 
                  id="password"
                  type="password" 
                  placeholder="Enter your password"
                  className="pl-11 rounded-xl h-12"
                  defaultValue="password"
                />
              </div>
            </div>

            <button 
              onClick={() => navigate('forgot-password')}
              className="text-teal-600 text-right w-full hover:underline"
            >
              Forgot Password?
            </button>

            <Button 
              onClick={handleLogin}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full h-12 mt-6 active:scale-98 transition-transform"
            >
              Sign In
            </Button>
          </TabsContent>

          <TabsContent value="register" className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input 
                  id="name"
                  type="text" 
                  placeholder="Enter your full name"
                  className="pl-11 rounded-xl h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reg-national-id">National ID</Label>
              <div className="relative">
                <IdCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input 
                  id="reg-national-id"
                  type="text" 
                  placeholder="Enter your National ID"
                  className="pl-11 rounded-xl h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input 
                  id="phone"
                  type="tel" 
                  placeholder="+1 (555) 000-0000"
                  className="pl-11 rounded-xl h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reg-password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input 
                  id="reg-password"
                  type="password" 
                  placeholder="Create a password"
                  className="pl-11 rounded-xl h-12"
                />
              </div>
            </div>

            <Button 
              onClick={handleRegister}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full h-12 mt-6 active:scale-98 transition-transform"
            >
              Create Account
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}