import React from 'react';
import { BarChart3, Users, AlertTriangle, CheckCircle } from 'lucide-react';

const stats = [
  { name: 'Active Issues', value: '24', icon: AlertTriangle, color: 'text-orange-600' },
  { name: 'Resolved Today', value: '12', icon: CheckCircle, color: 'text-green-600' },
  { name: 'Available Technicians', value: '8', icon: Users, color: 'text-blue-600' },
  { name: 'Success Rate', value: '94%', icon: BarChart3, color: 'text-purple-600' },
];

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.name} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="mt-2 text-3xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full bg-gray-50 ${stat.color}`}>
                <Icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}