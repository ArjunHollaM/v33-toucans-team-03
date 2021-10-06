import React, { useState } from "react";

const Editor = (props) => {
    const { id, html, css, js, placeholder, editorTitle, click, mode } = props;
    let titleStyle = {}
    let btnStyle={color:'Black'}
    let textareaStyle = {}

    if (mode === "dark") {
        titleStyle = {
            background: 'rgb(23, 23, 23)',
            color: "white"
        }
        btnStyle = {
            background:'rgb(218, 0, 55)',
            borderColor:'rgb(218, 0, 55)',
            color: 'white'
        }
        textareaStyle = {
            backgroundColor : 'rgb(68, 68, 68)',
            borderColor : 'rgb(23, 23, 23)',
            color : 'white'
        }
    }
    else if ( mode === "space") {
        titleStyle = {
            background: 'rgb(8, 32, 50)',
            color: "white"
        }
        btnStyle = {
            background:'rgb(255, 76, 41)',
            borderColor:'rgb(255, 76, 41)',
            color: 'white'
        }
        textareaStyle = {
            backgroundColor : 'rgb(51, 71, 86)',
            borderColor : 'rgb(8, 32, 50)',
            color : 'white'
        }
    }
    else if ( mode === "neon") {
        titleStyle = {
            background: 'rgb(82, 5, 123)',
            color: "white"
        }
        btnStyle = {
            background:'rgb(0, 0, 0)',
            borderColor:'rgb(0, 0, 0)',
            color: 'white'
        }
        textareaStyle = {
            backgroundColor : 'rgb(188, 111, 241)',
            borderColor : 'rgb(0, 0, 0)',
            color : 'black'
        }
    }
    else if ( mode === "retro") {
        titleStyle = {
            background: 'rgb(74, 169, 108)',
            color: "black"
        }
        btnStyle = {
            background:'rgb(245, 92, 71)',
            borderColor:'rgb(245, 92, 71)',
            color: 'black'
        }
        textareaStyle = {
            backgroundColor : 'rgb(159, 230, 160)',
            borderColor : 'rgb(74, 169, 108)',
            color : 'black'
        }
    }

    const [value, setValue] = useState(html || css || js);
    const [isOpen, setOpen] = useState(true);

    const changeValue = (e) => {
        setValue(e.target.value)
        click(e)
    }
    const handleToggle = () => setOpen(!isOpen);

    const eraseText = (e) => {
        console.log(e)
        setValue("");
        click(e)
    }
    
    return (
        <div className="AllEditors">
            <div className="titles" style={titleStyle}>{editorTitle}
                <div>
                    <button id="clr" onClick={eraseText} style={btnStyle}>Clear</button>
                    <button onClick={handleToggle} style={btnStyle}>{isOpen ? "[-]" : "[+]"}</button>
                </div>
            </div>
            <textarea className={`${isOpen ? "opened" : "closed"} editor`} value={value} onChange={changeValue} id={id} placeholder={placeholder} style={textareaStyle}></textarea>
        </div>
    );
}
export default Editor;