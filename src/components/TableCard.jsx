import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const TableCard = ({ item, bookmarkedItems, handleAddToBookmarked }) => {
  return (
    <tr className="text-center">
      <td className="px-6">
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <div className="avatar">
            <div className="mask mask-squircle h-14 w-14">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>
          </div>
          <div className="text-navy font-medium text-base hidden md:block md:text-left">
            {item.title}
          </div>
        </div>
      </td>
      <td className="p-6 font-medium">
        <div className="text-navy font-medium text-base">
          ${item.currentBidPrice}
        </div>
      </td>
      <td className="p-6 font-medium hidden sm:table-cell">
        <div className="text-navy font-medium text-base">{item.timeLeft}</div>
      </td>
      <td className="px-6 py-8 grid place-content-center">
        {bookmarkedItems.indexOf(item) === -1 ? (
          <button>
            <FaRegHeart
              size={22}
              className="hover:cursor-pointer"
              onClick={() => handleAddToBookmarked(item)}
            />
          </button>
        ) : (
          <button disabled className="hover:cursor-not-allowed">
            <FaHeart size={22} />
          </button>
        )}
      </td>
    </tr>
  );
};

export default TableCard;
