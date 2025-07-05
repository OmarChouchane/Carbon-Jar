import React from "react";
import { SmallerH1, H2, H3 } from "../Heading";
import Button from "../button";

import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

interface BigCardProps {
  title: string;
  image: string;
  Maindescription?: string;
  description: React.ReactNode;
  button1?: string;
  button2?: string;
}

const BigCard1: React.FC<BigCardProps> = ({
  title,
  image,
  description,
  Maindescription,
  button1,
  button2,
}) => (
  <div
    className={tw(
      "flex lg:m-8 m-4 flex-col lg:flex-row justify-start items-center lg:items-stretch gap-4 p-4 rounded-lg border border-lighter-green"
    )}
  >
    <img
      className={tw("rounded-lg object-cover")}
      src={image}
      alt={title}
      style={{ width: "364px", height: "294px" }}
    />
    <div
      className={tw("flex flex-col justify-center items-start gap-6 lg:ml-6")}
    >
      <div className={tw("flex flex-col justify-start items-start gap-3")}>
        <SmallerH1 className={tw("mx-4")}>{title}</SmallerH1>
        <br />
        <H2 className="font-bold">{Maindescription}</H2>
        <H3 className="text-left">{description}</H3>
      </div>
      <div className={tw("flex gap-3 justify-end w-full")}>
        {button1 && <Button secondary>{button1}</Button>}
        <div className={tw("flex items-center")}>
          {button2 && (
            <Button primary>
              {button2}
              <IoIosArrowForward className={tw("ml-2")} />
            </Button>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default BigCard1;
