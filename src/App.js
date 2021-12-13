import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#373688';
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled", "success")
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = "black";
      showAlert("light Mode has been enabled", "success")
    }
  }
  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-4">
        <Switch>
          <Route exact path="/about">
            <About mode={Mode}/>
          </Route>
          <Route exact path="/">
            <TextForm showalert={showAlert} heading="Enter Your Text to analyze" mode={Mode} />
          </Route>
        </Switch>
        {/* <About/> */}
      </div>
      </Router>
      {/* <Navbar/> */}
    </>
  );
}

export default App;
