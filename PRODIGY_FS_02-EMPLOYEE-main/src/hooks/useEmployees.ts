import { useState, useEffect } from 'react';
import { Employee, EmployeeFormData } from '@/types/employee';
import { toast } from '@/hooks/use-toast';

// Mock data for initial development
const mockEmployees: Employee[] = [
  {
    id: '1',
    employeeId: 'EMP001',
    firstName: 'RAAM',
    lastName: 'Prasad',
    email: 'raam.prasad@company.com',
    phone: '9123456780',
    address: '123 Main St, New York, NY 10001',
    department: 'Engineering',
    position: 'Senior Software Engineer',
    hireDate: '2025-01-15',
    salary: 95000,
    status: 'active',
    createdAt: '2022-01-15T09:00:00Z',
    updatedAt: '2024-01-15T09:00:00Z'
  },
  {
    id: '2',
    employeeId: 'EMP002',
    firstName: 'Senthur',
    lastName: 'Raja',
    email: 'senthur.raja@company.com',
    phone: '9876543210',
    address: '456 Oak Ave, Los Angeles, CA 90210',
    department: 'Marketing',
    position: 'Marketing Manager',
    hireDate: '2025-02-20',
    salary: 78000,
    status: 'active',
    createdAt: '2021-08-20T09:00:00Z',
    updatedAt: '2023-08-20T09:00:00Z'
  },
  {
    id: '3',
    employeeId: 'EMP003',
    firstName: 'BLACK',
    lastName: 'GOD',
    email: 'black.god@company.com',
    phone: '9988776655',
    address: '789 Pine Rd, Chicago, IL 60601',
    department: 'Sales',
    position: 'Sales Representative',
    hireDate: '2025-03-10',
    salary: 65000,
    status: 'active',
    createdAt: '2023-03-10T09:00:00Z',
    updatedAt: '2023-03-10T09:00:00Z'
  },
  {
    id: '4',
    employeeId: 'EMP004',
    firstName: 'GOD',
    lastName: 'BLACK',
    email: 'god.black@company.com',
    phone: '9090909090',
    address: '321 Elm St, Miami, FL 33101',
    department: 'HR',
    position: 'HR Specialist',
    hireDate: '2025-04-05',
    salary: 58000,
    status: 'inactive',
    createdAt: '2020-11-05T09:00:00Z',
    updatedAt: '2024-01-01T09:00:00Z'
  }
];

export const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setEmployees(mockEmployees);
      setLoading(false);
    }, 1000);
  }, []);

  const addEmployee = async (employeeData: EmployeeFormData): Promise<void> => {
    try {
      const newEmployee: Employee = {
        id: Date.now().toString(),
        ...employeeData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      setEmployees(prev => [...prev, newEmployee]);
      toast({ title: 'Success', description: 'Employee added successfully' });
    } catch (error) {
      console.error('Error adding employee:', error);
      toast({ title: 'Error', description: 'Failed to add employee' });
    }
  };

  const updateEmployee = async (id: string, employeeData: EmployeeFormData): Promise<void> => {
    try {
      setEmployees(prev => prev.map(emp => 
        emp.id === id 
          ? { ...emp, ...employeeData, updatedAt: new Date().toISOString() }
          : emp
      ));
      toast({ title: 'Success', description: 'Employee updated successfully' });
    } catch (error) {
      console.error('Error updating employee:', error);
      toast({ title: 'Error', description: 'Failed to update employee' });
    }
  };

  const deleteEmployee = async (id: string): Promise<void> => {
    try {
      setEmployees(prev => prev.filter(emp => emp.id !== id));
      toast({ title: 'Success', description: 'Employee deleted successfully' });
    } catch (error) {
      console.error('Error deleting employee:', error);
      toast({ title: 'Error', description: 'Failed to delete employee' });
    }
  };

  const getEmployee = (id: string): Employee | undefined => {
    return employees.find(emp => emp.id === id);
  };

  return {
    employees,
    loading,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
  };
};
