import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        // Registration successful, handle accordingly (redirect, show success message, etc.)
        console.log('Registration successful');
      } else {
        // Registration failed, handle accordingly (show error message, etc.)
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64 border border-solid-black w-90 p-5 mt-20 bg-white">
        <h1 className="text-3xl font-semibold mb-4">Register</h1>
        <form className="max-w-md mx-auto space-y-3">
          <input className="bg-blue-50" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
          <input className="bg-blue-50" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required />
          <input className="bg-blue-50" type="password" value={password} onChange={(e) => setPassword(e.target.value)}placeholder="Password" required />
          <div className="text-center py-2 text-gray-500 flex flex-row">
            <span className="text-blue-400">Already have an account?</span>
            <Link to="/" className="hover:underline-offset-4 text-blue-400">Login</Link>
            <button className="text-white ml-auto border-spacing-5 rounded-3xl p-2 w-40 bg-blue-500" onClick={handleRegister}>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
