import { useContext, useEffect, useState } from "react";
import CraftCard from "./CraftCard";
import { AuthContext } from "../../Provider/AuthProvider";

const CraftItems = () => {
  const { user } = useContext(AuthContext);
  const [craftData, setCraftData] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_LINK}/craftData`)
      .then((res) => res.json())
      .then((data) => {
        setCraftData(data);
      });
  }, []);

  return (
    <div className="bg-[#795548a9] min-h-screen w-full text-center mx-auto py-6 text-white">
      <div>
        <h2 className="text-3xl font-bold font-rancho">Wooden Craft</h2>
        <p className="text-sm max-w-xl mx-auto">
          Hello there! On our webpage, you can see different types of wooden
          craft and materials. You can choose any of them. Don't forget to like
          , comment and subscribe. Follow our facebook page to stay up to date
        </p>
      </div>
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-[10vw]">
        {craftData?.map((craft) => (
          <CraftCard
            key={craft._id}
            craft={craft}
            craftData={craftData}
            setCraftData={setCraftData}
          ></CraftCard>
        ))}
      </div>
    </div>
  );
};

export default CraftItems;
