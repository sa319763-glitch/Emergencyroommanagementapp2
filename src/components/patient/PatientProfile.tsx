import { ArrowLeft, User, Phone, Calendar, FileText, Activity, AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { Screen } from '../../App';

interface PatientProfileProps {
  navigate: (screen: Screen) => void;
}

export default function PatientProfile({ navigate }: PatientProfileProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white px-6 py-6 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('patient-dashboard')} className="text-teal-600">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-slate-900">Patient Profile</h2>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-teal-600" />
            </div>
            <button className="absolute bottom-0 right-0 bg-teal-500 text-white rounded-full p-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Basic Information */}
        <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
          <h3 className="text-slate-900 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-teal-600" />
            Basic Information
          </h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullname">Full Name</Label>
              <Input 
                id="fullname"
                defaultValue="Sarah Johnson"
                className="rounded-xl h-11"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input 
                  id="age"
                  type="number"
                  defaultValue="32"
                  className="rounded-xl h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Input 
                  id="gender"
                  defaultValue="Female"
                  className="rounded-xl h-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input 
                  id="dob"
                  type="date"
                  defaultValue="1992-05-15"
                  className="pl-11 rounded-xl h-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone-profile">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input 
                  id="phone-profile"
                  defaultValue="+1 (555) 123-4567"
                  className="pl-11 rounded-xl h-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="national-id">National ID</Label>
              <div className="relative">
                <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input 
                  id="national-id"
                  defaultValue="123-45-6789"
                  className="pl-11 rounded-xl h-11"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Medical History */}
        <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
          <h3 className="text-slate-900 mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-teal-600" />
            Medical Information
          </h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="blood-type">Blood Type</Label>
              <Input 
                id="blood-type"
                defaultValue="O+"
                className="rounded-xl h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="allergies">Allergies</Label>
              <Textarea 
                id="allergies"
                placeholder="List any known allergies..."
                defaultValue="Penicillin, Peanuts"
                className="rounded-xl min-h-20 resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="medications">Current Medications</Label>
              <Textarea 
                id="medications"
                placeholder="List current medications..."
                defaultValue="Lisinopril 10mg daily"
                className="rounded-xl min-h-20 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Chronic Diseases */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h3 className="text-slate-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-orange-600" />
            Chronic Diseases
          </h3>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="rounded-full px-4 py-2 border-orange-200 text-orange-700 bg-orange-50">
              Hypertension
            </Badge>
            <Badge variant="outline" className="rounded-full px-4 py-2 border-blue-200 text-blue-700 bg-blue-50">
              Type 2 Diabetes
            </Badge>
          </div>

          <Button variant="outline" className="w-full rounded-xl border-slate-300 text-slate-700">
            + Add Condition
          </Button>
        </div>

        {/* Save Button */}
        <Button 
          onClick={() => navigate('patient-dashboard')}
          className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full h-12"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}