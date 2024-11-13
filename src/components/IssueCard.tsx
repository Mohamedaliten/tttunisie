import React from 'react';
import { Clock, MapPin, AlertCircle } from 'lucide-react';
import { TechnicalIssue } from '../types';

interface IssueCardProps {
  issue: TechnicalIssue;
}

const priorityColors = {
  low: 'bg-blue-100 text-blue-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-orange-100 text-orange-800',
  critical: 'bg-red-100 text-red-800',
};

const statusColors = {
  open: 'bg-gray-100 text-gray-800',
  'in-progress': 'bg-purple-100 text-purple-800',
  resolved: 'bg-green-100 text-green-800',
};

export default function IssueCard({ issue }: IssueCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{issue.title}</h3>
        <div className="flex space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[issue.priority]}`}>
            {issue.priority}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[issue.status]}`}>
            {issue.status}
          </span>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{issue.description}</p>
      <div className="flex items-center space-x-4 text-sm text-gray-500">
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-1" />
          {issue.location}
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          {new Date(issue.createdAt).toLocaleDateString()}
        </div>
        {issue.priority === 'critical' && (
          <div className="flex items-center text-red-600">
            <AlertCircle className="h-4 w-4 mr-1" />
            Urgent
          </div>
        )}
      </div>
    </div>
  );
}