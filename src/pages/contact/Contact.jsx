import { Fragment } from "react"
import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_2.jpg"
import "./contact.css"
import { MdEmail } from "react-icons/md"
import { IoLogoWhatsapp } from "react-icons/io"

const Contact = () => {
  return (
    <Fragment>
      <Header title={"Get In Touch"} image={HeaderImage}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a dolorum odio facilis in beatae veritatis, placeat quidem aspernatur iure.</p>
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:dkasi634@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail/></a>
            <a href="https://wa.me/+256708462206" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Contact