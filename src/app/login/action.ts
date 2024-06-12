"use server";
import axios from "axios";

export const updateUser = async (
  _currentState: unknown,
  formData: FormData,
  token: string | null
) => {
  try {
    const response = await axios.put(
      "http://localhost:3000/user/update-user-data",
      { userId: "user-id", data: formData },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log("Data updated", response.data);
  } catch (error: any) {
    console.error("Error updating data", error.response?.data || error.message);
  }
};
