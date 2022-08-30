import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './pages/Home/index';
// import Contact from './pages/Contact/contact';
import NewProject from './pages/NewProject/newProject';
import Navbar from "./components/Navbar/navBar";
import Footer from "./components/Footer/footer";

import Container from "./components/Layout/container.js";
import Projects from "./pages/Projects/projects";
import Project from "./pages/Projects/project";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container customClass="min_height"> 
          <Routes>
            <Route exact path='/'  element={<Home/>}></Route>
            {/* <Route path='/contact' element={<Contact/>}></Route> */}
            <Route path='/newproject' element={<NewProject/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route path="/project/:id" element={<Project />}/>
          </Routes>
          </Container>
     {/* <p>Footer</p> */}
     <Footer />
    </BrowserRouter>
  )
}

export default App;
