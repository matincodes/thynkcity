import PropTypes from "prop-types";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import { useRef, useState } from "react";

const contents = [
  {
    description:
      "“ThynkCity is Nigeria’s emerging Silicon Valley, a true hub of innovation. Their flexibility and adaptability stand out.”",
    name: "Abdullahi Yusuf",
  },
  {
    description:
      "“ThynkCity is Nigeria’s emerging Silicon Valley, a true hub of innovation. Their flexibility and adaptability stand out.”",
    name: "Abdullahi Yusuf",
  },
  {
    description:
      "“ThynkCity is Nigeria’s emerging Silicon Valley, a true hub of innovation. Their flexibility and adaptability stand out.”",
    name: "Abdullahi Yusuf",
  },
];

const Testimonials = () => {


  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handleNext = () => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const cardWidth =
      containerWidth < 768 ? containerWidth : containerWidth / 2; // Full width for mobile, half for desktop
    const maxIndex = contents.length - Math.ceil(containerWidth / cardWidth);

    const newIndex = Math.min(currentIndex + 1, maxIndex);
    setCurrentIndex(newIndex);

    containerRef.current.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const cardWidth =
      containerWidth < 768 ? containerWidth : containerWidth / 2; // Full width for mobile, half for desktop

    const newIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);

    containerRef.current.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-16 lg:pl-36 lg:mt-32 pl-5">
      <div className="flex justify-between items-center">
        <h3 className="text-white font-mont font-semibold text-2xl pb-8 lg:text-[40px] lg:pb-14">
          Testimonials
        </h3>
      </div>
      <div className="w-full overflow-hidden" ref={containerRef}>
        <div className="flex gap-8 lg:gap-16 transition-transform duration-500 ease-linear">
          {contents.map((items, index) => (
            <div
              key={index}
              className="lg:w-1/3  flex-shrink-0 flex  items-center "
            >
              <Card description={items.description} name={items.name} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center space-x-8 py-8 lg:space-x-12 lg:-ml-24">
        <button
          onClick={handlePrev}
          className="bg-[#121212] rounded-full w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center shadow hover:bg-gray-600 transition"
        >
          <img src={ArrowLeft} alt="" className="w-4 h-4 lg:w-auto lg:h-auto" />
        </button>
        <button
          onClick={handleNext}
          className="bg-[#121212] rounded-full w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center shadow hover:bg-gray-600 transition"
        >
          <img
            src={ArrowRight}
            alt=""
            className="w-4 h-4 lg:w-auto lg:h-auto"
          />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;

const Card = ({ description, name }) => {
  return (
    <div className="w-60 lg:w-[435px] h-auto rounded-2xl px-6 py-7 flex flex-col gap-11 bg-[#121212]">
      <h1 className="font-inter font-normal text-xl  text-[#C7C7C7]">
        {description}
      </h1>
      <h2 className="font-inter font-semibold text-xl text-[#8B5D23]">
        {name}
      </h2>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};
