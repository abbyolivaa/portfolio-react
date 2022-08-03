import React from "react";

// import images from src/assets
import workdayImg from "../assets/portfolio/workdayImg.png";
import readmeImg from "../assets/portfolio/readmeImg.png";
import socialmoodiaImg from "../assets/portfolio/socialmoodiaImg.png";
import teamprofileImg from "../assets/portfolio/teamprofileImg.png";
import techblogImg from "../assets/portfolio/techblogImg.png";
import employeeImg from "../assets/portfolio/employeeImg.png";

const projectList = [
  //Wrok Day Scheduler
    {
        title: 'Work Day Scheduler',
        image: workdayImg,
        preview: 'https://abbyolivaa.github.io/work-day-scheduler/',
        gitHubLink: 'https://github.com/abbyolivaa/work-day-scheduler'
    },

    //ReadMe Generator
    {
        title: 'Professional README Generator',
        image: readmeImg,
        preview: 'https://drive.google.com/file/d/1QlUQTtc94W9eZY8-M6wdqXHgeXxuje8m/view',
        gitHubLink: 'https://github.com/abbyolivaa/professional-README-generator'
    },

    {
        title: 'Socialmoodia',
        image: socialmoodiaImg,
        preview: 'https://sheltered-eyrie-00891.herokuapp.com/',
        gitHubLink: 'https://github.com/infojunkie01/socialmoodia'
    },

    // Team Profile Generator
    {
        title: 'Team Profile Generator',
        image: teamprofileImg,
        preview: 'https://user-images.githubusercontent.com/100249688/167202373-2ed184ce-23ce-4dfc-a6bd-bd0d7f3478e0.mp4',
        gitHubLink: 'https://github.com/abbyolivaa/team-profile-gen'
    },

    // Tech Blog
    {
        title: 'Tech blog',
        image: techblogImg,
        preview: 'https://tech-blogger-community.herokuapp.com/',
        gitHubLink: 'https://github.com/abbyolivaa/tech-blogMVC'
    },

    // Employee Tracker
    {
        title: 'Employee Tracker',
        image: employeeImg,
        preview: 'https://drive.google.com/file/d/1bLVhslo5oQDdXUj_e7YWIudXdJ6dlQwk/view',
        gitHubLink: 'https://github.com/abbyolivaa/employee-tracker'
    }
]

function Project() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {projectList.map((project) => (
                    <div className="project-entry mb-4 p-5 md-4">
                        <h5>{project.title}</h5>
                        <p> <a href={project.gitHubLink} target="_blank">Github </a> </p>
                        <a href={project.preview}> <img src={project.image} width="300" /> </a>
                    </div>
                ))}
            </div>
        </div>

    )
}


export default Project;