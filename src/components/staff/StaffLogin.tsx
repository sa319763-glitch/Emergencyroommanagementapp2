import { ArrowLeft, IdCard, Lock, Shield, Building2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Screen } from '../../App';
import sahelLogo from 'figma:asset/b6b82356c56afc4d51279aff1309cadb8de167eb.png';

interface StaffLoginProps {
  navigate: (screen: Screen) => void;
}

export default function StaffLogin({ navigate }: StaffLoginProps) {
  const handleLogin = () => {
    navigate('staff-dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-teal-50">
      {/* Header */}
      <div className="px-6 py-6">
        <button onClick={() => navigate('welcome')} className="text-teal-600">
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="px-6 py-4">
        <div className="flex justify-center mb-6">
          <img src={sahelLogo} alt="Sahel Logo" className="w-20 h-20" />
        </div>

        <h1 className="text-slate-900 mb-2 text-center">Medical Staff Portal</h1>
        <p className="text-slate-600 text-center mb-8">Sign in to access patient queue and management</p>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="staff-id">Staff ID</Label>
            <div className="relative">
              <IdCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input 
                id="staff-id"
                type="text" 
                placeholder="Enter your staff ID"
                className="pl-11 rounded-xl h-12"
                defaultValue="STF-12345"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="hospital-name">Hospital Name</Label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input 
                id="hospital-name"
                type="text" 
                placeholder="Enter hospital name"
                className="pl-11 rounded-xl h-12"
                defaultValue="King Fahad Medical City"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="staff-password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input 
                id="staff-password"
                type="password" 
                placeholder="Enter your password"
                className="pl-11 rounded-xl h-12"
                defaultValue="password"
              />
            </div>
          </div>

          <button className="text-teal-600 text-right w-full">
            Forgot Password?
          </button>

          <Button 
            onClick={handleLogin}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full h-12 mt-6"
          >
            Sign In to Staff Portal
          </Button>
        </div>

        {/* Security Note */}
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 mt-8">
          <div className="flex gap-3">
            <Shield className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-teal-900 mb-1">Secure Access</h4>
              <p className="text-teal-700">This portal is for authorized medical staff only. All activities are logged and monitored.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}