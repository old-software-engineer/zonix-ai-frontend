  import React, { useState } from "react";
  import Navbar from "../NavBar";

  import Footer from "../Sections/Footer";
import TopNavbar from "../Nav/TopNavbar";

  function CreateTeam() {
    const [teamName, setTeamName] = useState("");
    const [description, setDescription] = useState("");
    const [ownerId, setOwnerId] = useState("");
    const [statusMessage, setStatusMessage] = useState("");

    // const handleCreateTeam = async (e) => {
    //   e.preventDefault();

    //   const url = "https://graph.microsoft.com/v1.0/teams";

    //   const payload = {
    //     "template@odata.bind":
    //       "https://graph.microsoft.com/v1.0/teamsTemplates('standard')",
    //     displayName: teamName,
    //     description: description,
    //     members: [
    //       {
    //         "@odata.type": "#microsoft.graph.aadUserConversationMember",
    //         roles: ["owner"],
    //         "user@odata.bind": `https://graph.microsoft.com/v1.0/users/${ownerId}`,
    //       },
    //     ],
    //   };

    //   try {
    //     const accessToken = localStorage.getItem("access_token");
    //     console.log("========================access token" ,accessToken)
    //     // Replace with your Microsoft Graph API access token
    //     const response = await fetch(url, {
    //       method: "POST",
    //       headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(payload),
    //     });

    //     if (response.ok) {
    //       const data = await response.json();
    //       setStatusMessage(`Team created successfully! ID: ${data.id}`);
    //     } else {
    //       const error = await response.json();
    //       setStatusMessage(`Error: ${error.error.message}`);
    //     }
    //   } catch (error) {
    //     setStatusMessage(`Request failed: ${error.message}`);
    //   }
    // };

    return (
      <div className="flex flex-col min-h-screen">
          <TopNavbar />
        <main className="flex-grow">
          <div className="mt-40">
            <div className="bg-gray-50 container mx-auto flex flex-col p-8 h-auto rounded-lg">
              <h1 className="text-lg font-bold ">Create new team</h1>
              <div className="">
                <form>
                  <div className="flex flex-col my-4">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="p-1 border-gray-500 border rounded-lg"
                      placeholder="Enter your team name.."
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex flex-col my-4">
                    <label htmlFor="description">Description</label>
                    <textarea
                      className="p-1 border-gray-500 border rounded-lg outline-1"
                      id="description"
                      rows={5}
                      cols={10}
                      placeholder="Enter your team description.."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex flex-col my-4">
                    <label htmlFor="tool">Preferred Tool:</label>
                    <select
                      id="tool"
                      className="tool p-2 border-black border rounded-lg cursor-pointer bg-white outline-1"
                    >
                      <option value="select-tool">Select Tool</option>
                      <option value="microsoft-teams">Microsoft Teams</option>
                    </select>
                  </div>

                  <div className="flex flex-col my-4">
                    <label htmlFor="ownerId">Team members</label>
                    <textarea
                      className="p-1 border-gray-500 border rounded-lg outline-1"
                      id="ownerId"
                      rows={2}
                      cols={10}
                      placeholder="Eg: johndoe@outlook.com"
                      value={ownerId}
                      onChange={(e) => setOwnerId(e.target.value)}
                      required
                    />
                  </div>

                 

                  <div className="">
                    <button
                      type="submit"
                      className="bg-primary px-8 py-2 rounded-lg text-white mt-10 cursor-pointer"
                    >
                      Save
                    </button>
                  </div>
                </form>

                {statusMessage && (
                  <div className="mt-4 p-2 bg-gray-200 text-gray-800 rounded">
                    {statusMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  export default CreateTeam;
