import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Bank from "./component/bank/bank";
import Header from "./layout/Header";
import Sidebar from "./layout/sidebar/Sidebar";
import Thankyou from "./component/Thankyou/Thankyou";
import Hkd from "./component/bank/Hkd";
import Screenshot from "./shared/Screenshot";

function App() {
  const divRef = useRef<HTMLDivElement>(null);

  const handleCaptureScreenshot = () => {
    Screenshot.handleCaptureScreenshot(divRef);
  };
  return (
    <>
      <Header />
      <div className="app__content">
        <Sidebar screenshot={handleCaptureScreenshot} />
        <div className="content" ref={divRef}>
          <Bank />

          {/* <Hkd /> */}

          {/* <Thankyou /> */}
        </div>
      </div>
    </>
  );
}

export default App;
