"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Wallet,
  Search,
  // Menu,
  X,
  //   User
} from "lucide-react";
// import Link from 'next/link';

import Link from "next/link";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/70 border-b">
//       <div className="container flex h-16 items-center justify-between">
//         <div className="flex items-center gap-6">
//           <Link href="/" className="flex items-center space-x-2">
//             <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-nft-purple to-nft-purpleDark flex items-center justify-center">
//               <span className="text-white font-bold text-xs">NFT</span>
//             </div>
//             <span className="font-bold text-lg hidden sm:inline-block">NFTCanvas</span>
//           </Link>

//           <nav className="hidden md:flex gap-6">
//             <Link href="/" className="text-sm font-medium hover:text-nft-purple transition-colors">
//               Home
//             </Link>
//             <Link href="/" className="text-sm font-medium hover:text-nft-purple transition-colors">
//               Marketplace
//             </Link>
//             <Link href="/" className="text-sm font-medium hover:text-[#9b87f5] transition-colors">
//               My NFTs
//             </Link>
//           </nav>
//         </div>

//         <div className="flex items-center gap-4">
//           {isSearchOpen ? (
//             <div className="relative flex items-center animate-fade-in">
//               <input
//                 type="text"
//                 placeholder="Search NFTs..."
//                 className="w-full sm:w-[200px] h-9 rounded-lg pl-4 pr-9 bg-muted text-sm"
//                 autoFocus
//               />
//               <X
//                 className="absolute right-2 h-4 w-4 cursor-pointer text-muted-foreground"
//                 onClick={() => setIsSearchOpen(false)}
//               />
//             </div>
//           ) : (
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsSearchOpen(true)}
//               className="hidden sm:flex"
//             >
//               <Search className="h-5 w-5" />
//             </Button>
//           )}

//           <Link href="/">
//             <Button variant="outline" size="sm" className="hidden sm:flex gap-2">
//               <span>List NFT</span>
//             </Button>
//           </Link>

//           <Link href="/">
//             <Button variant="outline" size="sm" className="gap-2">
//               <Wallet className="h-4 w-4" />
//               <span className="hidden sm:inline">Connect Wallet</span>
//             </Button>
//           </Link>

//           <Button
//             variant="ghost"
//             size="icon"
//             aria-label="Toggle Menu"
//             className="md:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//           </Button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="fixed inset-0 top-16 z-40 bg-background animate-fade-in md:hidden">
//           <div className="container py-6 flex flex-col gap-4">
//             <Link
//               href="/" className="flex items-center px-4 py-3 hover:bg-muted rounded-md"
//               onClick={() => setIsOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               href="/"
//               className="flex items-center px-4 py-3 hover:bg-muted rounded-md"
//               onClick={() => setIsOpen(false)}
//             >
//               Marketplace
//             </Link>
//             <Link
//               href="/"
//               className="flex items-center px-4 py-3 hover:bg-muted rounded-md"
//               onClick={() => setIsOpen(false)}
//             >
//               My NFTs
//             </Link>
//             <Link
//               href="/"
//               className="flex items-center px-4 py-3 hover:bg-[] rounded-md"
//               onClick={() => setIsOpen(false)}
//             >
//               List NFT
//             </Link>
//             <div className="mt-4 px-4">
//               <div className="relative">
//                 <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
//                 <input
//                   type="text"
//                   placeholder="Search NFTs..."
//                   className="w-full h-10 pl-9 pr-4 rounded-lg bg-muted"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    // NavBar Container
    <nav className="w-full h-16 sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b grid grid-cols-2 items-center justify-between">
      {/* Left Nav */}
      <div className="flex justify-between items-center ">
        <Link href={'/'} className="text-xl font sm:flex hidden "> <span className="text-violet-500 font-bold">NFT</span>Canvas</Link>

        <div className="flex gap-6 items-center justifFy-center">
          <Link href={"/marketplace"} className="hover:text-violet-400 transition-all">
            Maketplace
          </Link>
          <Link href={"/listnft"} className="hover:text-violet-400 transition-all">
            {" "}
            List NFTs
          </Link>
          <Link href={"/"} className="hover:text-violet-400 transition-all">
            My NFTs
          </Link>
        </div>
      </div>

      {/* rignt Nav */}
      <div className="flex justify-end items-center gap-6">
        <div className="flex items-center gap-4">
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
        </div>

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
