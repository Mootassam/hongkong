import React from "react";
import "./Fly.css";
function Fly() {
  return (
    <div className="app__fly">
      <div className="fly__header">
        <div className="fly__left">
          <div className="fly__time">16:38</div>
        </div>

        <div className="fly__right">
          <div className="fly__data">
            <div className="fly__1"></div>
            <div className="fly__2"></div>
            <div className="fly__3"></div>
            <div className="fly__4"></div>
          </div>

          <div className="fly__name__data">LTE</div>

          <div className="name__battery">
            <div className="fly__battery">
              <div className="fly__level"></div>
            </div>
            <div className="small__batteryborder"></div>
          </div>
        </div>
      </div>

      <div className="fly__content">
        <div className="fly__logo">
          <img src="/fly/fly__logo.png" width={97} alt="" />
        </div>

        <div className="fly__title">你已成功付款給</div>

        <div className="fly__number">105053599</div>

        <div className="fly__description">
          <span>轉數快」</span>
          <span>註册帳戶為</span>
          <span className="fly__roboto">CHAN Y** H**</span>
        </div>

        <div className="totalfly__amount">
          <div className="fly__currency">HKD</div>
          <div className="fly__amount">200.00</div>
        </div>
      </div>

      <div className="fly__footer">
        <div className="footer__button">
          <span>確定</span>
        </div>

        <div className="footer__subbutton"></div>
      </div>
    </div>
  );
}

export default Fly;
