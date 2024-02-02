import React, { useState } from 'react';
import '../style/styles.scss';
import List from '../features/List';
import Input from '../features/Input.jsx';
import DateSelector from '../features/DateSelector.jsx';
import { states, departement } from '../state.js';

export default function FormEmployee() {
  const [employee, setEmployee] = useState({
    firstname: '',
    lastname: '',
    birth: '',
    startDate: '',
    street: '',
    city: '',
    stateUSA: '',
    zipCode: '',
    departement: '',
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('employee', employee);
    setEmployee({
      firstname: '',
      lastname: '',
      birth: '',
      startDate: '',
      street: '',
      city: '',
      stateUSA: '',
      zipCode: '',
      departement: '',
    });
  };
  return (
    <>
      <form className='form_container' onSubmit={handleSubmit}>
        <div className='address_infos_employee_container'>
          <div className='infos_employee_container'>
            <Input
              infos={'firstname'}
              label={'First Name'}
              value={employee.firstname}
              onChange={handleChange}
            />
            <Input
              infos={'lastname'}
              label={'Last Name'}
              value={employee.lastname}
              onChange={handleChange}
            />
            <p>Date of birth</p>
            <DateSelector
              name='birth'
              onChange={handleChange}
              value={employee.birth}
            />
            <p>Start Date</p>
            <DateSelector
              name='startDate'
              onChange={handleChange}
              value={employee.startDate}
            />
          </div>
          <div className='address_container'>
            <div className='input_address_container'>
              <Input
                infos={'street'}
                label={'Street'}
                value={employee.street}
                onChange={handleChange}
              />
              <Input
                infos={'city'}
                label={'City'}
                value={employee.city}
                onChange={handleChange}
              />
              <List
                infos={'stateUSA'}
                data={states}
                label={'State'}
                value={employee.stateUSA}
                onChange={handleChange}
              />
              <Input
                infos={'zipcode'}
                label={'Zip Code'}
                value={employee.zipCode}
                onChange={handleChange}
              />
            </div>
            <h2>Address</h2>
          </div>
        </div>
        <List
          label={'Departement'}
          infos={'departement'}
          data={departement}
          value={employee.departement}
          onChange={handleChange}
        />
        <button type='submit'>Save</button>
      </form>
    </>
  );
}
