import { useState } from 'react';
import { ArrowLeft, Clock, MapPin, Users, Activity, Phone, Navigation, AlertCircle, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Textarea } from '../ui/textarea';
import { Screen, TriageData } from '../../App';

interface QueueStatusProps {
  navigate: (screen: Screen) => void;
  data: TriageData;
}

export default function QueueStatus({ navigate, data }: QueueStatusProps) {
  const [updateMessage, setUpdateMessage] = useState('');
  const [updateSent, setUpdateSent] = useState(false);

  const severityColors = {
    green: { bg: 'bg-green-500', text: 'text-green-700', light: 'bg-green-50' },
    yellow: { bg: 'bg-yellow-500', text: 'text-yellow-700', light: 'bg-yellow-50' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-700', light: 'bg-orange-50' },
    red: { bg: 'bg-red-500', text: 'text-red-700', light: 'bg-red-50' },
  };

  const colors = severityColors[data.severity];
  const progress = Math.max(10, 100 - (data.position * 10));

  const handleSendUpdate = () => {
    if (updateMessage.trim()) {
      setUpdateSent(true);
      setTimeout(() => {
        setUpdateMessage('');
        setUpdateSent(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white px-6 py-6 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('patient-dashboard')} className="text-teal-600">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-slate-900">Queue Status</h2>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Live Status Indicator */}
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-6 mb-6 text-white">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <p className="text-teal-100">Live Updates Active</p>
          </div>
          <div className="text-center">
            <h1 className="text-white mb-2">Position #{data.position}</h1>
            <p className="text-teal-100">in the emergency queue</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-slate-900">Queue Progress</h3>
            <span className="text-teal-600">{progress}%</span>
          </div>
          <Progress value={progress} className="h-3" />
          <p className="text-slate-600 mt-3">
            {data.position === 1 ? "You're next! Please be ready." : `${data.position - 1} patient(s) ahead of you`}
          </p>
        </div>

        {/* Wait Time */}
        <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 rounded-full p-3">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-slate-900">Estimated Wait</h4>
                <p className="text-slate-600">Approximate time</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-blue-600">~{data.estimatedWait} min</p>
            </div>
          </div>
        </div>

        {/* Hospital Info */}
        <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
          <h3 className="text-slate-900 mb-4">Hospital Information</h3>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
              <MapPin className="w-5 h-5 text-teal-600" />
              <div className="flex-1">
                <h4 className="text-slate-900">{data.hospital}</h4>
                <p className="text-slate-600">Emergency Department</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
              <Users className="w-5 h-5 text-purple-600" />
              <div className="flex-1">
                <h4 className="text-slate-900">Current Load</h4>
                <p className="text-slate-600">12 patients in queue</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
              <Activity className="w-5 h-5 text-green-600" />
              <div className="flex-1">
                <h4 className="text-slate-900">Avg. Wait Time Today</h4>
                <p className="text-slate-600">28 minutes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Update Condition Section */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-5 h-5 text-orange-600" />
            <h3 className="text-slate-900">Update Your Condition</h3>
          </div>
          
          <p className="text-slate-600 mb-4">
            Has your condition changed? Let the medical staff know about any new symptoms or if your condition is worsening.
          </p>

          <Textarea
            value={updateMessage}
            onChange={(e) => setUpdateMessage(e.target.value)}
            placeholder="Describe any new symptoms or changes in your condition..."
            className="rounded-xl min-h-24 resize-none mb-3"
          />

          {updateSent && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-3 flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-green-700">Update sent to medical staff</p>
            </div>
          )}

          <Button 
            onClick={handleSendUpdate}
            disabled={!updateMessage.trim() || updateSent}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full h-12 flex items-center justify-center gap-2 disabled:bg-slate-300"
          >
            <Send className="w-5 h-5" />
            Send Update to Staff
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full h-12 flex items-center justify-center gap-2"
          >
            <Navigation className="w-5 h-5" />
            Get Directions
          </Button>

          <Button 
            variant="outline"
            className="w-full border-2 border-teal-500 text-teal-600 hover:bg-teal-50 rounded-full h-12 flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call Hospital
          </Button>

          <Button 
            variant="outline"
            className="w-full border-2 border-red-500 text-red-600 hover:bg-red-50 rounded-full h-12"
          >
            Cancel Visit
          </Button>
        </div>

        {/* Tips */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mt-6">
          <h4 className="text-blue-900 mb-2">Important Tips</h4>
          <ul className="text-blue-700 space-y-1 text-sm">
            <li>• Bring your ID and insurance card</li>
            <li>• Arrive 10 minutes before your turn</li>
            <li>• You'll receive a notification when it's your turn</li>
            <li>• Queue times are estimates and may vary</li>
          </ul>
        </div>
      </div>
    </div>
  );
}