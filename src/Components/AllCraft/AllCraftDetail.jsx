import { useLoaderData } from "react-router-dom";

const AllCraftDetail = () => {
  const data = useLoaderData();
  const {
    userName,
    email,
    craft_name,
    image,
    category,
    shortDescription,
    Price,
    rating,
    customization,
  } = data;

  return (
    <div className="bg-themeFade">
      <div className="hero bg-themeFade min-h-screen">
        <div className="hero-content rounded-lg bg-themeColor text-white lg:max-w-4xl gap-24 lg:mx-12 lg:px-12 lg:py-8 flex-col lg:flex-row">
          <img
            src={
              image ||
              "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            }
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="min-w-96">
            <h1 className="text-5xl my-4 font-rancho text-center font-bold">
              {craft_name}
            </h1>
            <div className="flex justify-between items-center gap-6 py-2">
              <p>{userName}</p>
              <p>{category}</p>
            </div>
            <div className="flex justify-between items-center gap-6 py-2">
              <p className="max-w-xs">{shortDescription}</p>
              <p>{Price}</p>
            </div>
            <div className="flex justify-between items-center gap-6 py-2">
              <p>
                {" "}
                <span className="font-bold">Rating :</span> {rating}
              </p>
              <p>
                <span className="font-bold">Customization:</span>{" "}
                {customization}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCraftDetail;
