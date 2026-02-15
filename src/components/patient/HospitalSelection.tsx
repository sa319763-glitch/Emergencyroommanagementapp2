import { useState } from 'react';
import { ArrowLeft, MapPin, Users, Clock, Navigation, Layers, Map as MapIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Screen } from '../../App';

interface HospitalSelectionProps {
  navigate: (screen: Screen) => void;
}

interface Hospital {
  id: string;
  name: string;
  distance: string;
  queueSize: number;
  crowdLevel: 'low' | 'medium' | 'high';
  estimatedWait: string;
  lat: number;
  lng: number;
}

export default function HospitalSelection({ navigate }: HospitalSelectionProps) {
  const [selectedHospital, setSelectedHospital] = useState<string | null>(null);
  const [mapType, setMapType] = useState<'default' | 'satellite'>('default');

  const hospitals: Hospital[] = [
    {
      id: '1',
      name: 'Al Hammadi Hospital',
      distance: '6.2 km',
      queueSize: 8,
      crowdLevel: 'low',
      estimatedWait: '15 min',
      lat: 40.7729,
      lng: -73.9840,
    },
    {
      id: '2',
      name: 'King Saud Medical City',
      distance: '2.3 km',
      queueSize: 12,
      crowdLevel: 'medium',
      estimatedWait: '28 min',
      lat: 40.7580,
      lng: -73.9855,
    },
    {
      id: '3',
      name: 'King Fahad Medical City (KFMC)',
      distance: '3.7 km',
      queueSize: 15,
      crowdLevel: 'medium',
      estimatedWait: '32 min',
      lat: 40.7614,
      lng: -73.9776,
    },
    {
      id: '4',
      name: 'Dr. Sulaiman Al-Habib Medical Complex',
      distance: '5.1 km',
      queueSize: 24,
      crowdLevel: 'high',
      estimatedWait: '45 min',
      lat: 40.7489,
      lng: -73.9680,
    },
  ];

  const crowdColors = {
    low: { bg: 'bg-green-500', border: 'border-green-200', text: 'text-green-700', light: 'bg-green-50', label: 'Low' },
    medium: { bg: 'bg-yellow-500', border: 'border-yellow-200', text: 'text-yellow-700', light: 'bg-yellow-50', label: 'Medium' },
    high: { bg: 'bg-red-500', border: 'border-red-200', text: 'text-red-700', light: 'bg-red-50', label: 'High' },
  };

  const handleConfirm = () => {
    if (selectedHospital) {
      navigate('queue-status');
    }
  };

  const selectedHospitalData = hospitals.find(h => h.id === selectedHospital);

  return (
    <div className="min-h-screen bg-slate-50 pb-6">
      {/* Header */}
      <div className="bg-white px-4 sm:px-6 py-4 sm:py-6 border-b border-slate-200 sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('start-visit')} className="text-teal-600 hover:bg-teal-50 rounded-lg p-2 transition-colors active:scale-95">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-slate-900">Select Hospital</h2>
        </div>
      </div>

      {/* Map Container - Google Maps Style */}
      <div className="relative w-full h-64 sm:h-96 bg-white overflow-hidden">
        {/* Map Base Layer */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: mapType === 'satellite' ? '#1a1a1a' : '#f0ede5',
          }}
        >
          {mapType === 'default' ? (
            // Default Map View
            <div className="relative w-full h-full">
              {/* Water bodies - Google Maps style */}
              <div className="absolute bottom-[8%] left-[3%] w-36 h-24 bg-[#aad3df] rounded-[40%]" />
              <div className="absolute top-[15%] right-[5%] w-28 h-20 bg-[#aad3df] rounded-[45%]" />
              
              {/* Parks - Google Maps green */}
              <div className="absolute top-[35%] right-[10%] w-32 h-28 bg-[#c8e6c9] rounded-lg opacity-80" />
              <div className="absolute bottom-[20%] left-[12%] w-24 h-20 bg-[#c8e6c9] rounded-lg opacity-80" />

              {/* Major Roads - Yellow/Orange like Google Maps */}
              <div className="absolute top-0 left-[32%] w-3 h-full bg-[#fef6e0] border-l-2 border-r-2 border-[#f9e6a7]" />
              <div className="absolute top-0 left-[52%] w-4 h-full bg-[#fef6e0] border-l-2 border-r-2 border-[#f9e6a7]" />
              <div className="absolute top-0 left-[72%] w-2 h-full bg-[#fef6e0] border-l border-r border-[#f9e6a7]" />
              
              <div className="absolute top-[28%] left-0 h-3 w-full bg-[#fef6e0] border-t-2 border-b-2 border-[#f9e6a7]" />
              <div className="absolute top-[48%] left-0 h-4 w-full bg-[#fef6e0] border-t-2 border-b-2 border-[#f9e6a7]" />
              <div className="absolute top-[68%] left-0 h-2 w-full bg-[#fef6e0] border-t border-b border-[#f9e6a7]" />

              {/* Buildings - 3D effect like Google Maps */}
              <div className="absolute top-[12%] left-[15%] w-20 h-16 bg-[#e8e5dc] border border-[#d1cdc1] shadow-md" />
              <div className="absolute top-[18%] left-[58%] w-24 h-20 bg-[#e8e5dc] border border-[#d1cdc1] shadow-md" />
              <div className="absolute top-[52%] left-[25%] w-18 h-18 bg-[#e8e5dc] border border-[#d1cdc1] shadow-md" />
              <div className="absolute top-[58%] left-[78%] w-22 h-14 bg-[#e8e5dc] border border-[#d1cdc1] shadow-md" />
              <div className="absolute top-[72%] left-[42%] w-20 h-16 bg-[#e8e5dc] border border-[#d1cdc1] shadow-md" />
              <div className="absolute top-[38%] left-[80%] w-16 h-14 bg-[#e8e5dc] border border-[#d1cdc1] shadow-md" />

              {/* Smaller buildings */}
              <div className="absolute top-[25%] left-[40%] w-12 h-10 bg-[#e8e5dc] border border-[#d1cdc1] shadow-sm" />
              <div className="absolute top-[60%] left-[55%] w-14 h-12 bg-[#e8e5dc] border border-[#d1cdc1] shadow-sm" />
              <div className="absolute top-[80%] left-[20%] w-16 h-10 bg-[#e8e5dc] border border-[#d1cdc1] shadow-sm" />

              {/* Neighborhood labels like Google Maps */}
              <div className="absolute top-[20%] left-[8%] text-[#5f6368] text-sm opacity-60">Downtown</div>
              <div className="absolute top-[55%] right-[15%] text-[#5f6368] text-sm opacity-60">Riverside</div>
            </div>
          ) : (
            // Satellite View
            <div className="relative w-full h-full">
              {/* Satellite texture simulation */}
              <div 
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(0deg, transparent, transparent 35px, rgba(100, 100, 100, 0.1) 35px, rgba(100, 100, 100, 0.1) 36px),
                    repeating-linear-gradient(90deg, transparent, transparent 35px, rgba(100, 100, 100, 0.1) 35px, rgba(100, 100, 100, 0.1) 36px)
                  `,
                  backgroundColor: '#2d3a2e',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#3a4a3b] via-[#2d3a2e] to-[#1f2920]" />
              
              {/* Roads in satellite view */}
              <div className="absolute top-0 left-[32%] w-3 h-full bg-[#5a5a5a] opacity-60" />
              <div className="absolute top-0 left-[52%] w-4 h-full bg-[#5a5a5a] opacity-60" />
              <div className="absolute top-[28%] left-0 h-3 w-full bg-[#5a5a5a] opacity-60" />
              <div className="absolute top-[48%] left-0 h-4 w-full bg-[#5a5a5a] opacity-60" />
            </div>
          )}

          {/* Route line from user to selected hospital - Google Maps blue */}
          {selectedHospital && (
            <>
              {hospitals.map((hospital, index) => {
                const positions = [
                  { top: '35%', left: '60%' },
                  { top: '40%', left: '35%' },
                  { top: '60%', left: '70%' },
                  { top: '25%', left: '45%' },
                ];
                
                if (hospital.id === selectedHospital) {
                  return (
                    <svg key={hospital.id} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
                      <line
                        x1="50%"
                        y1="50%"
                        x2={positions[index].left}
                        y2={positions[index].top}
                        stroke="#4285f4"
                        strokeWidth="4"
                        strokeDasharray="1,8"
                        strokeLinecap="round"
                        opacity="0.9"
                      />
                    </svg>
                  );
                }
                return null;
              })}
            </>
          )}

          {/* User location marker - Google Maps blue dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              {/* Accuracy circle - light blue */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#4285f4] rounded-full opacity-20" />
              {/* Outer ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-lg" />
              {/* Inner dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#4285f4] rounded-full border-2 border-white" />
              {/* Pulse effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#4285f4] rounded-full opacity-40 animate-ping" />
            </div>
          </div>

          {/* Hospital markers - Google Maps pin style */}
          {hospitals.map((hospital, index) => {
            const colors = crowdColors[hospital.crowdLevel];
            const positions = [
              { top: '35%', left: '60%' },
              { top: '40%', left: '35%' },
              { top: '60%', left: '70%' },
              { top: '25%', left: '45%' },
            ];
            const isSelected = selectedHospital === hospital.id;
            
            return (
              <div
                key={hospital.id}
                className="absolute transform -translate-x-1/2 -translate-y-full cursor-pointer"
                style={{ ...positions[index], zIndex: isSelected ? 20 : 15 }}
                onClick={() => setSelectedHospital(hospital.id)}
              >
                <div className={`relative ${isSelected ? 'scale-110' : ''} transition-all duration-200`}>
                  {/* Google Maps style pin shadow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-8 h-3 bg-black opacity-20 rounded-full blur-sm" />
                  
                  {/* Pin container */}
                  <div className="relative">
                    {/* Pin shape - Google Maps style */}
                    <div className={`relative w-9 h-11 ${colors.bg} rounded-t-full rounded-bl-full shadow-lg`} style={{
                      clipPath: 'path("M 18 0 C 8 0 0 8 0 18 C 0 27 18 44 18 44 C 18 44 36 27 36 18 C 36 8 28 0 18 0 Z")',
                      width: '36px',
                      height: '44px',
                    }}>
                      {/* Inner white circle */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-7 h-7 bg-white rounded-full flex items-center justify-center">
                        {/* Hospital icon */}
                        <svg className={`w-4 h-4 ${colors.text}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Queue badge */}
                    <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center shadow-md border-2 border-white text-xs">
                      {hospital.queueSize}
                    </div>
                  </div>

                  {/* Info window - Google Maps style */}
                  {isSelected && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white rounded-lg shadow-2xl p-3 w-48 border border-slate-200">
                      <div className="space-y-2">
                        <h4 className="text-slate-900 text-sm">{hospital.name}</h4>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <MapPin className="w-3 h-3 text-blue-500" />
                          <span>{hospital.distance}</span>
                          <span>•</span>
                          <Clock className="w-3 h-3 text-blue-500" />
                          <span>{hospital.estimatedWait}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className={`rounded-full px-2 py-0 text-xs border ${colors.border} ${colors.text} ${colors.light}`}>
                            {colors.label} Crowd
                          </Badge>
                          <span className="text-xs text-slate-600">{hospital.queueSize} in queue</span>
                        </div>
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-xs py-1.5 rounded mt-1">
                          Directions
                        </button>
                      </div>
                      {/* Arrow pointing down */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                        <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Map Controls - Google Maps style */}
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-col gap-2 z-30">
          {/* Map Type Switcher */}
          <button 
            onClick={() => setMapType(mapType === 'default' ? 'satellite' : 'default')}
            className="bg-white rounded-lg shadow-lg p-2 hover:bg-slate-50 transition-colors active:scale-95"
            title={mapType === 'default' ? 'Satellite view' : 'Map view'}
          >
            {mapType === 'default' ? (
              <Layers className="w-5 h-5 text-slate-600" />
            ) : (
              <MapIcon className="w-5 h-5 text-slate-600" />
            )}
          </button>

          {/* Zoom Controls */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <button className="p-2 sm:p-2.5 border-b border-slate-200 hover:bg-slate-50 w-full text-slate-700 transition-colors active:scale-95">
              <span className="text-lg">+</span>
            </button>
            <button className="p-2 sm:p-2.5 hover:bg-slate-50 w-full text-slate-700 transition-colors active:scale-95">
              <span className="text-lg">−</span>
            </button>
          </div>
          
          {/* Current Location Button */}
          <button className="bg-white rounded-lg p-2 sm:p-2.5 shadow-lg hover:bg-slate-50 transition-colors active:scale-95">
            <Navigation className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        {/* Scale bar - Google Maps style */}
        <div className="absolute bottom-4 left-4 z-30">
          <div className="bg-white rounded px-2 py-1 shadow-md text-xs text-slate-600 border border-slate-300">
            2 km
          </div>
          <div className="flex mt-1">
            <div className="h-2 w-16 bg-white border-l-2 border-b-2 border-t-2 border-slate-600" />
            <div className="h-2 w-16 bg-white border-r-2 border-b-2 border-t-2 border-slate-600" />
          </div>
        </div>

        {/* Route info card - Google Maps style */}
        {selectedHospitalData && (
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white rounded-lg shadow-xl p-3 sm:p-4 max-w-[calc(100%-8rem)] sm:max-w-xs z-30">
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="bg-blue-500 rounded-full p-2 flex-shrink-0">
                <Navigation className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-600 text-xs mb-1">Driving to</p>
                <h4 className="text-slate-900 text-sm mb-2 truncate">{selectedHospitalData.name}</h4>
                <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 sm:w-4 h-3 sm:h-4 text-blue-500" />
                    <span className="text-xs sm:text-sm text-slate-700">{selectedHospitalData.distance}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 sm:w-4 h-3 sm:h-4 text-blue-500" />
                    <span className="text-xs sm:text-sm text-slate-700">{selectedHospitalData.estimatedWait}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Copyright - Google Maps style */}
        <div className="absolute bottom-2 right-4 text-xs text-slate-500 z-20">
          © 2025 Sahel
        </div>
      </div>

      {/* Hospital List */}
      <div className="px-4 sm:px-6 py-4 sm:py-6">
        <h3 className="text-slate-900 mb-4">Nearby Hospitals</h3>

        <div className="space-y-3">
          {hospitals.map((hospital) => {
            const colors = crowdColors[hospital.crowdLevel];
            const isSelected = selectedHospital === hospital.id;

            return (
              <button
                key={hospital.id}
                onClick={() => setSelectedHospital(hospital.id)}
                className={`w-full bg-white rounded-2xl p-4 sm:p-5 shadow-sm transition-all active:scale-98 ${
                  isSelected ? 'ring-2 ring-teal-500 shadow-md' : ''
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`${colors.bg} rounded-full p-2.5 sm:p-3 flex-shrink-0`}>
                    <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>

                  <div className="flex-1 text-left min-w-0">
                    <div className="flex items-start justify-between mb-2 gap-2">
                      <h4 className="text-slate-900 text-sm sm:text-base">{hospital.name}</h4>
                      {isSelected && (
                        <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3">
                      <div className="flex items-center gap-2 text-slate-600 text-sm">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span>{hospital.distance}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 text-sm">
                        <Clock className="w-4 h-4 flex-shrink-0" />
                        <span>{hospital.estimatedWait}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                      <Badge variant="outline" className={`rounded-full px-3 border ${colors.border} ${colors.text} ${colors.light} text-xs`}>
                        {colors.label} Crowd
                      </Badge>
                      <div className="flex items-center gap-2 text-slate-600 text-xs sm:text-sm">
                        <Users className="w-4 h-4 flex-shrink-0" />
                        <span>{hospital.queueSize} in queue</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Confirm Button */}
        <div className="sticky bottom-0 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent pt-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:static sm:bg-none sm:pt-0 mt-6">
          <Button 
            onClick={handleConfirm}
            disabled={!selectedHospital}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full h-14 disabled:bg-slate-300 disabled:opacity-50 active:scale-98 transition-transform"
          >
            Confirm Hospital Selection
          </Button>
        </div>
      </div>
    </div>
  );
}