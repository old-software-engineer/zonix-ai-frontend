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
    <div className=" flex flex-col lg:flex-row">
      {/* Left Container */}
      <div className=" flex flex-col justify-center items-center h-auto lg:h-[580px] w-full  lg:w-1/2">
        <div className="text-center">
          <p className="p-2 text-lg">Did you Know?</p>
          <p className="p-2 text-lg">
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
      {/* Image Container */}
      <div className=" w-[80%] mx-auto  lg:w-1/2 h-[50vh]">
        <img
          src="https://react-landing-page-template-2021.vercel.app/assets/images/happyTeam.jpeg"
          alt="img"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
  
  );
}
export default CreateTeam;
