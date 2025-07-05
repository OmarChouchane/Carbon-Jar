import React from "react";
import { SmallerH1, H2 } from "../Heading";
import Button from "../button";

import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

interface BigCardProps {
  title: string;
  description1?: string;
  Maindescription: string;
  description: React.ReactNode;
  button1?: string;
  icon?: string;
}

const BigCard2: React.FC<BigCardProps> = ({
  title,
  description,
  Maindescription,
  icon,
  button1,
  description1,
}) => (
  <div
    className={tw(
      "flex lg:mt-12 flex-col bg-light-green mx-auto lg:flex-row justify-start items-left lg:items-stretch lg:p-8 p-2 rounded-lg border border-lighter-green"
    )}
  >
    <div className={tw("flex flex-col justify-start items-left gap-6 lg:ml-6")}>
      <div className={tw("flex flex-col justify-start items-left")}>
        <SmallerH1 className={tw("mx-10")}>{title}</SmallerH1>
        <br />
        {description1 && <H2 className="text-left">{description1}</H2>}

        <div className={tw("flex items-left mx-6")}>
          {icon && <img src={icon} alt="icon" className={tw("w-6 h-6")} />}
          <H2 className="font-bold justify-start">{Maindescription}</H2>
        </div>
        <H2 className={tw("lg:mx-6  mx-2 justify-start text-left")}>
          {description}
        </H2>
      </div>
      {button1 && (
        <div className={tw("flex gap-3 justify-end w-full")}>
          <div className={tw("flex items-center mx-auto lg:mx-8")}>
            <Button primary>
              {button1}
              <IoIosArrowForward className={tw("ml-2")} />
            </Button>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default BigCard2;
