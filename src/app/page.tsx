"use client";

import UserContextProvider from "@/contexts/UserContextProvider";
import UserSection from "./UserSection";

export default function Home() {
  return (
    <UserContextProvider>
      <div className="flex flex-col items-center pt-20">
        <UserSection/>
      </div>
    </UserContextProvider>
  );
}
