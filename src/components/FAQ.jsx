import { useState } from "react"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const FAQ = ({ question, answer}) => {

  const [faqOpened, setFaqOpened] = useState(false);

  const toggleFaq = () => {
    setFaqOpened(!faqOpened);
  }
  return (
    <article className="faq" onClick={toggleFaq}>
        <div className="faq__header">
            <h4>{question}</h4>
            <button className="faq__icon">
                {faqOpened ? <AiOutlineMinus /> :<AiOutlinePlus />}
            </button>
        </div>
        {faqOpened && <p className="faq__content">
          {answer}
        </p>}
    </article>
  )
}

export default FAQ