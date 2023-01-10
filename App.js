
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
// import About from './components/About';
import Alert from './components/alert';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link,
//   BrowserRouter
// }
//   from "react-router-dom"

function App() {
  const [mode, setmode] = useState("light");
  const [alert, SetAlert] = useState("null")

  const showAlert = (message, type) => {
    SetAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      SetAlert(null)
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light")
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success")
      document.title = "TextTutils-LightMode"
    }
    else {
      setmode("dark")
      document.body.style.backgroundColor = "#173c44";
      showAlert("dark mode has been enabled", "success")
      document.title = "TextTutils-DarkMode"
    }
  }
  return (


    <>

      {/* <BrowserRouter> */}
        <Navbar title="TextChanger" contact="about us" mode={mode} toggleMode={toggleMode} />,
        <Alert alert={alert} />

        <div className="container">
          {/* <Routes>   
            <Route path="/about" element={<About />}>
            </Route> */}
            {/* <Route path="/"> */}
               {/* element= */}
               {<Textarea heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}
            {/* </Route> */}
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}



    </>

  );
}

export default App;
