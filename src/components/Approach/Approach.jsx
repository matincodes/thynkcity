import { useState } from "react";
import  ArrowUnderline from "../../assets/icons/arrow-underline.svg";

function Approach() {

    const approachContent = [
        {
          id: "01",
          title: "Identify & Prioritize",
          description: "We break down challenges into smaller tasks, prioritizing them by business value and urgency to address critical issues first.",
        },
        {
          id: "02",
          title: "Collaborate & Plan",
          description: "Our cross-functional teams collaborate to create innovative solutions. We plan tasks in short sprints with clear goals and expectations.",
        },
        {
          id: "03",
          title: "Build & Test",
          description: "We build and test solutions in iterative phases, refining and adapting based on real-time feedback and results.",
        },
        {
          id: "04",
          title: "Review & Improve",
          description: "After each cycle, we review outcomes and gather feedback, ensuring continuous improvement and alignment with customer needs.",
        },
      ];
      
    const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="mt-16 lg:mt-48 px-5">
        <h3 className="text-white font-mont font-semibold text-2xl lg:text-[40px] lg:pb-10">Our approach</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-x-16 lg:gap-y-20 lg:py-8 py-6">
        {approachContent.map((content, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 lg:space-x-8 lg:px-2 pb-4 group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Number */}
            <div className="text-base lg:text-4xl font-semibold font-mont text-white -mt-2 lg:-mt-4">{content.id}</div>
  
            {/* Title and Description */}
            <div className="flex flex-col">
              {/* Title */}
                <div className={`flex justify-between items-center transition-all duration-100 py-2 lg:py-3 ${
                        hoveredIndex === index ? "border-b-2" : "border-t-2"
                        } border-white`}>
                    <h3 className="text-lg lg:text-[28px] font-semibold font-mont text-white">
                        {content.title}
                    </h3>
                    <img src={ArrowUnderline} alt="Arrow Underline" className="w-5 h-5 lg:w-10 lg:h-10"/>
                </div>
              {/* Description */}
              <p className="text-xs lg:text-base lg:pr-14 lg:tracking-wide leading-5 font-inter text-white lg:py-2 py-1">{content.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-white text-xl lg:text-[40px] font-mont font-medium leading-[31px] lg:leading-[57px] pt-6">
        Choose Thynkcity for innovative, tailored solutions that are scalable. With our expert consulting, real-world and training, we deliver value and go above and beyond for you.
      </div>
    </div>
  )
}

export default Approach