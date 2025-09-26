import { Container } from "./styles";
import VinayakSingh from "../../assets/VinayakSingh.webp";
import python from "../../assets/python.svg";
import java from "../../assets/java.svg";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import teguh from "../../assets/images/teguh.png";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Teguh, An energetic and motivated individual with a
            strong interest in IT, particularly in software development, mobile
            development, embedded systems, and computer architecture. Passionate
            about leveraging skills and experiences to contribute in dynamic and
            challenging environments while continuously growing both personally
            and professionally.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          {/* <p>
            I build responsive web applications, fine-tune ML models, and
            implement robust backend services.
          </p> */}
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          {/* <p>
            I also work with CMS platforms like WordPress and Shopify to
            streamline content management.
          </p> */}
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4> Computer Engineering </h4>
            <p>
              Andalas University, Padang | August 2021 - 2025
            </p>
            <p>3.51 GPA</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>Experience:</h3>
            <h4>Software Developer</h4>
            <p>Intern Software Developer – Comentor ID  | Jan 2024 - Mar 2024</p>
            <p>Padang, Indonesia</p>
          </div>
          <div className="experience">
            <h3></h3>
            <h4>Cloud Computing Cohort  </h4>
            <p>Bangkit Academy | Sep 2024 - Dec 2024</p>
            <p>Padang, Indonesia</p>
          </div>
          <div className="experience">
            <h3></h3>
            <h4>Student Executive Board in Faculty of Information Technology </h4>
            <p>Head of Research and Technology Division | Jan 2024 - Dec 2024</p>
            <p>Padang, Indonesia</p>
          </div>
          <div className="experience">
            <h3></h3>
            <h4> Management & Science Idea Regenaration Expo </h4>
            <p>Gold Medal - IoT & Embedded Systems Category | June 2025</p>
            <p>Selangor, Malaysia</p>
          </div>
          
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation> */}
        <div className="hard-skills">
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={python} alt="python" />
            </ScrollAnimation>
          </div> */}
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={java} alt="java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div> */}
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={wordpress} alt="Wordpress" />
            </ScrollAnimation>
          </div> */}
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={shopify} alt="shopify" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div> */}
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={teguh} alt="Vinayak Singh" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
