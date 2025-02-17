import univers from "../../assets/images/univers.svg";

const Community = () => {
  return (
    <div className=" bg-[rgb(26,17,6)] mt-20 flex justify-center lg:mx-24 lg:rounded-xl ">
      <div className="w-11/12 md:flex  ">
        <div className=" flex flex-col gap-6 justify-end mt-14 lg:mb-11 lg:w-3/5">
          <h1 className="font-mont font-semibold text-xl lg:text-4xl leading-3 text-white">
            Join the Thynkers
          </h1>
          <p className="font-inter font-light text-xs lg:text-lg text-[#C7C7C7]">
            Our tech community is a free vibrant space where coders, designers,
            and other tech enthusiasts come together to share ideas, learn new
            skills, and collaborate on projects. Ready to be part of something
            big?
          </p>
          <button className="hover:bg-buttonBrown  hover:border-none w-40 h-9 rounded-3xl border-[1px] border-solid border-white font-inter font-semibold text-xs text-white">
            Join our community
          </button>
        </div>
        <img src={univers} className=" w-full" />
      </div>
    </div>
  );
};

export default Community;
