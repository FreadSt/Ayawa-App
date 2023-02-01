import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./containers/mainpage/MainPage";
import Verify from "./components/verify/Verify";
import Footer from "./containers/footer/Footer";
import Reset from "./components/reset/Reset";

function App() {
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
