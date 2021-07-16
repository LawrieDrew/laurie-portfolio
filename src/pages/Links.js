import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Links() {
    return (

        <Jumbotron id="links" className="jumbotron">

            <h1>Portfolio Links</h1>
            <ul>
                <li><a href="https://github.com/LawrieDrew/team-project.git">TipsyTarot Github</a></li>
                <li><a href="https://lawriedrew.github.io/team-project/">TipsyTarot Deployed</a></li>
                <li><a href="https://github.com/LawrieDrew/yup-schlepp.git">Yupp! Github</a></li>
                <li><a href="https://guarded-atoll-77888.herokuapp.com/">Yupp! Deployed</a></li>
                <li><a href="https://github.com/LawrieDrew/Day-Planner.git">My Fabulous Day Github</a></li>
                <li><a href="https://lawriedrew.github.io/Day-Planner/">My Fabulous Day Deployed</a></li>
                <li><a href="https://github.com/LawrieDrew/Book-Search.git">Google Book Search Github</a></li>
                <li><a href="https://unholybooks.herokuapp.com/">Google Book Search Deployed</a></li>
                <li><a href="https://www.instagram.com/getgonegoods/">Jewelry Instagram</a></li>
                
            </ul>
        </Jumbotron>
    )
};

export default Links;