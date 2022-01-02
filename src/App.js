import Header from './components/Header/Header';
// import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import About from './components/Body/About';
import Skills from './components/Body/Skills';
import Projects from './components/Body/Projects';
import Acheivements from './components/Body/Acheivements';
import Contact from './components/Body/Contact';


function App() {
  return (
    <Router>
    <div className="App">
      {console.log('hello')}
        <Header/>
        <div className='main-body'>
        <Navbar/>
          <div className='main-section' id='main-section-id'>
            {/* <Routes>
              <Route path='/' exact element={<About/>}></Route>
              <Route path='/skills' exact element={<Skills/>}></Route>
              <Route path='/projects' exact element={<Projects/>}></Route>
              <Route path='/acheivements' exact element={<Acheivements/>}></Route>
              <Route path='/contact' exact element={<Contact/>}></Route>
            </Routes> */}
            <About/>
            <Skills/>
            <Projects/>
            <Acheivements/>
            <Contact/>
          </div>
        </div>
        <Footer/>
      {/* </Router> */}
    </div>
    </Router>
  );
}

export default App;
