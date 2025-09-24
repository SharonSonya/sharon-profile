import React, { useState } from 'react';
import {
  Activity,
  Heart,
  Users,
  Calendar,
  Bell,
  Search,
  Filter,
  MoreVertical,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  Pill,
  Thermometer,
  Stethoscope,
  FileText,
  Plus,
  X
} from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  age: number;
  condition: string;
  status: 'critical' | 'stable' | 'recovering';
  lastVisit: string;
  nextAppointment: string;
  vitals: {
    heartRate: number;
    bloodPressure: string;
    temperature: number;
    oxygenSat: number;
  };
}

interface Appointment {
  id: string;
  patient: string;
  time: string;
  type: string;
  status: 'confirmed' | 'pending' | 'completed';
}

const HealthcareDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const patients: Patient[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      age: 45,
      condition: 'Hypertension',
      status: 'stable',
      lastVisit: '2024-01-15',
      nextAppointment: '2024-01-22',
      vitals: {
        heartRate: 78,
        bloodPressure: '120/80',
        temperature: 98.6,
        oxygenSat: 98
      }
    },
    {
      id: '2',
      name: 'Michael Chen',
      age: 32,
      condition: 'Diabetes Type 2',
      status: 'critical',
      lastVisit: '2024-01-14',
      nextAppointment: '2024-01-16',
      vitals: {
        heartRate: 92,
        bloodPressure: '140/90',
        temperature: 99.2,
        oxygenSat: 95
      }
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      age: 28,
      condition: 'Post-Surgery Recovery',
      status: 'recovering',
      lastVisit: '2024-01-13',
      nextAppointment: '2024-01-20',
      vitals: {
        heartRate: 72,
        bloodPressure: '115/75',
        temperature: 98.4,
        oxygenSat: 99
      }
    }
  ];

  const appointments: Appointment[] = [
    { id: '1', patient: 'Sarah Johnson', time: '09:00', type: 'Check-up', status: 'confirmed' },
    { id: '2', patient: 'Michael Chen', time: '10:30', type: 'Consultation', status: 'pending' },
    { id: '3', patient: 'Emily Rodriguez', time: '14:00', type: 'Follow-up', status: 'confirmed' },
    { id: '4', patient: 'David Kim', time: '15:30', type: 'Emergency', status: 'completed' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'text-red-600 bg-red-50';
      case 'stable': return 'text-green-600 bg-green-50';
      case 'recovering': return 'text-yellow-600 bg-yellow-50';
      case 'confirmed': return 'text-blue-600 bg-blue-50';
      case 'pending': return 'text-orange-600 bg-orange-50';
      case 'completed': return 'text-gray-600 bg-gray-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const StatCard = ({ icon: Icon, title, value, change, trend }: {
    icon: any;
    title: string;
    value: string;
    change: string;
    trend: 'up' | 'down';
  }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon size={24} className="text-blue-600" />
        </div>
        <div className={`flex items-center text-sm ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span className="ml-1">{change}</span>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-gray-600 text-sm">{title}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Stethoscope size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">MedCare Dashboard</h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search patients..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-600 relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4">
            <div className="space-y-2">
              {[
                { id: 'overview', label: 'Overview', icon: Activity },
                { id: 'patients', label: 'Patients', icon: Users },
                { id: 'appointments', label: 'Appointments', icon: Calendar },
                { id: 'analytics', label: 'Analytics', icon: TrendingUp }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-50 text-blue-600 border border-blue-200'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <Plus size={16} />
                  <span>Add Patient</span>
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                  icon={Users}
                  title="Total Patients"
                  value="1,247"
                  change="+12%"
                  trend="up"
                />
                <StatCard
                  icon={Calendar}
                  title="Today's Appointments"
                  value="24"
                  change="+5%"
                  trend="up"
                />
                <StatCard
                  icon={AlertTriangle}
                  title="Critical Cases"
                  value="8"
                  change="-15%"
                  trend="down"
                />
                <StatCard
                  icon={Heart}
                  title="Recovery Rate"
                  value="94%"
                  change="+3%"
                  trend="up"
                />
              </div>

              {/* Recent Activity */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Patients</h3>
                  <div className="space-y-4">
                    {patients.slice(0, 3).map((patient) => (
                      <div key={patient.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <User size={16} className="text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{patient.name}</p>
                            <p className="text-sm text-gray-600">{patient.condition}</p>
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(patient.status)}`}>
                          {patient.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Schedule</h3>
                  <div className="space-y-4">
                    {appointments.map((appointment) => (
                      <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <Clock size={16} className="text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{appointment.patient}</p>
                            <p className="text-sm text-gray-600">{appointment.time} - {appointment.type}</p>
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                          {appointment.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'patients' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">Patient Management</h2>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Filter size={16} />
                    <span>Filter</span>
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                    <Plus size={16} />
                    <span>Add Patient</span>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="text-left py-3 px-6 font-medium text-gray-900">Patient</th>
                        <th className="text-left py-3 px-6 font-medium text-gray-900">Condition</th>
                        <th className="text-left py-3 px-6 font-medium text-gray-900">Status</th>
                        <th className="text-left py-3 px-6 font-medium text-gray-900">Last Visit</th>
                        <th className="text-left py-3 px-6 font-medium text-gray-900">Next Appointment</th>
                        <th className="text-left py-3 px-6 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {patients.map((patient) => (
                        <tr key={patient.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-6">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <User size={16} className="text-blue-600" />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{patient.name}</p>
                                <p className="text-sm text-gray-600">Age {patient.age}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-gray-900">{patient.condition}</td>
                          <td className="py-4 px-6">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(patient.status)}`}>
                              {patient.status}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-gray-600">{patient.lastVisit}</td>
                          <td className="py-4 px-6 text-gray-600">{patient.nextAppointment}</td>
                          <td className="py-4 px-6">
                            <button
                              onClick={() => setSelectedPatient(patient)}
                              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                            >
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appointments' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">Appointments</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <Plus size={16} />
                  <span>Schedule Appointment</span>
                </button>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Schedule</h3>
                  <div className="space-y-4">
                    {appointments.map((appointment) => (
                      <div key={appointment.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <p className="text-lg font-bold text-gray-900">{appointment.time}</p>
                            <p className="text-xs text-gray-600">30 min</p>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{appointment.patient}</p>
                            <p className="text-sm text-gray-600">{appointment.type}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                            {appointment.status}
                          </span>
                          <button className="p-1 text-gray-400 hover:text-gray-600">
                            <MoreVertical size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center space-x-3 p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50">
                      <Calendar size={16} className="text-blue-600" />
                      <span className="text-gray-900">Schedule Appointment</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50">
                      <Users size={16} className="text-green-600" />
                      <span className="text-gray-900">Add New Patient</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50">
                      <FileText size={16} className="text-purple-600" />
                      <span className="text-gray-900">Generate Report</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Patient Details Modal */}
      {selectedPatient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Patient Details</h3>
              <button
                onClick={() => setSelectedPatient(null)}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <User size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{selectedPatient.name}</h4>
                  <p className="text-gray-600">Age {selectedPatient.age} • {selectedPatient.condition}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${getStatusColor(selectedPatient.status)}`}>
                    {selectedPatient.status}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Contact Information</h5>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone size={16} className="text-gray-400" />
                      <span className="text-gray-600">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail size={16} className="text-gray-400" />
                      <span className="text-gray-600">{selectedPatient.name.toLowerCase().replace(' ', '.')}@email.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className="text-gray-400" />
                      <span className="text-gray-600">123 Main St, City, State</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Vital Signs</h5>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Heart size={16} className="text-red-500" />
                      <div>
                        <p className="text-sm text-gray-600">Heart Rate</p>
                        <p className="font-medium">{selectedPatient.vitals.heartRate} bpm</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Activity size={16} className="text-blue-500" />
                      <div>
                        <p className="text-sm text-gray-600">Blood Pressure</p>
                        <p className="font-medium">{selectedPatient.vitals.bloodPressure}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Thermometer size={16} className="text-orange-500" />
                      <div>
                        <p className="text-sm text-gray-600">Temperature</p>
                        <p className="font-medium">{selectedPatient.vitals.temperature}°F</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Activity size={16} className="text-green-500" />
                      <div>
                        <p className="text-sm text-gray-600">Oxygen Sat</p>
                        <p className="font-medium">{selectedPatient.vitals.oxygenSat}%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 mb-3">Appointment History</h5>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-900">Last Visit</span>
                    <span className="text-gray-600">{selectedPatient.lastVisit}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-900">Next Appointment</span>
                    <span className="text-gray-600">{selectedPatient.nextAppointment}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthcareDashboard;