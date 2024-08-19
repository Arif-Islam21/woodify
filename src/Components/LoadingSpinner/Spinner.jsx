import { CirclesWithBar } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center bg-themeFade min-h-screen w-full">
      <CirclesWithBar
        height="50vh"
        width="50vw"
        color="#795548"
        outerCircleColor="#ffffff"
        innerCircleColor="#ffffff"
        barColor="#ffffff"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
    // 4fa94d
  );
};

export default Spinner;
