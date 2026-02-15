import { useState } from 'react';
import { ArrowLeft, Phone, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Screen } from '../../App';
import sahelLogo from 'figma:asset/b6b82356c56afc4d51279aff1309cadb8de167eb.png';

interface ForgotPasswordProps {
  navigate: (screen: Screen) => void;
}

export default function ForgotPassword({ navigate }: ForgotPasswordProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOTP = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('otp-verification');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-teal-50 pb-6">
      {/* Header */}
      <div className="px-4 sm:px-6 py-4 sm:py-6">
        <button 
          onClick={() => navigate('patient-login')} 
          className="text-teal-600 hover:bg-teal-50 rounded-lg p-2 transition-colors active:scale-95"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="px-4 sm:px-6 py-4 max-w-md mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={sahelLogo} alt="Sahel Logo" className="w-20 h-20" />
        </div>
        
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-slate-900 mb-2">Forgot Password?</h1>
          <p className="text-slate-600 text-sm">
            Enter your phone number and we'll send you a one-time password (OTP) to sign in
          </p>
        </div>

        {/* Phone Input Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input 
                  id="phone"
                  type="tel" 
                  placeholder="+966 5X XXX XXXX"
                  className="pl-11 rounded-xl h-12"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <p className="text-xs text-slate-500">
                We'll send a 6-digit verification code to this number
              </p>
            </div>
          </div>
        </div>

        {/* Send OTP Button */}
        <Button 
          onClick={handleSendOTP}
          disabled={!phoneNumber || isLoading}
          className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full h-14 disabled:bg-slate-300 disabled:opacity-50 active:scale-98 transition-transform"
        >
          <Send className="w-5 h-5 mr-2" />
          {isLoading ? 'Sending...' : 'Send OTP'}
        </Button>

        {/* Info Box */}
        <div className="mt-6 bg-teal-50 border border-teal-200 rounded-xl p-4">
          <div className="flex gap-3">
            <div className="w-1 bg-teal-500 rounded-full flex-shrink-0" />
            <div>
              <h4 className="text-slate-900 text-sm mb-1">Secure Login</h4>
              <p className="text-slate-600 text-xs">
                For your security, the OTP is valid for 5 minutes and can only be used once.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Login */}
        <div className="text-center mt-6">
          <button 
            onClick={() => navigate('patient-login')}
            className="text-teal-600 text-sm hover:underline"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}
