import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyCart from "./MyCart";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

const MyArt = () => {
  const { user } = useContext(AuthContext);
  const [craftData, setCraftData] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_LINK}/craftData`)
      .then((res) => res.json())
      .then((data) => {
        const mines = data.filter((item) => item.creatorEmail === user?.email);
        setCraftData(mines);
      });
  }, []);

  return (
    <div className="bg-[#795548a9] min-h-screen w-full text-center mx-auto py-6 text-white">
      <div>
        <h2 className="text-3xl font-bold font-rancho">
          <Typewriter
            words={["My Art And Craft!"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <Fade duration={2500}>
          <p className="text-sm max-w-xl mx-auto">
            Hello there! On our webpage, you can see different types of wooden
            craft and materials. You can choose any of them. Don't forget to
            like , comment and subscribe. Follow our facebook page to stay up to
            date
          </p>
        </Fade>
      </div>
      <Fade cascade duration={2500} delay={700}>
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-[10vw]">
          {craftData?.map((craft) => (
            <MyCart
              key={craft._id}
              craft={craft}
              craftData={craftData}
              setCraftData={setCraftData}
            ></MyCart>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default MyArt;
