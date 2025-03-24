
import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
export default function Header() {
   
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-8 py-6 bg-dark/95 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="font-press-start text-2xl text-primary">αVerse</div>
        <div className="hidden md:flex gap-8">
        <Link
            href="/"
            className="text-white font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/alpha"
            className="text-white font-medium hover:text-primary transition-colors"
          >
            Join Alphaverse
          </Link>
          <Link
              href="/verify-bet"
            className="text-gray-400 font-medium hover:text-primary transition-colors"
          >
            Verfiy Bets
          </Link>
          <Link
            href="/beststrategy"
            className="text-gray-400 font-medium hover:text-primary transition-colors"
          >
            Best Strategys
          </Link>
          <Link
            href="/leaderboard"
            className="text-gray-400 font-medium hover:text-primary transition-colors"
          >
            Leader Board
          </Link>
          <Link
            href="/teststategy"
            className="text-gray-400 font-medium hover:text-primary transition-colors"
          >
            Test Strategy
          </Link>
        </div>
        <div className="flex gap-2 text-black">
          <SignedOut>
            {" "}
            <SignInButton className="hover:bg-red-400 hover:ring-red-500 bg-white cursor-pointer ring-1 ring-amber-50 p-2 text-sm rounded" />
            <SignUpButton className="hover:bg-red-900 hover:ring-red-500 bg-red-600 cursor-pointer ring-1 ring-red-400 p-2 text-sm rounded" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <div className="flex md:hidden">
            <Sheet className="bg-gray-100">
              <SheetTrigger >
                {" "}
                <Menu className="text-white" />
              </SheetTrigger>
              <SheetContent className="bg-gray-100 text-black">
                <SheetHeader>
                  <SheetTitle>Alphaverse</SheetTitle>
                  <SheetDescription>
                  <div className="py-10 flex flex-col gap-4 justify-center items-center">
          
                  <Link
            href="/"
            className="text-white font-medium hover:text-primary transition-colors"
          >
            Home
          </Link><Link
            href="/alpha"
            className="text-black font-medium hover:text-black transition-colors"
          >
            Join Alphaverse
          </Link>
          <Link
            href="/verify-bet"
            className="text-gray-400 font-medium hover:text-black transition-colors"
          >
            Verfiy Bets
          </Link>
          <Link
            href="/beststrategy"
            className="text-gray-400 font-medium hover:text-black transition-colors"
          >
            Best Strategys
          </Link>
          <Link
            href="/leaderboard"
            className="text-gray-400 font-medium hover:text-black transition-colors"
          >
            Leader Board
          </Link>
          <Link
             href="/teststategy"
            className="text-gray-400 font-medium hover:text-primary transition-colors"
          >
            Test Strategy
          </Link>
        </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}
