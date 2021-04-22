import NavCards from "./NavCards"
import "./HomePage.css"
import logo from '../../logo.svg';


function HomePage() {
    return (
        <div className="page" id="homePage">
            <h1>Welcome to Middle Tree</h1>
            <img src={logo} className="logo" alt="middle tree logo"/>
            <h3>You are a...</h3>
            <NavCards/>
        </div>
    )
}

export default HomePage