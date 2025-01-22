import axios from 'axios';

// получение всех записей
export const fetchTimesheets = async () => {
    try {
      const response = await axios.get('/api/v1/timesheet');
      return response.data;
    } catch (error) {
      console.error('Error fetching timesheets:', error);
    }
  };


// получение всех сотрудников
export const fetchEmployees = async () => {
    try {
      const response = await axios.get('/api/v1/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };




