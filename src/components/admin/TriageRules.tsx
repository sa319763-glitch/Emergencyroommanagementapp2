import { ArrowLeft, AlertTriangle, Save, Bell } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Switch } from '../ui/switch';
import { Screen } from '../../App';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface TriageRulesProps {
  navigate: (screen: Screen) => void;
}

export default function TriageRules({ navigate }: TriageRulesProps) {
  return (
    <div className="min-h-screen bg-slate-50 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-4 sm:px-6 py-6 sm:py-8 rounded-b-3xl">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('admin-dashboard')} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h2 className="text-white mb-1">Triage Rules</h2>
            <p className="text-teal-100 text-sm">Configure triage levels and priority settings</p>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 py-4 sm:py-6">
        <Tabs defaultValue="levels" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="levels">Triage Levels</TabsTrigger>
            <TabsTrigger value="priority">Priority Rules</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
          </TabsList>

          {/* Triage Levels Tab */}
          <TabsContent value="levels" className="space-y-4">
            {/* Critical Level */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                <h3 className="text-slate-900">Critical (Red)</h3>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="critical-wait">Maximum Wait Time (minutes)</Label>
                  <Input id="critical-wait" type="number" defaultValue="5" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="critical-symptoms">Qualifying Symptoms</Label>
                  <Textarea 
                    id="critical-symptoms" 
                    placeholder="Enter symptoms (one per line)"
                    defaultValue="Chest Pain with Difficulty Breathing&#10;Severe Head Trauma&#10;Cardiac Arrest&#10;Severe Bleeding&#10;Loss of Consciousness"
                    rows={5}
                  />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Automatic Alert</p>
                    <p className="text-slate-600 text-xs">Notify all staff immediately</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            {/* High Priority Level */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                <h3 className="text-slate-900">High Priority (Orange)</h3>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="high-wait">Maximum Wait Time (minutes)</Label>
                  <Input id="high-wait" type="number" defaultValue="15" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="high-symptoms">Qualifying Symptoms</Label>
                  <Textarea 
                    id="high-symptoms" 
                    placeholder="Enter symptoms (one per line)"
                    defaultValue="Severe Headache with Nausea&#10;High Fever (>103°F)&#10;Severe Abdominal Pain&#10;Difficulty Breathing&#10;Altered Mental State"
                    rows={5}
                  />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Priority Alert</p>
                    <p className="text-slate-600 text-xs">Notify assigned staff</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            {/* Medium Priority Level */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                <h3 className="text-slate-900">Medium Priority (Yellow)</h3>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="medium-wait">Maximum Wait Time (minutes)</Label>
                  <Input id="medium-wait" type="number" defaultValue="30" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="medium-symptoms">Qualifying Symptoms</Label>
                  <Textarea 
                    id="medium-symptoms" 
                    placeholder="Enter symptoms (one per line)"
                    defaultValue="Moderate Pain&#10;Fever (100-103°F)&#10;Vomiting&#10;Minor Head Injury&#10;Moderate Bleeding"
                    rows={5}
                  />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Standard Alert</p>
                    <p className="text-slate-600 text-xs">Add to queue notification</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            {/* Low Priority Level */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                <h3 className="text-slate-900">Low Priority (Green)</h3>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="low-wait">Maximum Wait Time (minutes)</Label>
                  <Input id="low-wait" type="number" defaultValue="60" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="low-symptoms">Qualifying Symptoms</Label>
                  <Textarea 
                    id="low-symptoms" 
                    placeholder="Enter symptoms (one per line)"
                    defaultValue="Minor Cuts/Lacerations&#10;Mild Pain&#10;Low Fever (<100°F)&#10;Minor Sprains&#10;Cold/Flu Symptoms"
                    rows={5}
                  />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Queue Alert</p>
                    <p className="text-slate-600 text-xs">Silent queue addition</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Priority Rules Tab */}
          <TabsContent value="priority" className="space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-slate-900 mb-4">Priority Assignment Rules</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div>
                    <p className="text-slate-900 mb-1">Age-Based Priority</p>
                    <p className="text-slate-600 text-sm">Elevate priority for patients over 65 or under 2</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div>
                    <p className="text-slate-900 mb-1">Vital Signs Override</p>
                    <p className="text-slate-600 text-sm">Auto-escalate based on abnormal vital signs</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div>
                    <p className="text-slate-900 mb-1">Wait Time Escalation</p>
                    <p className="text-slate-600 text-sm">Increase priority after extended wait</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-2">
                  <Label>Escalation Threshold (minutes)</Label>
                  <Input type="number" defaultValue="45" />
                  <p className="text-slate-500 text-xs">Escalate priority if wait time exceeds this value</p>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div>
                    <p className="text-slate-900 mb-1">Multiple Symptoms Priority</p>
                    <p className="text-slate-600 text-sm">Elevate priority for 3+ concurrent symptoms</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div>
                    <p className="text-slate-900 mb-1">Chronic Condition Flag</p>
                    <p className="text-slate-600 text-sm">Consider existing chronic conditions</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-slate-900 mb-4">Vital Signs Thresholds</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Critical Heart Rate (bpm)</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-slate-600 text-xs mb-1">Below</p>
                      <Input type="number" defaultValue="50" />
                    </div>
                    <div>
                      <p className="text-slate-600 text-xs mb-1">Above</p>
                      <Input type="number" defaultValue="120" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Critical Blood Pressure (mmHg)</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-slate-600 text-xs mb-1">Systolic Below</p>
                      <Input type="number" defaultValue="90" />
                    </div>
                    <div>
                      <p className="text-slate-600 text-xs mb-1">Systolic Above</p>
                      <Input type="number" defaultValue="180" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Critical Temperature (°F)</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-slate-600 text-xs mb-1">Below</p>
                      <Input type="number" defaultValue="95" />
                    </div>
                    <div>
                      <p className="text-slate-600 text-xs mb-1">Above</p>
                      <Input type="number" defaultValue="104" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Alerts Tab */}
          <TabsContent value="alerts" className="space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-slate-900 mb-4">Alert Settings</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="text-slate-900 mb-1">Critical Patient Alert</p>
                      <p className="text-slate-600 text-sm">Instant notification to all staff</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="text-slate-900 mb-1">High Priority Alert</p>
                      <p className="text-slate-600 text-sm">Notification to assigned staff</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-yellow-600" />
                    <div>
                      <p className="text-slate-900 mb-1">Wait Time Alert</p>
                      <p className="text-slate-600 text-sm">Alert when wait time exceeds threshold</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-slate-600" />
                    <div>
                      <p className="text-slate-900 mb-1">Queue Capacity Alert</p>
                      <p className="text-slate-600 text-sm">Alert when ER reaches capacity</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-2 pt-4">
                  <Label>ER Capacity Threshold (%)</Label>
                  <Input type="number" defaultValue="85" />
                  <p className="text-slate-500 text-xs">Alert when ER capacity exceeds this percentage</p>
                </div>

                <div className="space-y-2">
                  <Label>Alert Recipients</Label>
                  <Textarea 
                    placeholder="Enter email addresses (one per line)"
                    defaultValue="admin@kfmc.sa&#10;er.supervisor@kfmc.sa&#10;duty.manager@kfmc.sa"
                    rows={4}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-slate-900 mb-4">Sound & Notification Settings</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Sound Alerts</p>
                    <p className="text-slate-600 text-xs">Play audio for critical alerts</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Desktop Notifications</p>
                    <p className="text-slate-600 text-xs">Show browser notifications</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">SMS Alerts</p>
                    <p className="text-slate-600 text-xs">Send text messages for critical events</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Email Notifications</p>
                    <p className="text-slate-600 text-xs">Send email summaries</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Save Button */}
        <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full h-12 flex items-center justify-center gap-2 mt-6">
          <Save className="w-5 h-5" />
          Save All Changes
        </Button>
      </div>
    </div>
  );
}
