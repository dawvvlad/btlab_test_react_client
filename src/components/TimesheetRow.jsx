import React from 'react';
import { TableRow, TableCell, Button } from '@mui/material';
import { formatDate } from '../utils';

const TimesheetRow = ({ timesheet, onEdit, onDelete }) => (
  <TableRow>
    <TableCell>{timesheet.id}</TableCell>
    <TableCell>{`${timesheet.employee.firstName} ${timesheet.employee.lastName}`}</TableCell>
    <TableCell>{timesheet.reason}</TableCell>
    <TableCell>{formatDate(timesheet.startDate)}</TableCell>
    <TableCell>{timesheet.duration}</TableCell>
    <TableCell>{timesheet.discounted ? 'Да' : 'Нет'}</TableCell>
    <TableCell>{timesheet.description}</TableCell>
    <TableCell>
      <Button onClick={() => onEdit(timesheet)}>Редактировать</Button>
      <Button color="secondary" onClick={() => onDelete(timesheet.id)}>
        Удалить
      </Button>
    </TableCell>
  </TableRow>
);

export default TimesheetRow;
