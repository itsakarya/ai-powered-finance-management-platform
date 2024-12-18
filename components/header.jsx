import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard } from "lucide-react";

const Header = () => {
  return (
    <div className="fixed top-0 bg-white/80 backdrop-blur-md z-50 border-b w-full">
      <nav className="container mx-auto p-4 flex item-center justify-between">
        <Link href="/">
          <Image
            src={"/logo.png"}
            width={200}
            height={60}
            alt="logo"
            className="h-12 w-auto object-contain"
          />
        </Link>
        <div className="flex space-x-4 items-center">
          <SignedIn>
            <Link href={"/dashboard"} className="text-gray-600 hover:text-blue-600 item-center gap-2">
            <Button variant="outline">
              <LayoutDashboard size={18}/>
              <span className="hidden sm:inline ">Dashboard</span>
              </Button>
            </Link>
            <Link href={"/dashboard"}>
            <Button className='flex items-center gap-2'>
              <LayoutDashboard size={18}/>
              <span className="hidden sm:inline ">Dashboard</span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton appearance={{
              elements:{
                avatarBox: 'size-10'
              }}
            }/>
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;
