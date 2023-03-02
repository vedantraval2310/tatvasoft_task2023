import React from 'react';
import Title5 from './Title5';

const About = ({ description }) => {
  return (
    <div>
      <Title5 title="About" />
      <p>{description}</p>
    </div>
  )
}

export default About;
