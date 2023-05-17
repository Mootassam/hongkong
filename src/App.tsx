import { useRef, useState, useEffect } from "react";

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
import SmallTransfer from "./component/SmallTransfer/SmallTransfer";
import Review from "./component/Review/Review";
import Hangseng from "./component/Hangseng/Hangseng";
import Fly from "./component/Fly1/Fly";
import Scpay from "./component/scpay/Scpay";
import Chan from "./component/chanBank/Chan";
import Fly2 from "./component/Fly2/Fly2";
import Fly3 from "./component/Fly3/Fly3";
import Blue from "./component/Blue/Blue";
import Thank from "./component/thank/Thank";

function App() {
  const divRef = useRef<HTMLDivElement>(null);

  const handleCaptureScreenshot = () => {
    Screenshot.handleCaptureScreenshot(divRef);
  };
  const [value, setValue] = useState("alipay");
  const [amount, setAmount] = useState(200);
  const [customer, setCustomer] = useState("Vivian Yip");
  const [size, setSize] =useState("large")

  return (
    <>
      <Header />
      <div className="app__content">
        <Sidebar
          screenshot={handleCaptureScreenshot}
          value={value}
          setvalue={setValue}
          setAmount={setAmount}
          setCustomer={setCustomer}
          setSize={setSize}
          size={value}
        />
        <div className="content" ref={divRef}>
          {value === "800" && size === "small" && <Hkd customer={customer} amount={amount} />}
          { value === "800" && size === "large" && <Bank customer={customer} amount={amount} />}
          {value === "fps" && <Fps customer={customer} amount={amount} />}
          {value === "thankyou" && <Thankyou amount={amount} />}
          {value  === "thank" && <Thank />}
          {value === "alipay" && <Alipay customer={customer} amount={amount} />}
          {value === "pay" && <Pay customer={customer} amount={amount} />}
          {value === "livi" && <LiviBank customer={customer} amount={amount} />}
          {value === "BankChina" && (
            <BankChina customer={customer} amount={amount} />
          )}
          {/* {value === "small" && <SmallTransfer />} */}
          {value === "review" && <Review customer={customer} amount={amount} />}
          {value === "hangseng" && (
            <Hangseng customer={customer} amount={amount} />
          )}
          {value === "fly1" && <Fly customer={customer} amount={amount} />}
          {value === "scpay" && <Scpay customer={customer} amount={amount} />}
          {value === "chan" && <Chan customer={customer} amount={amount} />}
          {value === "fly2" && <Fly2 customer={customer} amount={amount} />}
          {value === "fly3" && <Fly3 customer={customer} amount={amount} />}
          {value === "blue" && <Blue customer={customer} amount={amount} />}
        </div>
      </div>
    </>
  );
}

export default App;
