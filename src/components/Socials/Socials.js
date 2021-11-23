import React from 'react';
import { SocialsContainer, SocialsItem, SocialsIcon } from './SocialsStyles';
import { motion } from 'framer-motion';


const Socials = (props) => (
  <div>
    <SocialsContainer>
      <SocialsItem>
        <a href='https://www.linkedin.com/in/akshatag'>
          <motion.div
            animate={{opacity: 0.6}}
            whileHover={{scale: 1.2, opacity: 1}}>
            <SocialsIcon src='images/linkedin-3-xxl.png'/>
          </motion.div>
        </a>
      </SocialsItem>
      <SocialsItem>
        <a href='https://medium.com/@akshat.ag77'>
          <motion.div
            animate={{opacity: 0.6}}
            whileHover={{scale: 1.2, opacity: 1}}>
            <SocialsIcon src='images/twitter.png'/>
          </motion.div>
        </a>
      </SocialsItem>
      <SocialsItem>
        <a href='https://www.github.com/akshatag'>
          <motion.div
            animate={{opacity: 0.6}}
            whileHover={{scale: 1.2, opacity: 1}}>
            <SocialsIcon src='images/github-9-xxl.png'/>
          </motion.div>
        </a>
      </SocialsItem>
      <SocialsItem>
        <a href='files/resume.pdf'>
          <motion.div
            animate={{opacity: 0.6}}
            whileHover={{scale: 1.2, opacity: 1}}>
            <SocialsIcon src='images/vector.png'/>
          </motion.div>
        </a>
      </SocialsItem>
    </SocialsContainer>
  </div>          
);

export default Socials;
