// Navbar.js
"use client";
import { Button, Input } from ".";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 h-20 sticky top-0">
      <h1 className="text-2xl tracking-wider">JOBIFY</h1>
      <div className="flex gap-2">
        <Button title="Login" containerStyles="w-24" />
        <Button
          title="Signup for free"
          className="bg-primary hover:bg-blue-600 text-white"
          containerStyles="w-40"
        />
      </div>
    </nav>
  );
};
