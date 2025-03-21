
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
export default function Header() {


  return (
    <header className="bg-gray-900 shadow-xl">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link href="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Alpha</span>
            <span className="text-slate-700">verse</span>
          </h1>
        </Link>

        <ul className="flex gap-4">
          <Link href="/">
            <li className="hidden md:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className="hidden md:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <SignedIn>
            <UserButton
              appearance={{ elements: { userButtonPopoverCard: { pointerEvents: 'initial',  }, }, }}
            />
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <li className="hidden md:inline text-slate-700 hover:underline">
                Sign In
              </li>
            </Link>
          </SignedOut>
        </ul>
      </div>
    </header>
  );
}
