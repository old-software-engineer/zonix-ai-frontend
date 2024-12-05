import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/project/new");
  };

  const [teamsData,setTeamsData] = useState([]);

  useEffect(()=>{
    const fetchTeams = async (accessToken) => {
      const response = await fetch("https://graph.microsoft.com/v1.0/me/joinedTeams", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setTeamsData(data);
        return data.value;
      } else {
        return null;
      }
    };
    const access_token = localStorage.getItem("access_token");

    fetchTeams(access_token);
  },[])

  const teams = [
    {
      id: 1,
      name: "Marketing team",
      created_by: "Created by Kenny Mattheyssen",
      created_at: " on 30/11/2024",
    },
    {
      id: 2,
      name: "Fun team",
      created_by: "Created by Kenny Mattheyssen",
      created_at: " on 30/11/2024",
    },
    {
      id: 3,
      name: "HR team",
      created_by: "Created by Kenny Mattheyssen ",
      created_at: " on 30/11/2024",
    },

    {
      id: 4,
      name: "HR team",
      created_by: "Created by Kenny Mattheyssen ",
      created_at: " on 30/11/2024",
    },
    {
      id: 5,
      name: "HR team",
      created_by: "Created by Kenny Mattheyssen ",
      created_at: " on 30/11/2024",
    },
    {
      id: 6,
      name: "HR team",
      created_by: "Created by Kenny Mattheyssen ",
      created_at: " on 30/11/2024",
    },
  ];

  return (
    <Wrapper id="home">
      <div className="whiteBg mt-32">
        <div className="mb-40">
          <div className="container">
            <HeaderInfo>
              <h1 className="font40 extraBold md:ml-10">My project teams</h1>
              <p className="font13 md:ml-10">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut
                <br />
                labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
            </HeaderInfo>
            <div className="row textCenter">
              {teams.map((team) => (
                <div
                  className="col-xs-12 col-sm-4 col-md-4 col-lg-4"
                  key={team.id}
                >
                  <ProjectBox
                    name={team.name}
                    created_by={team.created_by}
                    created_at={team.created_at}
                  />
                </div>
              ))}
            </div>

            <div className="row flexCenter">
              <div className=" mt-28">
                <div>
                  <button
                    className="bg-white border-primary border-2  px-8 py-3 rounded-xl text-primary font-semibold m-4"
                    onClick={handleRedirect}
                  >
                    Create new project team
                  </button>
                </div>
                {/* <FullButton title="Create new project team" action={() => alert("clicked")} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
