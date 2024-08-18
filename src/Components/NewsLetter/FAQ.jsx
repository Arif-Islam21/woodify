const FAQ = () => {
  return (
    <div className="px-4 lg:px-12 py-8 bg-[#795548]">
      <div className="collapse collapse-arrow bg-[#613829e2] text-white">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          From where your wood are collected
        </div>
        <div className="collapse-content">
          <p className="max-w-2xl">
            We collect our wood from deep forest . Such as amazan , sundarban,
            africa etc. You can trust the quality of our wood. also you ca
            ncheck the wood before buy. We check the wood very well before
            making wooden craft
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#613829e2] text-white">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is the refund policy
        </div>
        <div className="collapse-content">
          <p className="max-w-2xl">
            Surely we have a refund policy. you can check the wood before buying
            . but if you face any porblem after buying the wood you can easyly
            return the wood to us. If you want to know more about this. Read our
            terms and services
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#613829e2] text-white">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Want to know about your after sell service
        </div>
        <div className="collapse-content">
          <p className="max-w-2xl">
            We officially provide 24 month of free service, if you face any
            problem in 24 month please let us know . we will try to fix the
            issue
          </p>
        </div>
      </div>
      <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
    </div>
  );
};

export default FAQ;
