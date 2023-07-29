"use client";
import { handleSignOut } from "@/utils/apis/auth";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
export default function Dashboard() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          handleSignOut(router);
        }}
      >
        Signout
      </button>
      Dashboard
      <Toaster />
    </div>
  );
}
