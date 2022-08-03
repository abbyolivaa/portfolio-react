import React from "react";

function Footer() {


  return (
    <footer className="flex-row px-1 justify-content-center">
      <ul className="flex-row">
        <li className="mx-2">
          <a href="https://github.com/abbyolivaa">
            GitHub
            </a>
        </li>
        <li className={"mx-2"}>
          <a href="#">
            Linkedin
            </a>
        </li>
        <li className={"mx-2"}>
          <a href="#">
            Twitter
            </a>
        </li>
    
      </ul>
    </footer>
  );
}

export default Footer;