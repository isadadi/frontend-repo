"use server";
import { cookies } from "next/headers";

export async function createToken(data: string) {
  cookies().set("token", data);
}

export async function getToken() {
  return cookies().get("token")?.value;
}

export async function fetchUser() {
  const token = await getToken();

  const user = await fetch(
    `http://localhost:3000/user/fetch-user-data/HTzfOUCc20OFvaAGWZHv`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const response = await user.json();

  return {
    error: !user.ok,
    data: response,
  };
}
