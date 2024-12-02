import React from 'react'
import { useNavigate } from 'react-router-dom';


function CreateTeam() {

  const navigate = useNavigate()

      const handleRedirect = () => {
        console.log("Create new team called....")
        navigate('/project/new')
      }
  return (
    <div className="my-10 flex flex-col justify-center items-center">
        <div>
            <button className="bg-blue-500 p-2 rounded-xl text-white font-semibold m-4" onClick={handleRedirect}>Create new Project Team</button>
        </div>
        <div>
            <p className=" text-center p-2 text-lg">Did you Know?</p>
            <p className=" text-center p-2 text-lg">Goals have a 90% higher success rate if you follow up the progress on a weekly base.   </p>
        </div>
        {/* <div className="w-full">
          <RightSideCarousel />
        </div> */}
    </div>
  )
}

export default CreateTeam