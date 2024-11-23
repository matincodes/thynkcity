import pointerIcon from "../../assets/icons/pointer-icon.svg";
const Form = () => {
  return (
    <div className="flex flex-col items-center gap-[15px]  h-auto bg-darkGray w-full pt-[34px] pb-[55px] pr-[23px] pl-[23px] md:w-[50%]  xl:pt-[78px] xl:pr-[157px] xl:pb-[55px] xl:pl-[33px] ">
      <p className="font-inter font-normal text-textGray text-sm leading-[22px] w-[316px] xl:w-[490px] xl:text-[20px] xl:leading-[30x] xl:tracking-wider">
        Awesome! We’re excited to hear from you and getting to be of service,
        please fill the form below
      </p>
      <img src={pointerIcon} />
      {/* contact form  */}
      <div className="w-[316px] h-[549px] flex flex-col gap-[36px] xl:w-[490px]">
        <p className="font-mont font-semibold leading-[22px] text-[15px] text-white xl:text-[24px] xl:leading-[30px]">
          Contact
        </p>
        <form className="w-full h-[491px] flex flex-col gap-[53px] ">
          <span className="w-full h-[396px] flex flex-col gap-[24px] xl:grid grid-cols-2	 xl:gap-[53px]">
            <input
              placeholder="Name"
              className="w-full h-[46px] pt-[8px] pb-[8px] outline-none bg-inherit border-borderGray border-b-2 border-solid font-normal text-sm leading-[30px] font-inter text-textGray"
            />
            <input
              placeholder="Email"
              className="w-full h-[46px] pt-[8px] pb-[8px] outline-none bg-inherit border-borderGray border-b-2 border-solid font-normal text-sm leading-[30px] font-inter text-textGray"
            />
            <input
              placeholder="Phone"
              className="w-full h-[46px] pt-[8px] pb-[8px] outline-none bg-inherit border-borderGray border-b-2 border-solid font-normal text-sm leading-[30px] font-inter text-textGray"
            />
            <input
              placeholder="Subject"
              className="w-full h-[46px] pt-[8px] pb-[8px] outline-none bg-inherit border-borderGray border-b-2 border-solid font-normal text-sm leading-[30px] font-inter text-textGray"
            />
            <textarea
            rows="4"
            cols="50"
              placeholder="Tell us how we can be of service"
              className="scrollbar-wide  w-full h-[116px] pt-[17px] pb-[69px] outline-none bg-inherit border-borderGray border-b-2 border-solid font-normal text-sm leading-[30px] font-inter text-textGray xl:col-span-2"
            />
          </span>
          <button
            type="submit"
            className="w-full h-[42px] px-[4px] py-[23px] bg-buttonBrown rounded-full border-none leading-[34px] text-white flex justify-center items-center font-inter font-semibold text-[15px]"
          >
            Let’s get started
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
