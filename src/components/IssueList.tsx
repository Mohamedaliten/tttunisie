import React, { useState } from 'react';
import { Filter, Plus, Search } from 'lucide-react';
import IssueCard from './IssueCard';
import { TechnicalIssue, FilterOptions } from '../types';

// Sample data - In a real app, this would come from an API
const sampleIssues: TechnicalIssue[] = [
  {
    id: '1',
    title: 'Fiber Optic Cable Damage in Sfax Industrial Zone',
    description: 'Multiple customers reporting internet outages. Initial inspection suggests physical damage to main fiber optic line.',
    location: 'Sfax Industrial Zone',
    category: 'Infrastructure',
    status: 'in-progress',
    priority: 'high',
    createdAt: '2024-03-10T09:00:00Z',
    updatedAt: '2024-03-10T10:30:00Z',
    assignedTo: 'Ahmed Ben Salem'
  },
  {
    id: '2',
    title: 'Network Congestion in Tunis City Center',
    description: 'Peak hour network slowdown affecting business district. Requires bandwidth optimization.',
    location: 'Tunis City Center',
    category: 'Network',
    status: 'open',
    priority: 'critical',
    createdAt: '2024-03-10T08:15:00Z',
    updatedAt: '2024-03-10T08:15:00Z'
  }
];

export default function IssueList() {
  const [issues] = useState<TechnicalIssue[]>(sampleIssues);
  const [filters, setFilters] = useState<FilterOptions>({});
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIssues = issues.filter(issue => {
    let matches = true;
    
    if (searchQuery) {
      matches = issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                issue.description.toLowerCase().includes(searchQuery.toLowerCase());
    }
    
    if (filters.status && matches) {
      matches = issue.status === filters.status;
    }
    
    if (filters.priority && matches) {
      matches = issue.priority === filters.priority;
    }
    
    return matches;
  });

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Technical Issues</h1>
        <button className="btn-primary flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          New Issue
        </button>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search issues..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-gray-400" />
          <select
            onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">All Status</option>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
          
          <select
            onChange={(e) => setFilters(prev => ({ ...prev, priority: e.target.value }))}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">All Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredIssues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
}