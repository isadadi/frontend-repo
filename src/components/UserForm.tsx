"use client";
import UpdateButton from "@/components/UpdateButton";
import { Alert, TextField, Typography } from "@mui/material";
import { changeValue } from "../store/userSlice";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store/store";
import { ChangeEvent, useEffect } from "react";
import Link from "next/link";

type User = {
  name: string;
  email: string;
};
type Props = {
  user: User;
};
export default function UserForm({ user }: Props) {
  const { data } = useSelector((state: RootState) => state.user);
  const { token } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeValue({ value: user }));
  }, [user]);

  const handleChangeForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(
      changeValue({ value: { ...data, [e.target.name]: e.target.value } })
    );
  };

  return (
    <div className="flex flex-col gap-2 items-start">
      <TextField
        label="Email"
        id="filled-hidden-label-normal"
        defaultValue={user.email}
        variant="filled"
        value={data?.email}
        onChange={handleChangeForm}
        name="email"
      />
      <TextField
        label="Name"
        id="filled-hidden-label-normal"
        defaultValue={user.name}
        variant="filled"
        value={data?.name}
        name="name"
        onChange={handleChangeForm}
      />
      <UpdateButton />

      {!token && (
        <div>
          <Typography>Please login to update data </Typography>
          <Link href="/login">Click to login</Link>
        </div>
      )}
    </div>
  );
}
