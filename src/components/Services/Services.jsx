
import Code from "../../assets/icons/code.svg";
import Management from "../../assets/icons/management.svg";
import Education  from "../../assets/icons/education.svg";
import Product from "../../assets/icons/product.svg";
import Robotics from "../../assets/icons/robotics.svg";
import Consulting from "../../assets/icons/consulting.svg";
import SEO from "../../assets/icons/seo.svg";
import Research from "../../assets/icons/research.svg";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import ArrowAngle from "../../assets/icons/arrow-angle.svg";

function Services() {

    const boxContent = [
        { 
            id: 1,
            icon: Code,
            title: "Software Development", 
            description: "We build software solutions that drive efficiency and growth, tailored to fit your business needs.", 
            color: "bg-[#CC5C33]"
         },
        { 
            id: 2, 
            icon: Management,
            title: "Project Management", 
            description: "We handle your projects from start to finish, ensuring timely delivery and best results.", 
            color: "bg-[#D4992B]" 
        },
        { 
            id: 3, 
            icon: Education,
            title: "Education and Training", 
            description: "We train people and schools in tech skills that matter for the future.", 
            color: "bg-[#A05CD6]" 
        },
        { 
            id: 4, 
            icon: Product,
            title: "Product Design", 
            description: "We turn your ideas into easy-to-use products with smart design and great user experiences.", 
            color: "bg-[#65AE2C]" 
        },
        { 
            id: 5, 
            icon: Robotics,
            title: "Robotics and AI Solution", 
            description: "We use robotics and AI to automate tasks, enhance productivity, and deliver intelligent solutions.", 
            color: "bg-[#46A2B9]" 
        },
        { 
            id: 6, 
            icon: Consulting,
            title: "Consulting Services", 
            description: "We help you figure out the best way to grow your business and get the best results.", 
            color: "bg-[#D57F5D]" 
        },
        { 
            id: 7, 
            icon: SEO,
            title: "SEO and Digital Marketing", 
            description: "We boost your online presence with proven strategies so your audience finds you.", 
            color: "bg-[#E2D2B8]" 
        },
        { 
            id: 8,
            icon: Research,
            title: "Research and Development", 
            description: "We explore new ideas and turn them into tech solutions that work.", 
            color: "bg-[#8EA05F]"
         },
      ];

      const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="mt-[73px] lg:mt-60 px-5 lg:pl-36 lg:pr-44">
        <h3 className="text-white font-mont font-semibold text-2xl lg:text-[40px]">Our Services</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-4 py-6 lg:pt-14 lg:gap-x-5 lg:gap-y-3">
        {boxContent.map((box) => (
          <div
            key={box.id}
            onMouseEnter={() => setHoveredId(box.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`flex flex-col pl-3 pr-2 lg:pl-7 lg:pr-10 h-64 lg:h-[370px] text-white rounded-xl lg:rounded-2xl transition-transform duration-300 ${box.color} ${hoveredId && hoveredId !== box.id ? "opacity-50" : "opacity-100"}`}
          >
                <img src={box.icon} alt={box.title} className="my-10 h-6 w-6 lg:h-11 lg:w-11 lg:mt-12 lg:mb-[75px]"/>
                <div className={`text-black font-inter transition-transform duration-300 ${hoveredId === box.id ? "translate-y-[-25px]" : ""}`}>
                    <h5 className={`text-base lg:text-[22px] font-semibold font-inter pb-2 leading-5 lg:leading-7 ${box.id === 7 ? "pr-3" : "pr-9"}`}>{box.title}</h5>
                    <p className="text-[11px] lg:text-[15px] pb-4">{box.description}</p>
                    {/* Learn More Button */}
                    {hoveredId === box.id && (
                        <Link to=""
                        className="text-[11px] lg:text-[15px] text-black transition duration-200 flex items-center gap-1"
                        >
                            Learn More
                            <img src={ArrowAngle} alt="Arrow Angle"/>
                        </Link>
                    )}
                </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services