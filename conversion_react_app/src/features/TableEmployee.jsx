import React from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const columns = [
  {
    name: 'First Name',
    selector: (row) => row.firstname,
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: (row) => row.lastname,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    firstname: 'Beetlejuice',
    lastname: '1988',
  },
  {
    id: 2,
    firstname: 'Ghostbusters',
    lastname: '1984',
  },
];

export default function TableEmployee() {
  const employees = useSelector((state) => state.employee);

  console.log(employees);
  return (
    <>
      <DataTable columns={columns} data={data} />
      <Link to='/'>Home</Link>
    </>
  );
}
