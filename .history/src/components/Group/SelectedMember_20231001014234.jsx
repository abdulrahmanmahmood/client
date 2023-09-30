import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const SelectedMember = () => {
  const handleRemoveMember = () => {};
  return (
    <div className="flex items-center bg-slate-300 rounded-full">
      <img
        className="w-7 h-7 rounded-full"
        src="https://cdn.pixabay.com/photo/2022/04/15/21/52/digital-graphics-7135248_640.jpg"
        alt=""
      />
      <p className="px-2">Username</p>
      <AiOutlineClose
        onClick={handleRemoveMember}
        className="pr-1 cursor-pointer"
      />
    </div>
  );
};

export default SelectedMember;
