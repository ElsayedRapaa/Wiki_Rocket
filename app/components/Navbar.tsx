import React from "react";
import Search from "./Search";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between max-md:flex-col max-md:gap-2 bg-slate-600 py-3 px-4 shadow-lg drop-shadow-lg">
      <h2 className="text-3xl font-bold text-white">
        <Link href="/">WikiRocket!</Link>
      </h2>
      <Search />
    </nav>
  );
}
