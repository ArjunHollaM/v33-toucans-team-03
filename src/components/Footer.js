const Footer = (props) => {
    let footerStyle = {}
    if (props.mode === "dark") {
        footerStyle= {
            color :'rgb(237, 237, 237)',
            backgroundColor: 'rgb(23, 23, 23)'
        }
    }
    else if ( props.mode === "space" ) {
        footerStyle= {
            color :'white',
            backgroundColor: 'rgb(8, 32, 50)'
        }
    }
    else if ( props.mode === "neon" ) {
        footerStyle= {
            color :'white',
            backgroundColor: 'rgb(82, 5, 123)'
        }
    }
    else if ( props.mode === "retro" ) {
        footerStyle= {
            color :'rgb(86, 74, 74)',
            backgroundColor: 'rgb(74, 169, 108)'
        }
    }
    return (
        <footer id="main-footer" className="grid" style={footerStyle}>
            <div className="footer-copyrights">
                <h3><i className = "fa fa-copyright" style={{fontSize:'1rem'}}></i><i>2021ChinguPen</i></h3>
                <h4>Terms & Conditions | Privacy Policy | About | Site Map | FAQs</h4>
            </div>
            <div className = "SML">
				<i className="fa fa-facebook" style={{fontSize:'2rem',margin:'10px'}}></i>
				<i className="fa fa-twitter" style={{fontSize:'2rem',margin:'10px'}}></i>
                <i className="fa fa-github" style={{fontSize:'2rem',margin:'10px'}}></i>
            </div>
        </footer>
    )
}
export default Footer;