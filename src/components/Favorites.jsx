import { FaRegHeart } from "react-icons/fa";
import ItemCard from "./ItemCard";

const Favorites = ({
  totalAmount,
  bookmarkedItems,
  handleRemoveFromBookmarked,
}) => {
  return (
    <div className="flex-1 bg-base-100 rounded-2xl max-h-fit">
      <header className="flex gap-2 justify-center items-center border-b border-[#dce5f380] pt-5 pb-4 mb-1">
        <FaRegHeart size={22} />
        <h3 className="font-sora text-navy text-xl text-center font-medium">
          Favorite Items
        </h3>
      </header>
      <main>
        {bookmarkedItems.length ? (
          bookmarkedItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              handleRemoveFromBookmarked={handleRemoveFromBookmarked}
            ></ItemCard>
          ))
        ) : (
          <div className="flex justify-between items-center flex-col">
            <h5 className="font-sora font-medium text-black text-lg mt-4">
              No favorites yet
            </h5>
            <p className="font-sora font-normal opacity-70 text-black text-sm max-w-56 text-center mt-2">
              Click the heart icon on any item to add it to your favorites.
            </p>
          </div>
        )}
      </main>
      <footer className="flex justify-between items-center border-t border-[#dce5f380] py-6 px-6 mt-5">
        <h5 className="font-sora font-normal text-black text-base">
          Total Bids Amount
        </h5>
        <h5 className="font-sora font-normal text-black text-base">
          ${totalAmount.toLocaleString()}
        </h5>
      </footer>
    </div>
  );
};

export default Favorites;
