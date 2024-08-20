import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const AddCraft = () => {
  const { user } = useContext(AuthContext);

  const handleAddCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const craft_name = form.craft_name.value;
    const image = form.photo.value;
    const category = form.category.value;
    const shortDescription = form.shortDescription.value;
    const Price = form.Price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const StockStatus = form.StockStatus.value;
    const creatorEmail = user.email;
    const addItemData = {
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
      creatorEmail,
    };

    fetch(`${import.meta.env.VITE_SERVER_LINK}/craftData`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItemData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Item Added",
          text: "Your item has been added",
        });
      });
  };

  return (
    <div>
      <section className="px-12 py-8  bg-white shadow-md dark:bg-themeFade">
        <h2 className="text-5xl font-rancho text-center py-4 blur-[1px] font-semibold text-gray-700 capitalize dark:text-white">
          Add Craft Item
        </h2>

        <form onSubmit={handleAddCraft}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                name="userName"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="craftName"
              >
                Craft Name
              </label>
              <input
                id="password"
                type="text"
                name="craft_name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="imageurl"
              >
                Image URL
              </label>
              <input
                id="image"
                type="text"
                name="photo"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="imageurl"
              >
                Select Category
              </label>
              <select
                id="image"
                type=""
                name="category"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option value="Wooden Furniture & Sculptures">
                  Wooden Furniture & Sculptures
                </option>
                <option value="Wooden Home Decor">Wooden Home Decor</option>
                <option value="Wooden Utensils and Kitchenware">
                  Wooden Utensils and Kitchenware
                </option>
                <option value="Jute Home Decor">Jute Home Decor</option>
                <option
                  value="Jute Kitchenware & utensils
"
                >
                  Jute Kitchenware & utensils
                </option>
                <option value="Jute and wooden jewellery">
                  Jute and wooden jewellery
                </option>
              </select>
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="imageurl"
              >
                Short Description
              </label>
              <input
                id="image"
                type="text"
                name="shortDescription"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="imageurl"
              >
                Price
              </label>
              <input
                id="image"
                type="text"
                name="Price"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="imageurl"
              >
                Rating
              </label>
              <input
                id="image"
                type="number"
                name="rating"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="customization"
              >
                Customization
              </label>
              <div className=" gap-4 flex w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring ">
                <label>
                  <input
                    type="radio"
                    placeholder="Yes"
                    value="Yes"
                    name="customization"
                  />{" "}
                  Yes
                </label>
                <label>
                  <input type="radio" value="No" name="customization" />
                  No
                </label>
              </div>
              {/* <input
                id="image"
                type="number"
                name="rating"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              /> */}
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="imageurl"
              >
                Processing Time
              </label>
              <input
                id="image"
                type="time"
                name="processing_time"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="my-2">
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="StockStatus"
            >
              Stock Status
            </label>
            <div className=" gap-4 flex w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring ">
              <label>
                <input type="radio" value="In Stock" name="StockStatus" /> In
                Stock
              </label>
              <label>
                <input type="radio" value="Made To Order" name="StockStatus" />
                Made To Order
              </label>
              <label>
                <input
                  type="radio"
                  value="Out For Delivary"
                  name="StockStatus"
                />
                Out For Delivary
              </label>
            </div>
            {/* <input
                id="image"
                type="number"
                name="rating"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              /> */}
          </div>

          <div className=" mt-6">
            <button className="px-8 w-full py-2.5 leading-5 text-themeColor transition-colors duration-300 transform bg-white font-bold rounded-md hover:bg-gray-600 ">
              Add Craft
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddCraft;
