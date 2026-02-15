import { LogOut, Users, AlertCircle, Clock, List } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Screen } from '../../App';
import sahelLogo from 'figma:asset/b6b82356c56afc4d51279aff1309cadb8de167eb.png';

interface StaffDashboardProps {
  navigate: (screen: Screen) => void;
  onPatientSelect: (patientId: string) => void;
}

export default function StaffDashboard({ navigate, onPatientSelect }: StaffDashboardProps) {
  const patients = [
    {
      id: '1',
      name: 'John Smith',
      age: 45,
      priority: 'red',
      priorityLabel: 'Critical',
      symptoms: ['Chest Pain', 'Difficulty Breathing'],
      position: 1,
      waitTime: '5 min',
      vitalSigns: { hr: 110, bp: '160/95', temp: '98.6' },
    },
    {
      id: '2',
      name: 'Maria Garcia',
      age: 28,
      priority: 'orange',
      priorityLabel: 'High',
      symptoms: ['Severe Headache', 'Nausea'],
      position: 2,
      waitTime: '15 min',
      vitalSigns: { hr: 88, bp: '135/85', temp: '99.2' },
    },
    {
      id: '3',
      name: 'Sarah Johnson',
      age: 32,
      priority: 'yellow',
      priorityLabel: 'Medium',
      symptoms: ['Abdominal Pain', 'Fever'],
      position: 3,
      waitTime: '30 min',
      vitalSigns: { hr: 82, bp: '120/80', temp: '100.4' },
    },
    {
      id: '4',
      name: 'Robert Chen',
      age: 56,
      priority: 'yellow',
      priorityLabel: 'Medium',
      symptoms: ['Back Pain', 'Dizziness'],
      position: 4,
      waitTime: '35 min',
      vitalSigns: { hr: 75, bp: '118/75', temp: '98.2' },
    },
    {
      id: '5',
      name: 'Emily Davis',
      age: 19,
      priority: 'green',
      priorityLabel: 'Low',
      symptoms: ['Minor Laceration', 'Bleeding'],
      position: 5,
      waitTime: '60 min',
      vitalSigns: { hr: 72, bp: '115/70', temp: '98.6' },
    },
  ];

  const priorityColors = {
    red: { bg: 'bg-red-500', border: 'border-red-200', text: 'text-red-700', light: 'bg-red-50' },
    orange: { bg: 'bg-orange-500', border: 'border-orange-200', text: 'text-orange-700', light: 'bg-orange-50' },
    yellow: { bg: 'bg-yellow-500', border: 'border-yellow-200', text: 'text-yellow-700', light: 'bg-yellow-50' },
    green: { bg: 'bg-green-500', border: 'border-green-200', text: 'text-green-700', light: 'bg-green-50' },
  };

  const criticalCount = patients.filter(p => p.priority === 'red').length;

  return (
    <div className="min-h-screen bg-slate-50 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-4 sm:px-6 py-6 sm:py-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1.5">
              <img src={sahelLogo} alt="Sahel" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-white mb-1">Staff Dashboard</h2>
              <p className="text-teal-100 text-sm">King Fahad Medical City - ER</p>
            </div>
          </div>
          <button onClick={() => navigate('welcome')} className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors active:scale-95">
            <LogOut className="w-6 h-6" />
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4 text-center">
            <Users className="w-5 sm:w-6 h-5 sm:h-6 text-white mx-auto mb-2" />
            <h3 className="text-white mb-1">{patients.length}</h3>
            <p className="text-teal-100 text-xs sm:text-sm">In Queue</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4 text-center">
            <AlertCircle className="w-5 sm:w-6 h-5 sm:h-6 text-white mx-auto mb-2" />
            <h3 className="text-white mb-1">{criticalCount}</h3>
            <p className="text-teal-100 text-xs sm:text-sm">Critical</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4 text-center">
            <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-white mx-auto mb-2" />
            <h3 className="text-white mb-1">28m</h3>
            <p className="text-teal-100 text-xs sm:text-sm">Avg Wait</p>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
        {/* Critical Alerts */}
        {criticalCount > 0 && (
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h4 className="text-red-900 mb-1">Critical Patients Alert</h4>
                <p className="text-red-700 text-sm">{criticalCount} patient(s) require immediate attention</p>
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="flex gap-3">
          <Button 
            onClick={() => navigate('queue-management')}
            className="flex-1 bg-teal-500 hover:bg-teal-600 text-white rounded-full h-12 flex items-center justify-center gap-2 active:scale-98 transition-transform"
          >
            <List className="w-5 h-5" />
            <span className="hidden sm:inline">Manage Queue</span>
            <span className="sm:hidden">Queue</span>
          </Button>
        </div>

        {/* Incoming Patients */}
        <div className="flex items-center justify-between">
          <h3 className="text-slate-900">Incoming Patients</h3>
          <button className="text-teal-600 flex items-center gap-1 hover:bg-teal-50 px-3 py-1.5 rounded-lg transition-colors active:scale-95 text-sm">
            Refresh
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>

        {/* Patient Cards */}
        <div className="space-y-3">
          {patients.map((patient) => {
            const colors = priorityColors[patient.priority as keyof typeof priorityColors];
            
            return (
              <div
                key={patient.id}
                onClick={() => onPatientSelect(patient.id)}
                className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer border-l-4 active:scale-98"
                style={{ borderLeftColor: colors.bg.replace('bg-', '') }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h4 className="text-slate-900">{patient.name}</h4>
                      <span className="text-slate-600 text-sm">• {patient.age}y</span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline" className={`rounded-full px-3 border ${colors.border} ${colors.text} ${colors.light} text-xs`}>
                        {patient.priorityLabel}
                      </Badge>
                      <span className="text-slate-600 text-sm">Position #{patient.position}</span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-2">
                    <p className="text-teal-600 mb-1">~{patient.waitTime}</p>
                    <p className="text-slate-400 text-xs">wait time</p>
                  </div>
                </div>

                {/* Symptoms */}
                <div className="mb-3">
                  <p className="text-slate-600 mb-2 text-sm">Symptoms:</p>
                  <div className="flex flex-wrap gap-2">
                    {patient.symptoms.map((symptom, index) => (
                      <Badge key={index} variant="outline" className="rounded-full text-slate-700 border-slate-300 text-xs">
                        {symptom}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Vitals */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100">
                  <div className="bg-slate-50 rounded-lg p-2 text-center">
                    <p className="text-slate-500 text-xs mb-1">HR</p>
                    <p className="text-slate-900 text-sm sm:text-base">{patient.vitalSigns.hr}</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-2 text-center">
                    <p className="text-slate-500 text-xs mb-1">BP</p>
                    <p className="text-slate-900 text-sm sm:text-base">{patient.vitalSigns.bp}</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-2 text-center">
                    <p className="text-slate-500 text-xs mb-1">Temp</p>
                    <p className="text-slate-900 text-sm sm:text-base">{patient.vitalSigns.temp}°F</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}