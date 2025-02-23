import FallingWordsMobile from "../../assets/images/fallingword-mobile.svg";
import FallingWordsDesktop from "../../assets/images/fallingwords-desktop.svg";
import GulfCoast from "../../assets/images/gulf-coast.svg";
import Binarify from "../../assets/images/binarify.svg";
import Africode from "../../assets/images/africode.svg";
import Weeemake from "../../assets/images/weeemake.svg";
import Futminna from "../../assets/images/futminna.svg"


const images = [
    { src: GulfCoast, alt: "GulfCoast" },
    { src: Binarify, alt: "Binarify" },
    { src: Africode, alt: "Africode" },
    { src: Weeemake, alt: "Weeemake" },
    { src: Futminna, alt: "Futminna" },
  ];

function Hero() {
  return (
    <div>
        <div className="flex flex-col lg:flex-row py-12 lg:pt-[92px] md:justify-center items-center">
            <div className="lg:w-7/12 w-full mb-14 lg:mb-[185px] pl-6 pr-8 lg:pl-1">
                <h1 className="text-white text-3xl lg:text-[56px] lg:leading-tight lg:pb-4 font-mont font-semibold leading-10 pb-3">
                    Empowering African Innovation Through Technology
                </h1>
                <p className="text-textGray font-inter text-sm lg:text-[20px] leading-6 lg:pr-16 lg:leading-8 lg:tracking-wider pb-3 lg:pb-8">
                    We empower African talent and businesses through technology, education, and innovation. Join us in transforming ideas into impactful solutions.
                </p>
                <button className="mt-6 bg-buttonBrown text-white font-semibold font-inter py-2.5 px-5 rounded-full outline-none lg:text-xl lg:px-12 lg:mt-6 lg:-ml-1">
                    Let’s get started
                </button>
            </div>
            <div className="w-full lg:w-5/12 flex justify-center mb-8 lg:-mt-28">{/*lg:-ml-72*/}
                <img 
                    src={FallingWordsMobile} 
                    alt="Falling Words Mobile"
                    className="md:hidden" />

                    <img 
                    src={FallingWordsDesktop} 
                    alt="Falling Words Desktop"
                    className="hidden md:block" />
            </div>
        </div>
        <div className="flex flex-col px-5 mb-[65px] lg:mb-[250px]">
            <h3 className="lg:text-3xl text-xl font-semibold font-mont text-white pb-5">Partners</h3>
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                {[...Array(2)].map((_, idx) => (
                <ul
                    key={idx}
                    className="flex items-center justify-center [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                >
                    {images.map((image, index) => (
                    <li key={`${idx}-${index}`}>
                        <img src={image.src} alt={image.alt} />
                    </li>
                    ))}
                </ul>
                ))}
            </div>
        </div>
        <div className="text-white font-mont flex flex-col px-6">
            <h4 className="font-semibold text-2xl lg:text-[45px] pb-2 lg:pb-8">“We are a one stop shop for a career in tech”</h4>
            <p className="font-medium text-xl leading-8 lg:leading-[57px] lg:text-[40px]">
                Thynkcity bridges Africa’s tech gap with innovative solutions in software, design, robotics, consulting, and training to empower kids, individuals, and businesses for success.
            </p>
        </div>
    </div>
  )
}

export default Hero;