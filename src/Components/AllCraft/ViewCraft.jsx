import { useLoaderData } from "react-router-dom";

const ViewCraft = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <p>view details</p>
    </div>
  );
};

export default ViewCraft;
