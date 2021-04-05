import React from 'react'
import classes from "./homeVideo.module.scss"

const Video = (props) => {
    const data = props.left ? (
        <>
        <div className= {classes.content}>
            <p className= {classes.content__primary}>
                {props.lines.primary}
            </p>
            <p className= {classes.content__secondary}>
                {props.lines.secondary}
            </p>
        </div>
        <div className= {classes.imgbox}>
            <img className= {props.secondVideo ? (classes.imgbox__img2) : (classes.imgbox__img1)}
             src={props.img} alt=""/>
            <video className= {props.secondVideo ? (classes.imgbox__video2) : (classes.imgbox__video1)}
             loop autoPlay = {true} muted= {true} src= {props.videoSrc}></video>
        </div>
    </>
    ):(
        <>
            <div className= {classes.imgbox}>
                <img className= {classes.imgbox__img1} src={props.img} alt=""/>
                {props.video ? <video className= {classes.imgbox__video}
                 loop autoPlay = {true} muted= {true} src= {props.videoSrc}></video>: null}
            </div>
            <div className= {classes.content}>
                <p className= {classes.content__primary}>
                    {props.lines.primary}
                </p>
                <p className= {classes.content__secondary}>
                    {props.lines.secondary}
                </p>
            </div>
        </>
    )
    return (
        <div className= {classes.container}>
           {data}
        </div>
    )
}

export default Video
