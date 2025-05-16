import { RxCross2 } from "react-icons/rx";

const ItemCard = ({ item, handleRemoveFromBookmarked }) => {
  return (
    <div className="flex gap-2 px-5 pt-4 justify-between">
      <div className="flex gap-4 items-center">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="min-w-14 max-w-14 h-14 object-cover mask mask-squircle"
        />
        <div>
          <h5 className="font-sora text-navy text-sm">{item.title}</h5>
          <div className="flex gap-10 mt-1">
            <p className="font-sora text-navy text-sm">
              ${item.currentBidPrice}
            </p>
            <p className="font-sora text-navy text-sm">
              Bids: {item.bidsCount}
            </p>
          </div>
        </div>
      </div>
      <RxCross2
        size={16}
        className="mt-1 hover:cursor-pointer btn btn-sm btn-circle btn-ghost w-6 h-6"
        onClick={() => handleRemoveFromBookmarked(item)}
      />
    </div>
  );
};

export default ItemCard;
