import React from 'react'
//import icons from font awesome
//import avatar
import avatar from "../../assets/about/avatar.png";

function About() {

  return (
    <section className="mb-5">
      <div className="d-flex justify-content-center mb-4">
        <img src={avatar} alt="avatar" id='avatar' className="col-1" />
      </div>
      <br></br>
      <h2 id="about" className="d-flex justify-content-center ">About me</h2>
      <br></br>
      <p className=" col-11" id='p'>
          <p>I am currently a graduate from Columbia University's Computer Science, Coding Bootcamp. This year I plan to enroll in Harvard's coding program to better my computer science skill set to improve my work ethic in the field. My career helps me live my dream life while nerding out at home with my computer. I love traveling and creating content online on various platforms like YouTube, Instagram, and Tiktok. I thoroughly enjoy learning new technologies and languages.</p>
            </p>

    </section>
  )
}

export default About