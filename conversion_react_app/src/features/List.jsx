import React from 'react';

export default function List({ label, infos, data, value, onChange }) {
  return (
    <>
      <h2>{label}</h2>
      <select
        className='list_container'
        id={`${infos}_container`}
        name={infos}
        value={value}
        onChange={onChange}
      >
        {data.map((datas, index) => {
          return (
            <option value={data.name} key={index}>
              {datas.name}
            </option>
          );
        })}
      </select>
    </>
  );
}
