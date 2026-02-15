import { ArrowLeft, Calendar, MapPin, Clock, FileText, ChevronRight } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Screen } from '../../App';

interface VisitHistoryProps {
  navigate: (screen: Screen) => void;
}

export default function VisitHistory({ navigate }: VisitHistoryProps) {
  const visits = [
    {
      id: 1,
      date: 'Nov 10, 2024',
      hospital: 'City General Hospital',
      diagnosis: 'Acute Bronchitis',
      priority: 'yellow',
      priorityLabel: 'Medium',
      waitTime: '28 min',
      status: 'Completed',
      doctor: 'Dr. Michael Chen',
    },
    {
      id: 2,
      date: 'Oct 15, 2024',
      hospital: 'St. Mary Medical Center',
      diagnosis: 'Minor Laceration',
      priority: 'green',
      priorityLabel: 'Low',
      waitTime: '45 min',
      status: 'Completed',
      doctor: 'Dr. Sarah Williams',
    },
    {
      id: 3,
      date: 'Sep 3, 2024',
      hospital: 'Regional Health Center',
      diagnosis: 'Severe Migraine',
      priority: 'orange',
      priorityLabel: 'High',
      waitTime: '12 min',
      status: 'Completed',
      doctor: 'Dr. James Rodriguez',
    },
    {
      id: 4,
      date: 'Jul 22, 2024',
      hospital: 'City General Hospital',
      diagnosis: 'Food Poisoning',
      priority: 'yellow',
      priorityLabel: 'Medium',
      waitTime: '35 min',
      status: 'Completed',
      doctor: 'Dr. Emily Thompson',
    },
  ];

  const priorityColors = {
    green: 'border-green-200 text-green-700 bg-green-50',
    yellow: 'border-yellow-200 text-yellow-700 bg-yellow-50',
    orange: 'border-orange-200 text-orange-700 bg-orange-50',
    red: 'border-red-200 text-red-700 bg-red-50',
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white px-6 py-6 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('patient-dashboard')} className="text-teal-600">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-slate-900">Visit History</h2>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
            <h3 className="text-teal-600 mb-1">{visits.length}</h3>
            <p className="text-slate-600">Total Visits</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
            <h3 className="text-blue-600 mb-1">30 min</h3>
            <p className="text-slate-600">Avg Wait</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
            <h3 className="text-green-600 mb-1">100%</h3>
            <p className="text-slate-600">Resolved</p>
          </div>
        </div>

        {/* Filter */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-slate-900">Past Visits</h3>
          <button className="text-teal-600 flex items-center gap-1">
            Filter
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>
        </div>

        {/* Visits List */}
        <div className="space-y-4">
          {visits.map((visit) => (
            <div
              key={visit.id}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <p className="text-slate-600">{visit.date}</p>
                  </div>
                  <h4 className="text-slate-900 mb-1">{visit.diagnosis}</h4>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-4 h-4" />
                    <p className="text-sm">{visit.hospital}</p>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className={`rounded-full px-3 ${priorityColors[visit.priority as keyof typeof priorityColors]}`}
                >
                  {visit.priorityLabel}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-slate-50 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <p className="text-slate-600">Wait Time</p>
                  </div>
                  <p className="text-slate-900">{visit.waitTime}</p>
                </div>

                <div className="bg-slate-50 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="w-4 h-4 text-purple-600" />
                    <p className="text-slate-600">Status</p>
                  </div>
                  <p className="text-slate-900">{visit.status}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <p className="text-slate-600">Treated by {visit.doctor}</p>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (hidden when there are visits) */}
        {visits.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-slate-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <FileText className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-slate-900 mb-2">No Visit History</h3>
            <p className="text-slate-600">Your past ER visits will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
}
