import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tophead from '../templates/tophead';
import './class.css'

function Class6() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Define a function to fetch user data from the API
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/classsix');
        const userData = response.data;
        setUsers(userData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Call the fetchUsers function when the component is mounted
    fetchUsers();
  }, []);

  return (
    <div className='noticepage'>
      <Tophead />
      <h1 className='noticepageh1'>class:</h1>
      <table class="GeneratedTable">
    <thead>
    <tr>
      <th></th>
      <th></th>
      <th></th>
      <th>class six</th>
      <th>class seven</th>
      <th>class eight</th>
      <th>class nine</th>
      <th>class ten</th>
    </tr>
  </thead>
        {users.map((user, index) => (
          <tbody key={index}>
        <tr>
      <td rowspan="4">{user.date}</td>
      <td rowspan="2">present</td>
      <td>male</td>
      <td>{user.class6mp}</td>
      <td>{user.class7mp}</td>
      <td>{user.class8mp}</td>
      <td>{user.class9mp}</td>
      <td>{user.class10mp}</td>
    </tr>
    <tr> 
      <td>female</td>
      <td>{user.class6fp}</td>
      <td>{user.class7fp}</td>
      <td>{user.class8fp}</td>
      <td>{user.class9fp}</td>
      <td>{user.class10fp}</td>
    </tr>
     <tr>
      <td rowspan="2">absent</td>
      <td>male</td>
      <td>{user.class6ma}</td>
      <td>{user.class7ma}</td>
      <td>{user.class8ma}</td>
      <td>{user.class9ma}</td>
      <td>{user.class10ma}</td>
    </tr>
    <tr>
      <td>female</td>
      <td>{user.class6fa}</td>
      <td>{user.class7fa}</td>
      <td>{user.class8fa}</td>
      <td>{user.class9fa}</td>
      <td>{user.class10fa}</td>
    </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Class6;
