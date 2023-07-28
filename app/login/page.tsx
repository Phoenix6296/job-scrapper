"use client";
import { Button, Input } from "@/components/common";
import Link from "next/link";
import { useState, FormEvent } from "react";
import Image from "next/image";
import { handleGoogleSignIn, handleSignIn } from "@/utils/apis/auth";
import { Toaster } from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSignIn(email, password, setLoading);
  };

  return (
    <section className="xl:max-w-[1600px] mx-auto grid md:grid-cols-2 grid-cols-1 h-[100dvh]">
      <div className="w-[90%] mx-auto flex flex-col justify-center">
        <h1 className="text-3xl mb-20">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            label="Email"
            placeholder="Email"
            title="Email"
            type="email"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            title="Password"
            placeholder="Password"
            type="password"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            title="Login"
            type="submit"
            className="bg-primary text-white"
            loading={loading}
          />
          <p className="text-center">or Login using</p>
          <div className="mx-auto">
            <Image
              src="/google_logo.png"
              alt="Google"
              width={50}
              height={50}
              className="cursor-pointer"
              onClick={() => handleGoogleSignIn()}
            />
          </div>
          <p className="text-center">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary">
              Sign up
            </Link>
          </p>
        </form>
      </div>
      <div className="md:flex hidden items-center justify-center">
        <Image src="/banner.jpg" alt="Banner" width={700} height={600} />
      </div>
      <Toaster />
    </section>
  );
}
