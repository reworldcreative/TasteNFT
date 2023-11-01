import NftCard from "@/components/NftCard/NftCard";
import "./nftList.scss";
export default function NftList({ filteredNftList, onTimeEditClick }) {
  return (
    <div className="nft-List">
      {filteredNftList.length ? (
        filteredNftList.map((nftItem) => (
          <NftCard
            key={nftItem.id}
            id={nftItem.id}
            title={nftItem.title}
            image={nftItem.image}
            width="317"
            height="317"
            avatar={nftItem.avatar}
            bidImage={nftItem.bidImage}
            onTimeEditClick={onTimeEditClick}
            status={nftItem.status}
          />
        ))
      ) : (
        <p className="empty-message">Empty list</p>
      )}
    </div>
  );
}
