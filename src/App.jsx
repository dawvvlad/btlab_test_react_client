import React, { useState, useEffect } from 'react';
import { Container, Button } from '@mui/material';
import TimesheetTable from './components/TimesheetTable';
import TimesheetForm from './components/TimesheetForm';
import { fetchEmployees, fetchTimesheets } from './api';

const App = () => {
  const [timesheets, setTimesheets] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [selectedTimesheet, setSelectedTimesheet] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    setTimesheets(fetchTimesheets());
    setEmployees(fetchEmployees());
  }, []);

// сохранение записи из формы
  const handleSave = async (timesheet) => {
    try {
      if (timesheet.id) {
        await axios.patch(`/api/v1/timesheet/${timesheet.id}`, timesheet);
      } else {
        await axios.post('/api/v1/timesheet', timesheet);
      }
      setIsFormOpen(false);
      fetchTimesheets();
    } catch (error) {
      console.error('Error saving timesheet:', error);
    }
  };

  // удаление записи 
  const handleDelete = async (id) => {
    if (window.confirm('Вы уверены, что хотите удалить запись?')) {
      try {
        await axios.delete(`/api/v1/timesheet/${id}`);
        fetchTimesheets();
      } catch (error) {
        console.error('Error deleting timesheet:', error);
      }
    }
  };

  return (
    <Container>
      <h1>Учет отсутствия сотрудников</h1>
      <Button variant="contained" color="primary" onClick={() => setIsFormOpen(true)}>
        Создать запись
      </Button>
      <TimesheetTable
        timesheets={timesheets}
        onEdit={(timesheet) => {
          setSelectedTimesheet(timesheet);
          setIsFormOpen(true);
        }}
        onDelete={handleDelete}
      />
      <TimesheetForm
        isOpen={isFormOpen}
        timesheet={selectedTimesheet}
        employees={employees}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
      />
    </Container>
  );
};

export default App;
