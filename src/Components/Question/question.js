import React, {useState} from 'react'
import classes from "./question.module.scss"
import Plus from "../../icons/plus";
const Question = (props) => {
    const [show, setShow] = useState(false);

    const showAns = () => {
        setShow(!show);
    }
    return (
        <div className= {classes.question}>
            <p  className= {classes.question__header}>
                {props.data.header}
                <Plus click= {showAns}/>
            </p>
            <div className= {classes.answer} style= {{maxHeight : !show ? '0' : '120rem'}}>
                <span className= {classes.question__answer}>
                    {props.data.body}
                </span>
            </div>
        </div>
    )
}

export default Question
