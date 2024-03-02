import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

const LibraryLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [fourDigitCode, setFourDigitCode] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [showStudentNumberModal, setShowStudentNumberModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  const handleLogin = () => {
    // Add your authentication logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
    // Show the "Enter Your Student Number" modal
    setShowStudentNumberModal(true);
  };

  const handleEnterStudentNumber = () => {
    // Add logic to handle the student number input
    console.log('Student Number:', studentNumber);

    // Close the student number modal
    setShowStudentNumberModal(false);

    // Show the "We have sent you a four-digit code via email" modal
    setShowModal(true);
  };

  // handleConfirmCode removed since it's not used

  const handleConfirmPassword = () => {
    // Add logic to handle the confirmation of the new password
    console.log('Confirmed Password:', newPassword);
    // You can add further logic here, e.g., making an API call to update the password

    // Close both the "Change Password" and "We have sent you a four-digit code via email" modals
    setShowChangePasswordModal(false);
    setShowModal(false);
  };

  return (
    <div className="flex items-center justify-start min-h-screen bg-peach">
      {/* Maroon Box */}
      <div className="flex items-center justify-center w-1/2 min-h-screen text-center bg-maroon text-white p-8 rounded-br-md rounded-tr-md shadow-lg">
        <h1 className="text-80xl font-bold">
          St. Clare College
          <p className="text-80xl"> of Caloocan</p>
          <p className="text-80xl text-peach"> Library Management System</p>
        </h1>
      </div>

      {/* White Box (Adjusted styling) */}
      <div className="bg-peach flex items-center justify-center w-1/2">
      <div className="bg-white p-8 rounded-md shadow-lg w-80" style={{ height: '90vh', width: '80vh' }}>
      <div className="bg-white p-2 rounded-md">
      <h2 className="text-4xl font-semibold mb-4 text-center mt-10">Sign in to your account</h2>
      <h2 className="text-base font-semibold mb-4 text-center text-gray">Welcome Back! Please enter your details.</h2>
      </div>

          <form className="space-y-8">
{/* Username input */}
<div className="relative">
  <label htmlFor="username" className="block text-base font-medium text-gray-600 mb-2 mt-10">
    Username
  </label>
  <div className="flex items-center">
    {/* Use the new FaUser icon */}
    <FaUser className="h-5 w-5 text-gray-400 absolute left-2" />
    <input
      type="text"
      id="username"
      name="username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      className="mt-1 pl-8 p-2 w-full border rounded-md"
      placeholder="Student No./Email"
    />
  </div>
</div>

{/* Password input */}
<div className="relative mt-4">
  <label htmlFor="password" className="block text-base font-medium text-gray-600 mb-2 mt-10">
    Password
  </label>
  <div className="flex items-center">
    {/* Use the new FaLock icon */}
    <FaLock className="h-5 w-5 text-gray-400 absolute left-2" />
    <input
      type="password"
      id="password"
      name="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="mt-1 pl-8 p-2 w-full border rounded-md"
      placeholder="Enter Password"
    />
  </div>
</div>
            {/* Forget Password */}
            <div className="text-sm text-red flex justify-end hover:text-blue mt-12 ">
              <button type="button" onClick={handleForgotPassword}>
                Forgot your password?
              </button>
            </div>

            {/* Login Button */}
            <div className="bg-maroon p-2 rounded-md mt-16">
              <button
                type="submit"
                onClick={handleLogin}
                className="w-full bg-blue-500 text-white rounded-md "
              >
                Log In
              </button>
            </div>

            {/* Don't have an account */}
            <div className="text-sm text-gray-600 text-center mt-16">
              Don't have an account?
              <p className="text-base text-red hover:text-blue mt-2">
                <button type="button">Go to library</button>
              </p>
            </div>
          </form>
        </div>
      </div>

{/* First Modal - Student Number */}
{showStudentNumberModal && (
  <div className="fixed inset-0 z-10 flex items-center justify-center">
    <div className="bg-peach p-16 w-1/3 border rounded-md  ">
      <h2 className="text-lg font-semibold text-center mb-2 mt-2">Enter Your Student Number</h2>

      <div className="mb-4 mt-8">
        <label htmlFor="studentNumber" className="block text-sm font-medium text-gray-600 mb-2 mt-2">
          Student Number
        </label>
        <input
          type="text"
          id="studentNumber"
          value={studentNumber}
          onChange={(e) => setStudentNumber(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md bg-white "
          placeholder="Enter Student Number"
        />
      </div>

      <div className="bg-maroon w-1/3 p-2 rounded-md mx-auto ">
        <button
          onClick={handleEnterStudentNumber}
          className="w-full text-center bg-blue-500 text-white rounded-md "
        >
          Submit
        </button>
      </div>
    </div>
  </div>
)}

      {/* Second Modal - We have sent you a four-digit code via email */}
      {showModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="bg-peach p-16 w-1/3 border rounded-md">
            <h2 className="text-lg font-semibold text-center mb-2 mt-2">We have sent you a four-digit code via email.</h2>
            <h2 className="text-sm font-semibold mb-4 text-gray text-center">juan****@gmail.com</h2>

            <div className="flex justify-center items-center mb-2 mt-2">
              <input
                type="fourDigitCode"
                id="fourDigitCode"
                value={fourDigitCode}
                onChange={(e) => setFourDigitCode(e.target.value)}
                className="p-2 w-1/3 border rounded-md text-center mb-2 mt-2"
                placeholder="Enter Code"
              />
            </div>

            <div className="text-xs mb-4 text-gray-600 text-center">
              <p className="text-sm text-blue hover:text-red">
                <button type="button">Go to library</button>
              </p>
            </div>

            {/* Button to Close Second Modal */}
            <div className="mt-2 bg-maroon w-1/5 p-1 rounded-md mx-auto">
              <button
                onClick={() => setShowChangePasswordModal(true)}
                className="w-full text-center text-white rounded-md mb-1 mt-1"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Third Modal - Change Password */}
      {showChangePasswordModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="bg-peach p-16 w-1/3 border rounded-md">
            <h2 className="text-xl font-semibold text-center mb-6 ">Change Password</h2>

            {/* New Password input */}
            <div className="mb-4">
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-600 mb-1 mt-1">
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
              <label htmlFor="retypePassword" className="block text-sm font-medium text-gray-600 mb-1 mt-1">
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
                onClick={() => {
                  handleConfirmPassword();
                  setShowChangePasswordModal(false); // Close the third modal
                }}
                className="w-full text-center bg-blue-500 text-white rounded-md"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LibraryLogin;
