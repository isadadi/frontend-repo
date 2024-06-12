"use client";
import React from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import axios from "axios";

const UpdateButton: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const { data } = useSelector((state: RootState) => state.user);

  const handleClick = async () => {
    try {
      const response = await axios.put(
        "http://localhost:3000/user/update-user-data",
        { userId: "HTzfOUCc20OFvaAGWZHv", data },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Data updated", response.data);
    } catch (error: any) {
      console.error(
        "Error updating data",
        error.response?.data || error.message
      );
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      Update Data
    </Button>
  );
};

export default UpdateButton;
