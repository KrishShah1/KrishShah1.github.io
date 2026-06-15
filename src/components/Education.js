import React from 'react';
import { Container } from 'react-bootstrap';

const Education = () => {
  return (
    <Container className="my-5" id="education">
      <h2 className="text-center">Education</h2>
      <div>
        <h4>Bachelor of Science: Computer Engineering</h4>
        <p>University of California, Riverside - Riverside, CA</p>
        <p>UCR Honors Program</p>
        <p>Chancellor's and Dean's Honor Roll</p>
        <p>National Engineering Honor Society - Tau Beta Pi</p>
        <p>Completing Masters in Computer Engineering by 2025</p>
      </div>

      <div>
        <h4>High School Diploma</h4>
        <p>Ruben S Ayala High School - Chino Hills, CA</p>
        <p>Graduated as an AP Scholar and with Honors</p>
        <p>Member of the National Honor Society</p>
      </div>
      
      <div>
        <h4>Technical Skills</h4>
        <p>Programming Languages: C++, Python, Java, JavaScript, HTML, CSS</p>
        <p>Software: Visual Studio Code, XCode, Android Studio, MATLAB, Git, Jupyter Notebook</p>
        <p>Operating Systems: Windows, MacOS, Linux</p>
      </div>

      <div>
        <h4>Coursework</h4>
        <p>Computer Science: Data Structures, Algorithms, Computer Networks, Operating Systems, Software Engineering</p>
        <p>Electrical Engineering: Digital Logic, Circuit Analysis, Electronics, Signals and Systems</p>
        <p>Mathematics: Calculus, Linear Algebra, Differential Equations, Probability and Statistics</p>
      </div>
      


    </Container>
  );
}

export default Education;
