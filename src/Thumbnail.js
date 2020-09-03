import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Thumbnail(props) {
	return (
		<div className="project">
			<Link to="">
				<div className="project-image">
					<img src="" alt="Project Image"/>
				</div>
				<div className="project-title"> PROJ1 </div>
			</Link>
		</div>
	);
}

export default Thumbnail;
