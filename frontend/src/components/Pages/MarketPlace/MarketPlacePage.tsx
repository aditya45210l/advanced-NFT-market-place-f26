// import MarketNav from "@/app/marketplace/marketNav"
import MarketPNftContainer from "../../../app/marketplace/MarketPNftContainer";

const MarketPlace = () => {
  return (
    <div className="px-6">
      <h1 className="text-3xl py-2 border-b">NFT Marketplace</h1>
      {/* <MarketNav/> */}
      <MarketPNftContainer />
    </div>
  );
};
export default MarketPlace;
