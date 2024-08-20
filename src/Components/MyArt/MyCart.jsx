import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = ({ craft, setCraftData, craftData }) => {
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_SERVER_LINK}/craftData/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = craftData.filter((craft) => craft._id !== _id);
              setCraftData(remaining);
            }
          });
      }
    });
  };

  const {
    _id,
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
  } = craft;
  return (
    <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-[#795548]">
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold font-rancho text-gray-800 uppercase dark:text-white">
          {craft_name}
        </h1>
        <div className="flex font-mono gap-2 justify-between">
          <p>
            <span className="font-semibold">Price: </span>
            {Price}tk
          </p>
          <p>
            <span className="font-semibold">Status: </span>
            {StockStatus}
          </p>
        </div>
        <div className="flex font-mono gap-2 justify-between">
          <p>
            <span className="font-semibold">Customization: </span>
            {customization}
          </p>
          <p>
            <span className="font-semibold">Rating: </span>
            {rating}/10
          </p>
        </div>
      </div>

      <img
        className="object-cover w-full h-48 mt-2"
        src={
          image ||
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
        }
        alt={category}
      />

      <div className="flex items-center justify-between px-4 py-2 bg-[#cf95803c]">
        <button
          onClick={() => handleDelete(_id)}
          className="px-2 btn py-1 border-none font-bold hover:text-white uppercase transition-colors duration-300 transform bg-red-400 text-white rounded hover:bg-[#795548f3]"
        >
          Delete
        </button>
        <Link
          to={`/myCraftItems/${_id}`}
          className="px-2 btn py-1 border-none font-bold text-[#795548] hover:text-white uppercase transition-colors duration-300 transform bg-white rounded hover:bg-[#795548f3]"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MyCart;
