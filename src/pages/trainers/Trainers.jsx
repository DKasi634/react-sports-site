
import { Fragment } from "react"
import {trainers} from "../../data"
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs"
import { AiOutlineX } from "react-icons/ai"
import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_5.jpg"
import Trainer from "../../components/Trainer"
import "./trainers.css"

const Trainers = () => {
  return (
    <Fragment>
      <Header title={"Our Trainers"} image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores expedita amet voluptates hic, rem corporis praesentium tempora reprehenderit corrupti esse ea iure officia recusandae sapiente?
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {
            trainers.map(({id, image, name, job, socials}) => (
              <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  {icon: <BsInstagram/>, link:socials[0]},
                  {icon: <AiOutlineX/>, link:socials[1]},
                  {icon: <BsFacebook/>, link:socials[2]},
                  {icon: <BsLinkedin/>, link:socials[3]},
                ]
              } />
            ) )
          }
        </div>
      </section>
    </Fragment>
  )
}

export default Trainers;