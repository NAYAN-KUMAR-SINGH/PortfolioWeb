import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">

      <LiIcon reference={ref} />
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;<a href={companyLink} target="_blank"
          className="text-primary dark:text-primaryDark capitalize">@{company}</a>
          </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">
          {work}
        </p>

      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
    target:ref,
    offset:["start end", "center start"],
  }
  )
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center 
      md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

        <motion.div
        style={{scaleY: scrollYProgress}}        
        className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]" />


        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position={"AI-ML Intern"} company={"aws academy"}
            time="SEP 23 - NOV 23" address={"Virtual Internship"}
            companyLink={"https://drive.google.com/file/d/1l5p_FN1UFVuxH5CZ4o5EWFtI9Rb-WoM_/view?usp=sharing"}
            work={"The rapid evolution of technology has led to an increased reliance on cloud computing solutions, with organizations seeking scalable, secure, and cost-effective infrastructures. However, the effective utilization of cloud services, particularly within the Amazon Web Services (AWS) ecosystem, poses challenges for many professionals. "}
          />
          <Details
            position={"Front End Development Intern"} company={"ibm skillsBuild"}
            time="JUN 23 - JUL 23" address={"Virtual Internship"}
            companyLink={"https://drive.google.com/file/d/16QIlDREyismi8EwthGilgArDm-8slKkK/view?usp=sharing"}
            work={" During my Virtual internship at Ibm SkillsBuild, I played a pivotal role in developing responsive and visually appealing user interfaces for the company's flagship product. Collaborating with cross-functional teams, I translated design mockups into pixel-perfect web pages, utilizing HTML5, CSS3, and JavaScript."}
          />
          <Details
            position={"Cisco Network Intern"} company={"cisco networking academy"}
            time="JUN 23 - JUL 23" address={"Virtual Internship"}
            companyLink={"https://drive.google.com/file/d/1knzUSW1TbA4RtWm1KjGMPcbf77DmX5gE/view?usp=sharing"}
            work={"During my Virtual internship at cisco networking academy, I immersed myself in the dynamic world of Cisco networking, contributing to the design and implementation of robust network infrastructures. I actively participated in configuring and troubleshooting routers, switches, and firewalls, gaining hands-on experience in optimizing network performance."}
          />
          <Details
            position={"cloud Intern"} company={"aws academy"}
            time="MAY 23 - JUL 23" address={"Virtual Internship"}
            companyLink={"https://drive.google.com/file/d/1QZ69h-2bGDxkT7qW4FN6d3l0gew0KIl2/view"}
            work={"As an Virtual intern at aws academy within the AWS Cloud Academy, I delved into the realm of cloud computing, gaining profound insights into Amazon Web Services (AWS). Working closely with seasoned professionals, I actively participated in the deployment and management of cloud-based solutions, optimizing infrastructure scalability and performance."}
          />
         
        </ul>
      </div>
    </div>
  )
}

export default Experience;