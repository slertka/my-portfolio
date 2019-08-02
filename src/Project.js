import React from "react";
import "./CSS/Project.css";

export default function(props) {
  return (
    <section className="project" id={props.name}>
      <img
        src={props.icon}
        alt={`iphone xs mockup of ${props.name}`}
        className="mockup"
      />
      <div className="content">
        <h2 className="project-title">{props.name}</h2>
        <a href={props.demo} target="_blank" rel="noopener noreferrer">
          <button
            name="demo"
            className="project-btn"
            onClick={props.handleClick}
          >
            <label htmlFor="demo">Demo</label>
          </button>
        </a>
        <a href={props.code} target="_blank" rel="noopener noreferrer">
          <button name="source" className="project-btn">
            <label htmlFor="source">Code</label>
          </button>
        </a>
        <p>{props.description}</p>
        <div className="icon-container">{props.icons}</div>
      </div>
      <img src={props.miscImg} alt="decorative icon" id={`img-${props.name}`} />
    </section>
  );
}
