import { Fragment } from "react";
import "./home.css"
import HomeHeader from "../../components/homeHeader/HomeHeader";
import Programs from "../../components/programs/Programs";
import Values from "../../components/values/Values";
import FAQs from "../../components/FAQs";
import Testimonials from "../../components/Testimonials";

const Home = () => {
  return (
    <Fragment>
        <HomeHeader/>
        <Programs/>
        <Values/>
        <FAQs/>
        <Testimonials/>
        
    </Fragment>
  )
}

export default Home;