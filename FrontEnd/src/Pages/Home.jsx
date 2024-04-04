import React from 'react'
import {useState} from 'react';
import axios from 'axios';
import './Home.css';
const Home = () => {
  
    
        const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post('http://localhost:5000/api/login', { username, password });
        console.log('Login successful:', response.data);
        // Redirect or show success message
        } catch (error) {
        console.error('Login failed:', error);
        // Show error message
        }
    };

    return (
        <div className='Home'>
            <div className="loginCard">
                <form onSubmit={handleSubmit} className='login'>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className='loginBtn'>Login</button>
                </form>
            </div>
        </div>
  );
}

export default Home