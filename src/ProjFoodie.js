import React from "react"
import Photo1 from "./photos/thumbnail_template.jpg"

function ProjFoodie(props) {
    return (
        <div className="project-body">
            <img src={Photo1} alt="a cup of coffee" className="project-photo" />
            <h1 className="project-title">Foodie</h1>
            <p className="project-article">
                This is just a test.
            </p>
        </div>
    )
}

export default ProjFoodie;