import React, {Component} from 'react'
import githubIcon from './images/githubIcon.png'
import personalWebsiteIcon from './images/personalWebsiteIcon.png'

class Title extends Component{
	render() {
		return (
			<div className = "titleStyle">
				<h1>COVID-19 Tracker</h1>
				<div className = "subtitleStyle">
			        <h2>created by @terrencewang98</h2>
			        <a href="https://github.com/terrencewang98/spotify-player" target="_blank" rel="noreferrer">
			          <img className = "imgButton" src = {githubIcon} style = {{width: "50px"}}/>
			        </a>
			        <a href="https://terrencewang98.github.io/" target="_blank" rel="noreferrer">
			          <img className = "imgButton" src = {personalWebsiteIcon} style = {{width: "55px"}} />
			        </a>
			    </div>
		    </div>
		)
	}
}

export default Title
