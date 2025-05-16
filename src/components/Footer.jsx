const Footer = () => {
  return (
    <div className="bg-base-100 grid lg:place-content-center py-20 px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 container mx-auto">
      <div className="flex flex-col justify-center">
        <div
          onClick={() => (window.location.href = "./index.html")}
          className="hover:cursor-pointer w-48 mx-auto text-2xl px-0 font-poppins gap-0 rounded-md mb-1"
        >
          <span className="text-blue font-normal">Auction</span>
          <span className="text-gold font-bold">Gallery</span>
        </div>
        <div className="flex gap-3 text-black font-sora font-normal justify-center">
          <div>Bid,</div>
          <div>Win,</div>
          <div>Own.</div>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-0.5 text-center sm:text-left w-72 sm:w-auto max-w-96 sm:max-w-none mx-auto justify-center text-black font-poppins mt-4">
          <li>
            <a className="link link-hover text-sm">Home</a>
          </li>
          <li>
            <a className="link link-hover text-sm">Auctions</a>
          </li>
          <li>
            <a className="link link-hover text-sm">Categories</a>
          </li>
          <li>
            <a className="link link-hover text-sm">How To Work</a>
          </li>
        </ul>
        <p className="font-sora font-normal text-black text-sm text-center mt-4">
          &copy; 2025 AuctionGallery - All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
