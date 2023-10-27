import NftCard from "@/components/NftCard/NftCard";
import "./nftList.scss";
export default function NftList({ filteredNftList }) {
  return (
    <div className="nft-List">
      {filteredNftList.length ? (
        filteredNftList
          .slice(0, 8)
          .map((nftItem) => (
            <NftCard
              key={nftItem.id}
              title={nftItem.title}
              image={nftItem.image}
              width="317px"
              height="317px"
              avatar={nftItem.avatar}
              bidImage={nftItem.bidImage}
            />
          ))
      ) : (
        <p className="empty-message">Empty list</p>
      )}
    </div>
  );
}
