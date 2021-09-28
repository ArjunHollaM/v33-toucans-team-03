import React, { useState } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Editor from './components/Editor';
import Frame from './components/Frame';
import Footer from './components/Footer'
import Navbar from './components/Navbar';


function App() {
  //
  const [mode,setMode] = useState("light")


  const [s_html, setHTML] = useState("")
  const [s_css, setCSS] = useState("")
  const [s_js, setJS] = useState("")
  // const [update, setupdate] = useState(false)
  const [t_html, settHTML] = useState("")
  const [t_css, settCSS] = useState("")
  const [t_js, settJS] = useState("")
  const html = (e) => {
    settHTML(e.target.value)

  }
  const css = (e) => {
    settCSS(e.target.value)
  }
  const js = (e) => {
    settJS(e.target.value)
  }
  const run=()=>{
    setHTML(t_html)
    setCSS(t_css)
    setJS(t_js)
    
  }
  const clear=()=>{
    console.log("clear")
    setHTML("")
    setCSS("")
    setJS("")
  }

  const changeMode = () =>{
    console.log("clicked")
    if(mode === "light"){
      setMode("dark")
    }
    else{
      setMode("light")
    }
  }
  let editorStyle = {}
  if(mode === "dark") {
      editorStyle = {background:"rgb(41, 41, 41)"} 
  } 
  

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
        <Navbar location={"home"} func={run} clr={clear} mode={mode} changeMode={changeMode} />
          <div className="container1">
            <div className='Editors' style={editorStyle}>
              <Editor id='html' html={s_html} placeholder='Write HTML code here' editorTitle = "HTML" click={html} mode={mode} changeMode={changeMode}/>
              <Editor id='css' css={s_css} placeholder='Write CSS code here' editorTitle = "CSS" click={css} mode={mode} changeMode={changeMode}/>
              <Editor id='js' js={s_js} placeholder='Write JavaScript code here' editorTitle = "JavaScript" click={js} mode={mode} changeMode={changeMode}/>
            </div>
            <Frame html={s_html} css={s_css} js={s_js} location={"home"} />
          </div>
          <Footer mode={mode} changeMode={changeMode} />
        </Route>
        <Route exact={true} path="/fullpage">
        <Navbar location={"Full"} func={run}/>
          <Frame html={s_html} css={s_css} js={s_js}  />
          <Footer/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
