import React from "react";
import Project from "./Project";
import "./CSS/App.css";
import "./CSS/hero.css";
import "./CSS/about.css";

// icons
import {
  html,
  css,
  javascript,
  jQuery,
  jwtLogo,
  react,
  node,
  mongo
} from "./icons";

// images
import sun from "./imgs/sunshine.gif";
import headshot from "./imgs/SerenaLertkantitham.jpg";
import handWave from "./imgs/hand_wave.gif";
import online from "./imgs/online.gif";
import flex from "./imgs/flex-mockup.png";
import yoga from "./imgs/yoga.gif";
import weekly from "./imgs/weekly-mockup.png";
import pencil from "./imgs/pencil.gif";
import hike from "./imgs/1hike2beer-mockup.png";
import beer from "./imgs/beer.gif";
import resume from "./resume_Lertkantitham.pdf";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="hero">
          <img src={sun} alt="animated sun" id="sun" />
          <img src={handWave} alt="animated hand wave" id="hand-wave" />
          <img src={headshot} alt="headshot" id="headshot" />
          <h1 id="title">Hi, I'm Serena.</h1>
          <h2 id="subtitle">
            I'm a fullstack web developer and a part-time yogi.
          </h2>
        </header>

        <section className="about">
          <div className="about-content">
            <h2 className="project-title">About me</h2>
            <p>
              I am a web developer and recent graduate of the Fullstack Web
              Development bootcamp at Thinkful. I love coding because solving
              problems and seeing ideas come to life on the page is supremely
              satisfying. I geek out on higher order functions, finding and
              learning awesome libraries or frameworks and getting front and
              back ends to play nicely. When I'm not coding, I'm often found at
              the yoga studio, finding the best margarita in town, or working on
              my next knitting project.
            </p>
          </div>
          <img src={online} alt="cute online gif" id="laptop-icon" />
        </section>

        <Project
          icon={flex}
          name="Flex"
          description="Flex connects yoga instructors and yoga studios to connect open
            classes to certified instructors. Yoga studios can post available
            class openings they have and yoga instructors can directly apply
            to those classes with the click of the button. I made this app a
            solution for part-time yoga instructors to identify open classes
            at other studios in the area."
          icons={[react, node, javascript, mongo, html, jwtLogo, css]}
          miscImg={yoga}
          demo="https://floating-savannah-98427.herokuapp.com/"
          code="https://github.com/slertka/flex"
        />

        <Project
          icon={weekly}
          name="Weekly"
          description="Weekly is an open dated planner that allows users to track their
            weekly tasks and events. I created this app as an electronic
            replacement for paper planners to allow users the flexibility to
            plan their week as they desire."
          icons={[node, jwtLogo, jQuery, javascript, mongo, html, css]}
          miscImg={pencil}
          demo="https://ancient-badlands-64634.herokuapp.com/"
          code="https://github.com/slertka/weekly"
        />

        <Project
          icon={hike}
          name="1hike2beer"
          description="1hike2beer integrates 3rd party APIs to allow users to
            simultaneously search for hikes and breweries in the same area. This
            app was inspired by going on hikes with friends and wanting to plan
            in advance to find breweries that would be open after so we could
            all enjoy some beers together."
          icons={[jQuery, javascript, html, css]}
          miscImg={beer}
          demo="https://slertka.github.io/1hike2beer/"
          source="https://github.com/slertka/1hike2beer"
        />

        <section className="contact">
          <h2 className="project-title">{"Get in touch with me : )"}</h2>
          <a href={resume} target="_blank">
            <button name="resume" className="contact-btn">
              <label htmlFor="name">Resume</label>
            </button>
          </a>
          <a href="mailto:lertkantitham@gmail.com">
            <button name="email" className="contact-btn">
              <label htmlFor="email">Email</label>
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/lertkantitham"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button name="linkedIn" className="contact-btn">
              <label htmlFor="linkedIn">LinkedIn</label>
            </button>
          </a>
          <a
            href="https://www.github.com/slertka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button name="github" className="contact-btn">
              <label htmlFor="github">Github</label>
            </button>
          </a>
        </section>
      </div>
    );
  }
}

export default App;
