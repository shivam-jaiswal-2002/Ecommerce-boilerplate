// Import useState and useEffect
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // UseEffect to navigate once the user is authenticated
  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const response = await fetch('https://localhost:3000/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const users = await response.json();
          const user = users.find((user) => user.email === email && user.password === password);

          if (user) {
            // Authentication successful, handle accordingly (redirect, show success message, etc.)
            console.log('Login successful');
            navigate('/products');
          } else {
            // Authentication failed, handle accordingly (show error message, etc.)
            console.error('Invalid email or password');
          }
        } else {
          // Request failed, handle accordingly (show error message, etc.)
          console.error('Error during login');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    };

    authenticateUser();
  }, [email, password, navigate]);

  const handleLogin = () => {
    // Nothing to do here
    // useEffect will handle authentication and navigation
  };

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64 border border-solid-black w-90 p-5 mt-20 bg-white">
        <h1 className="text-3xl font-semibold mb-4">Login</h1>
        <form className="max-w-md mx-auto space-y-3">
          <input
            className="bg-blue-50"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="bg-blue-50"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="text-center py-2 text-gray-500 flex flex-row">
            <span className="text-blue-400">New user?</span>
            <Link to="/register" className="hover:underline-offset-4 text-blue-400">
              Create an Account
            </Link>
            {/* onClick is not necessary */}
            <button className="text-white ml-auto border-spacing-5 rounded-3xl p-2 w-40 bg-blue-500">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
