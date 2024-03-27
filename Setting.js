import React, { useState } from "react";
import Swal from "sweetalert2";
import { supabase } from '../../utils/supabaseClient';
import Profile from "../../assets/profile.jpg";

const Setting = ({ userFirstName, userLastName, userMiddleName, userEmail, userCourse, userPassword }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [currentPasswordVisibility, setCurrentPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    console.log(userPassword);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setPasswordError("");
  };

  const handleResetPassword = async (e) => {
    e.preventDefault(); 

    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError("Please fill in all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("New password and confirm password must match");
      return;
    }

    if (currentPassword !== userPassword) {
      setPasswordError("Current password is incorrect");
      return;
    }

    try {
      const { error: updateError } = await supabase
        .from('users')
        .update({ password: newPassword }) 
        .eq('email', userEmail); 
          
      if (updateError) {
        throw updateError;
      }

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Password updated successfully!",
        showConfirmButton: false,
        timer: 1700,
      });

      handleCloseModal();
    } catch (error) {
      console.error("Error updating password:", error.message);
      setPasswordError("Error updating password. Please try again later.");
    }
  };

  const toggleCurrentPasswordVisibility = () => {
    setCurrentPasswordVisibility(!currentPasswordVisibility);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisibility(!confirmPasswordVisibility);
  };

  const handleApplyButton = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Password updated successfully!",
      showConfirmButton: false,
      timer: 1700,
    });
  };

  return (
    <div className="flex-1 px-5">
      <div className="flex justify-center items-center bg-white shadow my-24 mx-3 rounded-xl h-3/4">
        <div className="m-auto p-10 mr-4">
          <ul className="list-unstyled">
            <li className="mb-2 flex flex-col items-center">
              <img src={Profile} alt="User profile" height={250} width={300} />
              <button
                className="text-blue-600 hover:underline mt-2"
                onClick={handleOpenModal}
              >
                Reset password
              </button>
            </li>
          </ul>
        </div>

        <div className="flex-grow pl-10 p-10">
          <h1 className="text-3xl mb-4 text-left pr-5 font-semibold">
            Student Information
          </h1>
          <div className="grid grid-cols-2 gap-8 place-content-evenly">
            <div className="mb-4">
              <label className="block text-black font-bold mb-2">
                First Name:
              </label>
              <p className="text-black bg-gray p-3 rounded-lg w-4/5">{userFirstName}</p>
            </div>
            <div className="mb-4">
              <label className="block text-black font-bold mb-2">
                Middle Name:
              </label>
              <p className="text-black bg-gray p-3 rounded-lg w-4/5">{userMiddleName}</p>
            </div>
            <div className="mb-4">
              <label className="block text-black font-bold mb-2">
                Last Name:
              </label>
              <p className="text-black bg-gray p-3 rounded-lg w-4/5">
                {userLastName}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-black font-bold mb-2">Course:</label>
              <p className="text-black bg-gray p-3 rounded-lg w-4/5">{userCourse}</p>
            </div>
            <div className="mb-4">
              <label className="block text-black font-bold mb-2">Email:</label>
              <p className="text-black bg-gray p-3 rounded-lg w-4/5">
                {userEmail}
              </p>
            </div>
          </div>
          <div className="applyButton flex justify-end pr-10 mr-10">
            <button
              className="button-1 bg-blue-600 text-white py-2 px-4 rounded mr-2 bg-blue hover:bg-black active:bg-green"
              onClick={handleApplyButton}
            >
              Apply
            </button>
            <button className="button-2 bg-gray-300 text-gray-800 py-2 px-4 rounded border border-gray">
              Cancel
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Reset Password</h2>

            <form onSubmit={handleResetPassword}> {}
              <div className="mb-4">
                <label className="text-sm ml-1 font-semibold">Current password:</label>
                <input
                  type={currentPasswordVisibility ? "text" : "password"}
                  placeholder="Current Password"
                  className="rounded-lg input-border shadow px-3 py-2 mb-2 w-full"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={currentPasswordVisibility}
                    onChange={toggleCurrentPasswordVisibility}
                  />
                  <label>Show Current Password</label>
                </div>
              </div>

              <div className="mb-4">
                <label className="text-sm ml-1 font-semibold">New password:</label>
                <input
                  type="password"
                  placeholder="New Password"
                  className="rounded-lg input-border shadow px-3 py-2 mb-2 w-full"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="text-sm ml-1 font-semibold">Re-type password:</label>
                <input
                  type={confirmPasswordVisibility ? "text" : "password"}
                  placeholder="Re-type Password"
                  className="rounded-lg input-border shadow px-3 py-2 mb-2 w-full"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={confirmPasswordVisibility}
                    onChange={toggleConfirmPasswordVisibility}
                  />
                  <label>Show Re-type Password</label>
                </div>
              </div>

              {passwordError && <p className="text-red-500">{passwordError}</p>}

              <div className="flex justify-end">
                <button
                  type="submit" 
                  className="bg-blue-600 text-white py-2 px-4 rounded mr-2 bg-blue"
                >
                  Confirm
                </button>
                <button
                  className="bg-gray-300 text-gray-800 py-2 px-4 rounded bg-gray"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Setting;

