import React, { useEffect, useState } from "react";
import { stories } from "./DummyStories";
import ProgressBar from "./ProgressBar";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const StatusViewer = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [activateIndex, setActivateIndex] = useState(0);
  const navigate = useNavigate();
  const handleNestStory = () => {
    if (currentStoryIndex < stories?.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
      setActivateIndex(activateIndex + 1);
    } else {
      setCurrentStoryIndex(0);
      setActivateIndex(0);
    }
  };
  useEffect(() => {
    const intervalid = setInterval(() => {
      handleNestStory();
    }, 2000);
    return () => clearInterval(intervalid);
  }, [currentStoryIndex]);
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="flex justify-center items-center h-[100vh] bg-slate-900">
        <div className="relative">
          <img
            className="max-h-[96vh] object-contain"
            src={stories?.[currentStoryIndex].image}
            alt=""
          />
          <div className="absolute top-0 flex w-full">
            {stories.map((item, index) => (
              <ProgressBar
                key={index}
                duration={2000}
                index={index}
                activateIndex={activateIndex}
              />
            ))}
          </div>
        </div>
        <div>
          <BsArrowLeft
            onClick={handleNavigate}
            className="text-white text-2xl cursor-pointer absolute top-10 left-10"
          />
          <AiOutlineClose
            onClick={handleNavigate}
            className="text-white text-2xl cursor-pointer absolute top-10 right-10"
          />
        </div>
      </div>
    </div>
  );
};

export default StatusViewer;
