import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

type Props = {};

export default function Experience({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex flex-col items-center'>
        
      <h3 className='ml-[10px] absolute top-20 uppercase tracking-[10px] text-gray-500 text-2xl'>
        Experience
      </h3>
      <div className='absolute top-24 2xl:top-32 w-[90%] sm:w-[70%]'>
        <Splide 
          options={{
            rewind: true,
            gap   : '5rem',
          }} 
          aria-label="Work Experience">
            <SplideSlide>
              <ExperienceCard 
                title="Software Developer" 
                company="HedgeApple" 
                companyImage="hedgeapple_logo.jpg"
                key="HedgeApple"
                skills={
                  [
                    "Python", 
                    "Django", 
                    "React",
                    "Next.js",
                    "HTML",
                    "CSS",
                    "JavaScript",
                  ]
                } 
                startDate="February 2023"
                endDate="April 2023"
                points={
                  [
                    "Created responsive and user-friendly interfaces using React, Next.js, HTML, CSS, and JavaScript",
                    "Developed and maintained front-end and back-end components of web applications",
                    "Collaborated with other developers, designers, and stakeholders to understand project requirements",
                  ]
                }
              />
              </SplideSlide>
            <SplideSlide>
              <ExperienceCard 
                title="Tier I NOC Engineer" 
                company="Cisco" 
                companyImage={"cisco_logo.jpg"}
                key="Cisco"
                skills={
                  [
                    "CCNA", 
                    "Troubleshooting", 
                    "Bash",
                    "Python",
                  ]
                } 
                startDate="October 2022"
                endDate="January 2023"
                points={
                  [
                    "Monitored network devices and systems to ensure uptime and availability",
                    "Troubleshot and resolved network issues using various troubleshooting tools and techniques",
                    "Escalated incidents and service requests when appropriate",
                  ]
                }
              />
              </SplideSlide>
              <SplideSlide>
                <ExperienceCard 
                  title="Software Developer" 
                  company="Logistically" 
                  companyImage={"logistically_logo.jpg"}
                  key="Logistically"
                  skills={
                    [
                      "Python", 
                      "Django", 
                      "Elm",
                      "HTML",
                      "CSS",
                    ]
                  } 
                  startDate="April 2022"
                  endDate="August 2022"
                  points={
                    [
                      "Developed and maintained web applications using Django",
                      "Designed and implemented user interfaces using Elm, ensuring responsive and intuitive designs",
                      "Collaborated with other developers, designers, and stakeholders to understand project requirements",
                    ]
                  }
                />
              </SplideSlide>
              <SplideSlide>
                <ExperienceCard 
                  title="R&D Technician" 
                  company="Itron" 
                  companyImage={"itron_logo.png"}
                  key="Itron"
                  skills={
                    [
                      "Python", 
                      "Troubleshooting", 
                      "Bash",
                      "Excel",
                    ]
                  } 
                  startDate="May 2019"
                  endDate="April 2022"
                  points={
                    [
                      "Wrote and executed regression test cases to validate IoT products and technologies",
                      "Developed and maintained Python scripts to automate testing and other tasks",
                      "Worked collaboratively with cross-functional teams to identify and prioritize product development",
                    ]
                  }
                />
              </SplideSlide>
          </Splide>
      </div>
    </motion.div>
  );
}
