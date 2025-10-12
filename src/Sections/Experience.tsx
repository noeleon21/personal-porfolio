
import React from "react";
import ExperienceItem from "./Experinceitem";

interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
  link?: string;
}

const EXPERIENCE: Experience[] = [
  {
    date: "June 2025 - Current",
    title: "Rapid Global Administrator",
    company: "Thales",
    description: `Prepare to onboard and load company data for 14 new Thales locations while managing administrative tasks to ensure smooth setup and ongoing support.`,
  },
  {
    date: "Feb 2024 - Dec 2024",
    title: "Information Technology Internship",
    company: "DWS",
    description:
      `Participated in the HCL training program to enhance communication skills, developing effective client interaction and collaboration abilities.

Building expertise in IT fundamentals such as networking (TCP/IP, DNS), Linux and Windows Server, gaining hands on experience with Network Packet Tracer and Wireshark to reinforce networking knowledge.

Training in AWS cloud practitioner concepts, developing a foundational understanding of AWS services of Elastic Load Balancing, VPC, CloudWatch and network security services, supporting future roles in cloud computing.`,
  },
  {
    date: "Feb 2024 - July 2024",
    title: "Penetration Tester",
    company: "Webschool.au",
    description:
      `Conducted vulnerability assessments on school management system endpoints using SQL map, XSStrike, and Postman, strengthening the system’s security against potential exploits.
        
Identified and documented UI and functionality bugs within the application, improving the user experience and system reliability. 
        
Contributed to deliverable documentation by detailing test findings and recommendations, supporting comprehensive reporting and actionable insights for development. 
        
Created a video presentation showcasing the Medic subsystem within the WebSchool management system, providing users with a clear, instructive guide on the application use.`,
  },
  {
    date: "August 2023 - November 2024",
    title: "Web Developer",
    company: "Macs Society",
    description:
      `Developed a responsive website for the MACS society using React and Next.js in collaboration with the web development team, enhancing online engagement and accessibility. 

Created engaging animations across the site to enrich the user experience, using smooth transitions and effects to retain the user interest and improve aesthetics.

Developed an interactive timeline and carousel to show the key events and milestones for MACS, providing a visually structured history of society.`,
  },
];

const ExperienceList: React.FC = () => {
  return (
    <div className="relative max-md:mt-0 mt-8" aria-label="Professional experience">
      <ol className="relative mt-10">
        {EXPERIENCE.map((experience, index) => (
          <li key={index}>
            <article
              role="article"
              aria-labelledby={`experience-title-${experience.title}`}
            >
              <ExperienceItem {...experience} />
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ExperienceList;
