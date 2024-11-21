import pointerIcon from "../../assets/icons/pointer-icon.svg";
const Form = () => {
  return (
    <div className="flex flex-col items-center gap-[15px]  h-auto bg-darkGray w-full pt-[34px] pb-[55px] pr-[23px] pl-[23px]">
      <p className="font-inter font-normal text-textGray text-sm leading-[22px]">
        Awesome! We’re excited to hear from you and getting to be of service,
        please fill the form below
      </p>
      <img src={pointerIcon} />
      {/* contact form  */}
      <div className="w-[316px] h-[549px] flex flex-col gap-[36px] bg-red-400">
        <p className="font-mont font-semibold leading-[22px] text-[15px] text-white">
          Contact
        </p>
      </div>
    </div>
  );
};

export default Form;
