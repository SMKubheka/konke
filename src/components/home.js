import React from "react";
import "../styles/home.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import FadeInSection from "./fadeInSection";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";

class Home extends React.Component{
    constructor() {
        super();
        this.state = {
          expanded: true,
          activeKey: "1",
          visible: true 
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        this.setState({
            activekey: eventKey
        });
    }

    render() {
        const bio = ( 
            <p>
                I'm a software engineer based in Cape Town. I have a great interest in full-stack development,
                artificial intelligence, human-computer interactions and everything in between. 
            </p>
        )
        return (
            <div id="home">
                <Typist avgTypingDelay={120}>
                    <span className="home-title">
                        {"hello, "}
                        <span className="home-name">{"konke"}</span>
                        {" here."}
                    </span>
                </Typist>
                <FadeInSection>
                    <div className="home-headline"> I create stuff sometimes. </div>
                    <div className="home-bio">
                        {bio}
                    </div>
                    <a
                        href="mailto:kubhekasm@gmail.com"
                        className="home-contact"
                    >
                        <EmailRoundedIcon></EmailRoundedIcon>
                        {" Say hello!"}
                    </a>
                </FadeInSection>
            </div>
        );
    }


}

export default Home