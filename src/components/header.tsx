"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-red-900/60 backdrop-blur-sm text-white p-4 fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-end space-x-4">
        <Button className="bg-red-700 hover:bg-red-600 text-white">
          Login
        </Button>
        <Button className="bg-red-700 hover:bg-red-600 text-white">
          Register
        </Button>
      </nav>
    </header>
  );
}
