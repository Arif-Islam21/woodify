import { useLoaderData } from "react-router-dom";
import CraftCard from "./CraftCard";

const AllCraft = () => {
  const craftData = useLoaderData();
  return (
    <div className="bg-themeFade text-white min-h-screen">
      <div className="text-center py-4">
        <h2 className="font-rancho text-5xl font-bold blur-[1px]">
          All Our Craft Product
        </h2>
        <p className="max-w-2xl mx-auto py-4 text-sm font-serif">
          Here you can see all our products created by our trusted users. You
          can chose them and buy them if you want. we also serve some additional
          service . Please contact for more
        </p>
      </div>
      <div className="lg:px-24 px-0 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {craftData.map((craft) => (
          <CraftCard key={craft._id} craft={craft}></CraftCard>
        ))}
      </div>
    </div>
  );
};

export default AllCraft;
