import TableCard from "./TableCard";

const Table = ({ items, bookmarkedItems, handleAddToBookmarked }) => {
  return (
    <div className="lg:w-[67%] bg-base-100 rounded-2xl">
      <table className="table">
        <thead>
          <tr className="font-sora text-base text-black text-center">
            <th className="px-3 lg:px-6 pt-6 pb-4 font-medium md:text-left">
              Items
            </th>
            <th className="px-3 lg:px-6 pt-6 pb-4 font-medium">Current Bid</th>
            <th className="px-3 lg:px-6 pt-6 pb-4 font-medium hidden sm:block">
              Time Left
            </th>
            <th className="px-3 lg:px-6 pt-6 pb-4 font-medium">Bid Now</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <TableCard
              key={item.id}
              item={item}
              bookmarkedItems={bookmarkedItems}
              handleAddToBookmarked={handleAddToBookmarked}
            ></TableCard>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
