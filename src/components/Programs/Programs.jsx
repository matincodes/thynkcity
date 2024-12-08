import { useEffect, useRef, useState } from "react";

const cards = [
  {
    id: 1,
    title: "Kids' Tech Program",
    description:
      "We offer tech programs for kids, including Scratch, Python, Robotics, App Inventor, 3D Printing, and Game Development.",
    color: "bg-orange-500",
    logo: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    title: "NeuraLearn Institute",
    description:
      "AI-powered learning platform offering courses in tech fields such as Frontend Development, Backend Development, Python, Robotics, and more.",
    color: "bg-yellow-500",
    logo: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    title: "Weekend Nexus",
    description:
      "A 16-week intensive program for adults offering flexible, weekend virtual tech training tailored to fit busy schedules.",
    color: "bg-purple-500",
    logo: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    title: "Talent AQ",
    description:
      "Connect with recruiters, showcase your skills, enhance your portfolio, and prepare for your dream job with focused training.",
    color: "bg-green-500",
    logo: "https://via.placeholder.com/50",
  },
];

const StackedCards = () => {
  const containerRef = useRef(null);
  const [fixedIndex, setFixedIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const cards = Array.from(containerRef.current.children);

      let fixed = -1;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom > 0) {
          fixed = index;
        }
      });

      setFixedIndex(fixed);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Content Before Cards */}
      <div className="h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-3xl font-bold">Scroll Down to See the Cards</h1>
      </div>

      {/* Cards Section */}
      <div ref={containerRef} className="relative h-auto">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`w-[80%] mx-auto my-10 p-6 rounded-xl shadow-lg flex flex-col items-center ${
              fixedIndex === index ? "fixed top-0 left-1/2 transform -translate-x-1/2 z-10" : ""
            } ${card.color}`}
            style={{ height: "50vh" }}
          >
            <img
              src={card.logo}
              alt={`${card.title} Logo`}
              className="w-12 h-12 bg-white p-2 rounded-full mb-4"
            />
            <h2 className="text-white text-2xl font-bold">{card.title}</h2>
            <p className="text-white mt-2 text-center">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Content After Cards */}
      <div className="h-screen bg-gray-200 flex items-center justify-center">
        <h1 className="text-3xl font-bold">End of Cards</h1>
      </div>
    </div>
  );
};

export default StackedCards;
