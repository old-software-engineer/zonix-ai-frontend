import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {

  const navigate = useNavigate()

  const handleLogout = () => {
    if (localStorage.getItem("access_token")) {
      localStorage.removeItem("access_token");
      navigate("/login");
      toast.success("Logged out successfully.");
    }
  };
  return (
    <Wrapper className="animate bg-primary" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LogoIcon />
          <h1 className="whiteColor font20" style={{ marginLeft: "15px" }}>
            ZONIX AI
          </h1>
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-60}
            className="font-semibold cursor-pointer !text-white hover:!text-gray-200 px-3 py-2 m-2"
          >
            Home
          </Link>
      
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
            className="font-semibold cursor-pointer text-white hover:text-gray-200 px-3 py-2 m-2"
          >
            Projects
          </Link>
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
            className="font-semibold cursor-pointer text-white hover:text-gray-200 px-3 py-2 m-2"
          >
            Contact
          </Link>
     
      </UlStyle>
      <div className="flex items-center justify-center  border-2">
    
      <UlStyle className="flexSpaceCenter " >
      <Link
              to="/"
              onClick={handleLogout}
              className="bg-gray-100 rounded-xl font-semibold cursor-pointer px-3 py-2"
              
            >
              Logout
            </Link>
      </UlStyle>
          
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
