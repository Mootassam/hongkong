import React from "react";
import "./Fly3.css";
import Dates from "../../shared/dates";
function Fly3(props) {
  return (
    <div className="app__fly3">
      <div className="fly3__header">
        <div className="header__timefly3">{Dates.currentTime()}</div>
        <div className="fly3__right">
          <label htmlFor="">70%</label>
        </div>
      </div>

      <div className="fly3__content">
        <div className="fly3__image">
          <img src="/Fly3/logo.png" alt="" width={82} />

          <div className="fly3__title">You’ve sent money!</div>

          <div className="fly3__amount">-{props.amount} HKD</div>

          <div className="fly3__bar">
            <img src="Fly3/bar.png" alt="" />
          </div>
        </div>

        <div className="fly3__detaill">
          <div className="detaill__fly3">
            <div className="detaill__fly3__left">From</div>
            <div className="detaill__fly3__right">1005448892</div>
          </div>
          <div className="detaill__fly3 __payto">
            <div className="detaill__fly3__left">Pay to</div>
            <div className="detaill__fly3__right">CHAN Y** H**</div>
          </div>
          <div className="detaill__fly3 __proxyid ">
            <div className="detaill__fly3__left">FPS Proxy ID</div>
            <div className="detaill__fly3__right">105053599</div>
          </div>
          <div className="detaill__fly3 __datetime">
            <div className="detaill__fly3__left">Date and time</div>
            <div className="detaill__fly3__right">{Dates.fly2()}</div>
          </div>
        </div>
      </div>

      <div className="fly__bottomfly3">
        <div className="done__fly3">
          <span> Done</span>
        </div>

        <div className="mobile__bottom">

            <img src="/Fly3/mobile.png" alt="" width={217}  />
        </div>
      </div>
    </div>
  );
}

export default Fly3;
