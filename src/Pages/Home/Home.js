import React,{Component} from 'react';
import Nav from "../../Components/Navbar/nav"
import classes from"./home.module.scss"
import VideoComponent from "../../Components/homeVideo/video"
import Img1 from "../../images/img1.png"
import Img2 from "../../images/img2.jpg"
import Img3 from "../../images/img3.png"
import Video1 from "../../videos/video1.m4v"
import Video2 from "../../videos/video2.m4v"
import Data from "../../Data/home"
import Input from "../../Components/Homeinput/Homeinput.js"
import Faq from "../../Components/Faq/Faq"
class Home extends Component{
	render(){
		return(
			<>
			<div className= {classes.container}>
				<div className={classes.overlay}></div>
				<Nav home= {true}/>
				<div className= {classes.content}>
					<div className= {classes.content__primary}>Unlimited movies, TV
						<p>shows and more.</p>
					</div>
					<div className= {classes.content__secondary1}>
						Watch anywhere. Cancel anytime.
					</div>
					<div className= {classes.content__secondary2}>
						Ready to watch? Enter your email to create or restart your membership.
					</div>
					<div className= {classes.content__input_box}>
						<Input/>
					</div>
				</div>


			</div>
			<VideoComponent left= {true} video= {true} img = {Img1} videoSrc = {Video1} lines = {Data[0]} />
			<VideoComponent left= {false} video= {false} img = {Img2} lines = {Data[1]} />
			<VideoComponent left= {true} video= {true} img = {Img3} videoSrc = {Video2} secondVideo= {true} lines = {Data[2]} />
			<Faq />
			</>
			)
	}
}

export default Home;