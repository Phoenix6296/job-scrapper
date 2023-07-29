"use client";
import "@/styles/globals.css";
import { auth } from "@/components/firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/dashboard");
      } else {
        router.push("/");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [router, auth]);

  return (
    <html lang="en">
      <head>
        <title>Jobify</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
