// import MarketNav from "@/app/marketplace/marketNav"
import NftCardContrainer from "../../app/marketplace/NftCardContrainer"

const MarketPlace = () => {
  return (
    <div className="px-6">
      <h1 className="text-3xl py-2 border-b">NFT Marketplace</h1>
        {/* <MarketNav/> */}
        <NftCardContrainer/>
    </div>

  )
}
export default MarketPlace