import React from "react";
import styled from "styled-components";
import ProjectBox from "../Elements/ProjectBox"
import FullButton from "../Buttons/FullButton";

export default function Projects() {
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
    },{
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
      <div className="whiteBg mt-24 ">
        <div className="mb-60">
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
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" key={team.id}>
                  <ProjectBox
                    name={team.name}
                    created_by={team.created_by}
                    created_at={team.created_at}
                  />
                </div>
              ))}
            </div>

            <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
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

