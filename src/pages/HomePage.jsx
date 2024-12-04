import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import Teams from "../components/Teams/Teams";
import CreateTeam from "../components/Teams/TeamsSection";
import ManagementCarousel from "../components/Teams/ManagementCarousel"; 

const HomePage = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const accessToken = localStorage.getItem("access_token");

      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/graph/me?access_token=${accessToken}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }

        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow">
        <div className="mt-10">
          <h1 className="container mx-auto text-lg font-bold">
            Hello, {profile?.userPrincipalName}
          </h1>
        </div>
        <Teams />
        <CreateTeam />
        <div className="mt-10 bg-gray-100">
          <h1 className="text-xl text-center font-bold mt-10 pt-10">
            Importance of Project Management
          </h1>
          <ManagementCarousel />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
