import { motion } from "framer-motion";

const words = [
  { text: "SEO and Digital Marketing" },
  { text: "Robotics and AI Solution" },
  { text: "Education and Training" },
  { text: "Consulting Services" },
  { text: "Project Management" },
  { text: "Research and Development" },
  { text: "Product Design" },
  { text: "Software Development" },
];

const rotationAngles = [5, 10, 15, 5, 10, 15, 20, 10];

const FallingWords = () => {
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
      transition: { duration: 1, ease: "easeOut" },
    }),
  };



  return (
    <div className="relative w-full h-auto flex justify-center items-center">
      <motion.div
        className="relative w-full h-full flex flex-wrap justify-end items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Words */}
        {words.map((word, index) => (
          <motion.div
            key={index}
            className="border-2 border-textGray rounded-full text-textGray text-sm px-4 py-2 rotate-45"
            style={{
              top: `${[5, 15, 25, 35, 45, 55, 65, 75][index]}%`, // Vertical positions
              left: `${[0, 5, 10, 10, 17, 10, 5, 10][index]}%`, // Center-align horizontally
            }}
            variants={itemVariants}
            custom={rotationAngles[index]}
          >
            <span className="text-textGray font-inter text-lg font-semibold whitespace-nowrap">
              {word.text}
            </span>
          </motion.div>
        ))}

        {/* Colored Balls */}
        {[...Array(7)].map((_, index) => (
          <motion.div
            key={`circle-${index}`}
            className={`absolute w-6 h-6 rounded-full shadow-lg ${
              ["bg-green-500", "bg-purple-500", "bg-orange-500"][
                index % 3
              ]
            }`}
            style={{
              top: `${[12, 22, 32, 42, 52, 62, 72, 82][index]}%`, // Vertical positions
              left: `${[55, 60, 50, 65, 55, 62, 53, 58][index]}%`, // Horizontal positions
              boxShadow: `0 0 20px ${
                [
                  "rgba(72, 187, 120, 0.8)", // Green
                  "rgba(147, 112, 219, 0.8)", // Purple
                  "rgba(255, 165, 0, 0.8)", // Orange
                ][index % 3]
              }`,
            }}
            variants={itemVariants}
          ></motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FallingWords;
