import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Body from "../components/Body";
import Footer from "../components/Footer";

const fetchItemsPromise = async (link) => {
  const res = await fetch(link);
  return res.json();
};

function App() {
  const itemsPromise = fetchItemsPromise("itemsData.json");
  return (
    <div>
      <header className="max-h-screen min-h-screen flex flex-col">
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <Suspense
        fallback={
          <h2 className="text-2xl text-navy py-96 font-semibold min-h-96 grid place-content-center bg-indigo-50">
            Loading...
          </h2>
        }
      >
        <Body itemsPromise={itemsPromise}></Body>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
