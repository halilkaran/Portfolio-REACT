import "./intro.scss";
import Typed from "typed.js";
 
import { useEffect, useRef } from "react";

const Intro = () => {
  const el = useRef();
  	const typed = useRef(null);
 console.log("aaa");
  useEffect(() => {
     const options = {
       strings: [
         "Front-End <i>Web</i> Developer",
         "Back-End <strong>Web</strong> Developer",
         "Full-Stack Web Developer &copy;"
       ],
       typeSpeed: 100,
       backSpeed: 50
     };

     // elRef refers to the <span> rendered below
     typed.current = new Typed(el.current, options);

     return () => {
       // Make sure to destroy Typed instance during cleanup
       // to prevent memory leaks
       typed.current.destroy();
     };
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1> Halil Karan</h1>
          <h3>
            Full-Stack <span ref={el}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="a" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
