import React from "react";
import "../styles/about.css";
import FadeInSection from "./fadeInSection";


class About extends React.Component {
    constructor() {
        super();
        this.state = {
          expanded: true,
          activeKey: "1"
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        this.setState({
            activekey: eventKey
        });
    } 
    render() {
        const current = (
            <p>
                I am currently a <b>Software Development Engineer</b> at
                <a href="https://www.aboutamazon.com/"> Amazon</a>, working in the AWS
                sector, under the EC2 Core Platform division. 
            </p>
        );

        const interests = (
            <p>
                Outside of work, I'm interested in following the developments of
                science. I also play sport and exercise quite often.
            </p>
        );

        const tech_stack = [
            "Python",
            "Java",
            "C++",
            "Javascript ES6+",
            "React.js",
            "Node.js",
            "HTML & CSS"
          ];

        const tech_items = tech_stack.map(stack => <li>{stack}</li>);
        console.log(tech_items)

        return (
            <div id="about">
                <FadeInSection>
                    <div className="about-header">
                        <span className="about-title">/ about me</span>    
                    </div>
                    <div className="about-content">
                        <div className="about-description">
                            {current}
                            {"Here are some technologies I have been working with:"}
                            <ul className="tech-stack">
                                {tech_stack.map(function (tech_item, i) {
                                    return (
                                        <FadeInSection delay={`${i + 1}00ms`}>
                                            <li>{tech_item}</li>
                                        </FadeInSection>
                                    );    
                                })}
                            </ul>
                            {interests}
                        </div>
                        <div className="about-image">
                            {/* <img src={""} /> */}
                        </div>
                    </div>
                </FadeInSection>
            </div>
        );
    }
}

// Export defaults are used to export a single module, variable, expression, or 
// function from a JavaScript file so that it can be used in any other file of 
// either the same program or even in an entirely different program.

export default About