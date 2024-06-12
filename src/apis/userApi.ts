import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
});

export const updateUserData = async (
  token: string,
  userId: string,
  data: any
) => {
  return await apiClient.put(
    "/update-user-data",
    { userId, data },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const fetchUserData = async (token: string, userId: string) => {
  return await apiClient.get(`/fetch-user-data/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
