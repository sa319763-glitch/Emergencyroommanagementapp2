import { ArrowLeft, Shield, Lock, User } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Screen } from '../../App';
import sahelLogo from 'figma:asset/b6b82356c56afc4d51279aff1309cadb8de167eb.png';

interface AdminLoginProps {
  navigate: (screen: Screen) => void;
}

export default function AdminLogin({ navigate }: AdminLoginProps) {
  const handleLogin = () => {
    navigate('admin-dashboard');
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

        <h1 className="text-slate-900 mb-2 text-center">Admin Portal</h1>
        <p className="text-slate-600 text-center mb-8">System administration and management</p>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="admin-username">Admin Username</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input 
                id="admin-username"
                type="text" 
                placeholder="Enter your admin username"
                className="pl-11 rounded-xl h-12"
                defaultValue="admin@sahel"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="admin-password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input 
                id="admin-password"
                type="password" 
                placeholder="Enter your password"
                className="pl-11 rounded-xl h-12"
                defaultValue="admin123"
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
            Sign In to Admin Portal
          </Button>
        </div>

        {/* Security Note */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mt-8">
          <div className="flex gap-3">
            <Shield className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-amber-900 mb-1">Administrator Access</h4>
              <p className="text-amber-700">This portal is restricted to system administrators only. All activities are logged and audited for security purposes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
