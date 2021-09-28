import React, { useState } from "react";

const Editor = (props) => {
    let titleStyle = {}
    let btnStyle={
        color:'Black'
    }
    let textareaStyle = {}

    if (props.mode === "dark") {
        titleStyle = {
            background: 'rgb(0, 0, 0)',
            color: "rgb(255, 255, 255)"
        }
        btnStyle = {
            background:'rgb(75, 75, 75)',
            borderColor:'rgb(75, 75, 75)',
            color: 'white'
        }
        textareaStyle = {
            backgroundColor : 'rgb(56, 56, 56)',
            borderColor : 'rgb(0, 0, 0)',
            color : 'white'
        }
    }

    const [value, setValue] = useState(props.html || props.css || props.js);
    const [isOpen, setOpen] = useState(true);

    const changeValue = (e) => {
        setValue(e.target.value)
        props.click(e)
    }
    
    const handleToggle = () => {
        setOpen(!isOpen);
    }

    const eraseText = (e) => {
        console.log(e)
        setValue("");
        props.click(e)
    }
    

    return (
        <div className="AllEditors">
            <div className="titles" style={titleStyle}>{props.editorTitle}
                <div>
                    <button id="clr" onClick={eraseText} style={btnStyle}>Clear</button>
                    <button onClick={handleToggle} style={btnStyle}>{isOpen ? "[-]" : "[+]"}</button>
                </div>
            </div>
            <textarea className={`${isOpen ? "opened" : "closed"} editor`} value={value} onChange={changeValue} row="7" id={props.id} placeholder={props.placeholder} style={textareaStyle}></textarea>
        </div>
    );
}
export default Editor;