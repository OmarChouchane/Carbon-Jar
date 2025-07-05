import React from "react";

import { H1Inter, H2, H3 } from "../Heading";
import SmallerBox from "../smallbox";
import { FaCheck } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";
import ContentCard from "../content-card";

interface CourseCardProps {
  index: number;
  peopleEnrolled: number;
  duration: number;
  certified: boolean;
  trainingTitle: string;
  trainingDescription: string;
  goals: string[];
  targetAudience: string[];
  content: Record<string, string>;
  link: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  index,
  peopleEnrolled,
  duration,
  certified,
  trainingTitle,
  trainingDescription,
  goals,
  targetAudience,
  content,
  link,
}) => {
  const expectedDays = Array.from(
    { length: duration },
    (_, i) => `Day ${i + 1}`
  );
  const validContent = expectedDays.reduce(
    (acc, day) => {
      acc[day] = content[day] || "";
      return acc;
    },
    {} as Record<string, string>
  );

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div
        className={tw(
          "relative items-start m-8 lg:px-8 gap-4 rounded-lg border border-green-dark bg-green-dark shadow-md p-6"
        )}
      >
        <motion.a
          href={link}
          className={tw(
            "lg:absolute lg:right-6 lg:top-6 text-white-light text-sm underline flex items-center gap-1"
          )}
          whileHover={{ scale: 1.05, color: "#e0e0e0" }}
          whileTap={{ scale: 0.95, color: "#b0b0b0" }}
        >
          <H3 className={tw("text-white-light")}>Start Course Now</H3>
          <MdArrowForwardIos className={tw("text-white-light")} />
        </motion.a>

        <div className={tw("flex flex-wrap gap-4 mb-4")}>
          <SmallerBox text={`+ ${peopleEnrolled} people enrolled`} />
          <SmallerBox text={`${duration}-day intensive course`} />
          {certified && (
            <SmallerBox
              text={
                <>
                  <FaCheck className={tw("inline mr-1 text-green-light")} />{" "}
                  Certified
                </>
              }
            />
          )}
        </div>

        <div className={tw("flex flex-col items-start gap-4")}>
          <H1Inter className={tw("text-white-light")}>
            Training {index} : {trainingTitle}
          </H1Inter>
          <H3 className={tw("text-white-light")}>{trainingDescription}</H3>

          <div className={tw("mt-2")}>
            <div className={tw("flex items-center gap-2")}>
              <img src="images/icons/octicon_goal-16.svg" alt="goals-icon" />
              <H2 className={tw("text-white-light font-bold")}>Goals:</H2>
            </div>
            <ul
              className={tw(
                "list-disc pl-5 mt-2 text-white-light items-left text-left font-Inter"
              )}
            >
              {goals.map((goal, index) => (
                <li key={index} className={tw("mb-2")}>
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          <div className={tw("mt-2")}>
            <div className={tw("flex items-center gap-2")}>
              <img src="images/icons/User.svg" alt="target-icon" />
              <H2 className={tw("text-white-light font-bold")}>
                Target Audience:
              </H2>
            </div>
            <ul
              className={tw(
                "list-disc pl-5 mt-2 text-white-light items-left text-left font-Inter"
              )}
            >
              {targetAudience.map((audience, index) => (
                <li key={index} className={tw("mb-2")}>
                  {audience}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={tw("mt-2")}>
          <div className={tw("flex items-center")}>
            <img src="images/icons/Stack.svg" alt="content-icon" />
            <H2 className={tw("text-white-light font-bold")}>
              Course Content:
            </H2>
          </div>
          <div className={tw("grid grid-cols-2")}>
            {Object.entries(validContent).map(([day, content], index) => (
              <div key={index} className={tw("m-2")}>
                <ContentCard dayTitle={day} topicTitle={content} />
              </div>
            ))}
          </div>
        </div>
        {certified && (
          <div className={tw("mt-2")}>
            <H2 className={tw("text-white-light text-left")}>
              <span className={tw("text-white-light font-bold text-left")}>
                Certification:{" "}
              </span>
              Participants who attend and complete the training course will
              receive a Carbon Jar Certificate of Completion.
            </H2>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CourseCard;
