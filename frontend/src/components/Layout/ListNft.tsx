
import Image from "next/image";
import InputL from "../InputL";
import { Button } from "../ui/button";

const ListNft = () => {
  return (
    <section className="px-6 max-h-fit flex flex-col gap-5">
      <h1 className="text-3xl border-b py-2">List NFts</h1>
      <div className="lg:grid grid-cols-[2fr_1fr] max-lg:grid-rows-2  gap-4 ">
        {/* Left side */}
        <div className="border-violet-50 border  px-7 py-5 grid grid-rows-4 gap-4 shadow-2xl shadow-violet-500/50 rounded-lg">
          {/*  take nft contract address as a input */}
          <InputL placeholder="0x123456" lable="NFT Address " />
          {/*  take nft Token Id as a input */}
          <InputL type="number" placeholder="#123" lable="Token Id" />
          {/*  take nft Price as a input */}
          <InputL type="number" placeholder="0.01 Eth" lable="Listing Price" />
          <div className="flex items-center w-full">
            <Button
              size={"lg"}
              className="bg-violet-500 hover:bg-violet-600 hover:shadow-lg cursor-pointer active:scale-95 active:bg-violet-700 w-full"
            >
              List NFT now
            </Button>
          </div>
        </div>
        <div className="border-violet-50 border  shadow-2xl shadow-violet-500/50 rounded-lg px-6 py-5">
        <div className="flex-1 h-full w-full">
          <Image src="/nft.png" alt="nft" width={500} height={500} className="rounded-lg w-full h-full object-cover fit" />
        </div>
        </div>
      </div>
    </section>
  );
};
export default ListNft;
