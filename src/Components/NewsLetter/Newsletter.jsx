import background from "/cool-background.png";

const Newsletter = () => {
  return (
    <footer
      style={{
        backgroundImage: `URL(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex justify-center shadow-xl px-4 py-16 text-[#795548a9] bg-white dark:text-white dark:bg-[#795548a9]"
    >
      <div className="container px-6 py-6">
        <h1 className="text-lg font-bold text-center lg:text-2xl">
          Join our newsletter for more updates.
        </h1>

        <div className="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
          <input
            id="email"
            type="text"
            className="px-4 py-2 text-white bg-[#795548a9] border rounded-md dark:bg-white dark:text-[#795548a9] dark:border-white focus:border-[#795548a9] dark:focus:border-white focus:outline-none focus:ring focus:ring-opacity-40 "
            placeholder="Email Address"
          />

          <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-[#795548a9] transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-white hover:text-white rounded-lg hover:bg-[#795548a9] focus:ring focus:ring-[#795548a9] focus:ring-opacity-80">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Newsletter;
