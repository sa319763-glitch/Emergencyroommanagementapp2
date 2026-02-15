import { ArrowLeft, User, Phone, Calendar, Activity, Heart, Thermometer, AlertCircle, FileText, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Screen } from '../../App';

interface PatientDetailsProps {
  navigate: (screen: Screen) => void;
  patientId: string;
}

export default function PatientDetails({ navigate, patientId }: PatientDetailsProps) {
  // Mock patient data
  const patient = {
    id: patientId,
    name: 'John Smith',
    age: 45,
    gender: 'Male',
    phone: '+1 (555) 234-5678',
    nationalId: '456-78-9012',
    bloodType: 'A+',
    priority: 'red',
    priorityLabel: 'Critical',
    position: 1,
    arrivalTime: '10:45 AM',
    waitTime: '5 min',
    symptoms: ['Chest Pain', 'Difficulty Breathing', 'Sweating'],
    vitalSigns: {
      heartRate: '110 bpm',
      bloodPressure: '160/95 mmHg',
      temperature: '98.6°F',
      oxygenSaturation: '94%',
      respiratoryRate: '22/min',
    },
    medicalHistory: {
      chronicDiseases: ['Hypertension', 'Type 2 Diabetes'],
      allergies: ['Penicillin'],
      currentMedications: ['Lisinopril 10mg daily', 'Metformin 500mg twice daily'],
    },
    triageNotes: 'Patient presents with acute chest pain radiating to left arm. Symptoms began 30 minutes ago. Patient appears distressed and diaphoretic.',
    recommendedActions: [
      'Immediate ECG',
      'Cardiac enzyme panel',
      'Chest X-ray',
      'IV access',
      'Oxygen therapy',
    ],
  };

  const priorityColors = {
    red: { bg: 'bg-red-500', border: 'border-red-200', text: 'text-red-700', light: 'bg-red-50' },
  };

  const colors = priorityColors[patient.priority as keyof typeof priorityColors];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white px-6 py-6 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('staff-dashboard')} className="text-teal-600">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h2 className="text-slate-900">Patient Details</h2>
          </div>
          <Badge variant="outline" className={`rounded-full px-4 border-2 ${colors.border} ${colors.text} ${colors.light}`}>
            {patient.priorityLabel}
          </Badge>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Critical Alert */}
        {patient.priority === 'red' && (
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 mb-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-red-600" />
              <div>
                <h4 className="text-red-900 mb-1">Critical Patient - Immediate Attention Required</h4>
                <p className="text-red-700">Patient has been waiting {patient.waitTime}</p>
              </div>
            </div>
          </div>
        )}

        {/* Patient Info Card */}
        <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-teal-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-slate-900 mb-1">{patient.name}</h3>
              <div className="space-y-1 text-slate-600">
                <p>{patient.age} years • {patient.gender}</p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {patient.phone}
                </p>
                <p className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  ID: {patient.nationalId}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-slate-600 mb-1">Position</p>
              <h3 className="text-teal-600">#{patient.position}</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200">
            <div className="bg-slate-50 rounded-xl p-3">
              <p className="text-slate-600 mb-1 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Arrival Time
              </p>
              <p className="text-slate-900">{patient.arrivalTime}</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-3">
              <p className="text-slate-600 mb-1 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Blood Type
              </p>
              <p className="text-slate-900">{patient.bloodType}</p>
            </div>
          </div>
        </div>

        {/* Vital Signs */}
        <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
          <h3 className="text-slate-900 mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-teal-600" />
            Current Vital Signs
          </h3>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-red-500" />
                <p className="text-slate-600">Heart Rate</p>
              </div>
              <p className="text-slate-900">{patient.vitalSigns.heartRate}</p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-5 h-5 text-teal-500" />
                <p className="text-slate-600">Blood Pressure</p>
              </div>
              <p className="text-slate-900">{patient.vitalSigns.bloodPressure}</p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Thermometer className="w-5 h-5 text-orange-500" />
                <p className="text-slate-600">Temperature</p>
              </div>
              <p className="text-slate-900">{patient.vitalSigns.temperature}</p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-5 h-5 text-green-500" />
                <p className="text-slate-600">SpO2</p>
              </div>
              <p className="text-slate-900">{patient.vitalSigns.oxygenSaturation}</p>
            </div>
          </div>
        </div>

        {/* Symptoms */}
        <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
          <h3 className="text-slate-900 mb-4">Reported Symptoms</h3>
          <div className="flex flex-wrap gap-2">
            {patient.symptoms.map((symptom, index) => (
              <Badge key={index} variant="outline" className="rounded-full px-4 py-2 border-red-200 text-red-700 bg-red-50">
                {symptom}
              </Badge>
            ))}
          </div>
        </div>

        {/* Triage Notes */}
        <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
          <h3 className="text-slate-900 mb-3">Triage Assessment</h3>
          <p className="text-slate-700 leading-relaxed">{patient.triageNotes}</p>
        </div>

        {/* Medical History */}
        <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
          <h3 className="text-slate-900 mb-4">Medical History</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-slate-700 mb-2">Chronic Diseases</h4>
              <div className="flex flex-wrap gap-2">
                {patient.medicalHistory.chronicDiseases.map((disease, index) => (
                  <Badge key={index} variant="outline" className="rounded-full px-3 py-1 border-orange-200 text-orange-700 bg-orange-50">
                    {disease}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-slate-700 mb-2">Allergies</h4>
              <div className="flex flex-wrap gap-2">
                {patient.medicalHistory.allergies.map((allergy, index) => (
                  <Badge key={index} variant="outline" className="rounded-full px-3 py-1 border-red-200 text-red-700 bg-red-50">
                    ⚠️ {allergy}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-slate-700 mb-2">Current Medications</h4>
              <ul className="space-y-1 text-slate-600">
                {patient.medicalHistory.currentMedications.map((med, index) => (
                  <li key={index}>• {med}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full h-12">
            Call Patient Now
          </Button>
          <Button 
            onClick={() => navigate('queue-management')}
            variant="outline" 
            className="w-full border-2 border-teal-500 text-teal-600 hover:bg-teal-50 rounded-full h-12"
          >
            Manage Queue
          </Button>
          <Button variant="outline" className="w-full border-2 border-orange-500 text-orange-600 hover:bg-orange-50 rounded-full h-12">
            Escalate Priority
          </Button>
        </div>
      </div>
    </div>
  );
}