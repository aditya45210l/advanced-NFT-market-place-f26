import NFTCard from "@/components/Layout/Cards";

const MarketPNftContainer = () => {
  const nftArray: number[] = Array.from({ length: 5 }, (_, i) => i + 1);

  if (nftArray.length === 0) {
    return (
      <div className="flex-1 justify-center items-center text-gray-500 flex top-1/4 min-h-[80vh] text-xl">
        No NFT here to sell in Marketplace
      </div>
    );
  }

  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 pt-5">
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
  );
};

export default MarketPNftContainer;
