import logo from "../../assets/icons/thynkcity-logo.svg";

const content = [
  {
    title: "SoftwareDevelopment",
    description: "We craft stunning digital solutions tailored to your needs.",
    logo: logo,
  },
  {
    title: "Community & Networking",
    description:
      "Connect with peers and mentors through events and industry insights.",
    logo: logo,
  },
  {
    title: "Internships & Jobs",
    description:
      "Get an edge with exclusive internships and jobs at top tech firms",
    logo: logo,
  },
  {
    title: "Scholarship & Endorsement",
    description:
      "Receive scholarships and endorsement opportunities to advance in top global tech firms",
    logo: logo,
  },
];

const OurService = () => {
  return (
    <div className=" mt-20 flex justify-center">
      <div className="w-11/12 lg:w-4/5 flex flex-col gap-6">
        <h1 className="font-mont font-semibold text-2xl text-white">
          Our services
        </h1>
        <div className="w-full grid grid-cols-2 gap-3 justify-center md:grid-cols-4 lg:gap-7">
          {content.map((items, index) => (
            <Card
              key={index}
              title={items.title}
              description={items.description}
              logo={items.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;

const Card = () => {
  return (
    <div className="flex flex-col items-end   px-2  bg-[#121212] rounded-md">
      <img src={logo} className="w-32 h-32" />
      <span className="flex flex-col gap-2 w-full py-10">
        <h1 className="font-inter font-semibold text-base leading-4 text-white">
          Software Development
        </h1>
        <p className="font-inter font-normal text-xs leading-4 text-[#C7C7C7]">
          We craft stunning digital solutions tailored to your needs.
        </p>
      </span>
    </div>
  );
};
