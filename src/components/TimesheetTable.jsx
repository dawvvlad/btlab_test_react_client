import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';
import TimesheetRow from './TimesheetRow';

const TimesheetTable = ({ timesheets, onEdit, onDelete }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Сотрудник</TableCell>
        <TableCell>Причина</TableCell>
        <TableCell>Дата начала</TableCell>
        <TableCell>Продолжительность</TableCell>
        <TableCell>Оплачено</TableCell>
        <TableCell>Комментарий</TableCell>
        <TableCell>Действия</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {timesheets.map((timesheet) => (
        <TimesheetRow
          key={timesheet.id}
          timesheet={timesheet}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </TableBody>
  </Table>
);

export default TimesheetTable;