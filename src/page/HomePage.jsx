import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import Teams from "../components/Teams/Teams";
import CreateTeam from "../components/Teams/CreateTeams";
import ManagementCarousel from "../components/Teams/ManagementCarousel";

const HomePage = () => {


  // const handleLogout = () => {
  //   const activeAccount = instance.getActiveAccount();
  //   localStorage.removeItem("token");
  //   console.log(
  //     "=========================== Active account : ",
  //     instance.getActiveAccount()
  //   );
  //   instance.logoutRedirect({
  //     account: activeAccount,
  //     postLogoutRedirectUri: "/",
  //   });
  //   // navigate('/')
  // };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Teams />
        <CreateTeam />
        <div className="mt-10 bg-gray-100">
        <h1 className="text-xl text-center font-bold mt-10 pt-10">Importance of Project Management</h1>
        <ManagementCarousel/>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
