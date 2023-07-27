"use client";
import { Button } from "@/components/common";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = ({ router }: { router: any }) => {
  return (
    <nav className="flex items-center justify-between px-10 h-20 sticky top-0">
      <Link href="/" className="text-2xl tracking-wider">
        JOBIFY
      </Link>
      <div className="flex gap-2">
        <Button
          title="Login"
          containerStyles="w-24"
          onClick={() => router.push("/login")}
        />
        <Button
          title="Signup for free"
          className="bg-primary hover:bg-blue-600 text-white"
          containerStyles="w-40"
          onClick={() => router.push("/signup")}
        />
      </div>
    </nav>
  );
};

export default function Home() {
  const router = useRouter();
  return (
    <main className="h-[100vh] flex flex-col justify-between bg-gray-100 ">
      <Navbar router={router} />
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
          onClick={() => router.push("/signup")}
        />
      </div>
    </main>
  );
}
