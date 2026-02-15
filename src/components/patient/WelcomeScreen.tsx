import { Heart, Activity, Clock, Shield } from 'lucide-react';
import { Button } from '../ui/button';
import { Screen } from '../../App';
import sahelLogo from 'figma:asset/b6b82356c56afc4d51279aff1309cadb8de167eb.png';

interface WelcomeScreenProps {
  navigate: (screen: Screen) => void;
}

export default function WelcomeScreen({ navigate }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-teal-50 flex flex-col">
      {/* Header */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8">
        <div className="mb-6">
          <img src={sahelLogo} alt="Sahel Logo" className="w-24 h-24 sm:w-32 sm:h-32" />
        </div>
        
        <h1 className="text-teal-900 mb-3 text-center">Sahel</h1>
        <p className="text-teal-700 text-center mb-8 sm:mb-12 max-w-sm px-4">
          Intelligent Emergency Room Management System
        </p>

        {/* Features */}
        <div className="space-y-3 sm:space-y-4 w-full max-w-md mb-8 sm:mb-12">
          <div className="flex items-start gap-3 sm:gap-4 bg-white p-4 sm:p-5 rounded-2xl shadow-sm">
            <div className="bg-blue-100 rounded-full p-2.5 sm:p-3 flex-shrink-0">
              <Activity className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-slate-900 mb-1">Smart Triage</h3>
              <p className="text-slate-600 text-sm">AI-powered symptom assessment and priority assignment</p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4 bg-white p-4 sm:p-5 rounded-2xl shadow-sm">
            <div className="bg-teal-100 rounded-full p-2.5 sm:p-3 flex-shrink-0">
              <Clock className="w-5 h-5 text-teal-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-slate-900 mb-1">Real-Time Updates</h3>
              <p className="text-slate-600 text-sm">Live queue status and estimated wait times</p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4 bg-white p-4 sm:p-5 rounded-2xl shadow-sm">
            <div className="bg-green-100 rounded-full p-2.5 sm:p-3 flex-shrink-0">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-slate-900 mb-1">Secure & Private</h3>
              <p className="text-slate-600 text-sm">Your medical information is protected and encrypted</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 sm:px-6 pb-6 sm:pb-8 space-y-3 safe-bottom">
        <Button 
          onClick={() => navigate('patient-login')}
          className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full h-14 active:scale-98 transition-transform"
        >
          I'm a Patient
        </Button>
        <Button 
          onClick={() => navigate('staff-login')}
          variant="outline"
          className="w-full border-2 border-teal-500 text-teal-600 hover:bg-teal-50 rounded-full h-14 active:scale-98 transition-transform"
        >
          I'm Medical Staff
        </Button>
        <button 
          onClick={() => navigate('admin-login')}
          className="w-full text-slate-500 hover:text-teal-600 text-sm py-2 transition-colors"
        >
          Administrator Access
        </button>
      </div>
    </div>
  );
}
