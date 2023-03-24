import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main className={`${inter.className}`}></main>;
}

// https://en.wikipedia.org/w/api.php?
