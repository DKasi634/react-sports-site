
import { BrowserRouter, Route, Routes } from "react-router-dom"


import About from "./pages/about/About"
import Home from "./pages/home/Home"
import Contact from "./pages/contact/Contact"
import Gallery from "./pages/gallery/Gallery"
import NotFound from "./pages/notFound/NotFound"
import Plans from "./pages/plans/Plans"
import Trainers from "./pages/trainers/Trainers"
import Navbar from "./components/navbar/navbar.component"

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="gallery" element={<Gallery/>} />
          <Route path="plans" element={<Plans/>} />
          <Route path="trainers" element={<Trainers/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App