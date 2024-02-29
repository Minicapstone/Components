import React, { useState } from 'react';

const LibraryLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [fourDigitCode, setfourDigitCode] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const handleLogin = () => {
    // Add your authentication logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
    // Add logic to show modal or trigger any other action
    setShowModal(true);
  };
  
  const handleConfirmPassword = (newPassword) => {
    // Add logic to handle the confirmation of the new password
    console.log('Confirmed Password:', newPassword);
    // You can add further logic here, e.g., making an API call to update the password
    
    // Close the first modal
    setShowModal(false);

    // Open the second modal
    setShowSecondModal(true);
  };
  return (
    <div className="flex items-center justify-start min-h-screen bg-peach">
      
  {/* Maroon Box */}
  <div class="flex items-center justify-center w-1/2 min-h-screen text-center bg-maroon text-white p-8 rounded-br-md rounded-tr-md">
  <h1 class="text-80xl font-bold">
    St. Clare College<p class="text-80xl"> of Caloocan</p><p class="text-80xl text-peach"> Library Management System</p>
  </h1>
</div>

      {/* White Box */}
      <div class="bg-peach p-24"></div>
      <div class="flex justify-between">
      <div className="bg-white p-8 rounded-md justify-end w-70 h-70">
      <div class="bg-white p-4 rounded-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Sign in to your account</h2>
      <h2 className="text-xs font-semibold mb-4 text-gray">Welcome Back! Please eneter your details.</h2>
        </div>
      
        <form className="space-y-8">

          {/* Username input */}
          <div>

            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Student No./Email"
            />
          </div>

          {/* Password input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter Password"
            />
          </div>

          {/* Forget Password */}
          <div className="text-xs text-red flex justify-end hover:text-blue ">
            <button type="button" onClick={handleForgotPassword}>
              Forgot your password?
            </button>
          </div>

          {/* Login Button */}
          <div className="bg-maroon p-2 rounded-md">
            <button
              type="submit"
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white rounded-md"
            >
              Log In
            </button>
          </div>

          {/* Don't have an account */}
          <div className="text-xs text-gray-600 text-center">
            Don't have an account?<p class="text-sm text-red hover:text-blue"> <button type="button">Go to library</button></p>
          </div>
        </form>
      </div>
</div>
      {/* Modal */}
      
       {/* First Modal */}
       {showModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="bg-peach p-16 w-1/3 border rounded-md">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>

            {/* New Password input */}
            <div className="mb-4">
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-600">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter new password"
              />
            </div>

            {/* Re-type New Password input */}
            <div className="mb-4">
              <label htmlFor="retypePassword" className="block text-sm font-medium text-gray-600">
                Re-type New Password
              </label>
              <input
                type="password"
                id="retypePassword"
                value={retypePassword}
                onChange={(e) => setRetypePassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Re-enter new password"
              />
            </div>

            {/* Confirm Button */}
            <div className="bg-maroon w-1/3 p-2 rounded-md mx-auto">
              <button
                onClick={() => handleConfirmPassword(newPassword)}
                className="w-full text-center bg-blue-500 text-white rounded-md"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Second Modal */}
      {showSecondModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="bg-peach p-16 w-1/3 border rounded-md">
          <h2 className="text-lg font-semibold text-center">We have sent you a four-digit code via email.</h2>
          <h2 className="text-sm font-semibold mb-4 text-gray text-center">juan****@gmail.com</h2>

          <div className="flex justify-center items-center">
          <input
           type="fourDigitCode"
           id="fourDigitCode"
           value={fourDigitCode}
           onChange={(e) => setfourDigitCode(e.target.value)}
           className="mt-1 p-2 w-1/3 border rounded-md text-center mb-2"
           placeholder="Enter Code"
           />
          </div>

          <div className="text-xs mb-4 text-gray-600 text-center">
            <p class="text-sm text-blue hover:text-red"> <button type="button">Go to library</button></p>
          </div>

            {/* Button to Close Second Modal */}
            <div className="mt-2 bg-maroon w-1/5 p-1 rounded-md mx-auto">
              <button
                onClick={() => setShowSecondModal(false)}
                className="w-full text-center  text-white rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LibraryLogin;


