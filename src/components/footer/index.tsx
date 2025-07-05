import Button from "@/components/button";
import Envelope from "/public/images/icons/Envelope.svg";
import Facebook from "/public/images/icons/Facebook.svg";
import Instagram from "/public/images/icons/Instagram.svg";
import Linkedin from "/public/images/icons/Linkedin.svg";
import Location from "/public/images/icons/Location.svg";
import Mdi_web from "/public/images/icons/mdi_web.svg";
import Phone from "/public/images/icons/Phone.svg";
import { H3, H2 } from "../Heading";

const Footer = () => {
  return (
    <footer
      className={tw`bg-green lg:mx-32 sm:mx-1 md:mx-10 lg:mt-8 md:mt-10 px-8 sm:px-2 lg:px-10 lg:mb-10 rounded-lg lg:rounded-xl border border-border-white flex flex-col sm:flex-row justify-between items-start`}
    >
      <div className={tw`flex flex-col lg:gap-4`}>
        <div className={tw`flex items-center gap-3 lg:m-6 m-4`}>
          <a href="/">
            <img
              src="CarbonJar2.svg"
              alt="CarbonJar"
              className={tw`lg:w-80 w-60 h-10 lg:h-10`}
            />
          </a>
        </div>
        <div
          className={tw`flex flex-col lg:gap-3 gap-2 lg:mb-8 mb-4 md:mt-6 lg:mx-8 lg:px-8`}
        >
          <div className={tw`flex items-center lg:gap-3`}>
            <Location className={tw`w-6 h-7`} />
            <H2 className={tw`text-white-light text-left`}>
              20th March Street, Gam <br /> Building, Sousse
            </H2>
          </div>
          <div className={tw`flex items-center lg:gap-3`}>
            <Phone className={tw`w-6 h-7`} />
            <H2 className={tw`text-white-light`}>+216 36 013 111</H2>
          </div>
          <div className={tw`flex items-center lg:gap-3`}>
            <Envelope className={tw`w-6 h-7`} />
            <H2 className={tw`text-white-light`}>contact@carbonjar.tn</H2>
          </div>
          <div className={tw`flex items-center lg:gap-3`}>
            <Mdi_web className={tw`w-6 h-6`} />
            <a href="https://carbonjar.tn/">
              <H2 className={tw`text-white-light`}>https://carbonjar.tn/</H2>
            </a>
          </div>
        </div>
      </div>
      <div
        className={tw`flex flex-col justify-end text-left mt-6 lg:mt-10 gap-3 lg:m-8`}
      >
        {[
          { name: "Home", href: "/" },
          { name: "About us", href: "/about" },
          { name: "Expertise", href: "/expertise" },
          { name: "Trainings", href: "/trainings" },
          { name: "Resources", href: "/resources" },
          { name: "Careers", href: "/careers" },
          { name: "Contact us", href: "/contact" },
        ].map(({ name, href }) => (
          <a key={name} href={href}>
            <H2 className={tw(` text-left text-white-light`)}>{name}</H2>
          </a>
        ))}
      </div>
      <div
        className={tw`hidden sm:flex mx-4 flex-col justify-end items-center mt-8`}
      >
        <div className={tw`flex flex-col items-center gap-3`}>
          <H2 className={tw`text-center text-white-light`}>
            Find us on social media
          </H2>
          <div className={tw`flex gap-2`}>
            <Facebook className={tw`w-7 h-7`} />
            <a href="https://www.linkedin.com/company/carbon-jar/">
              <Linkedin className={tw`w-7 h-7`} />
            </a>
            <Instagram className={tw`w-7 h-7`} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
