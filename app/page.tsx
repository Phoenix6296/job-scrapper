"use client";
import { Button, Navbar } from "@/components/common";

export default function Home() {
  return (
    <main className="h-[100vh] flex flex-col justify-between bg-gray-100 ">
      <Navbar />
      <div className="mx-auto max-w-[1600px] flex flex-col items-center justify-center h-full w-full relative gap-10">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-6xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-400 to-blue-500">
            Simplify Your Job Search
          </h1>
          <p className="text-xl mt-4 text-gray-500">
            Streamline your job search process by simply providing a list of
            your desired companies and your target role.
          </p>
          <p className="text-xl mt-2 text-gray-500">
            We're here to facilitate the rest, making job hunting an effortless
            experience.
          </p>
        </div>
        <Button
          title="Get Started"
          containerStyles="w-40"
          className="bg-primary hover:bg-blue-600 text-white"
        />
      </div>
    </main>
  );
}
