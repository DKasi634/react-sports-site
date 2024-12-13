import { Link } from "react-router-dom";
import HeaderImage from "../../images/main_header.png"
import "./homeHeader.css"
const HomeHeader = () => {
  return (
    <header className="main__header">
        <div className="container main__header-container">
            <div className="main__header-left flex flex-column gap-2 justify-left">
                <h4 className="tag-secondary">#100DaysOfWorkout</h4>
                <h2>Join The Legends Of The Fitness World</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni soluta eveniet amet fuga dolorum sunt aspernatur ullam harum velit quo?</p>
                <Link to={"/plans"} className="btn lg" >Get Started</Link>
            </div>
            <div className="main__header-right">
                <div className="main__header-circle"></div>
                <div className="main__header-image">
                    <img src={HeaderImage} alt="Home Header" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default HomeHeader;