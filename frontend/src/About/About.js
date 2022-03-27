//=============React Elements=============//
import React from "react";

//=============Images=============//
import CameronImage from "../images/CamProfileImageSquare.jpeg";
import AidanImage from "../images/AidanProfileImage.jpeg";
import MicheleImage from "../images/MicheleProfileImageSquare.jpeg";

const About = () => {
  return (
    <div className="about-page-container">
      <div className="about-container">
        <div className="statements">
          <h1 className="about-statement">Connecting Everyone</h1>
          <h1 className="about-statement-2">
            UHub makes it easy for users to connect with other students
            and see all the different club and university events all in 
            one place.
          </h1>
        </div>

        <h1 className="about-titles">Mission</h1>
        <p className="about-mission">
        </p>

        <h1 className="about-titles about-team">Our team</h1>
        <div className="about-bios">
          <div className="about-person">
            <img src={CameronImage} alt="the team"></img>
            <h2>Cameron Faith</h2>
            <p>
              Cameron is in his final year of Electrical Engineering with a
              Minor in Computer Engineering. He has experience managing
              databases and developing dashboards to better view trends on the
              data. He also has gained a deep understanding of Python, C, and
              Java through both his academia and his own projects. Cameron is
              involved in developing trading strategies and has tested a variety
              of indicators and strategies over the past year. In his leisure
              time, Cam enjoys working on cars and being outdoors.
            </p>
          </div>
          <div className="about-person">
            <img src={AidanImage} alt="the team"></img>
            <h2>Aidan Johnson</h2>
            <p>
            </p>
          </div>
        </div>
        <div className="about-bios">
          <div className="about-person">
            <img src={MicheleImage} alt="the team"></img>
            <h2>Michele Piperni</h2>
            <p>
              Michele is in his 4th and final year of a degree in Electrical
              Engineering, with a Minor in Computer Engineering. He has
              experience in software development in multiple programming
              languages and is looking to gain more experience in web design and
              financial analysis. Michele loves to learn new things and is an
              avid problem solver. Michele also enjoys all things fitness,
              sports, and the outdoors.
            </p>
          </div>
          <div className="about-person">
            <img src={DylanImage} alt="the team"></img>
            <h2>Dylan Rae</h2>
            <p>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;