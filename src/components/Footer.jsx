import { Link } from "react-router-dom"
import Logo from "../images/logo.png"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { FaFacebookF, FaXTwitter } from "react-icons/fa6"


const Footer = () => {
    const currentDate = new Date();
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to={"/"} className="logo">
                    <img src={Logo} className="logo" alt="Footer Logo" />
                </Link>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, temporibus. Nam error dolor provident. Molestias at totam mollitia consequatur, saepe perferendis aliquam ipsum veniam laboriosam.
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener" ><FaLinkedinIn/></a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer noopener" ><FaFacebookF/></a>
                    <a href="https://x.com" target="_blank" rel="noreferrer noopener" ><FaXTwitter/></a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer noopener" ><FaInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to={"/about"}>About</Link>
                <Link to={"/plans"}>Plans</Link>
                <Link to={"/trainers"}>About</Link>
                <Link to={"/gallery"}>Gallery</Link>
                <Link to={"/contact"}>Contact</Link>
            </article>

            <article>
                <h4>Insights</h4>
                <Link to={"/about"}>Blog</Link>
                <Link to={"/plans"}>Case studies</Link>
                <Link to={"/trainers"}>Events</Link>
                <Link to={"/gallery"}>Communities</Link>
                <Link to={"/contact"}>FAQs</Link>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to={"/about"}>About</Link>
                <Link to={"/plans"}>Plans</Link>
                <Link to={"/trainers"}>About</Link>
                <Link to={"/gallery"}>Gallery</Link>
                <Link to={"/contact"}>Contact</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>{currentDate.getFullYear()} DanKasi &copy; All Rights Reserved </small>
        </div>
    </footer>
  )
}

export default Footer