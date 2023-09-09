import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tophead from '../templates/tophead';
import './notice.css'

function Videogallery() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Define a function to fetch user data from the API
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/video');
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
      <h1 className='noticepageh1'>Routine:</h1>
      <ul className='noticepageul'>
        {users.map((user, index) => (
          <li key={index}>
            <iframe  className='noticepageframe' src={user.firstName} allow="autoplay"></iframe>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Videogallery;
