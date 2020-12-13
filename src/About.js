import React from "react"
import Portrait from "./photos/sapporo_xmas.jpg"

function About(props) {
    return (
        <div className="about-row">
            <div className="about-col1">
                <img src={Portrait} alt="me" className="portrait" />
            </div>
            <div className="about-col2">
                <h1 className="intro-h">
                    Hello, <br />
                    I’m a UX designer based in Palo Alto, CA.
                </h1>
                <br /><br />
                <p className="intro">
                    I chose this career path because I enjoy doing creative work and interacting with other people—the latter was amplified tenfold by COVID-19. I care about designing products that are original, impactful, and of course, usable.
                </p>
                <p className="intro">
                <br />
                   My methodology is fairly standard and can be summarized in 3 steps. First, I <b>discover</b> the situation by doing research. Next, I <b>define</b> the problems that need to be addressed. With clear goals written out, I <b>design</b> a new solution—but it doesn't end there. The new solution becomes a prototype that needs to go through usability testing, which takes me back to the <b>discover</b> phase. The cycle repeats until the outcome is satisfactory to me and approved by my users.
                </p>
                <p className="intro">
                <br />
                   Some of my hobbies include drawing, anime, basketball, karaoke, and snowboarding. If you're familiar with personality types, the test said that I'm an INFP, although this pandemic probably transformed me into an ENFP.
                </p>   
            </div>
        </div>
    )
}

export default About;