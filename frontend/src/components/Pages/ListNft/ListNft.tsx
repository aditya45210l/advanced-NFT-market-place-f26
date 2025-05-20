import Image from "next/image";
import InputL from "../../InputL";
import { Button } from "../../ui/button";

const ListNft = () => {
  return (
    <section className="px-6 flex flex-col gap-5 flex-1 min-h-full ">
      {/* <h1 className="text-3xl border-b py-2">List NFts</h1> */}
      <div className="lg:grid grid-cols-[2fr_1fr] max-lg:grid-rows-2 gap-4 my-auto">
        {/* Left side */}
        <div className="border-violet-50 border px-7 flex flex-col gap-5 pt-3 pb-5 shadow-2xl shadow-violet-500/50 rounded-lg">
          <h1 className="text-2xl border-b h-fit">List NFTs</h1>
          <div className="grid grid-rows-4 gap-4">
            {/*  take nft contract address as a input */}
            <InputL placeholder="0x123456" lable="NFT Address " />
            {/*  take nft Token Id as a input */}
            <InputL type="number" placeholder="#123" lable="Token Id" />
            {/*  take nft Price as a input */}
            <InputL
              type="number"
              placeholder="0.01 Eth"
              lable="Listing Price"
            />
            <div className="flex items-center w-full">
              <Button
                size={"lg"}
                className="bg-violet-500 hover:bg-violet-600 hover:shadow-lg cursor-pointer active:scale-95 active:bg-violet-700 w-full"
              >
                List NFT now
              </Button>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="border-violet-50 border  shadow-2xl shadow-violet-500/50 rounded-lg px-6 pt-3 pb-5 flex flex-col gap-3">
          <div>
            <h1 className="text-2xl border-b h-fit">Preview</h1>
          </div>
          <div className="flex-1 h-full w-full">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjQwMCIgIGhlaWdodD0iNDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgZmlsbD0ieWVsbG93IiByPSI3OCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgPGcgY2xhc3M9ImV5ZXMiPgogICAgPGNpcmNsZSBjeD0iNjEiIGN5PSI4MiIgcj0iMTIiLz4KICAgIDxjaXJjbGUgY3g9IjEyNyIgY3k9IjgyIiByPSIxMiIvPgogIDwvZz4KICA8cGF0aCBkPSJtMTM2LjgxIDExNi41M2MuNjkgMjYuMTctNjQuMTEgNDItODEuNTItLjczIiBzdHlsZT0iZmlsbDpub25lOyBzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDM7Ii8+Cjwvc3ZnPg=="
              alt="nft"
              width={500}
              height={500}
              className="rounded-lg w-full h-full object-cover fit"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ListNft;
