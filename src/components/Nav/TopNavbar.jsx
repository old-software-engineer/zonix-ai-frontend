import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user,setUser] = useState()

  useEffect(()=>{
    const fetchUserDetails = (token) => {
      fetch("https://graph.microsoft.com/v1.0/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setUser(data)
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    };

    const access_token = localStorage.getItem("access_token")

    fetchUserDetails(access_token);
  },[])

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    if (localStorage.getItem("access_token")) {
      localStorage.removeItem("access_token");
      navigate("/login");
      toast.success("Logged out successfully.");
    }
  };

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <LogoIcon />
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              ZONIX AI
            </h1>
          </Link>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <Link
              activeClass="active"
              style={{ padding: "10px 15px" }}
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              className="font-semibold cursor-pointer px-3 py-2 m-2"
            >
              Home
            </Link>

            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              className="font-semibold cursor-pointer px-3 py-2 m-2"
            >
              Projects
            </Link>
            <Link
              activeClass="active "
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              className="font-semibold cursor-pointer px-3 py-2 m-2"
            >
              Contact
            </Link>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <div className="relative">
              {/* Trigger Button */}
              <button
                className="font-bold text-lg p-2 flex items-center gap-2"
                onClick={toggleDropdown}
              >
                {user && (user.displayName ? user.displayName : user.userPrincipalName)}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transform transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-lg z-10">
                  <Link
                    to="/"
                    onClick={handleLogout}
                    className="block px-4 py-2 text-gray-800 font-semibold bg-gray-50 hover:bg-gray-100 cursor-pointer rounded-lg"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
