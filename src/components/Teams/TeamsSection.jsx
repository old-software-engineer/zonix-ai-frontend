import React from "react";
import { useNavigate } from "react-router-dom";

function CreateTeam() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    console.log("Create new team called....");
    navigate("/project/new");
  };
  return (
    <div className="my-10 w-full h-[60vh]">
      <div className="parent-container  flex ">
        <div className="left-container flex flex-col justify-center items-center h-[580px] w-1/2">
         
          <div>
            <p className=" text-center p-2 text-lg">Did you Know?</p>
            <p className=" text-center p-2 text-lg">
              Goals have a 90% higher success rate if you follow up the progress
              on a weekly base.
            </p>
          </div>
          <div>
            <button
              className="bg-primary p-3 rounded-xl text-white font-semibold m-4"
              onClick={handleRedirect}
            >
              Create new project team
            </button>
          </div>
        </div>
        <div className="image-container w-1/2 h-[60vh]">
          <img src="https://react-landing-page-template-2021.vercel.app/assets/images/happyTeam.jpeg" alt="img" className="w-full h-full object-cover"/>
        </div>
      </div>
    </div>
  );
}
export default CreateTeam;
