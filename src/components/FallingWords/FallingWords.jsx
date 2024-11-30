import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  { text: "SEO and Digital marketing" },
  { text: "Robotics and AI Solution" },
  { text: "Education and Training" },
  { text: "Consulting Services" },
  { text: "Project Management" },
  { text: "Research and Development" },
  { text: "Product Design" },
  { text: "Software Development" },
];

// Rotation angles for mobile and desktop
const mobileRotationAngles = [-60, -50, -20, 15, 45, 55, 25, 0];
const desktopRotationAngles = [-30, -10, 5, 20, 50, 40, 35, 15];

// Positions for mobile (iPhone 13 Mini) and desktop
const mobilePositions = {
  top: [10, 25, 40, 15, 35, 50, 65, 75],
  left: [-15, -10, 0, 25, 20, 30, 40, 45],
};

const desktopPositions = {
  top: [15, 30, 50, 20, 40, 55, 70, 85], // Random desktop positions
  left: [-10, -5, 5, 30, 25, 35, 50, 60], // Random desktop positions
};

const FallingWords = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // Set to `true` if the screen is wider than 768px
    };

    // Run on mount and resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Stagger animations of words and balls
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -100 }, // Start offscreen above
    visible: (custom) => ({
      opacity: 1,
      y: 0, // Drop into view
      rotate: custom, // Use the custom rotation angle
      transition: { duration: 2, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative w-full h-72 md:h-[90vh] flex justify-center items-center">
      <motion.div
        className="relative w-full h-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Words */}
        {words.map((word, index) => (
          <motion.div
            key={index}
            className="absolute border-2 border-textGray rounded-full text-textGray px-4 py-1.5 flex items-center justify-center tracking-wide"
            style={{
              // Mobile positions
              top: `${mobilePositions.top[index]}%`,
              left: `${mobilePositions.left[index]}%`,

              // Desktop positions (You can adjust later)
              ...(isDesktop && {
                top: `${desktopPositions.top[index]}%`,
                left: `${desktopPositions.left[index]}%`,
              }),
            }}
            variants={itemVariants}
            custom={
              isDesktop
                ? desktopRotationAngles[index] // Use desktop angles if on desktop
                : mobileRotationAngles[index] // Use mobile angles otherwise
            }
          >
            <span className="text-textGray font-inter text-xs font-semibold">
              {word.text}
            </span>
          </motion.div>
        ))}

        {/* Colored Balls */}
        {[...Array(7)].map((_, index) => (
          <motion.div
            key={`circle-${index}`}
            className={`absolute w-5 h-5 rounded-full blur-[2px] ${
              [
                "bg-[#E2D2B8]",
                "bg-[#D57F5D]",
                "bg-[#46A2B9]",
                "bg-[#65AE2C]",
                "bg-[#8933CC]",
                "bg-[#D4992B]",
                "bg-[#CC5C33]",
              ][index]
            }`}
            style={{
              // Mobile positions
              top: `${mobilePositions.top[index] + 5}%`, // Adjust slightly to align with words
              left: `${mobilePositions.left[index] + 5}%`, // Adjust slightly to align with words

              // Desktop positions (You can adjust later)
              ...(isDesktop && {
                top: `${desktopPositions.top[index] + 5}%`,
                left: `${desktopPositions.left[index] + 5}%`,
              }),
            }}
            variants={itemVariants}
          ></motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FallingWords;
