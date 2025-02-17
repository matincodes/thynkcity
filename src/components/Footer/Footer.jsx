import logo from "../../assets/icons/footerIcon.svg";
import divider from "../../assets/icons/divider.svg"
import footerIcon from "../../assets/icons/footer-icon-two.svg"
import twitter from "../../assets/icons/Twitter.svg"
import facebook from "../../assets/icons/Facebook.svg"
import linkedIn from "../../assets/icons/LinkedIn.svg"
import instagram from "../../assets/icons/Instagram.svg"
import pinterest from "../../assets/icons/Pinterest.svg"


     

const Footer = () => {
  return (
    <div className="bg-[#1A1106] pt-11 flex flex-col items-center justify-end">
      <div className="w-11/12 flex flex-col gap-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="w-44 h-20">
            <img src={logo} />
            <p className="w-44 font-normal text-xs text-white">
              Empowering African Innovation Through Technology
            </p>
          </div>
          <div className="grid grid-cols-2  gap-6 md:grid-cols-4">
            <div className="flex flex-col gap-5">
              <h1 className="font-inter font-semibold text-sm leading-5 text-white">
                company
              </h1>
              <ul className="flex flex-col gap-3  font-inter font-light text-xs leading-5 text-[#C7C7C7]">
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Careers</li>
                <li className="cursor-pointer">Blog</li>
                <li className="cursor-pointer">FAQs</li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-inter font-semibold text-sm leading-5 text-white">
                programs / products
              </h1>
              <ul className="flex flex-col gap-3  font-inter font-light text-xs leading-5 text-[#C7C7C7]">
                <li className="cursor-pointer">Kids &apos; Tech Programs</li>
                <li className="cursor-pointer">NeuraLearn Institute</li>
                <li className="cursor-pointer">Weekend Nexus</li>
                <li className="cursor-pointer">Talent AQ</li>
                <li className="cursor-pointer">Skill sprint</li>
                <li className="cursor-pointer">Pace Tech Academy</li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-inter font-semibold text-sm leading-5 text-white">
                services
              </h1>
              <ul className="flex flex-col gap-3  font-inter font-light text-xs leading-5 text-[#C7C7C7]">
                <li className="cursor-pointer">Software Development</li>
                <li className="cursor-pointer">Project Management</li>
                <li className="cursor-pointer">Education and Training</li>
                <li className="cursor-pointer">Product Design</li>
                <li className="cursor-pointer">Robotics and AI Solution</li>
                <li className="cursor-pointer">Consulting Services</li>
                <li className="cursor-pointer">SEO and Digital marketing</li>
                <li className="cursor-pointer">Research and Development</li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-inter font-semibold text-sm leading-5 text-white">
                contact us
              </h1>
              <ul className="flex flex-col gap-3 font-inter font-light text-xs leading-5 text-[#C7C7C7]">
                <li >+234 902 523 0287</li>
                <li className="cursor-pointer">build@thynkcity.com</li>
              </ul>
            </div>
          </div>
        </div>
        {/* // */}
        <img src={divider} className="bg-[#71879C33]"/>
        <div className="h-28 flex flex-col justify-between md:flex-row md:items-start md:h-auto">
            <span className="flex items-center gap-2 font-normal text-sm text-[#C7C7C7]">
                <p>©2024 Thynkcity</p>
                <p>All rights reserved.</p>
            </span>
            <ul className="grid grid-cols-3 gap-6 md:grid-cols-5 font-medium text-sm text-white">
                <li className="flex items-center gap-2 cursor-pointer"> <img src={linkedIn}/> LinkedIn</li>
                <li className="flex items-center gap-2  cursor-pointer"><img src={twitter}/> Twitter</li>
                <li className="flex items-center gap-2  cursor-pointer"><img src={instagram}/> Instagram</li>
                <li className="flex items-center gap-2  cursor-pointer"><img src={facebook}/> Facebook</li>
                <li className="flex items-center gap-2  cursor-pointer"><img src={pinterest}/> Pinterest</li>
            </ul>
        </div>
        <img src={footerIcon}/>
      </div>
    </div>
  );
};

export default Footer;
