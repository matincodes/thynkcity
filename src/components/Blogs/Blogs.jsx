import blogImageOne from "../../assets/images/Blog-image-one.svg";
import blogImageTwo from "../../assets/images/Blog-image-two.svg";
import blogImageThree from "../../assets/images/Blog-image-three.svg";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import PropTypes from "prop-types";
import { useRef, useState } from "react";

const content = [
  {
    image: blogImageOne,
    title: "Getting Into Tech: A Starter Pack",
    description:
      "We break down challenges into smaller tasks, prioritizing them by business value and urgency to address critical issues first.",
  },
  {
    image: blogImageTwo,
    title:
      "5 Strategies to Effectively Build a Community for Your Custom Audience",
    description:
      "We break down challenges into smaller tasks, prioritizing them by business value and urgency to address critical issues first.",
  },
  {
    image: blogImageThree,
    title:
      "5 Top Artificial Intelligence (AI) Tools and How to Utilise Them for Your Business",
    description:
      "We break down challenges into smaller tasks, prioritizing them by business value and urgency to address critical issues first.",
  },

];

const Blogs = () => {


  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handleNext = () => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const cardWidth =
      containerWidth < 768 ? containerWidth : containerWidth / 2; // Full width for mobile, half for desktop
    const maxIndex = content.length - Math.ceil(containerWidth / cardWidth);

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
          Blog
        </h3>
      </div>
      <div className="w-full overflow-hidden" ref={containerRef}>
        {/* Featured Works Row */}
        <div className="flex gap-8 lg:gap-16 transition-transform duration-500 ease-linear">
          {content.map((items, index) => (
            <div
              key={index}
              className="lg:w-[27%] w-3/6  md:w-1/3  flex-shrink-0 flex  items-start "
            >
              <Card description={items.description} title={items.title} image={items.image}/>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="lg:hidden flex justify-center space-x-8 py-8 lg:space-x-12 lg:-ml-24">
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
  )
};

export default Blogs;

const Card = ({ image, title, description }) => {
  return (
    <div className=" flex flex-col gap-3 ">
      <img src={image} className="rounded-xl" />
      <h1 className="font-inter font-semibold text-sm leading-4 text-white lg:text-lg lg:leading-6">
        {title}
      </h1>
      <p className="font-inter font-light text-[10px] leading-3 text-[#C7C7C7] lg:text-base">
        {description}
      </p>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
