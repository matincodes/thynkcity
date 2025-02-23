import arrow from "../../assets/icons/arrow-angle-2.svg";
import thynkcityIcon from "../../assets/icons/thynkcity-icon.svg";
import imageOne from "../../assets/images/card-image-one.svg";
import imageTwo from "../../assets/images/card-image-two.svg";
import imageThree from "../../assets/images/card-image-three.svg";
import imageFour from "../../assets/images/card-image-four.svg";
import imageFive from "../../assets/images/card-image-five.svg";
import imageSix from "../../assets/images/card-image-six.svg";
import PropTypes from "prop-types";

//
//
const cards = [
  {
    id: 1,
    title: "Kids' Tech Program",
    description:
      "We offer tech programs for kids, including Scratch, Python, Robotics, App Inventor, 3D Printing, and Game Development.",
    color: "bg-[#CC5C33]",
    image: imageOne,
  },
  {
    id: 2,
    title: "NeuraLearn Institute",
    description:
      "AI-powered learning platform offering courses in tech fields such as Frontend Development, Backend Development, Python, Robotics, and more.",
    color: "bg-[#D4992B]",
    image: imageTwo,
  },
  {
    id: 3,
    title: "Weekend Nexus",
    description:
      "A 16-week intensive program for adults offering flexible, weekend virtual tech training tailored to fit busy schedules.",
    color: "bg-[#A05CD6]",
    image: imageThree,
  },
  {
    id: 4,
    title: "Talent AQ",
    description:
      "Connect with recruiters, showcase your skills, enhance your portfolio, and prepare for your dream job with focused training.",
    color: "bg-[#65AE2C]",
    image: imageFour,
  },
  {
    id: 5,
    title: "Talent AQ",
    description:
      "Connect with recruiters, showcase your skills, enhance your portfolio, and prepare for your dream job with focused training.",
    color: "bg-[#2C6675]",
    image: imageFive,
  },
  {
    id: 6,
    title: "Talent AQ",
    description:
      "Connect with recruiters, showcase your skills, enhance your portfolio, and prepare for your dream job with focused training.",
    color: "bg-[#D57F5D]",
    image: imageSix,
  },
];
const Programs = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-6 items-center mt-20 ">
      <div className="w-[90%] lg:w-4/5">
        <h1 className="font-semibold font-mont lg:text-4xl text-2xl  text-white">
          Our programs
        </h1>
      </div>
      {/* cards */}
      <div className="h-auto w-[90%] lg:w-4/5 flex flex-col items-center gap-7 lg:gap-24 ">
        {cards.map((items) => (
          <Card
            key={items.id}
            title={items.title}
            description={items.description}
            color={items.color}
            image={items.image}
            nth={items.nth}
          />
        ))}
      </div>
    </div>
  );
};

export default Programs;
const Card = ({ title, description, color, image }) => {
  return (
    <div
      className={` ${color} lg:py-5 lg:px-5  sticky top-0 duration-300 ease-in-out w-full h-auto p-2 rounded-lg flex flex-col  md:flex-row-reverse items-center justify-between gap-[8px]`}
    >
      <img
        src={image}
        className=" w-[100%] md:w-[45%] h-auto md:h-full rounded-sm  "
      />
      <div className=" h-auto flex flex-col justify-between gap-8 md:h-full md:w-[45%] ">
        <img className="w-6 h-6 lg:w-11 lg:h-11" src={thynkcityIcon} />
        <div className=" h-auto flex flex-col gap-4 ">
          <span>
            <h1 className=" font-mont font-bold  text-base text-white  lg:text-3xl">
              {title}
            </h1>
            <p className=" lg:w-[452px] font-inter font-normal text-xs text-white lg:text-lg">
              {description}
            </p>
          </span>
          <button className="w-28 h-7 lg:w-44 lg:h-10 rounded-3xl bg-[#F5DED6] flex items-center justify-between gap-2 pl-3 font-inter font-semibold text-xs lg:text-xl">
            <span className="hover:underline">Learn more</span>{" "}
            <img className="w-6 lg:w-10" src={arrow} />
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
};
