import React from 'react';
import '../style/styles.scss';

export default function FormEmployee() {
  return (
    <>
      <form className='form_container'>
        <input type='text' name='firstName' />
        <input type='text' name='lastName' />
        <input type='date' name='dateOfBirth' />
        <input type='date' name='startDate' />
        <input type='text' name='street' />
        <input type='text' name='city' />
        <input type='list' name='state' />
        <input type='text' name='zipCode' />
        <input type='text' name='departement' />
        <button>Save</button>
      </form>
    </>
  );
}
