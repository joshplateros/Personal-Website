import React from 'react'
import './About.css';
import { MdStar } from "react-icons/md";

function About(props) {
	return (
		<div className ="About">
			<h1> About </h1>
			<p> Hello friends, my name is Joshua Plateros and I am currently a Senior at the University of Nevada, Reno with a major in Computer Science. My passions include winning in video games, playing music, as well as learning different frameworks and other technologies related to the CS field! </p>

			<div className ="Technologies">
				<h2> Technologies </h2>
				<div className="TechnologyNames">
					<div>
					C++
					<MdStar
						style={{ margin: '0 5px' }}	
					/>
					<MdStar
						style={{ margin: '0 5px' }}	
					/> 
					<MdStar
						style={{ margin: '0 5px' }}	
					/>
					</div>
					<div>
						Python
						<MdStar
							style={{ margin: '0 5px' }}	
						/>
						<MdStar
							style={{ margin: '0 5px' }}	
						/>
					</div>
					<div>
						Javascript
						<MdStar
							style={{ margin: '0 5px' }}	
						/>
					</div>
				</div>
			</div>


		</div>
			
	)
}

export default About;

