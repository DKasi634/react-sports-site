import SectionHead from "./SectionHead"
import { FaQuestion } from "react-icons/fa"
import { faqs } from "../data"
import FAQ from "./FAQ"

const FAQs = () => {
  return (
    <section className="faqs">
        <div className="container faqs__container">
            <SectionHead icon={<FaQuestion/>} title={"FAQs"} />
            <div className="faqs__wrapper">
                {
                    faqs.map(({id, question, answer})=> <FAQ question={question} answer={answer} key={id} /> )
                }
            </div>
        </div>
    </section>
  )
}

export default FAQs


