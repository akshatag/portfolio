import React from 'react';
import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import Socials from '../Socials/Socials';
import { LeftSection } from './HeroStyles';
import { motion } from 'framer-motion';

const Hero = (props) => (
  <div style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
  
    <LeftSection>
      <motion.div 
        animate={{ 
          opacity: [0, 1]
         }}
        transition={{ 
          duration: 0.5,
          delay: 0.5
        }}>
        <SectionTitle main center>
          Akshat Agrawal
        </SectionTitle>
      </motion.div>
      <motion.div
        animate={{
          opacity: [0, 1]
        }}
        transition={{
          duration: 0.5,
          delay: 1
        }}>
        <SectionText>
          I am a product manager at Skyflow, a series B startup building data privacy infrastructure for fintech companies. Prior to that, I had product and engineering roles at Google. 
        </SectionText>
        <SectionText>
          I am on the lookout for big ideas. Currently knee deep exploring crypto x identity. Reach out at one of the links below to chat!
        </SectionText>
      </motion.div>
      <motion.div
        animate={{ 
          x: [-100, 0],
          opacity: [0, 1] 
        }}
        transition={{
          delay: 1.5,
          x: { type: "spring", stiffness: 1 },
          default: { duration: 0.3 },
        }}>
        <Socials/> 
      </motion.div>         
    </LeftSection>
  </div>
);

export default Hero;
