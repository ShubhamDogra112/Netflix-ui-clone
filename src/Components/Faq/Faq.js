import React from 'react'
import classes from "./faq.module.scss"
import Questions from "../../Data/faq.json"
import Question from "../Question/question"
import Input from "../Homeinput/Homeinput.js"
const Faq = () => {
    return (
        <div className = {classes.container}>
            <h1 className= {classes.container_header}>
                Frequently Asked Questions
            </h1>
            {
                Questions.map((d, i) => <Question data = {d} key = {i}/>)
            }
            <h2 className= {classes.container__footer}>Ready to watch? Enter your email to create or restart your membership.</h2>
             <div className = {classes.content}>
                 <Input/>
             </div>
        </div>
    )
}

export default Faq
