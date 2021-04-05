import React, { Component } from 'react'
import classes from "./nav.module.scss"
import Logo from "../../images/logo.png";
import GlobeIcon from "../../icons/globe";
import DownArrow from "../../icons/downArrow"

export class Nav extends Component {
    state = {
        show: false
    }

    componentDidMount(){
        if(!this.props.home)
            window.addEventListener('scroll', this.transitionNabBar);
    }

    transitionNabBar = () => {
        if(window.scrollY > 100){
            this.setState({show: true})
        }
        else{
            this.setState({show: false})
        }
    }
    render() {
        return (
            <div className= {classes.navbar + " " +(this.props.home? classes.navbar__home: null)}
             style= {{backgroundColor: this.state.show ? '#000' : 'transparent'}}>
                <div>
                    <img className= {classes.navbar__logo} src={Logo} alt="logo"/>
                </div>
                <div style={{display: 'flex', paddingTop: '2rem'}}>
                    <div className= {classes.navbar__item}>
                        <button
                         className= {classes.navbar_btn + " " + classes.navbar_btn__outlined}>
                             <div style={{display: 'flex', alignItems: 'center'}}>
                                <GlobeIcon/>
                                    English
                                <DownArrow/>
                             </div>
                            </button>
                    </div>
                    <div className= {classes.navbar__item}>
                        <button
                         className= {classes.navbar_btn+ " " + classes.navbar_btn__normal}>
                         Sign In
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav
