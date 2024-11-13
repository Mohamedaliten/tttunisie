export interface TechnicalIssue {
  id: string;
  title: string;
  description: string;
  location: string;
  category: string;
  status: 'open' | 'in-progress' | 'resolved';
  priority: 'low' | 'medium' | 'high' | 'critical';
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
  solution?: string;
}

export interface FilterOptions {
  status?: string;
  category?: string;
  priority?: string;
  location?: string;
}