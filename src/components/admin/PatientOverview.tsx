import { ArrowLeft, Users, Activity, Clock, AlertCircle, Filter, RefreshCw } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Screen } from '../../App';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface PatientOverviewProps {
  navigate: (screen: Screen) => void;
}

export default function PatientOverview({ navigate }: PatientOverviewProps) {
  const currentPatients = [
    {
      id: 'P-001',
      name: 'John Smith',
      age: 45,
      gender: 'Male',
      priority: 'red',
      priorityLabel: 'Critical',
      symptoms: ['Chest Pain', 'Difficulty Breathing'],
      arrivalTime: '14:30',
      waitTime: '5 min',
      status: 'Waiting',
      vitalSigns: { hr: 110, bp: '160/95', temp: '98.6', o2: '94%' },
      room: 'Triage 1',
    },
    {
      id: 'P-002',
      name: 'Maria Garcia',
      age: 28,
      gender: 'Female',
      priority: 'orange',
      priorityLabel: 'High',
      symptoms: ['Severe Headache', 'Nausea'],
      arrivalTime: '14:15',
      waitTime: '20 min',
      status: 'In Treatment',
      vitalSigns: { hr: 88, bp: '135/85', temp: '99.2', o2: '98%' },
      room: 'Room 3',
    },
    {
      id: 'P-003',
      name: 'Sarah Johnson',
      age: 32,
      gender: 'Female',
      priority: 'yellow',
      priorityLabel: 'Medium',
      symptoms: ['Abdominal Pain', 'Fever'],
      arrivalTime: '14:00',
      waitTime: '35 min',
      status: 'Waiting',
      vitalSigns: { hr: 82, bp: '120/80', temp: '100.4', o2: '99%' },
      room: 'Waiting Area',
    },
    {
      id: 'P-004',
      name: 'Robert Chen',
      age: 56,
      gender: 'Male',
      priority: 'yellow',
      priorityLabel: 'Medium',
      symptoms: ['Back Pain', 'Dizziness'],
      arrivalTime: '13:50',
      waitTime: '45 min',
      status: 'Assessment',
      vitalSigns: { hr: 75, bp: '118/75', temp: '98.2', o2: '97%' },
      room: 'Assessment 2',
    },
    {
      id: 'P-005',
      name: 'Emily Davis',
      age: 19,
      gender: 'Female',
      priority: 'green',
      priorityLabel: 'Low',
      symptoms: ['Minor Laceration'],
      arrivalTime: '13:35',
      waitTime: '60 min',
      status: 'Waiting',
      vitalSigns: { hr: 72, bp: '115/70', temp: '98.6', o2: '99%' },
      room: 'Waiting Area',
    },
  ];

  const priorityColors = {
    red: { bg: 'bg-red-500', border: 'border-red-200', text: 'text-red-700', light: 'bg-red-50' },
    orange: { bg: 'bg-orange-500', border: 'border-orange-200', text: 'text-orange-700', light: 'bg-orange-50' },
    yellow: { bg: 'bg-yellow-500', border: 'border-yellow-200', text: 'text-yellow-700', light: 'bg-yellow-50' },
    green: { bg: 'bg-green-500', border: 'border-green-200', text: 'text-green-700', light: 'bg-green-50' },
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Waiting':
        return <Badge className="bg-slate-100 text-slate-700 border-slate-200">Waiting</Badge>;
      case 'In Treatment':
        return <Badge className="bg-blue-100 text-blue-700 border-blue-200">In Treatment</Badge>;
      case 'Assessment':
        return <Badge className="bg-purple-100 text-purple-700 border-purple-200">Assessment</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const criticalCount = currentPatients.filter(p => p.priority === 'red').length;
  const highCount = currentPatients.filter(p => p.priority === 'orange').length;
  const averageWaitTime = Math.round(currentPatients.reduce((acc, p) => acc + parseInt(p.waitTime), 0) / currentPatients.length);

  return (
    <div className="min-h-screen bg-slate-50 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-4 sm:px-6 py-6 sm:py-8 rounded-b-3xl">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate('admin-dashboard')} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h2 className="text-white mb-1">Patient Overview</h2>
            <p className="text-teal-100 text-sm">Real-time ER patient monitoring</p>
          </div>
          <button className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors">
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 text-center">
            <Users className="w-5 h-5 text-white mx-auto mb-2" />
            <h3 className="text-white mb-1">{currentPatients.length}</h3>
            <p className="text-teal-100 text-xs">Total</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 text-center">
            <AlertCircle className="w-5 h-5 text-white mx-auto mb-2" />
            <h3 className="text-white mb-1">{criticalCount}</h3>
            <p className="text-teal-100 text-xs">Critical</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 text-center">
            <Activity className="w-5 h-5 text-white mx-auto mb-2" />
            <h3 className="text-white mb-1">{highCount}</h3>
            <p className="text-teal-100 text-xs">High</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 text-center">
            <Clock className="w-5 h-5 text-white mx-auto mb-2" />
            <h3 className="text-white mb-1">{averageWaitTime}m</h3>
            <p className="text-teal-100 text-xs">Avg Wait</p>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-4">
        {/* System Load Indicator */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-slate-900">ER Capacity</h3>
            <Badge className="bg-green-100 text-green-700 border-green-200">Normal</Badge>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div className="bg-green-500 h-3 rounded-full" style={{ width: '45%' }}></div>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-slate-600 text-sm">{currentPatients.length} / 20 patients</p>
            <p className="text-slate-600 text-sm">45% capacity</p>
          </div>
        </div>

        {/* Alerts */}
        {criticalCount > 0 && (
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h4 className="text-red-900 mb-1">Critical Patient Alert</h4>
                <p className="text-red-700 text-sm">{criticalCount} critical patient(s) in queue - immediate attention required</p>
              </div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="flex gap-3">
          <div className="flex-1">
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="red">Critical Only</SelectItem>
                <SelectItem value="orange">High Priority</SelectItem>
                <SelectItem value="yellow">Medium Priority</SelectItem>
                <SelectItem value="green">Low Priority</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="waiting">Waiting</SelectItem>
                <SelectItem value="treatment">In Treatment</SelectItem>
                <SelectItem value="assessment">Assessment</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Patient List View */}
        <div className="space-y-3">
            {currentPatients.map((patient) => {
              const colors = priorityColors[patient.priority as keyof typeof priorityColors];
              
              return (
                <div
                  key={patient.id}
                  className="bg-white rounded-2xl p-4 shadow-sm border-l-4"
                  style={{ borderLeftColor: colors.bg.replace('bg-', '') }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h4 className="text-slate-900">{patient.name}</h4>
                        <span className="text-slate-600 text-sm">• {patient.age}y • {patient.gender}</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline" className={`rounded-full px-3 border ${colors.border} ${colors.text} ${colors.light} text-xs`}>
                          {patient.priorityLabel}
                        </Badge>
                        {getStatusBadge(patient.status)}
                        <span className="text-slate-500 text-xs">ID: {patient.id}</span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <p className="text-teal-600 mb-1">{patient.waitTime}</p>
                      <p className="text-slate-400 text-xs">wait time</p>
                    </div>
                  </div>

                  {/* Room/Location */}
                  <div className="mb-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full">
                      <Activity className="w-3 h-3 text-slate-600" />
                      <span className="text-slate-700 text-sm">{patient.room}</span>
                    </div>
                    <span className="text-slate-500 text-xs ml-3">Arrived: {patient.arrivalTime}</span>
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
                  <div className="grid grid-cols-4 gap-2 pt-3 border-t border-slate-100">
                    <div className="bg-slate-50 rounded-lg p-2 text-center">
                      <p className="text-slate-500 text-xs mb-1">HR</p>
                      <p className="text-slate-900 text-sm">{patient.vitalSigns.hr}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-2 text-center">
                      <p className="text-slate-500 text-xs mb-1">BP</p>
                      <p className="text-slate-900 text-sm">{patient.vitalSigns.bp}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-2 text-center">
                      <p className="text-slate-500 text-xs mb-1">Temp</p>
                      <p className="text-slate-900 text-sm">{patient.vitalSigns.temp}°F</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-2 text-center">
                      <p className="text-slate-500 text-xs mb-1">O2</p>
                      <p className="text-slate-900 text-sm">{patient.vitalSigns.o2}</p>
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
