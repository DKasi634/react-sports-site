import { Fragment } from "react"
import "./gallery.css"
import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_3.jpg"


const Gallery = () => {
  const galleryLength =15;
  const images = [];

  for(let i=1;  i<= galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  console.log(images);
  return (
    <Fragment>
      <Header title={"Our Gallery"} image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quis mollitia consequuntur dolorum vitae suscipit, ducimus quam fugit voluptas! Aperiam libero quia molestiae exercitationem consectetur.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          { 
            images.map((image, index) => {
              return (
              <article key={index}>
                <img src={image} alt={`Gallery item ${index+1}`} />
              </article>
              )
            })
          }
        </div>
      </section>

    </Fragment>
  )
}

export default Gallery