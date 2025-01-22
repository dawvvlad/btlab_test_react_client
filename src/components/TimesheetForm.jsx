import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
} from '@mui/material';

const TimesheetForm = ({ isOpen, timesheet, employees, onClose, onSave }) => {
  const [formState, setFormState] = React.useState(timesheet || {});

  React.useEffect(() => {
    setFormState(timesheet || {});
  }, [timesheet]);

  const handleChange = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSave(formState);
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{formState.id ? 'Редактировать запись' : 'Создать запись'}</DialogTitle>
      <DialogContent>
        <FormControl fullWidth margin="normal">
          <InputLabel>Сотрудник</InputLabel>
          <Select
            value={formState.employeeId || ''}
            onChange={(e) => handleChange('employeeId', e.target.value)}
          >
            {employees.map((employee) => (
              <MenuItem key={employee.id} value={employee.id}>
                {`${employee.firstName} ${employee.lastName}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          margin="normal"
          type="date"
          label="Дата начала"
          value={formState.startDate || ''}
          onChange={(e) => handleChange('startDate', e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          type="number"
          label="Продолжительность"
          value={formState.duration || ''}
          onChange={(e) => handleChange('duration', e.target.value)}
        />
        <Checkbox
          checked={formState.discounted || false}
          onChange={(e) => handleChange('discounted', e.target.checked)}
        />
        Оплачено
        <TextField
          fullWidth
          margin="normal"
          multiline
          rows={4}
          label="Комментарий"
          value={formState.description || ''}
          onChange={(e) => handleChange('description', e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button onClick={handleSubmit} color="primary">
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TimesheetForm;
