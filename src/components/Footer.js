import React from "react";
//import icons from fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Github

//LinkedIn
//import {faGithubAlt} from '@fortawesome/free-solid-svg-icons'
//Twitter
//import {faGithubAlt} from '@fortawesome/free-solid-svg-icons'

function Footer() {


  return (
    <footer className="flex-row px-1 justify-content-center">
      <ul className="flex-row">
        <li className="mx-2">
          <a href="https://github.com/abbyolivaa">
          <i class="fa-brands fa-github-alt"></i> 
            </a>
        </li>
        <li className={"mx-2"}>
          <a href="#">
          <i class="fa-brands fa-linkedin-in"></i>
            </a>
        </li>
        <li className={"mx-2"}>
          <a href="#">
          <i class="fa-brands fa-square-twitter"></i>
            </a>
        </li>
    
      </ul>
    </footer>
  );
}

export default Footer;