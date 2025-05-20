import NFTCard from "@/components/Layout/Cards";

const MynftPage = () => {
  const nftArray = Array.from({ length: 5 }, (_, i) => i);
  return (
    <div className="px-6 grid grid-rows-[auto_1fr] gap-5 flex-1 min-h-full">
      <h1 className="text-3xl py-2 border-b">My NFTs</h1>
      <div>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 ">
          {nftArray.map((id: number) => (
            <NFTCard
              id={String(id)}
              key={id}
              name="NFT Name"
              imageUrl="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
              price={"100"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MynftPage;
