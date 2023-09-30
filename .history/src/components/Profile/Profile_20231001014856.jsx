import React, { useState } from "react";
import { BsArrowLeft, BsPencil, BsCheck2 } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";

// const Profile = ({ handleCloseOpenProfile, homeUsername, homeSetUsername }) => {
const Profile = ({ handleCloseOpenProfile }) => {
  const [flag, setFlag] = useState(false);
  // const [username, setUsername] = useState(homeUsername);
  const [username, setUsername] = useState(null);
  //   const navigate = useNavigate();
  const handleFlag = () => {
    setFlag(true);
  };
  const handleCheckClick = () => {
    setFlag(false);
  };
  const handleChange = (e) => {
    // homeSetUsername(e.target.value);
    setUsername(e.target.value);
  };
  return (
    <div className="w-full h-full">
      <div className="flex items-center space-x-10 bg-[#008069] text-white pt-16 px-10 pb-5">
        <BsArrowLeft
          className="cursor-pointer text-2xl font-bold"
          onClick={handleCloseOpenProfile}
        />
        <p className="font-semibold">Profile</p>
      </div>

      {/* UPDATE PROFILE SECTION */}
      <div className="flex flex-col justify-center items-center my-12">
        <label htmlFor="imgInput">
          <img
            className="rounded-full w-[15vw] h-[15vw] cursor-pointer"
            src="https://cdn.pixabay.com/photo/2023/09/19/12/34/dog-8262506_960_720.jpg"
            alt=""
          />
        </label>
        <input type="file" id="imgInput" className="hidden" />
      </div>

      {/* NAME SECTION */}
      <div className="bg-white px-3">
        <p className="py-3">Your name</p>

        {!flag && (
          <div className="w-full flex justify-between items-center">
            {/* <p className="py-3">{homeUsername || "Username"}</p> */}
            <p className="py-3">{username || "Username"}</p>
            <BsPencil onClick={handleFlag} className="cursor-pointer" />
          </div>
        )}

        {flag && (
          <div className="w-full flex justify-between items-center py-2">
            <input
              onChange={handleChange}
              className="w-[80%] outline-none border-b-2 border-blue-700 p-2"
              type="text"
              placeholder="Enter your name"
              //   value={homeUsername}
              value={username}
              autoFocus
            />
            <BsCheck2
              onClick={handleCheckClick}
              className="cursor-pointer text-2xl"
            />
          </div>
        )}
      </div>

      <div className="px-3 my-5">
        <p className="py-10">
          This is not your Username, this name will be visible to your WhatsApp
          contacts.
        </p>
      </div>
    </div>
  );
};

export default Profile;
