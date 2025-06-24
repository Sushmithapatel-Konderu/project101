import React, { useState } from 'react';

const DonorForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    blood_group: '',
    age: '',
    gender: '',
    address: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await onSubmit(formData);
    if (result.success) {
      onClose();
    } else {
      alert(result.message || 'Registration failed');
    }
  };

  return (
    <div className="modal" style={{ display: 'block' }}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Become a Donor</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Full Name" 
            required 
            onChange={handleInputChange} 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            required 
            onChange={handleInputChange} 
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number" 
            required 
            onChange={handleInputChange} 
          />
          <select 
            name="blood_group" 
            required 
            onChange={handleInputChange}
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          <input 
            type="number" 
            name="age" 
            placeholder="Age" 
            min="18" 
            max="65" 
            required 
            onChange={handleInputChange} 
          />
          <select 
            name="gender" 
            required 
            onChange={handleInputChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <textarea 
            name="address" 
            placeholder="Address" 
            required 
            onChange={handleInputChange}
          ></textarea>
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            required 
            onChange={handleInputChange} 
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default DonorForm;
