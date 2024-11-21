const ContactInfo = () => {
  return (
    <div className="h-[360px] w-[326px] flex flex-col gap-[16px] mt-[64px] mb-[35px]">
      <p className="font-normal text-sm font-inter leading-5 text-semiWhite">
        Contact us
      </p>
      <h1 className="font-mont font-semibold text-[64px] leading-[62px] text-white">
        Let’s get started
      </h1>
      <div className="w-full h-auto flex flex-col gap-[30px]">
        <p className="font-inter font-normal text-sm leading-[22px] text-semiWhite">
          We’re here to help bring your ideas to life—reach out, and let’s make
          it happen
        </p>
        <span className="h-[38px] flex flex-col gap-[12px]">
          <p className="font-inter font-normal leading-[12px] text-sm text-textGray tracking-wide">
            Phone
          </p>
          <p className="font-inter font-semibold leading-[14px] text-sm tracking-wide  text-white">
            +234 902 523 0287
          </p>
        </span>
        <span className="h-[38px] flex flex-col gap-[12px]">
          <p className="font-inter font-normal leading-[12px] text-sm text-textGray tracking-wide">
            Email
          </p>
          <p className="font-inter font-semibold leading-[14px] text-sm tracking-wide  text-white">
            build@thynkcity.com
          </p>
        </span>
      </div>
    </div>
  );
};

export default ContactInfo;
