const API_BASE_URL = "http://localhost:8000";

export const fetchProfile = async (accessToken) => {
  const response = await fetch(`${API_BASE_URL}/graph/me?access_token=${accessToken}`);
  if (!response.ok) {
    throw new Error("Failed to fetch profile data");
  }
  return await response.json();
};

export default { fetchProfile };
