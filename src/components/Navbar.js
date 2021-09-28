import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(props) {
    let style={}
    let style1={
        color:'Black'
    }
    if(props.mode === "dark"){
        style={
            background:"linear-gradient(to right, rgb(0,0,0), rgb(222, 222, 222))",
            color: 'white'
        }
        style1={
            background:'rgb(75, 75, 75)',
            borderColor:'rgb(75, 75, 75)',
            color: 'white'
        }
    }
    return (
        <div className="navbar" style={style}>
        <h1>Chingu 🖊️</h1>
        <div className="navbar-button">
            <button style={style1}><Link to={props.location === "home" ? "/fullpage" : "/"} style={style1}><i className="fa fa-expand fa-lg"></i> {props.location === "home" ? "Full Screen" : "Home screen"} </Link></button> 
            <button onClick={props.func} style={style1}><i className="fa fa-retweet fa-lg"></i>Run</button>
            <button onClick={props.clr} style={style1}><i className="fa fa-trash" style={{fontSize:'1rem'}}></i>Clear All</button>
            <div className="form-check form-switch">
                <input className="form-check-input" onClick={props.changeMode} type="checkbox" id="flexSwitchCheckDefault" />
                <label className="form-check-label" for="flexSwitchCheckDefault">Mode</label>
            </div>
        </div>
            
        </div>
    )
}

export default Navbar