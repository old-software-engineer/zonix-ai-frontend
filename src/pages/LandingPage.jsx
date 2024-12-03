import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RightSideCarousel from "./RightSideCarousel";
import MeetZonix from "../components/loginPage/MeetZonix";
import PlanSection from "../components/loginPage/PlanSection";
import Footer from "../components/Footer";
import Faq from "../components/loginPage/Faq";
import LoginButton from "../components/LoginButton";
import Navbar from "../components/NavBar";
import { useMsal } from "@azure/msal-react";

const LandingPage = () => {
  const [accessToken, setAccessToken] = useState("");
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const { instance, accounts } = useMsal();

  const accessTokenRequest = {
    scopes: ["Team.ReadBasic.All", "TeamMember.Read.All"],
    account: accounts[0],
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
    console.log("Access Token : ", accessToken);
  }, [accessToken, navigate]);

  return (
    <>
      {/* <Navbar /> */}
      <div className="flex w-full h-screen relative">
        <div className="sm:w-1/2 w-full">
          <div className="bg-slate-50 flex flex-col items-center justify-center relative h-screen">
            <div className="absolute top-9">
              <h2 className="text-center text-2xl font-semibold">Zonix</h2>
            </div>
            <div className="text-center flex flex-col gap-y-8">
              <div>
                <h1 className="text-4xl font-bold">ZONIX AI</h1>
                <p className="mt-4 text-gray-600">
                  ZONIX, your AI-agent to realize goals with ease!
                </p>
              </div>
              <div className="p-5 border border-gray-400 rounded-lg shadow-xl">
                <button
                  className="bg-blue-500 text-white px-10 py-3 my-3 rounded-lg hover:bg-blue-600"
                >
                  <LoginButton />
                </button>
                <div className="text-[12px] w-96">
                  By continuing, you agree to Anthropic’s Consumer Terms and
                  Usage Policy, and acknowledge their Privacy Policy.
                </div>
              </div>
            </div>
            <button className="absolute bottom-8 py-2 px-4 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">
              Learn more ↓
            </button>
          </div>
        </div>
        <div className="w-1/2 sm:block hidden">
          <RightSideCarousel />
        </div>
      </div>
      <MeetZonix />
      <PlanSection />
      <Faq />
      <Footer />
    </>
  );
};

export default LandingPage;
