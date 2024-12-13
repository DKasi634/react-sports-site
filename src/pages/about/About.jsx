import { Fragment } from 'react';
import './about.css';
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg"
import Header from '../../components/Header';
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"

const About = () => {
  return (
    <Fragment>
      <Header title="About Us" image={HeaderImage}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur necessitatibus assumenda ipsa illo! Eum doloremque optio, perferendis eos adipisci iusto mollitia repellendus sit vero asperiores.</p>
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story" />
          </div>
          <div className="about__section-content">
            <h2>Our Story</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quam maxime dignissimos esse nulla voluptates, dolore enim odio consectetur aliquid, iusto voluptatibus necessitatibus labore? Pariatur, laborum optio. Architecto sequi rem amet sapiente, quibusdam natus laudantium.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quam maxime dignissimos esse nulla voluptates, dolore enim odio consectetur aliquid, iusto voluptatibus necessitatibus labore? Pariatur, laborum optio. Architecto sequi rem amet sapiente, quibusdam natus laudantium.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos reiciendis sint vel incidunt impedit.</p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h2>Our Vision</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perferendis. Magni aut mollitia cumque quasi eveniet ducimus, porro est dignissimos illum! Veniam impedit dolorum fugiat sint fuga sapiente explicabo reprehenderit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perferendis. Magni aut mollitia cumque quasi eveniet ducimus, porro est dignissimos illum! Veniam impedit dolorum fugiat sint fuga sapiente explicabo reprehenderit.</p>

          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission" />
          </div>
          <div className="about__section-content">
            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quam maxime dignissimos esse nulla voluptates, dolore enim odio consectetur aliquid, iusto voluptatibus necessitatibus labore? Pariatur, laborum optio. Architecto sequi rem amet sapiente, quibusdam natus laudantium.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quam maxime dignissimos esse nulla voluptates, dolore enim odio consectetur aliquid, iusto voluptatibus necessitatibus labore? Pariatur, laborum optio. Architecto sequi rem amet sapiente, quibusdam natus laudantium.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos reiciendis sint vel incidunt impedit.</p>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default About;