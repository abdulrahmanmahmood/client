import React, { useState } from "react";
import { BsArrowLeft, BsCheck2 } from "react-icons/bs";
// import { CircularProgress, Button } from "@mui/material";

const NewGroup = () => {
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [groupName, setGroupName] = useState("");
  return (
    <div className="w-full h-full">
      <div className="flex items-center space-x-10 bg-[#008069] text-white pt-16 px-10 pb-5">
        <BsArrowLeft className="cursor-pointer text-2xl font-bold" />
        <p className="text-xl font-semibold"> New group</p>
      </div>

      <div className="flex flex-col justify-center items-center my-12">
        <label htmlFor="imgInput" className="relative">
          <img
            src="https://cdn.pixabay.com/photo/2014/09/18/18/19/playmobil-451203_640.jpg"
            alt=""
          />
          {isImageUploading && (
            // <CircularProgress className="absolute top-[5rem] left-[6rem]" />
          )}
        </label>
        <input
          type="file"
          className="hidden"
          id="imgInput"
          onChange={() => console.log("ImageOnChange")}
        />
      </div>
      <div className="w-full flex justify-between items-center py-2 px-5">
        <input
          type="text"
          placeholder="Group subject"
          value={groupName}
          className="w-full outline-none border-b-2 border-green-700 px-2 bg-transparent"
          onChange={(e) => setGroupName(e.target.value)}
        />
      </div>

      {groupName && (
        <div className="py-10 bg-slate-200 flex items-center justify-center">
          <Button>
            <div className="bg-[#0c977d] rounded-full p-4">
              <BsCheck2 className="text-white font-bold text-3xl" />
            </div>
          </Button>
        </div>
      )}
    </div>
  );
};

export default NewGroup;
