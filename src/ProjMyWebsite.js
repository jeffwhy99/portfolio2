import React from "react"
import NovoSS from "./photos/mark_novo_ss.png"
import WorkSS from "./photos/work_ss.png"

function ProjMyWebsite(props) {
    return (
        <div className="project-body">
            {/* <img src={Thumbnail} alt="a photo of me" className="project-photo" /> */}
            <h1 className="project-title">This Section is Incomplete</h1>
            <p className="project-article">
                To find a job in UX design, I needed a portfolio so I spent the summer of 2020 making my website. I chose not to use a website builder like Squarespace because I did not want to limit myself with their existing templates; I wanted my website to be unique. Furthermore, I wanted to review the skills I learned in my client-side development class; this was a great opportunity for me to practice the process of designing, coding, and deploying a website.
            </p>
            <br/>
            <img src={NovoSS} alt="Mark Novo website template" className="project-photo" />
            <p className="project-article">
            <br/>
                First, I took a look at existing portfolios and Squarespace templates for inspiration. I liked the aesthetic of the Mark Novo template; however, in terms of usability, there are a few places where it could be improved. First, the title for each project only appears when hovered over. Because the mobile version is identical and it is impossible to hover on mobile, users are unable to view the titles at all. Second, I was recommendeded to limit the site with my three best projects so that employers would have the patience to look through all of them. With only three projects, it would look silly to display them in two columns.
            </p>
            <br/>
            {/* <img src={WorkSS} alt="prototype of the 'Work' page" className="project-photo" /> */}
            <p className="project-article">
                To be continued . . .
                {/* As you can probably tell from this website, I am a big fan of minimalism and believe that things should be kept as simple as possible for users to learn and use. Furthermore, a minimalistic site with monotone colors to make photos of work stand out more.My site only has two items on the nav bar if you exclude my name (which also takes you to the "About" screen) but I believe that these two items cover all the reasons why someone would visit my site. Other than these two items, I would have added a third one for "Contact" but I decided to follow the norm and have my contact information in the footer of the site. I did not write my name in the introduction because it is already written at the top of the website and I am not a fan of repetitive information. In order to make my site's usage as efficient as possible, I never repeat information so users will never spend extra time reading the same information twice. Debate whether logo should take you to home page. */}
            </p>
            <p className="project-article">
                {/* Initially, I wanted to find a geometric font that had a condensed counterpart because that would allow the two fonts to synchronize well. There are not too many geometric fonts on Google Fonts so such a font did not exist so I gave up on the geometric part. I tried Open Sans along with Open Sans Condensed but the capital "J" letter really bothered me because it protruded out the bottom. Because my name has a "J" in it, this made the logo look awful. The other condensed fonts didn't fit the aesthetic I was going for. Thus, I changed my plan and ended up going for just a geometric font instead. Instead of having a condensed counter part, I would just use different weights along with capitalization to make it seem like two different fonts with synergy. The most popular geometric font on Google Fonts is Montserrat but I personally do not like the way the capital "J" and "G" look. Thus, I ended up finding a font called Poppins that has a perfectly circular capital G similar to Futura, which I am a fan of. */}
            </p>
        </div>
    )
}

export default ProjMyWebsite;