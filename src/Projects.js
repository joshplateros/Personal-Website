import React from 'react'
import './Projects.css';

function Projects(props) {
	return (
		<div className="Projects">
			<dl class="ProjectsList">
				<dt> <h2> <a href="https://github.com/joshplateros/Personal-Website"> Personal Website </a><i class="fas fa-terminal"></i></h2></dt>
				<dd id="codingLanguages"> JavaScript, CSS/HTML, React </dd>
				<dd> Basic elementary portfolio website made to showcase my resume (and for me 
					to have a personal website.) <br/>Will soon add articles where I rant
					and talk about important topics!</dd>
				<dt><h2> <a href="https://github.com/joshplateros/Twitch-Bot"> Twitch Bot </a><i class="fas fa-robot"></i></h2></dt>
				<dd id="codingLanguages"> JavaScript </dd>
				<dd> A Twich chat bot that handles some basic commands for my stream! <br/>
					Some of them include !social where when the command is called, <br/> It 
					will display in the Twitch chat my social media.</dd>
				<dt><h2> Solar Power Prediction <i class="fas fa-cloud-sun"></i> </h2></dt>
				<dd id="codingLanguages"> Python, Jupyter Notebook </dd> 
				<dd> With the use of Support Vector Machines, I am able to use information
					from <br/> multiple solar power plants and get a fairly accurate prediction (97%) </dd> 
					
				<dt><h2> Various Machine Learning Projects* <i class="fas fa-brain"></i></h2></dt>
				<dd id="codingLanguages"> Python </dd> 
				<dd> Different projects used for University. Most include building a machine Learning model <br/> 
				from scratch. Some examples include building a Support Vector Machine, and a Perceptron. 
				<br/> <br/> <b> *GitHub link is private due to protect against cheaters! >:( </b></dd>
				
				
			</dl>
			
		</div>
	)
}

export default Projects;
