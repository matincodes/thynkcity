import { useState, useRef } from "react";
import TaxNgImage from "../../assets/images/taxng.svg";
import LearnhubImage from "../../assets/images/learnhub.svg";
import ShigaImage from "../../assets/images/shiga.svg";
import ArrowUnderline from "../../assets/icons/arrow-underline.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import { Link } from "@tanstack/react-router";

function FeaturedWorks() {
  const featuredWorks = [
    {
      id: 1,
      image: TaxNgImage,
      title: "Tax Nigeria",
      description:
        "A comprehensive platform designed to streamline tax payer registration, assessment, and payment management for Tax Agents and Tax Payers.",
    },
    {
      id: 2,
      image: LearnhubImage,
      title: "Coderina LearnHub",
      description:
        "A transformative learning platform that enhances the student and instructor experience with personalized learning, intuitive navigation, and interactive tools",
    },
    {
      id: 3,
      image: ShigaImage,
      title: "Shiga Business",
      description:
        "A cutting-edge app simplifying cross-border financial transactions for businesses and consumers.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handleNext = () => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const cardWidth = containerWidth < 768 ? containerWidth : containerWidth / 2; // Full width for mobile, half for desktop
    const maxIndex = featuredWorks.length - Math.ceil(containerWidth / cardWidth);

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
    const cardWidth = containerWidth < 768 ? containerWidth : containerWidth / 2; // Full width for mobile, half for desktop

    const newIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);

    containerRef.current.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-16 lg:mt-32 pl-5 !pr-0">
      <div className="flex justify-between items-center">
        <h3 className="text-white font-mont font-semibold text-2xl pb-8 lg:text-[40px] lg:pb-14">
          Featured Works
        </h3>
        <Link to="">See more</Link>
      </div>
      <div className="w-full overflow-hidden" ref={containerRef}>
        {/* Featured Works Row */}
        <div className="flex gap-8 lg:gap-16 transition-transform duration-500 ease-linear">
          {featuredWorks.map((work, index) => (
            <div
              key={index}
              className="lg:w-1/3 w-full flex-shrink-0 flex flex-col items-center"
            >
              {/* Image Wrapper */}
              <div className="w-full rounded-xl lg:rounded-3xl overflow-hidden group">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.2]"
                />
              </div>

              {/* Title and Description */}
              <div className="mt-4">
                <div className="flex justify-between items-center pb-3">
                  <h3 className="text-base font-semibold text-white font-mont lg:text-[32px]">
                    {work.title}
                  </h3>
                  <img
                    src={ArrowUnderline}
                    alt="Arrow Underline"
                    className="w-5 h-5 lg:w-10 lg:h-10"
                  />
                </div>
                <p className="text-[11px] text-white leading-5 font-inter font-light lg:text-xl lg:leading-normal">
                  {work.description}
                </p>
              </div>
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
          <img src={ArrowRight} alt="" className="w-4 h-4 lg:w-auto lg:h-auto" />
        </button>
      </div>
    </div>
  );
}

export default FeaturedWorks;
