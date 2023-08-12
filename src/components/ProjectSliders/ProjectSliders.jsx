import React, { Component } from "react";
import Slider from "react-slick";
import ProjectFull from "../Projects/ProjectFull"; // Import the full version
import ProjectMinimal from "../Projects/ProjectMinimal"; // Import the minimal version
import projectsData from "../../Data/ProjectData.jsx";
import "./ProjectSliders.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ProjectsSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div id="projects" className="container">
        <div className="slider2-container">
          <Slider
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
            className="center"
            centerMode={true}
            infinite={true}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            dots={true}
            arrows={true}
            autoplay={true}
            autoplaySpeed={10000}
            responsive={[
              {
                breakpoint: 768 /* Adjust breakpoint as needed */,
                settings: {
                  slidesToShow: 1 /* Show 1 slide in mobile view */,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {projectsData.map((project, index) => (
              <div className="slider-secondary" key={index}>
                <ProjectMinimal {...project} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="slider1-container">
          <Slider
            asNavFor={this.state.nav2}
            ref={(slider) => (this.slider1 = slider)}
          >
            {projectsData.map((project, index) => (
              <div key={index}>
                <ProjectFull {...project} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
