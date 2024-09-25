"use client";

import { useRouter } from "next/navigation";
import useAuth from "../../hooks/useAuth";

const ProtectedPage = () => {
  const user = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/auth");
    return <p>Loading...</p>;
  }

  return <div>Welcome, {user.email}</div>;
};

export default ProtectedPage;
