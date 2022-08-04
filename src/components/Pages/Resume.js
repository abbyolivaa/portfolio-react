import React from 'react';


function Resume() {
  return (
    <section>
      <h2 id="about" className="d-flex justify-content-center ">Resume</h2>
      <br></br>
      <div>
        <h5>
          Occupation: 
        </h5>
        <p>Full Stack Developer</p>
        <br></br>

        <h5>Social Links:</h5>
        <ul>
          <li> <a href='https://www.linkedin.com/in/abigail-oliva-920604229'>LinkedIn</a></li>
          <li>Indeed</li>
          <li> <a href='http://github.com/abbyolivaa'>GitHub</a></li>
        </ul>
        <br></br>


        <h5>Education</h5>
        <ul>
          <li>Columbia University: Computer Science</li>
        </ul>
        <br></br>


        <h5>Work</h5>
        <ul>
          <li>Etsy: Upsale</li>
          <li>Youtube: Content Creator</li>
        </ul>
        <br></br>


        <h5>Skills</h5>
        <ul>
          <li>HTML5</li>
          <li>CSS</li>
          <li>MySQL</li>
          <li>Git</li>
          <li>Express.js</li>
          <li>React.js</li>

        </ul>

        <br></br>
        <h5>View my full resume <a href= "https://my.indeed.com/p/abigailo-fz46ln0">here</a>.</h5>
        
      </div>
    </section>
  );
}

export default Resume;