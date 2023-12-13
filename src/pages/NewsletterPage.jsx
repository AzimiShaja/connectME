import React from "react";

const NewsletterPage = () => {
  return (
    <div className="py-20  flex flex-col items-center justify-center px-8">
      <div className="bg-green rounded-tl-xl rounded-br-xl py-10 px-4 max-w-[500px] flex flex-col gap-6 shadow-xl">
        <div className="flex flex-col items-start gap-4 mb-10">
          <h1 className="lg:text-2xl text-xl font-dm text-white">
            Best Freelance Newsletters ✍️
          </h1>
          <p className="text-sm font-light text-gray-300">
            Great reads, cool tools, jobs, tips, and friendly encouragement to
            do your best freelancing.
          </p>
        </div>

        <form className="flex flex-col items-start gap-4 w-full ">
          <label className="flex flex-col items-start w-full gap-1  text-white">
            First Name
            <input
              type="text"
              required
              className="border border-gray-300 rounded-md shadow-xl w-full py-2 px-2 text-black"
            />
          </label>
          <label className="flex flex-col items-start w-full gap-1  text-white">
            Your email address
            <input
              required
              type="email"
              className="border border-gray-300 rounded-md  shadow-xl w-full py-2 px-2 text-black"
            />
          </label>
          <p className="text-sm text-white">
            Sent weekly, on Thursdays. Costs $0. Unsubscribe anytime.
          </p>
          <button className="bg-whiteYellow hover:opacity-80 transition-all rounded-md p-3 w-full text-green">
            Send me Best Freelance Newsletter
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterPage;
