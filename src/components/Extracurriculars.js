import React from 'react';
import { Container } from 'react-bootstrap';

const Extracurriculars = () => {
  return (
    <Container className="my-5" id="extracurriculars">
      <h2 className="text-center">Extracurricular Activities</h2>
      <h4>Honors Capstone</h4>
      <p>Researched how CS students learn best and efficient teaching methods.</p>
      <a href="https://drive.google.com/file/d/17_X7GVjjLaLYMy5swbpfbXMi4yolr2qa/view?usp=sharing">Check Out My Paper!</a>
      <h4>Bytes University</h4>
      <p>Created informational content on YouTube with classmates. Check out our channel</p>
      <a href="https://www.youtube.com/channel/UCXke8BePeY9RI-wEyROYw8A"> Visit Our Youtube Channel!</a>
      <h4>Hackathons</h4>
      <p>Participated in multiple hackathons, collaborating with team members to develop innovative projects within a limited time frame.</p>
      <a href="https://github.com/MarkGhebrial/Rosehack-2023"> Check Out Duck Games!</a>
    </Container>
  );
}

export default Extracurriculars;
