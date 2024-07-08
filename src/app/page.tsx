import { cookies } from "next/headers";
import Image from "next/image";
import Button from "./button";

export default function Home() {
console.log(cookies().getAll());

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button />
    </main>
  );
}
