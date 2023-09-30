import React from "react";
import { useNavigate } from "react-router-dom";

const StatusUserCard = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/status/{userId}`);
  };
  return (
    <div
      onClick={handleNavigate}
      className="cursor-pointer flex items-center p-3"
    >
      <div>
        <img
          className="h-7 w-7 lg:w-10 lg:h-10 rounded-full"
          src="https://cdn.pixabay.com/photo/2014/01/05/01/19/dragon-238931_1280.jpg"
          alt=""
        />
      </div>
      <div className="ml-2 text-white">
        <p>AhmedUKamel</p>
      </div>
    </div>
  );
};

export default StatusUserCard;
