import { Link, useLoaderData } from "react-router-dom";
import { FaEye } from "react-icons/fa";

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
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {craftData.map((craft, idx) => (
              <tr key={craft._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={
                            craft.image ||
                            "https://img.daisyui.com/images/profile/demo/2@94.webp"
                          }
                          alt="Avatar Tailwind CSS Component"
                          className="border-2 rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{craft.category}</div>
                      <div className="text-sm opacity-50">{craft.userName}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {craft.shortDescription}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Rating: {craft.rating} out of 10
                  </span>
                </td>
                <td>$ {craft.Price}</td>
                <th>
                  <Link
                    to={`/allCraft/${craft._id}`}
                    className="btn btn-ghost bg-white text-themeColor text-2xl px-6"
                  >
                    <FaEye />
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="lg:px-24 px-0 py-6">
        {craftData.map((craft) => (
          <CraftCard key={craft._id} craft={craft}></CraftCard>
        ))}
      </div> */}
    </div>
  );
};

export default AllCraft;
