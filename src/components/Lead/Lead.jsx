import abdulmatin from "../../assets/images/Abdulmatin.svg";
import idris from "../../assets/images/Idris.svg";
import fawaz from "../../assets/images/Fawaz.svg";
import barakah from "../../assets/images/Barakah.svg";
import divine from "../../assets/images/Divine.svg";
import PropTypes from "prop-types";

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
  },
  {
    image: fawaz,
    name: "Fawaz  Adeniji",
    role: "Chief Technical Officer",
  },
  {
    image: barakah,
    name: "Barakah Alim",
    role: "Brand Strategist",
  },
  {
    image: divine,
    name: "Divine Effiong",
    role: "Lead Designer",
  },
];
const Lead = () => {
  return (
    <div className="w-full   mt-20 flex justify-center">
      <div className="w-11/12 lg:w-4/5 h-auto flex flex-col gap-6">
        <h1>Meet the lead Thynkers</h1>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {content.map((items, index) => (
            <Card
              key={index}
              image={items.image}
              name={items.name}
              role={items.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lead;

const Card = ({ image, name, role }) => {
  return (
    <div className=" flex flex-col gap-2 items-start ">
      <img width="100%" className="  rounded-xl" src={image} />
      <h1 className="font-mont font-medium text-sm leading-5 text-white">
        {name}
      </h1>
      <p className="font-inter font-normal text-xs leading-5 text-[#8E8E8E]">
        {role}
      </p>
    </div>
  );
};

Card.propTypes = {
  role: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
};
