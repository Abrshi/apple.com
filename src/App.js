import { BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom";
import './App.css';
import Nave from "./component/nav/Nave";
import Body from "./component/body/Body.js";
import Footer from "./component/footer/Footer.js";
import "./component/nav/nave.css";
import Store from "./component/store/Store.js";
import Mac from "./component/mac/Mac.js";
import Ipad from "./component/ipad/Ipad.js";
import Iphone from "./component/iphone/Iphone.js";
import Watch from "./component/watch/Watch.js";
import Airpod from "./component/airpod/Airpod.js";
import Tvandhome from "./component/tvandhome/Tvandhome.js";
import Accessories from "./component/accessories/Accessories.js";
import Support from "./component/support/Support.js";
import Vision from "./component/vision/Vision.js";
import Intertainment from "./component/intertanment/Intertainment.js";
import Four04 from "./component/404/Four04.js";
function App() {
  return (
    <div className="App">
    <Nave />
    <Routes>
    <Route path="/" element={<Body/>}/>
    <Route path="/store" element={<Store/>}/>
    <Route path="/mac" element={<Mac/>}/>
    <Route path="/ipad" element={<Ipad/>}/>
    <Route path="/iphone" element={<Iphone/>}/>
    <Route path="/watch" element={<Watch/>}/>
    <Route path="/vision" element={<Vision/>}/>
    <Route path="/tvandhome" element={<Tvandhome/>}/>
    <Route path="/airpod" element={ <Airpod/>}/>
    <Route path="/accessories" element={ <Accessories/>}/>
    <Route path="/support" element={<Support/>}/>
    <Route path="/intertainment" element={<Intertainment/>}/>
    <Route path="*" element={<Four04/>}/>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
