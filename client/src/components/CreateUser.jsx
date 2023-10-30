import React, { useState } from 'react';
import axios from 'axios';

export default function CreateUser() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhoneno] = useState('');
  const [project, setProject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const userData = {
      name,
      lastname,
      email,
      phone,
      project,
    };

    axios.post("http://127.0.0.1:5173/createUser", userData)
      .then(response => {
        console.log('User created:', response.data);
      })
      .catch(error => {
        console.error('Error creating user:', error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor='fname'> First Name:
              <input
                type="text"
                placeholder='First name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor='lname'> Last Name:
              <input
                type="text"
                placeholder='Last name'
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor='email'> Email:
              <input
                type="email"
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor='phone'> Phone No.:
              <input
                type="tel"
                placeholder='Phone Number'
                value={phone}
                onChange={(e) => setPhoneno(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor='project'> Project:
              <input
                type="text"
                placeholder='Project'
                value={project}
                onChange={(e) => setProject(e.target.value)}
              />
            </label>
          </div>
          <div>
            <button type="submit" className="btn btn-success">Create User</button>
          </div>
        </div>
      </form>
    </div>
  );
}
