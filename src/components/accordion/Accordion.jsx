import React, { useState } from "react";
import "./accordion.css";

const Accordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        {props.title}
        <span className={`icon ${isOpen ? "active" : ""}`}>
          {isOpen ? (
            <img src="images/minus.png" alt="minus" />
          ) : (
            <img src="images/plus.png" alt="plus" />
          )}
        </span>
      </div>
      {isOpen && <div className="accordion-content">{props.children}</div>}
    </div>
  );
};

export default Accordion;
