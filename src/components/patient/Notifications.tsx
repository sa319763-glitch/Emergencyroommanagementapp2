import { ArrowLeft, Bell, Clock, AlertTriangle, Info, CheckCircle } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Screen } from '../../App';

interface NotificationsProps {
  navigate: (screen: Screen) => void;
}

export default function Notifications({ navigate }: NotificationsProps) {
  const notifications = [
    {
      id: 1,
      type: 'priority',
      icon: AlertTriangle,
      title: 'Priority Update',
      message: 'Your queue position has moved up. You are now #3 in line.',
      time: '2 minutes ago',
      unread: true,
      color: 'orange',
    },
    {
      id: 2,
      type: 'reminder',
      icon: Clock,
      title: 'Appointment Reminder',
      message: 'Your estimated wait time is now 15 minutes. Please head to the ER.',
      time: '10 minutes ago',
      unread: true,
      color: 'blue',
    },
    {
      id: 3,
      type: 'info',
      icon: Info,
      title: 'Visit Confirmed',
      message: 'Your ER visit has been registered at City General Hospital.',
      time: '1 hour ago',
      unread: true,
      color: 'teal',
    },
    {
      id: 4,
      type: 'success',
      icon: CheckCircle,
      title: 'Visit Completed',
      message: 'Your visit on Nov 10 has been completed. View details in history.',
      time: '2 days ago',
      unread: false,
      color: 'green',
    },
    {
      id: 5,
      type: 'reminder',
      icon: Clock,
      title: 'Follow-up Reminder',
      message: 'Don\'t forget to schedule your follow-up appointment.',
      time: '3 days ago',
      unread: false,
      color: 'blue',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white px-6 py-6 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('patient-dashboard')} className="text-teal-600">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h2 className="text-slate-900">Notifications</h2>
          </div>
          <button className="text-teal-600">
            Mark all read
          </button>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Unread Badge */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-slate-900">Recent Updates</h3>
          <Badge className="bg-red-500 text-white rounded-full">
            3 New
          </Badge>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            const colorClasses = {
              orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
              blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
              teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-200' },
              green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
            }[notification.color];

            return (
              <div
                key={notification.id}
                className={`bg-white rounded-2xl p-4 shadow-sm ${
                  notification.unread ? 'border-l-4 border-teal-500' : ''
                }`}
              >
                <div className="flex gap-4">
                  <div className={`${colorClasses.bg} rounded-full p-3 h-fit`}>
                    <Icon className={`w-5 h-5 ${colorClasses.text}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="text-slate-900">{notification.title}</h4>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-1.5" />
                      )}
                    </div>
                    <p className="text-slate-600 mb-2">{notification.message}</p>
                    <p className="text-slate-400">{notification.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State (hidden when there are notifications) */}
        {notifications.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-slate-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <Bell className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-slate-900 mb-2">No Notifications</h3>
            <p className="text-slate-600">You're all caught up!</p>
          </div>
        )}
      </div>
    </div>
  );
}
