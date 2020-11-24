import React from 'react'
import './About.css';
import { MdStar } from "react-icons/md";

//React bootstrap stuff
import Jumbotron from 'react-bootstrap/Jumbotron';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import picture from './images/ProfileImage.jpg';

function About(props) {
	return (
		<div className ="About">
			
			<div>
				<Image id="profilePhoto" src={picture} height="400" roundedCircle/>
				<div className="mainPara">
					<p> Hello friends, my name is Joshua Plateros and I am currently a Senior at the University of Nevada, Reno with a major in Computer Science. My passions include winning in video games, playing music, as well as learning different frameworks and other technologies related to the CS field! </p>
					<ul class="socialMedia">
						<li><a href="https://github.com/joshplateros"> <i class="fab fa-github fa-2x"></i></a></li>
						<li><a href="https://www.linkedin.com/in/joshua-plateros-18b76b194/"><i class="fab fa-linkedin fa-2x"></i></a></li>
					</ul>
				</div>
			</div>
		</div>

			
	)
}

export default About;

