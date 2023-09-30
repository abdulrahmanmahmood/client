import React, { useState } from "react";
import { TbCircleDashed } from "react-icons/tb";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { ImAttachment } from "react-icons/im";
import {
  BsEmojiSmile,
  BsFilter,
  BsMicFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ChatCard from ''
// import MessageCard from "./MessageCard/MessageCard";
import "./HomePage.css";
// import Profile from "./Profile/Profile";
// import { Menu, MenuItem } from "@mui/material";
// import CreateGroup from "./Group/CreateGroup";

const HomePage = () => {
  const [queries, setQueries] = useState(null);
  const [CurrentChat, setCurrentChat] = useState(null);
  const [content, setContent] = useState("");
  const [isProfile, setIsProfile] = useState(false);
  const [isGroup, setIsGroup] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  // const [username, setUsername] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClickOnCard = () => setCurrentChat(true);
  const handleSearch = () => {};
  const handleCreateNewMessage = () => {};
  const HandleNavigate = () => setIsProfile(true);
  const handleCloseOpenProfile = () => setIsProfile(false);
  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleCreateGroup = () => setIsGroup(true);
  return (
    <div className="relative">
      <div className="w-full py-14 bg-[#00a884]"></div>
      <div className="flex bg-[#f0f2f5] h-[90vh] absolute left-[2vw] top-[5vh] w-[96vw]">
        <div className="left w-[30%] bg-[#e8e9ec] h-full">
          {/* GROUP */}
          {/* {isGroup && <CreateGroup />} */}

          {/* PROFILE */}
          {isProfile && (
            <div className="w-full h-full">
              {/* <Profile
                handleCloseOpenProfile={handleCloseOpenProfile}
                // homeSetUsername={setUsername}
                // homeUsername={username}
              /> */}
            </div>
          )}

          {!isProfile && !isGroup && (
            <div className="w-full">
              {/* HOME */}
              <div className="flex justify-between items-center p-3">
                <div className="flex items-center space-x-3">
                  <img
                    onClick={HandleNavigate}
                    className="rounded-full w-10 h-10 curser-pointer cursor-pointer"
                    src="https://cdn.pixabay.com/photo/2014/01/05/01/19/dragon-238931_1280.jpg"
                    alt=""
                  />
                  <p>AhmedUKamel</p>
                </div>
                <div className="space-x-3 text-2xl flex">
                  <TbCircleDashed
                    className="cursor-pointer"
                    onClick={() => navigate("/status")}
                  />
                  <BiCommentDetail className="cursor-pointer" />
                  <div>
                    <BsThreeDotsVertical
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      className="cursor-pointer"
                    />
                    {/* <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleCreateGroup}>
                        Create group
                      </MenuItem>
                      <MenuItem onClick={handleClose}>Log out</MenuItem>
                    </Menu> */}
                  </div>
                </div>
              </div>

              {/* SEARCH BAR HERE */}
              <div className="relative flex justify-center items-center bg-white py-4 px-3">
                <input
                  className="border-none outline-none bg-slate-200 rounded-md w-[93%] pl-9 py-2"
                  type="text"
                  placeholder="Search or Start New Chat..."
                  onChange={(e) => {
                    setQueries(e.target.value);
                    handleSearch(e.target.value);
                  }}
                  value={queries}
                />
                <AiOutlineSearch className="left-5 top-7 absolute" />
                <div>
                  <BsFilter className="ml-4 text-3xl" />
                </div>
              </div>

              {/* ALL USERS HERE */}
              <div className="bg-white overflow-y-scroll h-[76vh] px-3">
                {queries &&
                  [1, 1, 1, 1, 1, 1].map((item) => (
                    <div onClick={handleClickOnCard}>
                      <hr />
                      {/* <ChatCard /> */}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* DEFAULT WHATSAPP PAGE */}
        {!CurrentChat && (
          <div className="w-[70%] flex flex-col items-center justify-center h-full">
            <div className="max-w[70%] text-center">
              <img
                src="https://res.cloudinary.com/zarmariya/image/upload/v1662264838/whatsapp_multi_device_support_update_image_1636207150180-removebg-preview_jgyy3t.png"
                alt=""
              />
              <h1 className="text-4xl text-gray-600">WhatsApp Web</h1>
              <p className="my-9">
                Send and receive messages without keeping your phone online. Use
                WhatsApp Web on Up to 4 Linked devices and one phone at the same
                time.
              </p>
            </div>
          </div>
        )}

        {/* MESSAGE PART */}
        {CurrentChat && (
          <div className="w-[70%] relative bg-blue-200">
            <div className="header absolute top-0 w-full bg-[#f0f2f5]">
              <div className="flex justify-between">
                <div className="py-3 space-x-4 flex items-center px-3">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://cdn.pixabay.com/photo/2014/01/05/01/19/dragon-238931_1280.jpg"
                    alt=""
                  />
                  <p>Username</p>
                </div>
                <div className="py-3 flex space-x-4 items-center px-3">
                  <AiOutlineSearch />
                  <BsThreeDotsVertical />
                </div>
              </div>
            </div>
            {/* MESSAGE SECTION */}
            <div className="px-10 h-[85vh] overflow-y-scroll">
              <div className="space-y-1 flex flex-col justify-center mt-20 py-2">
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
                  // (item, i) => (
                  //   <MessageCard
                  //     isReqUserMessage={i % 2 === 0}
                  //     content={"Message"}
                  //   />
                  // )
                )}
              </div>
            </div>
            {/* FOOTER PART */}
            <div className="footer bg-[#f0f2f5] absolute bottom-0 w-full py-3 text-2xl">
              <div className="flex justify-between items-center px-5 relative">
                <BsEmojiSmile className="cursor-pointer" />
                <ImAttachment />
                <input
                  type="text"
                  className="py-2 outline-none border-none bg-white pl-4 rounded-md w-[85%]"
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Type message here..."
                  value={content}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleCreateNewMessage();
                      setContent("");
                    }
                  }}
                />
                <BsMicFill />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
