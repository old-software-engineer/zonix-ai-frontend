import React from "react";
import { useNavigate } from "react-router-dom";

function TeamCard({ id, name, created_by, created_at }) {
  const navigate = useNavigate();

  const handleRedirect = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="">
      <div
        className="bg-white m-2 p-2 text-blue-400 font-bold rounded-2xl cursor-pointer w-[200px] h-[200px]"
        onClick={() => handleRedirect(id)}
      >
        <h2 className="m-2 p-2 text-center text-2xl">{name}</h2>
        <p className="m-2 p-2 text-wrap text-center font-semibold text-sm">
          {created_by} {created_at}
        </p>
      </div>
    </div>
  );
}

export default TeamCard;
