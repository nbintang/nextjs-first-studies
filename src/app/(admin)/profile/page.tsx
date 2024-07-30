"use client";

import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  // Optional: handle loading and authentication states
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return <div>You are not authenticated</div>;
  }

  // Check if session is null or undefined
  if (!session) {
    return <div>No session data available</div>;
  }

  return (
    <div>
      {/* Ensure that session and user are not null */}
      <h1>{session.user?.fullname || "No name available"}</h1>
    </div>
  );
}