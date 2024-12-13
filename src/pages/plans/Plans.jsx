import { Fragment } from "react"
import "./plans.css"
import {plans} from "../../data"
import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_4.jpg"
import Card from "../../ui/Card"


const Plans = () => {
  
  return (
    <Fragment>
      <Header title={"Our Gallery"} image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quis mollitia consequuntur dolorum vitae suscipit, ducimus quam fugit voluptas! Aperiam libero quia molestiae exercitationem consectetur.
      </Header>
      <section >
        <div className="container plans__container">
            { plans.map(({id, name,desc, price, features}, index) =>(
              <Card className="plan" key={index}>
                  <h4 className="plan_name">{name}</h4>
                  <p className="plan__description">{desc}</p>
                  <p className="plan_price"><p>${price}</p><p>/mo</p> </p>
                  <div className="plan_features">
                    {features.map(({feature, available}, idx) => (
                      <p key={idx} className={`feature ${available ? "feature_available":""}`}>{feature}</p>
                    ))}
                  </div>
                  <span className="btn lg">Choose plan</span>
              </Card>
            )) }
        </div>
      </section>

    </Fragment>
  )
}

export default Plans