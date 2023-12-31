import React, { useEffect } from "react";
import "./scroll.css";

const Scroll = () => {
  useEffect(() => {
    const mainScroller = document.querySelector(".mainScroller");

    const handleScroll = () => {
      if (window.scrollY >= 560) {
        mainScroller.classList.add("show-scroll");
      } else {
        mainScroller.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once after mount

  return (
    <a href="#home" className="mainScroller">
      <i className="uil uil-top-arrow-to-top scroll-icon"></i>
    </a>
  );
};

export default Scroll;
