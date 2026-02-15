import { ArrowLeft, Save, Plus, Edit, Trash2, Building2, Bed, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { useState } from 'react';
import { Screen } from '../../App';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface SystemSettingsProps {
  navigate: (screen: Screen) => void;
}

export default function SystemSettings({ navigate }: SystemSettingsProps) {
  const [isAddRoomOpen, setIsAddRoomOpen] = useState(false);
  const [isEditRoomOpen, setIsEditRoomOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<any>(null);

  const rooms = [
    { id: 'R-001', name: 'Triage 1', zone: 'Triage Area', capacity: 1, status: 'Active', equipment: 'Basic Monitoring' },
    { id: 'R-002', name: 'Triage 2', zone: 'Triage Area', capacity: 1, status: 'Active', equipment: 'Basic Monitoring' },
    { id: 'R-003', name: 'Room 1', zone: 'Treatment', capacity: 2, status: 'Active', equipment: 'Full Medical Suite' },
    { id: 'R-004', name: 'Room 2', zone: 'Treatment', capacity: 2, status: 'Active', equipment: 'Full Medical Suite' },
    { id: 'R-005', name: 'Room 3', zone: 'Treatment', capacity: 2, status: 'Active', equipment: 'Full Medical Suite' },
    { id: 'R-006', name: 'Assessment 1', zone: 'Assessment', capacity: 1, status: 'Active', equipment: 'Standard Monitoring' },
    { id: 'R-007', name: 'Assessment 2', zone: 'Assessment', capacity: 1, status: 'Active', equipment: 'Standard Monitoring' },
    { id: 'R-008', name: 'Trauma Bay', zone: 'Critical', capacity: 3, status: 'Active', equipment: 'Advanced Life Support' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-4 sm:px-6 py-6 sm:py-8 rounded-b-3xl">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('admin-dashboard')} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h2 className="text-white mb-1">System Settings</h2>
            <p className="text-teal-100 text-sm">Configure ER layout and preferences</p>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 py-4 sm:py-6">
        <Tabs defaultValue="rooms" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="rooms">Rooms & Zones</TabsTrigger>
            <TabsTrigger value="hospital">Hospital Info</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          {/* Rooms & Zones Tab */}
          <TabsContent value="rooms" className="space-y-4">
            <Button
              onClick={() => setIsAddRoomOpen(true)}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full h-12 flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add New Room/Zone
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <h3 className="text-slate-900 mb-1">{rooms.length}</h3>
                <p className="text-slate-600 text-xs">Total Rooms</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <h3 className="text-slate-900 mb-1">{rooms.filter(r => r.status === 'Active').length}</h3>
                <p className="text-slate-600 text-xs">Active</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <h3 className="text-slate-900 mb-1">{rooms.reduce((acc, r) => acc + r.capacity, 0)}</h3>
                <p className="text-slate-600 text-xs">Total Capacity</p>
              </div>
            </div>

            {/* Rooms List */}
            <div className="space-y-3">
              {rooms.map((room) => (
                <div key={room.id} className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h4 className="text-slate-900">{room.name}</h4>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${room.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'}`}>
                          {room.status}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm">ID: {room.id}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <p className="text-slate-600 text-xs mb-1">Zone</p>
                      <p className="text-slate-900 text-sm">{room.zone}</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <p className="text-slate-600 text-xs mb-1">Capacity</p>
                      <p className="text-slate-900 text-sm">{room.capacity} patient(s)</p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-slate-600 text-xs mb-1">Equipment</p>
                    <p className="text-slate-900 text-sm">{room.equipment}</p>
                  </div>

                  <div className="flex gap-2 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => {
                        setSelectedRoom(room);
                        setIsEditRoomOpen(true);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 text-blue-600 hover:bg-blue-50 py-2 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                      <span className="text-sm">Edit</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 text-red-600 hover:bg-red-50 py-2 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                      <span className="text-sm">Remove</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Hospital Info Tab */}
          <TabsContent value="hospital" className="space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-slate-900 mb-4">Hospital Information</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="hospital-name">Hospital Name</Label>
                  <Input id="hospital-name" defaultValue="King Fahad Medical City" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hospital-code">Hospital Code</Label>
                  <Input id="hospital-code" defaultValue="KFMC" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="er-department">ER Department Name</Label>
                  <Input id="er-department" defaultValue="Emergency Department" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-number">Contact Number</Label>
                  <Input id="contact-number" defaultValue="+966 11 288 9999" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="King Fahad Road, Riyadh, Saudi Arabia" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="operating-hours">Operating Hours</Label>
                  <Input id="operating-hours" defaultValue="24/7 Emergency Services" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-slate-900 mb-4">Location Settings</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="latitude">Latitude</Label>
                  <Input id="latitude" defaultValue="24.7136" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="longitude">Longitude</Label>
                  <Input id="longitude" defaultValue="46.6753" />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Show on Patient Map</p>
                    <p className="text-slate-600 text-xs">Display hospital in patient selection map</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences" className="space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-slate-900 mb-4">Display Preferences</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Show Patient Wait Times</p>
                    <p className="text-slate-600 text-xs">Display estimated wait times to patients</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Show Queue Position</p>
                    <p className="text-slate-600 text-xs">Display position number in queue</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Real-time Updates</p>
                    <p className="text-slate-600 text-xs">Enable live queue updates for patients</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-2">
                  <Label>Update Interval (seconds)</Label>
                  <Input type="number" defaultValue="30" />
                  <p className="text-slate-500 text-xs">How often to refresh queue information</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-slate-900 mb-4">Operational Settings</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Maximum Queue Capacity</Label>
                  <Input type="number" defaultValue="20" />
                  <p className="text-slate-500 text-xs">Maximum number of patients in ER queue</p>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Automatic Triage</p>
                    <p className="text-slate-600 text-xs">Enable AI-based triage assignment</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Staff Notifications</p>
                    <p className="text-slate-600 text-xs">Send notifications to staff devices</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Patient Self Check-in</p>
                    <p className="text-slate-600 text-xs">Allow patients to check-in via app</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-slate-900 mb-4">Language & Localization</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Default Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="ar">Arabic</SelectItem>
                      <SelectItem value="both">Bilingual (EN/AR)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Time Zone</Label>
                  <Select defaultValue="riyadh">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="riyadh">Riyadh (AST, UTC+3)</SelectItem>
                      <SelectItem value="dubai">Dubai (GST, UTC+4)</SelectItem>
                      <SelectItem value="cairo">Cairo (EET, UTC+2)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Date Format</Label>
                  <Select defaultValue="dd-mm-yyyy">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                      <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                      <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Time Format</Label>
                  <Select defaultValue="24h">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                      <SelectItem value="24h">24-hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-slate-900 mb-4">Data & Privacy</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Anonymize Reports</p>
                    <p className="text-slate-600 text-xs">Remove patient identifiers from reports</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Activity Logging</p>
                    <p className="text-slate-600 text-xs">Log all user activities for audit</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Data Encryption</p>
                    <p className="text-slate-600 text-xs">Encrypt sensitive patient data</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-2">
                  <Label>Backup Frequency</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Every Hour</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Save Button */}
        <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full h-12 flex items-center justify-center gap-2 mt-6">
          <Save className="w-5 h-5" />
          Save All Settings
        </Button>
      </div>

      {/* Add Room Dialog */}
      <Dialog open={isAddRoomOpen} onOpenChange={setIsAddRoomOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Room/Zone</DialogTitle>
            <DialogDescription>
              Create a new room or zone in the ER layout.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="new-room-name">Room Name</Label>
              <Input id="new-room-name" placeholder="e.g., Room 4" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-room-zone">Zone</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select zone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="triage">Triage Area</SelectItem>
                  <SelectItem value="treatment">Treatment</SelectItem>
                  <SelectItem value="assessment">Assessment</SelectItem>
                  <SelectItem value="critical">Critical Care</SelectItem>
                  <SelectItem value="observation">Observation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-room-capacity">Capacity</Label>
              <Input id="new-room-capacity" type="number" placeholder="Number of patients" defaultValue="1" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-room-equipment">Equipment</Label>
              <Input id="new-room-equipment" placeholder="e.g., Full Medical Suite" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddRoomOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-teal-500 hover:bg-teal-600" onClick={() => setIsAddRoomOpen(false)}>
              Create Room
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Room Dialog */}
      <Dialog open={isEditRoomOpen} onOpenChange={setIsEditRoomOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Room/Zone</DialogTitle>
            <DialogDescription>
              Update room information and settings.
            </DialogDescription>
          </DialogHeader>
          {selectedRoom && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="edit-room-name">Room Name</Label>
                <Input id="edit-room-name" defaultValue={selectedRoom.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-room-zone">Zone</Label>
                <Select defaultValue={selectedRoom.zone.toLowerCase().replace(' ', '-')}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="triage-area">Triage Area</SelectItem>
                    <SelectItem value="treatment">Treatment</SelectItem>
                    <SelectItem value="assessment">Assessment</SelectItem>
                    <SelectItem value="critical">Critical Care</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-room-capacity">Capacity</Label>
                <Input id="edit-room-capacity" type="number" defaultValue={selectedRoom.capacity} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-room-equipment">Equipment</Label>
                <Input id="edit-room-equipment" defaultValue={selectedRoom.equipment} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-room-status">Status</Label>
                <Select defaultValue={selectedRoom.status.toLowerCase()}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditRoomOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-teal-500 hover:bg-teal-600" onClick={() => setIsEditRoomOpen(false)}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
