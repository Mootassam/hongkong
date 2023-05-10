import { useRef, useState } from "react";

import "./App.css";
import Bank from "./component/bank/bank";
import Header from "./layout/Header";
import Sidebar from "./layout/sidebar/Sidebar";
import Thankyou from "./component/Thankyou/Thankyou";
import Hkd from "./component/bank/Hkd";
import Screenshot from "./shared/Screenshot";
import Fps from "./component/Fps/Fps";
import Alipay from "./component/ALipay/Alipay";
import Pay from "./component/Pay/Pay";
import LiviBank from "./component/Livi/LiviBank";
import BankChina from "./component/bankchina/BankChina";

function App() {
  const divRef = useRef<HTMLDivElement>(null);

  const handleCaptureScreenshot = () => {
    Screenshot.handleCaptureScreenshot(divRef);
  };
  const [value, setValue] = useState("alipay");

  return (
    <>
      <Header />
      <div className="app__content">
        <Sidebar
          screenshot={handleCaptureScreenshot}
          valu={value}
          setvalue={setValue}
        />
        <div className="content" ref={divRef}>
          {value === "800" && <Hkd />}
          {value === "800l" && <Bank />}
          {value === "fps" && <Fps />}

          {value === "thankyou" && <Thankyou />}

          {value === "alipay" && <Alipay />}

          {value === "pay" && <Pay />}

          {value === "livi" && <LiviBank />}
          {value === "BankChina" && <BankChina />}
        </div>
      </div>
    </>
  );
}

export default App;
