import { cookies } from "next/headers";
import Image from "next/image";
import Button from "./button";

export default function Home() {

  const sessionCookie = cookies().get("__session");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{`Session cookie from server ${sessionCookie}`}</p>
      <Button />
    </main>
  );
}
