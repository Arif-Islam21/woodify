import { useLoaderData } from "react-router-dom";

const ViewCraft = () => {
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
    processing_time,
    StockStatus,
  } = data;
  return (
    <div className="bg-white dark:text-white dark:bg-themeFade ">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-x-6 bg-themeColor px-6 py-4 rounded-lg shadow-2xl lg:flex-row">
          <img
            src={
              image ||
              "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            }
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="">
            <h1 className="text-5xl text-center font-bold font-rancho">
              {craft_name}
            </h1>
            <div className="flex justify-between items-center gap-14">
              <p className="py-2 font-mono">{shortDescription}</p>
              <p className="py-2 font-mono">
                <span className="font-bold">Delivary Time: </span>
                {processing_time}
              </p>
            </div>
            <div className="flex justify-between items-center gap-x-16">
              <p className="py-2 font-mono">
                <span className="font-bold">Category: </span>
                {category}
              </p>
              <p className="py-2 font-mono">
                <span className="font-bold">Rating: </span>
                {rating}
              </p>
            </div>
            <div className="flex justify-between items-center gap-x-16">
              <p className="py-2 font-mono">
                <span className="font-bold">Customization: </span>
                {customization}
              </p>
              <p className="py-2 font-mono">
                <span className="font-bold">Stock Status: </span>
                {StockStatus}
              </p>
            </div>
            <div className="flex justify-between items-center gap-x-16">
              <p className="py-2 font-mono">
                <span className="font-bold">Created By: </span>
                {userName}
              </p>
              <p className="py-2 font-mono">
                <span className="font-bold">Price: </span>
                {Price}
              </p>
            </div>
            <div className="flex justify-between items-center gap-x-16">
              <p className="py-2 font-mono">
                <span className="font-bold">Creator Email: </span>
                {email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCraft;
