import React from "react";

function Footer() {


  return (

    <footer className="flex-row px-1 justify-content-center">
      <p>My info:</p>
      <ul className="flex-row">
        <li className="mx-2">
          <a href="https://github.com/abbyolivaa">
          <i class="fa-brands fa-github-alt"></i> 
            </a>
        </li>
        <li className={"mx-2"}>
          <a href="https://www.linkedin.com/in/abigail-oliva-920604229">
          <i class="fa-brands fa-linkedin-in"></i>
            </a>
        </li>
        <li className={"mx-2"}>
          <a href="https://twitter.com/">
          <i class="fa-brands fa-square-twitter"></i>
            </a>
        </li>
    
      </ul>
    </footer>
  );
}

export default Footer;