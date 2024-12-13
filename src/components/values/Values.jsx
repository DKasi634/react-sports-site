import Image from "../../images/values.jpg"
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../../data";
import Card from "../../ui/Card";
import SectionHead from "../SectionHead";

const Values = () => {
  return (
    <section className="values">
        <div className="container values__container">
        <div className="values__left">
            <div className="values__image">
                <img src={Image} alt="Values" />
            </div>
        </div>  
        <div className="values__right">
            <SectionHead icon={<GiCutDiamond/>} title="Values"></SectionHead>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim consequatur sint beatae quidem natus facere.
            </p>
            <div className="values__wrapper">
                {
                    values.map(({id, icon, title, desc}, index) => {
                        return (
                            <Card key={id} className={"value"}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
        </div> 
    </section>
  )
}

export default Values;