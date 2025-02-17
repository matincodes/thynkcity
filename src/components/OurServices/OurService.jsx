import logo from "../../assets/icons/thynkcity-logo.svg";
import PropTypes from "prop-types";

// Define an array of service objects with title, description, and logo
const content = [
  {
    title: "Software Development",
    description: "We craft stunning digital solutions tailored to your needs.",
  },
  {
    title: "Community & Networking",
    description:
      "Connect with peers and mentors through events and industry insights.",
  },
  {
    title: "Internships & Jobs",
    description:
      "Get an edge with exclusive internships and jobs at top tech firms",
  },
  {
    title: "Scholarship & Endorsement",
    description:
      "Receive scholarships and endorsement opportunities to advance in top global tech firms",
  },
];

// Main component that renders the service section
const OurService = () => {
  return (
    <div className=" mt-20 flex justify-center">
      <div className="w-11/12 lg:w-4/5 flex flex-col gap-6">
        {/* Section Title */}
        <h1 className="font-mont font-semibold lg:text-4xl text-2xl text-white">
        Opportunities
        </h1>
        
        {/* Grid layout to display all services */}
        <div className="w-full grid grid-cols-2 gap-3 justify-center md:grid-cols-4 lg:gap-7">
          {content.map((items, index) => (
            <Card
              key={index}
              title={items.title}
              description={items.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;

// Card component to display individual service details
const Card = ({title , description }) => {
  return (
    <div className="flex flex-col items-end   px-2  bg-[#121212] rounded-md">
      {/* Service logo */}
      <img src={logo} className="w-32 h-32" />
      
      {/* Service title and description */}
      <span className="flex flex-col gap-2 w-full py-10">
        <h1 className="lg:w-9/12 lg:text-2xl font-inter font-semibold text-base leading-4 text-white">
          {title}
        </h1>
        <p className="lg:w-9/12 lg:text-sm font-inter font-normal text-xs leading-4 text-[#C7C7C7]">
          {description}
        </p>
      </span>
    </div>
  );
};

// PropTypes validation to ensure correct prop types are passed
Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};