import React from "react"
import Card from "./Card"
import Thumbnail from "./photos/thumbnail_template.jpg"
import { Link } from 'react-router-dom';
import Portrait from "./photos/sapporo_xmas_tn.jpg"
 
function Work(props) {
        return (
            <div>
                    <Link to="/work/foodie">
                        <Card name="Foodie" desc="Designing the IA and UI for a ficticious app that serves as a one-stop resource for all things food-related" photo={Thumbnail} />
                    </Link>
                    {/* <Link to="/work/securate">
                        <Card name="Securate" desc="I designed an app that determines the how intrusive other apps are." photo={Thumbnail} />
                    </Link> */}
                    <Link to="/work/this+website">
                        <Card name="This Website" desc="This section is incomplete." photo={Portrait} />
                        {/* This explains the design and development process of this website. */}
                    </Link>
            </div>
        )
}
 
export default Work;