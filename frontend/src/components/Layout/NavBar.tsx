"use client";
// import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Wallet,
  // Search,
  // Menu,
  // X,
  // CakeIcon,
  Cake,
  //   User
} from "lucide-react";
// import Link from 'next/link';

import Link from "next/link";

const NavBar = () => {
  // const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    // NavBar Container
    <nav className="w-full h-16 sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b grid grid-cols-2 items-center justify-between">
      {/* Left Nav */}
      <div className="flex justify-between items-center ">
        <Link href={"/"} className="text-xl font sm:flex hidden ">
          {" "}
          <span className="text-violet-500 font-bold">NFT</span>Canvas
        </Link>

        <div className="flex gap-6 items-center justifFy-center">
          <Link
            href={"/marketplace"}
            className="hover:text-violet-400 transition-all"
          >
            Maketplace
          </Link>
          <Link
            href={"/listnft"}
            className="hover:text-violet-400 transition-all"
          >
            {" "}
            List NFTs
          </Link>
          <Link
            href={"/mynft"}
            className="hover:text-violet-400 transition-all"
          >
            My NFTs
          </Link>
        </div>
      </div>

      {/* rignt Nav */}
      <div className="flex justify-end items-center gap-6">
        {/* <div className="flex items-center gap-4">
          {isSearchOpen ? (
            <div className="relative flex items-center animate-fade-in">
              <input
                type="text"
                placeholder="Search NFTs..."
                className="w-full sm:w-[200px] h-9 rounded-lg pl-4 pr-9 bg-muted text-sm"
                autoFocus
              />
              <X
                className="absolute right-2 h-4 w-4 cursor-pointer text-muted-foreground"
                onClick={() => setIsSearchOpen(false)}
              />
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="hidden sm:flex cursor-pointer"
            >
              <Search className="h-5 w-5 cursor-pointer" />
            </Button>
          )}
        </div> */}

        {/* <Link href="/mint"> */}
          <Button variant="outline" size="default" className="flex flex-row gap-2 bg items-center justify-center cursor-pointer ">
            <span className="text-violet-700">
              <Cake/>
            </span>
            <span>Mint Cake</span>
          </Button>
        {/* </Link> */}

        <Link href="/">
          <Button variant="outline" size="sm" className="gap-2">
            <Wallet className="h-4 w-4" />
            <span className="hidden sm:inline">Connect Wallet</span>
          </Button>
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;
