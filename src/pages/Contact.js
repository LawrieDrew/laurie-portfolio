import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Contact(){
    return (
        <Jumbotron id="contactpage" className="jumbotron">
        <h1>Contact Me</h1>
        <ul>
                <li><a href="516-816-1872">(516) 816-1872</a></li>
                <li><a href="https://github.com/LawrieDrew">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/lauren-drew-5a737747/">LinkedIn</a></li>
                <li><a href="Lauren_Drew-Resume_React.pdf" download>Resume</a></li>
                <li><a href="https://www.instagram.com/getgonegoods/">Get Gone Goods Instagram</a></li>        </ul>
</Jumbotron>
    )
};

export default Contact;