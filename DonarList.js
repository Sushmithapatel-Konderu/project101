import React from 'react';

const DonorList = ({ donors }) => {
  return (
    <div className="donors-list">
      <h2>Available Donors</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Group</th>
            <th>Contact</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {donors.map(donor => (
            <tr key={donor.id}>
              <td>{donor.name}</td>
              <td>{donor.blood_group}</td>
              <td>{donor.phone}</td>
              <td>{donor.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonorList;
