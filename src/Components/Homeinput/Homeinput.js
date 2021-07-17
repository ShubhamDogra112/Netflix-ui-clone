import React from 'react';
import classes from "./homeinput.module.scss"
import RightArrow from "../../icons/rightArrow.js"
const Homeinput = props => {
	return(
		<>
			<input className= {classes.input} type="email" placeholder= "Email Address"/>
			<button  className= {classes.btn}>
					Get Started
					<RightArrow/>
			</button>
		</>
		)
}

export default Homeinput;
