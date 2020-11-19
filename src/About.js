import React from 'react'
import './About.css';
import { MdStar } from "react-icons/md";

//React bootstrap stuff
import Jumbotron from 'react-bootstrap/Jumbotron';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import picture from './images/ProfileImage.jpg';

function About(props) {
	return (
		<div className ="About">
			<h1> Joshua Plateros </h1>
			<img src={picture} height="400" />
			<p> Hello friends, my name is Joshua Plateros and I am currently a Senior at the University of Nevada, Reno with a major in Computer Science. My passions include winning in video games, playing music, as well as learning different frameworks and other technologies related to the CS field! </p>

					<div className ="Technologies">
						<h2> Languages & Other Technologies </h2>

						<Col>
							<div className="TechnologyNames">
								<div>
								C++
								<ProgressBar now={60} label={`60%`}/>
								</div>
							</div>

							<div className="TechnologyNames">
								<div>
								Python
								<ProgressBar now={50} label={`50%`} />
								</div>
							</div>

							<div className="TechnologyNames">
								<div>
								JavaScript
								<ProgressBar now={25} label={`25%`}/>
								</div>
							</div>

							<div className="TechnologyNames">
								<div>
								ReactJS
								<ProgressBar now={25} label={`25%`}/>
								</div>
							</div>

							<div className="TechnologyNames">
								<div>
								NodeJS
								<ProgressBar now={25} label={`25%`}/>
								</div>
							</div>

							<div className="TechnologyNames">
								<div>
								Numpy, Scikit, Pandas
								<ProgressBar now={25} label={`25%`}/>
								</div>
							</div>

						</Col>
					</div>

			<p> </p>
		</div>

			
	)
}

export default About;

