import React from "react"
import SurveyPhoto from "./photos/foodie_survey.png"
import FormDesign from "./photos/form_design.jpg"
import PersonaPhoto from "./photos/foodie_persona.png"
import RecipeIA from "./photos/foodie_recipe.png"
import CommunityIA from "./photos/foodie_community.png"
import AccountIA from "./photos/foodie_account.png"
import ProtoPhoto from "./photos/foodie_proto.png"


function ProjFoodie(props) {
    return (
        <div className="project-body">
            {/* <img src={Photo1} alt="a cup of coffee" className="project-photo" /> */}
            <h1 className="project-title">Foodie</h1>
            <p className="project-article">
                For the final project in my information architecture class, I had to redesign a fictitious app called Foodie. Foodie is a one-stop resource for all things food-related. Some popular features include its recipe collection, online cookware shop, and a social media platform where cooking enthusiasts can share their creations and connect. 
            </p>
            <br/>
            <h2 className="section-title">Problem & Objective</h2>
            <p className="project-article">
                Unfortunately, with all the information and services that Foodie has to offer, users found the app to be overwhelming. Users claimed to have difficulties navigating through the app because of its complex information architecture and user interface. Additionally, when discovering something they liked, they were unable to find content and products that were related to it. Furthermore, because a majority of the app was hidden under pages that no one visited, many promising features were never exposed to users. The main goal for this project was to create a user-friendly information architecture for Foodie. Smaller objectives included linking related content together, exposing previously unknown features and simplifying the user interface. Ultimately, we had to deliver a wireframe of our redesigned app.
            </p>
            <br/>
            <h2 className="section-title">Survey</h2>
            <p className="project-article">
            For this project, we received a headstart on research, as we were given documents that contained information including user data, the company’s vision and objectives, and the labels and hierarchies being used in the original Foodie app. With the provided information, we were able to identify the aforementioned problems and define our goals for the project; however, the documents did not provide usage data for each of the app’s features, which would be useful when I redesigned the app’s information architecture. Hence, I sent out a short survey.
            </p>
            <br/>
            <p className="project-article">
            Usually, it would be more effective to do in-person interviews and observations, but because this project was completed during the COVID-19 outbreak, we had to use surveys. The purpose of my survey was to understand which Foodie services the users valued the most; I wanted to identify the features that defined the app as well as the features that no one knew about. I needed this information to adequately redesign the app’s information architecture, where I would organize features based on their importance.
            </p>
            <br/>
            <p className="project-article">
            The survey consisted of two parts. The first part was intended to understand the participant’s food background so that I could group similar users. For example, one of the questions asks how many hours the participant spends making food on a daily basis (see below). This question gives me a quantitative understanding of the participant's involvement with food. At first, I used the term “cooking” instead of “making food,” but I realized that some people might not associate the term “cooking” with actions such as baking cookies (baking) or preparing sushi (uncooked). When creating an online survey, I am extra careful with my wording because small details like this can completely change the question’s meaning and participants are unable to clear up their confusions because there is no one present to answer their questions.
            </p>
            <br/>
            <img src={SurveyPhoto} alt="survey question about making food" className="project-photo" />
            <p className="project-article">
            <br/>
            The second part gathers the users’ opinions on Foodie’s different features. I asked participants which features they used the most, as well as which features they thought they would have used, but did not know existed, because this was an issue with the previous version of the app. Likewise, I was curious about which features participants did not care about so that I could either remove it from the app completely or relegate it to a deeper layer in the app’s information architecture to reduce clutter on the UI. This depended on whether the unpopular feature aligned with Foodie’s vision and objectives; even if a feature was unpopular, if Foodie believed that it was an integral part of the app’s identity, then maybe it was worth trying to promote or modify that feature.    
            </p>
            <br/>
            <p className="project-article">
            For this assignment, the professor required us to ask all our survey questions in a multiple-choice format. A common problem with surveys is that participants will not always care to respond accurately. Oftentimes, they only complete surveys to enter gift-card raffles and not because they value your work. This problem is especially prevalent in multiple choice surveys, where apathetic participants can cruise through the forms by selecting random choices. In response, I threw in an extra question instructing the particpant to select a specific option to verify that participants were actually reading the questions and not answering randomly. Furthermore, I tried to alleviate this issue by asking more succinct questions. With less words to read, I was hoping that impatient participants would be incentivized to finish reading each question before answering.
            </p>
            <br/>
            <p className="project-article">
            In class, we also learned ways to optimize the user experience for our survey participants, which I applied in this survey. For example, I use radio buttons and checkboxes instead of dropdown menus so that when making a choice, participants can view all the available options at once with less actions and quickly scan through the form.
            </p>
            <br/>
            <img src={FormDesign} alt="form design tip that I followed" className="project-photo" />
            <h2 className="section-title"><br/>Persona</h2>
            <p className="project-article">
            After finishing this research phase, we used the survey results along with the provided user data to create personas that represented our users and the issues they had with the app. This is where the first half of my survey (understanding the participant’s background) was useful. Below is a persona that I created.
            </p>
            <br/>
            <img src={PersonaPhoto} alt="persona that I created" className="project-photo" />
            <p className="project-article">
            <br/>
            For her quote (sorry if it’s too corny), I thought about some of the more profound reasons why people would want to make food for a living in an attempt to bring her persona to life.
            </p>
            <br/>
            <h2 className="section-title">Information Architecture & UI</h2>
            <p className="project-article">
            Now that I had an understanding of the way different features were perceived by the users, I was comfortable with redesigning the app’s information architecture; I now knew which services should be quickly accessible from the home page and which services should be in more niche locations.
            </p>
            <br/>
            <p className="project-article">
            To start, we used a top-down approach with a few main labels that we thought encompassed Foodie’s features well. The labels were tested with card sorts on Optimal Workshop, where we asked users to classify and group related content. From my survey, I knew that the three most important features of Foodie were the recipes, shop, and social media platform. Thus, the first three labels we decided on were “recipe book,” “shop,” and “home,” with “home” being the social media page. 
            </p>
            <br/>
            <p className="project-article">
            I wanted to make the social media newsfeed the home page because I thought that it served well as a bridge that connected the app’s other features. For example, when a user posts a photo of some fish tacos that he made, he could link the recipe-book page he used to make the tacos and the shop page for the griddle that he bought to fry the tacos. With this, we could solve the problem of users being unable to find related content. Furthermore, the social media page could have advertisements for shop items and news for local cooking events, all of which are features offered by Foodie. The uses of this page are limitless and it joins the rest of the app seamlessly together like an ecosystem.
            </p>
            <br/>
            <p className="project-article">
            We decided that all the other services on Foodie could be grouped under one label called “community” because they all fell under this category. This included less popular features like the forum, local event database and user database. Initially, I also thought about including private messages under this section, but my group wanted to move private messages to somewhere more accessible to mirror other social media apps that relied heavily on this feature. I was fine with this because we had a spot on our top nav bar that was open, but at the same time, I didn’t think this was necessary because the survey results did not indicate that private messaging was of utmost importance to Foodie.
            </p>
            <br/>
            <img src={CommunityIA} alt="information architecture for the 'community' label" className="project-photo" />
            <br/>           
            <p className="project-article">
            <br/>
            Last but not least, on our first layer of our information architecture, we included an “account” label which includes the standard “profile” and “settings” pages. As a result, our first layer consisted of "home," "recipe book," "shop," "community," and "account."
            </p>
            <br/>  
            <img src={AccountIA} alt="information architecture for the 'account' label" className="project-photo" />
            <p className="project-article">
            <br/>
            A significant change that I made to our information architecture was deciding to combine the “video” and “recipe book” sections. The old app had separate search pages for finding recipes and videos; however, because Foodie’s videos and recipes both serve a similar purpose of teaching the user how to cook a dish, this made the app unnecessarily complex. Instead, we decided to include videos on the same page as their corresponding recipes. If a video did not have a corresponding recipe page, we could process the video into a written recipe with something like speech recognition. This adds accessibility for deaf people who would prefer a written recipe over audio instructions. It also solves the problem of being unable to find related content; previously, the video and recipe for the same dish were not guaranteed to be linked together.
            </p>
            <br/>
            <img src={RecipeIA} alt="information architecture for the 'recipe' label" className="project-photo" />
            <p className="project-article">
            <br/>                        
            Throughout the process, we conducted tree tests with our information architecture spreadsheet to make sure that navigation was as intuitive as possible.
            </p>
            <br/>
            <h2 className="section-title">Prototype</h2>
            <p className="project-article">
            For our wireframes, I was assigned to work on the home page. Although we were only required to complete wireframes, I upgraded my part into a high-fidelity prototype with Figma so I could show it off here.
            </p>
            <br/>
            <img src={ProtoPhoto} alt="hi-fi prototype that I created for Foodie" className="project-photo" />
            <p className="project-article">
            <br/>
            For the main color of the app, I used salmon pink because the color is named after food.
            </p>
            <br/>
            <p className="project-article">
            The bottom nav is our main nav bar, which contains, from left to right, “home,” “recipe book,” “shop,” “community,” and “account.” On the top nav, we have notifications and private messages, which are standard for social media platforms. Once a user taps into a post, the notification button changes into a back button and the bottom nav turns into a comment-entry bar.
            </p>
            <br/>
            <p className="project-article">
            On the surface, my home page looks similar to Instagram but there are some key differences. First, I did not want to replicate Instagram’s liking mechanism, which is double tapping, because that would be stealing. Moreover, it would not flow well because unlike Instagram, tapping on a post in Foodie expands its contents. Instead, I increased the size of the like and comment buttons to make them easier to tap. I placed the buttons in a location where users would feel comfortable reaching them while operating a phone with one hand. Furthermore, upon hearing user feedback, there will be an option in the settings to switch the like and comment buttons to the left side of the screen for left-handed users. Similarly, I did not replicate Instagram’s private messaging icon, which is a paper plane, because before using Instagram, I do not think many people related paper planes with messages. Instead, I chose a mail icon to represent an inbox, which in Foodie’s context would mean private messages. I couldn’t use the speech bubble icon because it was already being used for comments.
            </p>
            <br/>
            <p className="project-article">
            Like I explained before, when a post is expanded, the user will be able to scroll through cards to explore related content and products mentioned in the post. Here you can see the recipe and griddle used to make the fish tacos.
            </p>
            <br/>
            <h2 className="section-title">Epilogue</h2>
            <p className="project-article">
            If you made it to the end, thanks for reading! This came out a lot longer than I expected! I noticed that there was plenty of nitpicking due to my detail-oriented nature so I'll work on shortening my explanations next time!
            </p>

        </div>
    )
}

export default ProjFoodie;