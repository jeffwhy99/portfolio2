import React from "react"

function ProjSecurate(props) {
    return (
        <div className="project-body">
            {/* <img src={Thumbnail} alt="a photo of me" className="project-photo" /> */}
            <h1>Securate</h1>
            {/* <h2>Overview</h2> */}
            <p className="article2">
                In an age dominated by the internet, it is important to prevent our personal information from falling into the wrong hands. My team and I designed Securate to help smartphone users keep track of where their information is going, what it's being used for, and whether or not the process is secure.
            </p>
            <br/>
            <h3>Problem</h3>
            <p>
               Most people agree to privacy policies without reading them. In other words, they are authorizing the collection and usage of their personal information without knowing what will be collected and how it'll be used. Furthermore, many applications send and store personal information insecurely, allowing malicious people to access the information with little to no effort.
            </p>
            <br/>
            <h3>Team</h3>
            <p>
                I worked on Securate with three peers in my <i>Design Methods</i> class. As a UX designer, I contributed to every phase of the project from conceptualization to prototyping.
            </p>
            <br/>
            <h2>Research</h2>
            <p className="article2">
                Like every other design project, I started off by doing research. I read existing papers, sent out surveys, and conducted user interviews.
            </p>
            <br/>
            <h3>Papers</h3>
            <p className="article">
                Because doing my own studies takes more time and effort, I always start off by looking for existing research. Below are some key takeaways from various papers I read.
            </p>
            <br/>
            <p className="article">
                Over 90% of consumers accept privacy policies without reading them. We should look into the reasons behind this.
            </p>
            <br/>
            <p className="article">
                All apps that collect information are required by law to have a privacy policy that states what information is collected, how information is used, and what information is shared. Sadly, no one reads these.
            </p>
            <br/>
            <p className="article">
                Personal information is any information that can be used to identify an individual. Some forms of personal information are deemed to be more sensitive than others (race, ethnicity, political opinions, religion, and health concerns). Thus, when assessing an app, we must take into consideration what types of information it collects.
            </p>
            <br/>
            <p className="article">
                Information privacy concerns increase with age, so our userbase will not consist of many children. I will focus my research on people who are at least in their teens.
            </p>
            <br/>
            <p className="article">
                A surprising amount of apps do not encrypt personal information. This allows anyone with basic technical knowledge to access the data for free.
            </p>
            <br/>
            <h3>Surveys</h3>
            <p className="article">
                After learning as much as I could through existing papers, I sent out a survey. Below are the key takeaways.
            </p>
            <br/>
            {/* <p className="article">
                Around 90% of users are comfortable with apps collecting their personal information for basic app functionality.
            </p>
            <br/>
            <p className="article">
                Around 50% of users are comfortable with apps collecting their personal information for developers to improve the app's performance.
            </p>
            <br/>
            <p className="article">
                Around 20% of users are comfortable with apps collecting their personal information for revenue.
            </p> */}

            {/* <p className="article">
                I feel like surveys are great at collecting answers but not ideal for explaining those answers. To understand the reasoning behind the answers, I conducted user interviews.
            </p> */}
            
        </div>
    )
}

export default ProjSecurate;