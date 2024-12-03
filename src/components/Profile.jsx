import { useMsal } from "@azure/msal-react";

const Profile = () => {
  const { instance, accounts } = useMsal();

  const handleLogout = () => {
    instance.logoutPopup();
  };

  if (accounts.length > 0) {
    return (
      <div>
        <h3>Welcome, {accounts[0].name}</h3>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return <div>Please log in.</div>;
};

export default Profile;
