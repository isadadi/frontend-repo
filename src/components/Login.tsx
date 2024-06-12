"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../store/authSlice";
import { auth } from "../apis/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, TextField, Typography, Box, Alert } from "@mui/material";
import { createToken } from "@/app/action";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken();
      createToken(token);
      dispatch(loginSuccess(token));
      router.push("/");
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <div className="space-y-2 w-96 px-3">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          flexGrow: 0,
          flexShrink: 1,
          width: "100%",
        }}
      >
        <Typography variant="h4" component="h1">
          Login
        </Typography>
        <form
          method="post"
          onSubmit={handleLogin}
          className="flex flex-col gap-2 w-full"
        >
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
          />
          <Button
            variant="contained"
            color="primary"
            disabled={loading}
            sx={{
              width: "100%",
            }}
            type="submit"
          >
            Login
          </Button>
        </form>
      </Box>
      {error && <Alert severity="error">{error}</Alert>}
    </div>
  );
};

export default Login;
