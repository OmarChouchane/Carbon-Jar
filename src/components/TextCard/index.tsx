import React from "react";
import { H2, H2Bold, SmallerH1 } from "../Heading";

interface TextCardProps {
  texts: { title: string; text: string }[];
  title?: string;
}

const TextCard: React.FC<TextCardProps> = ({ texts, title }) => (
  <div
    className={tw(
      "rounded-lg border border-lighter-green bg-white-light lg:mt-20 lg:mb-20 lg:mx-32"
    )}
  >
    {title && <SmallerH1 className={tw("mt-6")}>{title}</SmallerH1>}
    <div
      className={tw(
        "grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 p-4 "
      )}
    >
      {texts.map((textItem, index) => (
        <div
          key={index}
          className={tw(
            "flex flex-col p-4 rounded-lg  hover:shadow-md transition duration-300"
          )}
        >
          <H2Bold className={tw("text-3xl")}>{textItem.title}</H2Bold>
          <H2>{textItem.text}</H2>
        </div>
      ))}
    </div>
  </div>
);

export default TextCard;
