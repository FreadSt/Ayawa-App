import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./containers/mainpage/MainPage";
import Verify from "./components/verify/Verify";
import Footer from "./containers/footer/Footer";
import Reset from "./components/reset/Reset";
import { useEffect, useState } from 'react';

function App() {
    const loader = document.querySelector(".loader-wrapper");
    console.log(loader, 'pre Loader')
    const showLoader = () => loader.classList.remove("loader-wrapper");
    const addClass = () => loader.classList.add("loader-hide");

    useEffect(() => {
        window.addEventListener('load', addClass);
            return () => window.removeEventListener('load', addClass);

    },[])

  return (
      <Router>
              <div className="App">
                  <Routes>
                      <Route exact path={'/'} element={<MainPage/>}/>
                      <Route path={'/verify'} element={<Verify/>}/>
                      <Route path={'/reset'} element={<Reset/>}/>
                  </Routes>
                  <Footer/>
              </div>
      </Router>
  );
}

export default App;
/*
*
* import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./containers/mainpage/MainPage";
import Verify from "./components/verify/Verify";
import Footer from "./containers/footer/Footer";
import Reset from "./components/reset/Reset";
import { useEffect, useState } from 'react';

function App() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const onPageLoad = () => {
            setLoaded(true);
        };

        // Check if the page has already loaded
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);
  return (
      <Router>
          {
              loaded ? null : (
                  <div className="loader-wrapper">
                      <img src="/title.png" className="title-preload"/>
                      <span className="font-link">The evolution of meditation apps using AI</span>
                      <img src='/comp.gif' className="gif"/>
                  </div>
                  )
          }
          <div className="App"
               style={loaded ? {} : { display: 'none' }}
          >
              <Routes>
                  <Route exact path={'/'} element={<MainPage/>}/>
                  <Route path={'/verify'} element={<Verify/>}/>
                  <Route path={'/reset'} element={<Reset/>}/>
              </Routes>
              <Footer/>
          </div>
      </Router>
  );
}

export default App;
*/
