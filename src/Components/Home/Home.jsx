import AddCraft from "../AddCraft/AddCraft";
import Banner from "../Banner/Banner";
import CraftItems from "../CraftItems/CraftItems";
import FAQ from "../NewsLetter/FAQ";
import Newsletter from "../NewsLetter/Newsletter";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <CraftItems></CraftItems>
      <Newsletter></Newsletter>
      <FAQ></FAQ>
    </>
  );
};

export default Home;
