import { ImQuotesLeft } from "react-icons/im"
import SectionHead from "./SectionHead"
import { testimonials } from "../data"
import { useState } from "react"
import Card from "../ui/Card"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"


const Testimonials = () => {

    const [index, setIndex] = useState(0)
    const {name, quote, job, avatar} = testimonials[index]
    const setNextIndex = () =>{
        index === testimonials.length -1 ? setIndex(0) : setIndex(prevIndex => prevIndex + 1)
    }
    const setPrevIndex = () => {
        index === 0 ? setIndex(testimonials.length -1 ) : setIndex(prevIndex => prevIndex - 1)
    }
  return (
    <section className="testimonials">
        <div className="container testimonials__container">
            <SectionHead icon={<ImQuotesLeft/>} title="Testimonials" className={"testimonials__head"} />
            <Card className="testimonial">
                <div className="testimonial__avatar">
                    <img src={avatar} alt={name} />
                </div>
                <p className="testimonial__quote">{`"${quote}"`}</p>
                <h5>{name}</h5>
                <small className="testimonial__title">{job}</small>
            </Card>
            <div className="testimonials__btn-container">
                <button className="testimonials__btn" onClick={setPrevIndex}>
                    <IoIosArrowDropleftCircle/>
                </button>

                <button className="testimonials__btn" onClick={setNextIndex}>
                    <IoIosArrowDroprightCircle/>
                </button>

            </div>
        </div>
    </section>
  )
}

export default Testimonials