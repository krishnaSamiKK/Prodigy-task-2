
import { useNavigate } from 'react-router-dom';
import { EmployeeForm } from '@/components/EmployeeForm';
import { useEmployees } from '@/hooks/useEmployees';
import { EmployeeFormData } from '@/types/employee';

export const AddEmployee = () => {
  const navigate = useNavigate();
  const { addEmployee } = useEmployees();

  const handleSubmit = async (formData: EmployeeFormData) => {
    await addEmployee(formData);
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Add New Employee</h1>
        <p className="text-gray-600">Create a new employee record</p>
      </div>
      
      <EmployeeForm
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
};
