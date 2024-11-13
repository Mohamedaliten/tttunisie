import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Bell, Menu, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/dashboard">
                <img
                  className="h-8"
                  src="https://upload.wikimedia.org/wikipedia/fr/8/84/Tunisia_Telecom.svg"
                  alt="Tunisie Telecom"
                />
              </Link>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link to="/dashboard" className="text-red-600 font-medium">Dashboard</Link>
                <Link to="/issues" className="text-gray-600 hover:text-red-600">Issues</Link>
                <Link to="/profile" className="text-gray-600 hover:text-red-600">Profile</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search issues..."
                className="w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="relative p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="relative group">
              <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100">
                <User className="h-6 w-6 text-gray-600" />
                <span className="text-sm text-gray-700">{user?.email?.split('@')[0]}</span>
              </button>
              <div className="absolute right-0 w-48 mt-2 py-1 bg-white rounded-md shadow-lg hidden group-hover:block">
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </button>
              </div>
            </div>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}