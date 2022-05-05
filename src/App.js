import "./App.css";
import { FormDemo } from "./FormDemo/FormDemo.js";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClassComponentDemo from "./ClassComponentDemo/ClassComponentDemo";
import { ShibaPhoto } from "./HigherOrderComponent/HOCDemo";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/form" element={<FormDemo />} />
          <Route path="/class" element={<ClassComponentDemo />} />
          <Route path="/hoc" element={<ShibaPhoto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
