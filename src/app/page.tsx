import UserForm from "@/components/UserForm";
import { fetchUser } from "./action";
import { Alert } from "@mui/material";

export default async function Home() {
  const user = await fetchUser();

  return (
    <main className="flex min-h-screen flex-col items-center gap-2 p-4">
      {user.error && (
        <Alert variant="filled" severity="error">
          Failed to fetch user data. {user.data.message}
        </Alert>
      )}
      <UserForm user={user.data} />
    </main>
  );
}
