import { use, useState } from "react";
import { toast, Bounce } from "react-toastify";
import Table from "./Table";
import Favorites from "./Favorites";

const Body = ({ itemsPromise }) => {
  const items = use(itemsPromise);
  const [totalAmount, setTotalAmount] = useState(0);
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  const handleAddToBookmarked = (item) => {
    if (bookmarkedItems.indexOf(item) === -1) {
      toast(`${item.title} is added to favorite items.`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      const amount = Number(item.currentBidPrice.replace(/,/g, ""));
      setTotalAmount(totalAmount + amount);
      const newBookmarkedItems = [...bookmarkedItems, item];
      setBookmarkedItems(newBookmarkedItems);
    }
  };

  const handleRemoveFromBookmarked = (item) => {
    if (bookmarkedItems.indexOf(item) !== -1) {
      toast(`${item.title} is removed from favorite items.`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      const amount = Number(item.currentBidPrice.replace(/,/g, ""));
      setTotalAmount(totalAmount - amount);
      bookmarkedItems.splice(bookmarkedItems.indexOf(item), 1);
      const newBookmarkedItems = [...bookmarkedItems];
      setBookmarkedItems(newBookmarkedItems);
    }
  };

  return (
    <div className="bg-indigo-50">
      <div className="px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 container mx-auto pt-20 pb-24">
        <h2 className="font-sora text-navy font-medium text-2xl">
          Active Auctions
        </h2>
        <p className="font-sora text-black text-base opacity-80 mt-3">
          Discover and bid on extraordinary items.
        </p>
        <div className="flex flex-col lg:flex-row gap-5 mt-6">
          <Table
            items={items}
            bookmarkedItems={bookmarkedItems}
            handleAddToBookmarked={handleAddToBookmarked}
          ></Table>
          <Favorites
            totalAmount={totalAmount}
            bookmarkedItems={bookmarkedItems}
            handleRemoveFromBookmarked={handleRemoveFromBookmarked}
          ></Favorites>
        </div>
      </div>
    </div>
  );
};

export default Body;
