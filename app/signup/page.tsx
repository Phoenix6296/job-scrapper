"use client";
import { Button, Input } from "@/components/common";
import Link from "next/link";
import { useState, FormEvent } from "react";
import Image from "next/image";
import { handleCreateUser, handleGoogleSignIn } from "@/utils/apis/auth";
import { Toaster } from "react-hot-toast";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCreateUser(email, password, confirmPassword, setLoading);
  };

  return (
    <section className="grid md:grid-cols-2 grid-cols-1 h-[100dvh]">
      <div className="w-[90%] mx-auto flex flex-col justify-center">
        <h1 className="text-3xl mb-20">Signup</h1>
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
          <Input
            label="Confirm Password"
            title="Confirm Password"
            placeholder="Confirm Password"
            type="password"
            required={true}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            title="Signup"
            type="submit"
            className="bg-primary text-white"
            loading={loading}
          />
          <p className="text-center">or Signup using</p>
          <div>
            <div className="flex justify-center gap-5">
              <Image
                src="/google_logo.png"
                alt="Google"
                width={50}
                height={50}
                className="cursor-pointer"
                onClick={() => handleGoogleSignIn()}
              />
              {/* <Image
                src="/github_logo.png"
                alt="Github"
                width={50}
                height={50}
              /> */}
            </div>
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-primary">
              Login
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
