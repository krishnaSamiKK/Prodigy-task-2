import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu, Users, UserPlus, Settings, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const Navigation = ({ className }: { className?: string }) => (
  <nav className={cn("space-y-2", className)}>
    <a 
      href="/" 
      className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <Users className="h-5 w-5" />
      <span>All Employees</span>
    </a>
    <a 
      href="/add" 
      className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <UserPlus className="h-5 w-5" />
      <span>Add Employee</span>
    </a>
    <a 
      href="/settings" 
      className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <Settings className="h-5 w-5" />
      <span>Settings</span>
    </a>
  </nav>
);

export const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="py-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Menu</h2>
                  <Navigation />
                </div>
              </SheetContent>
            </Sheet>
            
            <h1 className="text-xl font-bold text-gray-900">Employee Management</h1>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Hidden on mobile */}
        <aside className="hidden md:block w-64 bg-white shadow-sm min-h-screen">
          <div className="p-4">
            <Navigation />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
