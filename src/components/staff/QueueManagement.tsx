import { useState } from 'react';
import { ArrowLeft, GripVertical, Check, ArrowUp, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Screen } from '../../App';

interface QueueManagementProps {
  navigate: (screen: Screen) => void;
}

interface Patient {
  id: string;
  name: string;
  age: number;
  priority: 'red' | 'orange' | 'yellow' | 'green';
  priorityLabel: string;
  position: number;
  symptoms: string[];
  waitTime: string;
}

export default function QueueManagement({ navigate }: QueueManagementProps) {
  const [patients, setPatients] = useState<Patient[]>([
    {
      id: '1',
      name: 'John Smith',
      age: 45,
      priority: 'red',
      priorityLabel: 'Critical',
      position: 1,
      symptoms: ['Chest Pain', 'Difficulty Breathing'],
      waitTime: '5 min',
    },
    {
      id: '2',
      name: 'Maria Garcia',
      age: 28,
      priority: 'orange',
      priorityLabel: 'High',
      position: 2,
      symptoms: ['Severe Headache', 'Nausea'],
      waitTime: '15 min',
    },
    {
      id: '3',
      name: 'Sarah Johnson',
      age: 32,
      priority: 'yellow',
      priorityLabel: 'Medium',
      position: 3,
      symptoms: ['Abdominal Pain', 'Fever'],
      waitTime: '30 min',
    },
    {
      id: '4',
      name: 'Robert Chen',
      age: 56,
      priority: 'yellow',
      priorityLabel: 'Medium',
      position: 4,
      symptoms: ['Back Pain', 'Dizziness'],
      waitTime: '35 min',
    },
    {
      id: '5',
      name: 'Emily Davis',
      age: 19,
      priority: 'green',
      priorityLabel: 'Low',
      position: 5,
      symptoms: ['Minor Laceration'],
      waitTime: '60 min',
    },
  ]);

  const priorityColors = {
    red: { bg: 'bg-red-500', border: 'border-red-200', text: 'text-red-700', light: 'bg-red-50' },
    orange: { bg: 'bg-orange-500', border: 'border-orange-200', text: 'text-orange-700', light: 'bg-orange-50' },
    yellow: { bg: 'bg-yellow-500', border: 'border-yellow-200', text: 'text-yellow-700', light: 'bg-yellow-50' },
    green: { bg: 'bg-green-500', border: 'border-green-200', text: 'text-green-700', light: 'bg-green-50' },
  };

  const markAsSeen = (patientId: string) => {
    setPatients(prev => prev.filter(p => p.id !== patientId));
  };

  const escalatePriority = (patientId: string) => {
    setPatients(prev => prev.map(p => {
      if (p.id === patientId) {
        const newPriority = p.priority === 'green' ? 'yellow' : 
                           p.priority === 'yellow' ? 'orange' : 
                           p.priority === 'orange' ? 'red' : 'red';
        const newLabel = newPriority === 'red' ? 'Critical' :
                        newPriority === 'orange' ? 'High' :
                        newPriority === 'yellow' ? 'Medium' : 'Low';
        return { ...p, priority: newPriority, priorityLabel: newLabel };
      }
      return p;
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white px-6 py-6 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('staff-dashboard')} className="text-teal-600">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h2 className="text-slate-900">Queue Management</h2>
            <p className="text-slate-600">{patients.length} patients waiting</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Info Banner */}
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 mb-6">
          <h4 className="text-teal-900 mb-2">Queue Management Tools</h4>
          <ul className="text-teal-700 space-y-1 text-sm">
            <li>• Drag cards to reorder patients</li>
            <li>• Mark patients as seen when complete</li>
            <li>• Escalate priority for urgent cases</li>
          </ul>
        </div>

        {/* Patient Queue */}
        <div className="space-y-3">
          {patients.map((patient) => {
            const colors = priorityColors[patient.priority];
            
            return (
              <div
                key={patient.id}
                className="bg-white rounded-2xl p-5 shadow-sm border-l-4"
                style={{ borderLeftColor: colors.bg.replace('bg-', '') }}
              >
                <div className="flex gap-4">
                  {/* Drag Handle */}
                  <div className="flex items-center">
                    <GripVertical className="w-6 h-6 text-slate-400 cursor-move" />
                  </div>

                  {/* Patient Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center justify-center w-8 h-8 bg-teal-100 rounded-full">
                            <span className="text-teal-600">#{patient.position}</span>
                          </div>
                          <h4 className="text-slate-900">{patient.name}</h4>
                          <span className="text-slate-600">• {patient.age}y</span>
                        </div>
                        <Badge variant="outline" className={`rounded-full px-3 border ${colors.border} ${colors.text} ${colors.light}`}>
                          {patient.priorityLabel}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-teal-600 mb-1">{patient.waitTime}</p>
                        <p className="text-slate-400">waiting</p>
                      </div>
                    </div>

                    {/* Symptoms */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {patient.symptoms.map((symptom, index) => (
                        <Badge key={index} variant="outline" className="rounded-full text-slate-700 border-slate-300 text-xs">
                          {symptom}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button
                        onClick={() => markAsSeen(patient.id)}
                        size="sm"
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center gap-2"
                      >
                        <Check className="w-4 h-4" />
                        Mark as Seen
                      </Button>
                      
                      {patient.priority !== 'red' && (
                        <Button
                          onClick={() => escalatePriority(patient.id)}
                          size="sm"
                          variant="outline"
                          className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 rounded-full flex items-center justify-center gap-2"
                        >
                          <ArrowUp className="w-4 h-4" />
                          Escalate
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {patients.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-green-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <Check className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-slate-900 mb-2">Queue is Empty</h3>
            <p className="text-slate-600">All patients have been seen</p>
          </div>
        )}
      </div>
    </div>
  );
}
