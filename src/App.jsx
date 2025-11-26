import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewArrivals from "./components/NewArrivals";
import ShopByCategory from "./components/ShopByCategory";
import StateButton from "./components/StateButton";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <NewArrivals />
      <ShopByCategory/>
    </>
  );
};
export default App;
