import abdulmatin from "../../assets/images/Abdulmatin.svg";
import idris from "../../assets/images/Idris.svg";
import fawaz from "../../assets/images/Fawaz.svg";
import barakah from "../../assets/images/Barakah.svg";
import divine from "../../assets/images/Divine.svg";
import PropTypes from "prop-types";

// Array containing team members' details, including their image, name, and role
const content = [
  {
    image: abdulmatin,
    name: "Abdulmatin Adeniji",
    role: "Lead Designer",
  },
  {
    image: idris,
    name: "Idris Muhammed",
    role: "Chief Operating Officer ",
    mt: "mt-[-20px]",
  },
  {
    image: fawaz,
    name: "Fawaz  Adeniji",
    role: "Chief Technical Officer",
    mt: "mt-[-35px]",
  },
  {
    image: barakah,
    name: "Barakah Alim",
    role: "Brand Strategist",
    mt: "mt-[-20px]",
  },
  {
    image: divine,
    name: "Divine Effiong",
    role: "Lead Designer",
  },
];

// Functional component that renders the Lead section of the page
const Lead = () => {
  return (
    <div className="w-full mt-20 flex justify-center">
      {/* Main container with responsive width */}
      <div className="w-11/12 lg:w-4/5 lg:gap-20 h-auto flex flex-col gap-6">
        {/* Section title */}
        <h1 className="font-mont font-semibold lg:text-4xl text-2xl text-white">
          Meet the lead Thynkers
        </h1>
        {/* Grid layout for displaying team member cards */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {content.map((items, index) => (
            <Card
              key={index} // Using index as the key for mapping
              image={items.image}
              name={items.name}
              role={items.role}
              mt={items.mt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lead;

// Functional component that represents an individual team member's card
const Card = ({ image, name, role, mt }) => {
  return (
    <div className={`${mt} flex flex-col gap-2 items-start`}>
      {/* Profile image with rounded corners */}
      <img width="100%" className="rounded-xl" src={image} alt={name} />
      {/* Team member's name */}
      <h1 className="font-mont font-medium text-sm leading-5 text-white">
        {name}
      </h1>
      {/* Team member's role */}
      <p className="font-inter font-normal text-xs leading-5 text-[#8E8E8E]">
        {role}
      </p>
    </div>
  );
};

// PropTypes validation to ensure correct prop types are passed
Card.propTypes = {
  role: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  mt: PropTypes.string.isRequired,

};
