"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/${search}/`);
    setSearch("");
  };

  return (
    <form className="w-50 flex items-center gap-2" onSubmit={handleSearch}>
      <input
        type="text"
        className="outline-none border-none rounded-md p-2 w-64"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      <button className="bg-white/50 rounded-md cursor-pointer p-2">🚀</button>
    </form>
  );
}
